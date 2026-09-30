# GHL Survey — Application Questions & Custom Field Mapping

Build target: **Sites → Surveys**, not a Form. The checklist calls it "the GHL survey in the funnel",
and the automation trigger we need (`Survey Submitted`) only fires from a survey.

Display mode: **slider** (one question per screen). Lower perceived friction on mobile, which is
where most Feeds/Stories/Reels traffic lands.

---

## Custom fields to create first

Create these in **Settings → Custom Fields** *before* building the survey, so the survey elements
can bind to them instead of creating loose question data.

| # | Field name | Key | Type | Group |
|---|---|---|---|---|
| 1 | Business Type | `business_type` | Single Options | Application |
| 2 | Annual Revenue | `annual_revenue` | Single Options | Application |
| 3 | Average Contract Value | `average_contract_value` | Single Options | Application |
| 4 | Primary Lead Source | `primary_lead_source` | Single Options | Application |
| 5 | On Camera Willingness | `on_camera_willingness` | Single Options | Application |

Named `primary_lead_source` rather than `lead_source` on purpose — GHL already ships a standard
Source / Attribution field and a custom field with a colliding name makes workflows ambiguous.

---

## Question 1 — Business Type

> Which of these best describes your business?

Bind to `business_type`. Options, in this exact order:

1. Service business (healthcare, professional services, staffing, home services)
2. B2B software or AI company
3. Coaching, consulting, or advisory
4. Ecommerce or retail
5. Something else

Options 1 and 2 are the ICP Mike and Jake landed on (Tech = SaaS + AI, Service = healthcare,
staffing, etc.). Option 3 is deliberately kept — Jake's third offer sheet was consultants, and Mike
wanted to stay open to it at the higher price point.

## Question 2 — Annual Revenue

> What is your company's current annual revenue?

Bind to `annual_revenue`.

1. Under $1M/year
2. $1M to $3M/year
3. $3M to $10M/year
4. $10M to $25M/year
5. $25M+/year

The target band is $3M–$25M (options 3 and 4).

## Question 3 — Average Contract Value

> What is the average value of a new client or contract for you?

Bind to `average_contract_value`.

1. Under $5,000
2. $5,000 to $15,000
3. $15,000 to $25,000
4. $25,000 to $50,000
5. $50,000+

ICP floor is $25k ACV (options 4 and 5).

## Question 4 — Primary Lead Source

> What is generating most of your new business right now?

Bind to `primary_lead_source`.

1. Paid ads
2. Outbound (email, LinkedIn, SDRs)
3. Referrals and word of mouth
4. We pay an agency for content and social
5. Nothing consistent

This is the sales-call opener. Options 1 and 4 map directly onto the two "enemies" in the
positioning (ads that stopped working / content agencies with no attributable ROI).

## Question 5 — On Camera Willingness

> Are you or a leader at your company willing to be on camera for two hours per month?

Bind to `on_camera_willingness`.

1. Yes, I'm ready to be the face of this
2. Yes, but it would be someone else on our leadership team
3. I'd need to understand it better first
4. No

Hard disqualifier is option 4 — the entire delivery model depends on the recording session.

## Contact fields

Standard fields, not custom: **First Name · Last Name · Email · Phone**

Put them last, after the five questions. Answering cheap multiple-choice questions first and
handing over contact details at the end raises completion.

---

## Qualification tagging

**Proposal, needs Jake's sign-off before we build it.** Jake was explicit that the ad copy casts a
wide net on purpose, and the funnel math (\$200/application → \$400/booked call) assumes roughly half
of all applicants book. So **nobody gets blocked from the calendar** — we tag instead, so Mike can
prioritise his day and so we can report cost per *qualified* application, not just cost per
application.

| Tag | Condition |
|---|---|
| `app-icp-core` | `business_type` in (Service business, B2B software or AI) **and** `annual_revenue` in ($3M–$10M, $10M–$25M, $25M+) **and** `average_contract_value` in ($25k–$50k, $50k+) |
| `app-icp-adjacent` | Meets two of the three conditions above |
| `app-low-fit` | Meets one or none |
| `app-no-camera` | `on_camera_willingness` = No |

Applied by the `Survey Submitted` workflow with if/else branches.

---

## Data flow

```
Survey submitted
  ├─ 5 answers written to custom fields on the contact
  ├─ contact created/updated (name, email, phone)
  ├─ qualification tags applied
  ├─ opportunity created in the sales pipeline (stage: Application Submitted)
  ├─ internal notification to Mike — email + SMS, with all 5 answers in the body
  └─ redirect → Booking page
```

The internal notification is what makes Jake's "sales call conducted with pre-collected data"
actually work. Body should render:

```
New application — {{contact.first_name}} {{contact.last_name}}
{{contact.email}} · {{contact.phone}}

Business:      {{contact.business_type}}
Revenue:       {{contact.annual_revenue}}
Contract value:{{contact.average_contract_value}}
Getting leads from: {{contact.primary_lead_source}}
On camera:     {{contact.on_camera_willingness}}

Ad: {{contact.utm_content}} / {{contact.utm_medium}}
```

---

## Redirect and calendar pre-populate

Survey settings → **On Submit → Redirect to the Booking page step**.

Keep the survey and the calendar as steps of the *same* funnel. GHL then carries the contact
through, and the calendar's "pre-populate fields" option fills name/email/phone automatically.
If they end up in separate funnels the pre-populate silently stops working and the lead has to
retype everything — worth testing end to end before handing the link to Jake.

---

## Attribution

Meta appends these via the URL parameters in the ad:

```
utm_source=fb_ad&utm_medium={{adset.name}}&utm_campaign={{campaign.name}}&utm_content={{ad.name}}&campaign_id={{campaign.id}}
```

GHL captures these into the contact's attribution automatically. `utm_content` carries the ad name
(`H1 - ANGLE NAME` / `H2 - ANGLE NAME`), which is what tells us **which of Mike's two hooks is
winning** — the single most useful number in week one. Check it under Reporting → Attribution.

---

## Test before handing the link to Jake

- [ ] Submit a real test application end to end
- [ ] All 5 answers land on the contact record
- [ ] Tags applied correctly (run one core-ICP and one low-fit submission)
- [ ] Internal email + SMS arrive with the answers rendered, not blank merge fields
- [ ] Calendar pre-populates name/email/phone
- [ ] Booking creates the opportunity and moves the pipeline stage
- [ ] Meta Pixel Helper shows `SubmitApplication` on the Booking page
- [ ] Meta Pixel Helper shows `Schedule` on the Thank You page
- [ ] Delete the test contact and test appointment afterwards

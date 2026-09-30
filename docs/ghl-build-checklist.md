# GHL Build Checklist — Market Better Application Funnel

Working list for the funnel Jake is waiting on. Ordered by **dependency**, not by the order it
appears in the STA doc, so nothing blocks on something further down.

Copy source: [jake-funnel-spec.md](jake-funnel-spec.md) · Survey spec: [ghl-survey-fields.md](ghl-survey-fields.md)

Owner column: **J** = Joseph, **M** = Mike, **JH** = Jake.

---

## Phase 0 — Start these today, they have waiting time

These are the only items with an external clock on them. Everything else is work we control.

- [ ] **A2P 10DLC registration submitted** (M — needs the EIN) — approval runs days, sometimes over a week. Without it the SMS reminders don't send. *Settings → Phone Numbers → Trust Center*
- [ ] EIN / business ID added to Business Settings (M)
- [ ] Domain purchased or connected in GHL (J/M) — decide the funnel domain first
- [ ] Email sending domain set up + DNS records added (J) — propagation plus GHL verification
- [ ] DNS records verified and showing green in GHL (J)
- [ ] Jake invited as admin on the GHL sub-account: `jhare@closers.io` (M)
- [ ] Jake added to Meta with partner ID `1085877579201914` (M)

## Phase 1 — Account foundation

- [ ] GHL snapshot uploaded to the sub-account (J)
- [ ] Business name updated (J)
- [ ] Business address updated (J)
- [ ] Website URL added (J)
- [ ] Business type set (J)
- [ ] Business industry set (J)
- [ ] Phone number purchased in GHL (J)
- [ ] Privacy Policy page created (J) — Meta rejects ad accounts without one
- [ ] Terms & Conditions page created (J)
- [ ] Custom Values configured (J) — TY video URL, from-name, from-email, calendar link
- [ ] Facebook integration connected (J)
- [ ] Instagram integration connected (J)
- [ ] Domain shows connected / active (J)

## Phase 2 — Meta assets

Mike's confusion in Slack was justified: **ads cannot run from a personal Facebook profile, and a
profile has no admin roles.** What Jake means by "run from your personal page" is a Facebook *Page*
branded as Mike — his headshot, not the company logo — sitting inside a Business Portfolio.

- [ ] Meta Business Portfolio (Business Manager) created or confirmed (M)
- [ ] Facebook **Page** branded as Mike exists and is inside the Business Portfolio (M)
  - [ ] Close-up headshot (M)
  - [ ] Banner with the Market Better logo (M)
  - [ ] Bio: "Founder of Market Better" + one line on how he helps clients (M)
- [ ] Instagram account linked to the Page (M)
- [ ] Ad account created inside the Business Portfolio, payment method added (M)
- [ ] Joseph given access to the Page + ad account (M)
- [ ] **Domain verified in Meta Business Portfolio** (J) — the funnel domain. Without this Aggregated Event Measurement throttles the pixel and events get dropped
- [ ] Meta Pixel / dataset created (J)
- [ ] Advanced Matching turned on (J)
- [ ] Meta Pixel Helper installed in Chrome (J)

## Phase 3 — Funnel build

### Page 1 — Application

- [ ] Funnel created, domain connected to it (J)
- [ ] Top text, headline and subheadline pasted from the spec (J)
- [ ] 5 custom fields created — see the survey spec (J)
- [ ] Survey built, slider mode, 5 questions bound to the custom fields (J)
- [ ] Contact fields last: First Name, Last Name, Email, Phone (J)
- [ ] Survey redirect → Booking page step (J)

### Page 2 — Booking

- [ ] "Demo Cal" calendar connected (J)
- [ ] Calendar activated (J)
- [ ] Correct closer assigned — Mike for now (J)
- [ ] Availability set: 10–11am Tue–Fri + one late slot (M decides the second slot)
- [ ] Max bookings per day set (J)
- [ ] Minimum notice time set (J)
- [ ] Pre-populate fields enabled (J)
- [ ] Calendar notifications enabled (J)
- [ ] Video app connected — Zoom or Google Meet (M/J)
- [ ] Pixel event on this page (J):
      ```html
      <script>fbq('track', 'SubmitApplication');</script>
      ```

### Page 3 — Thank You

- [ ] TY video uploaded (M delivers the file, J uploads)
- [ ] TY video URL stored in Custom Values (J)
- [ ] Video embedded on the page (J)
- [ ] Email-invitation copy on the page updated (J)
- [ ] Pixel event on this page (J):
      ```html
      <script>fbq('track', 'Schedule');</script>
      ```

### Funnel-level

- [ ] Pixel base code pasted into funnel settings → **Head Tracking Code** (J)
- [ ] Correct email linked to custom values (J)
- [ ] Every page renders correctly on mobile (J) — Feeds/Stories/Reels traffic is mostly phones

## Phase 4 — Automations & pipeline

- [ ] Sales pipeline created (J)
- [ ] Pipeline stages defined — at minimum: Application Submitted → Call Booked → Showed → Won/Lost (J)
- [ ] Snapshot automation copy replaced with Market Better copy (J)
- [ ] `Survey Submitted` trigger wired and correct (J)
- [ ] Qualification tags applied by the workflow (J) — pending Jake's sign-off on the tagging rules
- [ ] Opportunity created on application submit (J)
- [ ] `Customer Booked Appointment` trigger wired and correct (J)
- [ ] Internal notification to Mike — email + SMS — with all 5 answers in the body (J)
- [ ] All SMS messages have correct links (J)
- [ ] All emails have correct Thank You page links (J)
- [ ] All emails have correct "from name" and "from email" (J)
- [ ] All automations set to **active** (J)

## Phase 5 — Meta campaign

- [ ] 2 custom audiences created (J)
- [ ] Campaign created — objective **Leads**, CBO on, budget $100/day (J)
- [ ] Campaign named (J)
- [ ] **Ad Set #1** (J)
  - [ ] Named
  - [ ] Conversion location = Website
  - [ ] Pixel / dataset selected
  - [ ] Conversion event = **Submit Application**
  - [ ] Scheduled to go live at midnight
  - [ ] Audience #1 selected
  - [ ] Placements: Facebook & Instagram only, Feeds / Stories / Reels only
- [ ] **Ad #1** (J)
  - [ ] Named `H1 - ANGLE NAME`
  - [ ] FB Page and IG profile selected
  - [ ] Funnel link added — the Application page
  - [ ] Video 1 (Hook #1) uploaded
  - [ ] Ad Copy #1 pasted
  - [ ] Headline: "Founders: Own Your Lead Flow, Stop Renting It"
  - [ ] CTA = **Learn More**
  - [ ] Enhancements **off**
  - [ ] URL parameters pasted:
        ```
        utm_source=fb_ad&utm_medium={{adset.name}}&utm_campaign={{campaign.name}}&utm_content={{ad.name}}&campaign_id={{campaign.id}}
        ```
- [ ] **Ad #2** — duplicate of #1, renamed `H2 - ANGLE NAME`, Video 2 + Ad Copy #2 swapped in (J)
- [ ] **Ad Set #2** — quick-duplicate of Ad Set #1, renamed, Audience #2 swapped in (J)

## Phase 6 — QC and launch

- [ ] Full test run end to end — see the test list in the survey spec (J)
- [ ] Pixel events verified with Pixel Helper on both pages (J)
- [ ] Test contact and test appointment deleted (J)
- [ ] **Funnel link sent to Jake in Slack for QC** (J) ← *this is what he's blocked on right now*
- [ ] Jake's QC feedback resolved (J)
- [ ] Loom recorded verifying the campaign setup (J)
- [ ] Loom sent to Jake and the Marketing Specialist in Slack, both tagged (J)
- [ ] Approval received (JH)
- [ ] **Publish the ads** (M/J)
- [ ] Switch to the "After Ads Are Live" SOPs (M/J)

---

## Notes

**Send Jake something before all of this is done.** He asked for the funnel link two weeks after the
original Friday deadline and everything on his side — videos, copy, ad scripts — is finished. A
half-built funnel he can start QCing beats silence. Worth a message today with the link plus what's
still outstanding and a date.

**Longest pole is A2P**, then DNS verification. Both are in Phase 0 for that reason.

**Open question for Jake:** the qualification tagging rules in the survey spec are my proposal, not
his. Confirm before wiring the workflow branches.

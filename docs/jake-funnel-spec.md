# Application Funnel Spec — Market Better (Meta Ads)

Source: "Mike McGrath Onboarding" Google Doc (STA / Closers), tabs `(MST) Funnel Copy`,
`(MST) TY Video Script`, `(MST) Final Ad Scripts + Copy`, `Funnel Setup Checklist`, `SFF Training Doc`.
Delivered by Jake Hare on Slack. This is the spec the ads will point at.

## Structure

```
Meta Ad  →  Application Page  →  Booking Page  →  Thank You Page  →  Sales Call
```

Named the "Short Form Funnel" / "Application Funnel" in the STA training. Chosen over a
VSL because it has less friction to book, is cheap to validate, and is good for testing angles.

Mechanism name: **The Content Funnel** (trademark owned by Mike).
Brand on all copy: **Market Better** (not "Market Better Studio").

---

## 1. Application Page

**Top text**
> For Founders Paying For Marketing And Can't Point To A Single Booked Call It Produced

**Headline**
> We'll Build A Demand Engine Into Your Business That Books Qualified Sales Calls Every Week, Using Two Hours Of Your Time Per Month

**Subheadline**
> We turn one recording session a month into thirty days of authority content, wire that content into funnels that route buyers straight onto your calendar, and run AI-driven outbound against the same positioning, all reported in one dashboard. Complete the form below and book a call with our team to see how we can help.

### Application questions (GHL survey — all single-select dropdowns)

**Which of these best describes your business?**
- Service business (healthcare, professional services, staffing, home services)
- B2B software or AI company
- Coaching, consulting, or advisory
- Ecommerce or retail
- Something else

**What is your company's current annual revenue?**
- Under $1M/year
- $1M to $3M/year
- $3M to $10M/year
- $10M to $25M/year
- $25M+/year

**What is the average value of a new client or contract for you?**
- Under $5,000
- $5,000 to $15,000
- $15,000 to $25,000
- $25,000 to $50,000
- $50,000+

**What is generating most of your new business right now?**
- Paid ads
- Outbound (email, LinkedIn, SDRs)
- Referrals and word of mouth
- We pay an agency for content and social
- Nothing consistent

**Are you or a leader at your company willing to be on camera for two hours per month?**
- Yes, I'm ready to be the face of this
- Yes, but it would be someone else on our leadership team
- I'd need to understand it better first
- No

**Contact fields:** First Name · Last Name · Email · Phone

---

## 2. Booking Page (Schedule)

GHL calendar ("Demo Cal"), pre-populate fields enabled.

Pixel event fires here:

```html
<script>
fbq('track', 'SubmitApplication');
</script>
```

---

## 3. Thank You Page

Hosts the VSL Mike recorded. Pixel event:

```html
<script>
fbq('track', 'Schedule');
</script>
```

### TY video script (filmed horizontally)

Hey, congratulations, your call is officially booked. Before you close this page, give me two minutes, because what I'm about to tell you is the difference between showing up to a good conversation and wasting both of our time.

First, three quick things I need you to do right now.

Number one, accept the calendar invite. It should already be in your inbox. If it isn't there in the next few minutes, check your spam folder, because that's usually where it hides.

Number two, save the number that texts you. We'll send you a reminder before the call, and I'd rather it come from a name you recognize than an unknown number you ignore.

Number three, if there's someone else who weighs in on decisions like this, a partner, a co-founder, whoever it is, get them on the call with you. I'm not asking that to qualify you. I'm asking because I've watched too many founders sit through a great conversation, get genuinely excited, then have to go re-explain the whole thing secondhand to someone who wasn't there. It never survives the retelling. Bring them and we'll make it worth your time.

Now, here's what the call actually is.

It's about 30 to 45 minutes. It is not a pitch. My team is going to ask you real questions about your business. How you're getting clients today. What you've already tried. What it's costing you. What happens if nothing changes over the next twelve months.

Then we'll walk you through exactly how The Content Funnel works and what building it into your business would look like specifically.

And if it's not a fit, we'll tell you that on the call. We'd rather say so directly than sell you something that isn't going to work. You'll still walk away knowing more about your business, content, and numbers than you did going in.

Here's what we're going to show you. Most companies are renting their lead flow. Every booked call comes from an ad account that gets more expensive every quarter, from a rep who has to start every conversation cold or waiting on referrals that our unpredictable. We build something different and predictable. One recording session a month becomes thirty days of content, that content feeds funnels that put people directly on your calendar, and outbound runs against the same positioning so the buyers who never see an ad still hear from you. Two hours of your time a month. That's the whole ask.

Last thing. To make the call actually useful, have two numbers ready.

One, roughly what you're spending on marketing and sales every month right now, and what it produced last quarter. Ballpark is fine.

Two, what a new client is worth to you, and how many more you could realistically take on without breaking anything.

With those two numbers, we can tell you in about ten minutes whether the math works. Without them, we'd just be guessing.

Looking forward to our call. See you soon.

---

## Ad assets (already filmed and edited)

**Ad headline:** Founders: Own Your Lead Flow, Stop Renting It

**Ad banner** — top: "Service & Software Founders: Want Qualified Sales Calls Without Hiring
Another Sales Rep?" · bottom: "WATCH THIS"

Two video hooks (Ad Script 1 / Ad Script 2), both ending in the same body: the four steps of
The Content Funnel — Authority Asset → Flywheel Machine → Conversion Path → Sales Engine →
one dashboard reporting cost per booked call, CAC and ROI in dollars.

Proof points used across all copy:

- Dr. Joy Kong — discovery calls +60% in first 3 months; 1.3M views and 21,000 subscribers in year one
- Kevin Clayson (DFY Investing) — $250,000 in new deals within 90 days
- Daniel Rosen (Credit Repair Cloud) — $7M → $12M run rate in 6 months; 3,700 → 60,000 subscribers

Video spec: 4x5 (1080x1350) with banner, filmed horizontally.

---

## Meta campaign setup (from the checklist)

- Objective: **Leads**, CBO on
- Conversion location: Website · Conversion event: **Submit Application**
- Pixel with Advanced Matching on; pixel code in GHL funnel "Head Tracking Code"
- Placements: Facebook & Instagram only — Feeds, Stories, Reels only
- 2 ad sets (2 audiences) × 2 ads (2 hooks). Ad set #2 is a quick-duplicate with the audience swapped
- Ads scheduled to go live at midnight
- CTA button: "Learn More"
- Enhancements: OFF
- URL parameters (paste into Meta):

  ```
  utm_source=fb_ad&utm_medium={{adset.name}}&utm_campaign={{campaign.name}}&utm_content={{ad.name}}&campaign_id={{campaign.id}}
  ```

- Budget: $100/day for week one
- Before publishing: record a Loom verifying the campaign setup, send to Jake in Slack for approval

### Funnel math (Jake, Sep 14 call)

$20k offer → $4k max CAC → $800 max cost per showed call → $400 per booked call → **$200 per application**

---

## GHL setup checklist

**Account creation** — Meta account · FB page linked · GHL account · GHL snapshot uploaded ·
Privacy Policy + T&C · custom values configured

**Business settings** — name, address, website URL, business type, industry, EIN (for A2P)

**Domain** — purchased/connected in GHL, showing active, connected to the funnel

**Phone & A2P** — number purchased, A2P registration submitted/approved

**Email** — sending domain set up, DNS records added and verified, correct email in custom values,
correct "from name" / "from email" on all emails

**Integrations** — Facebook connected, Instagram connected

**Calendar** — "Demo Cal" connected and activated · correct closer assigned · availability set ·
max bookings/day · minimum notice · pre-populate fields enabled · notifications on ·
video app connected (Zoom / Meet)

**Pipeline** — sales pipeline created

**Automations** — copy replaced, all active, triggers updated (survey + calendar),
internal email/SMS notification set up, all SMS and email links correct

**Pixel verification** — install Meta Pixel Helper in Chrome, preview events on the Schedule page
and the TY page

---

## Open items

- Jake needs admin on the GHL sub-account: `jhare@closers.io`
- Jake's Meta partner ID: `1085877579201914`
- Jake is waiting on the GHL funnel link for QC before the ads publish

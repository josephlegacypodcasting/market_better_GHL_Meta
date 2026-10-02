# GHL Calendar — Name, Description and Settings

The calendar embedded on `/booking`. Its name and description are the last thing a lead reads
before committing time, and the first thing they see again in the invite, so the wording is taken
from the approved Thank You script rather than written fresh.

## Calendar name

```
The Content Funnel Strategy Call
```

Uses Mike's trademarked mechanism — the same term the lead already heard in the ad and the VSL.
Alternatives: `Content Funnel Strategy Call`, `Market Better — Strategy Call`.

Avoid "Demo" (promises a product demonstration that does not exist) and "Discovery Call" (the
pages already promised a conversation).

## Description

```
A 30 to 45 minute conversation about how your business gets clients
today, and whether a demand engine built on The Content Funnel is a fit.

This is not a pitch. We'll ask real questions: how you're getting
clients now, what you've already tried, what it's costing you, and what
happens if nothing changes over the next twelve months. Then we'll walk
you through exactly how The Content Funnel works and what building it
into your business would look like.

If it's not a fit, we'll tell you on the call. You'll still walk away
knowing more about your business, content and numbers than you did
going in.

To make the call useful, have two numbers ready:

1. Roughly what you're spending on marketing and sales each month right
   now, and what it produced last quarter. A ballpark is fine.
2. What a new client is worth to you, and how many more you could
   realistically take on without breaking anything.

If someone else weighs in on decisions like this — a partner, a
co-founder — bring them with you.
```

## Settings that must match the funnel copy

| Setting | Value | Why |
|---|---|---|
| Duration | **45 min** | `/booking` and the VSL both say "30 to 45 minutes". A 30-minute slot overruns into the next booking. |
| Availability | 10–11am Tue–Fri + one late slot | Jake's brief; Mike picks the second slot. |
| Pre-populate fields | **On** | `/booking` passes `first_name`, `last_name`, `email` and `phone` to the widget by query string. Off, and the lead retypes what they just submitted. |
| Minimum notice | ~4 hours | Applications arrive around the clock at $100/day. With no margin someone books 15 minutes out and Mike never sees it. |
| Max bookings per day | 2 | Matches the two slots Jake asked Mike to open. |
| Assigned user | Mike | He takes the first calls himself to validate the process before hiring a closer. |
| Video app | Zoom or Google Meet | Needed for the invite to carry a join link. |
| On booking confirmation | Redirect to `https://mbgrowth.marketbetter.xyz/thank-you?booked=1` | **Needs updating** — it was set to the old `mbstudio` domain, which no longer resolves. Without it `Schedule` never fires on real traffic. |

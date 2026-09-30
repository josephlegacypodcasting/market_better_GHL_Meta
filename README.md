# Market Better — The Content Funnel

Application funnel for the Meta ads campaign. Static HTML on Vercel, wired to GoHighLevel
over webhooks. **The funnel is hosted here, not built inside GHL** — GHL receives every step
as an inbound webhook and hosts the booking calendar.

Copy and campaign spec: [docs/jake-funnel-spec.md](docs/jake-funnel-spec.md) ·
Survey/field mapping: [docs/ghl-survey-fields.md](docs/ghl-survey-fields.md) ·
Build checklist: [docs/ghl-build-checklist.md](docs/ghl-build-checklist.md)

## Funnel

```
Meta Ad  →  Application  →  Booking  →  Thank You  →  Sales Call
```

| Step | File | Route | What it does |
|---|---|---|---|
| 1 | `references/MB_Application.html` | `/` | 5 qualifying questions + contact fields → GHL webhook → step 2 |
| 2 | `references/MB_Booking.html` | `/booking` | GHL calendar, pre-filled from step 1. Fires `SubmitApplication` |
| 3 | `references/MB_ThankYou.html` | `/thank-you` | VSL + call prep. Fires `Schedule`, posts the booking webhook |

Shared across all three: `references/mb-funnel.css` (design system) and
`references/mb-funnel.js` (theme, attribution, pixel, webhooks, cross-page lead state).

Routes are mapped in `vercel.json`.

## What GHL receives

Two webhooks, both on the `uE8iQeezklYV7hJanEiE` location:

| Step | `event_type` |
|---|---|
| Application submitted | `application_submitted` |
| Appointment booked | `appointment_booked` |

Every payload carries the campaign constants so one workflow can route by campaign:

```
campaign_name: Market Better - The Content Funnel - Meta
client_name:   Market Better
system_name:   Market Better Content Funnel
system_id:     MBCF
offer_name:    The Content Funnel
```

Plus the five application answers (`business_type`, `annual_revenue`,
`average_contract_value`, `primary_lead_source`, `on_camera_willingness`), the contact fields,
and the full attribution set.

## Attribution

Meta appends these through the ad's URL parameters:

```
utm_source=fb_ad&utm_medium={{adset.name}}&utm_campaign={{campaign.name}}&utm_content={{ad.name}}&campaign_id={{campaign.id}}
```

`mb-funnel.js` captures them on the landing page, persists them in `sessionStorage`, and replays
them on the booking and thank-you pages, which have no query string of their own. `utm_content`
carries the ad name (`H1 - …` / `H2 - …`) — that's what tells us which hook is winning.

## Video

The Thank You page serves `references/assets/ty-video.mp4` with
`references/assets/ty-poster.jpg` as its poster frame.

It is encoded from the camera master (`MIKE MCGRATH - TY VIDEO.mp4`, 720p at 12 Mbps, 235 MB)
down to 720p at ~1.2 Mbps, 24 MB — same resolution and duration, 90% smaller. The moov atom is
moved to the front so playback starts before the file finishes downloading, and the page uses
`preload="metadata"` so nobody pays for 24 MB before pressing play. Captions are burned into the
picture by the editor.

To re-encode after a new cut:

```bash
ffmpeg -i "path/to/master.mp4" \
  -c:v libx264 -preset slow -crf 24 -profile:v high -pix_fmt yuv420p \
  -movflags +faststart -c:a aac -b:a 128k -ac 2 -sn \
  references/assets/ty-video.mp4
```

The raw camera masters live in `reference-market-better/assets/videos/` and are git-ignored —
GitHub rejects files over 100 MB. The two ad masters there (`AD 1B`, `AD 2B`, both 1080x1350 as
the campaign checklist requires) are uploaded straight to Meta and never served from this site.

## Before launch

Two values are intentionally left empty and must be filled in:

| What | Where |
|---|---|
| Meta pixel id | `META_PIXEL_ID` in `references/mb-funnel.js` |
| Calendar booking redirect | In GHL: calendar → on booking confirmation → `https://<domain>/thank-you?booked=1` |

An empty pixel id makes every `track()` call a no-op, so nothing fires at a pixel that doesn't
exist yet. The calendar redirect is the reliable way to reach the thank-you page; the booking page
also listens for the widget's confirmation message as a second route.

`Schedule` only fires for a visitor who actually booked — either the booking page saw the
confirmation, or the calendar redirected with `?booked=1`. Firing it on every page view would
poison the signal the campaign optimises against.

## Also in this repo

The earlier Market Better Studio funnel for organic podcast and YouTube traffic. Different offer,
different traffic, kept live:

| File | Route |
|---|---|
| `references/MBStudio_LandingPage.html` | `/podcast` |
| `references/MBStudio_Audit.html` | `/audit` |

## Theming

Light is the default. The nav toggle switches to dark and persists the choice in `localStorage`
under `mbs_theme`, shared across every page. The stored theme is applied in a `<head>` script
before first paint, so there is no flash.

Brand orange `#f54e29` is the single accent in both themes, brightened to `#ff6440` on dark for
contrast. The logo ships in two variants — `mb-studio-logo.svg` and `mb-studio-logo-dark.svg` —
swapped by CSS, not JS.

## Local preview

```bash
python -m http.server 4173
```

Then open `http://localhost:4173/references/MB_Application.html`.

To test without creating real leads in GHL, stub `fetch` in the console before submitting:

```js
window.fetch = (url, opts) => (console.log(url, JSON.parse(opts.body)), Promise.resolve({ok: true}));
```

## Repo layout

- `references/` — the live site (published)
- `docs/` — campaign spec, field mapping and build checklist
- `reference-market-better/` — source material from the original sponsorship funnel. Excluded from
  deploys via `.vercelignore`.

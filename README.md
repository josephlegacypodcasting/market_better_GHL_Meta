# Market Better Studio — Content-to-Pipeline Audit Funnel

Two-step lead funnel for the **Market Better Studio - Podcast** campaign. Static HTML, deployed on Vercel, wired to GoHighLevel via webhooks.

Traffic reaches this funnel from the podcast, YouTube and paid social. The lead magnet is *The Content-to-Pipeline Audit* — 12 questions that tell an operator whether their content engine is actually producing revenue.

## Funnel

| Step | File | Route | What it does |
|---|---|---|---|
| 1 | `references/MBStudio_LandingPage.html` | `/` | Opt-in form → GHL webhook → redirects to step 2 |
| 2 | `references/MBStudio_Audit.html` | `/audit` | Delivers the 12-question audit → CTA fires an intent webhook → GHL booking calendar |

Routes are mapped in `vercel.json`.

## Channel tracking

Step 1 reads `?utm_source=` (or `?src=`) and tags the lead with its real channel before posting to GHL, so one landing page serves all three traffic sources.

| Link | `lead_source` sent to GHL |
|---|---|
| `/` | `Podcast` (default) |
| `/?utm_source=youtube` | `YouTube` |
| `/?utm_source=instagram` \| `facebook` \| `linkedin` | `Paid Social` |
| `/?utm_source=newsletter` | `Newsletter` (any unmapped value is passed through, capitalized) |

`utm_medium` and `utm_campaign` are forwarded untouched.

## GHL payload

Both steps identify the campaign with:

```
campaign_name: Market Better Studio - Podcast
lead_magnet:   The Content-to-Pipeline Audit
client_name:   Market Better Studio
system_name:   Market Better Studio Inbound System
system_id:     MBSIS
```

Step 1 also sends `form_name: MBSIS - Studio - Content-to-Pipeline Audit Opt-In`. Step 2 sends `event_type: consultation_intent_submitted` and `cta_name: Book a Content Funnel Strategy Call`, carrying the name, email and channel forward from step 1 via `sessionStorage`.

## Theming

Light theme (`Studio Light`) is the default. The toggle in the nav switches to `Studio Dark` and persists the choice in `localStorage` under `mbs_theme`, shared across both pages. The stored theme is applied in a `<head>` script before first paint, so there is no flash.

The brand orange `#f54e29` (from the Market Better Studio logo) is the single accent in both themes, brightened to `#ff6440` on dark for contrast. The logo ships in two variants — `mb-studio-logo.svg` and `mb-studio-logo-dark.svg` — swapped by CSS, not JS.

## Local preview

```bash
python -m http.server 4173
```

Then open `http://localhost:4173/references/MBStudio_LandingPage.html`.

## Repo layout

- `references/` — the live site (published)
- `reference-market-better/` — source material from the original Market Better sponsorship funnel this was adapted from. Kept for reference, excluded from deploys via `.vercelignore`.

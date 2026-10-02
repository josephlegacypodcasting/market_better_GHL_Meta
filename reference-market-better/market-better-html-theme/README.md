# Market Better — HTML Theme Export

This package contains the complete four-page website and its reusable theme.

## Included

- `site/` — production-ready static HTML, CSS, JavaScript, images, and fonts.
- `source/` — editable React + Vite + Tailwind source with shared components and design tokens.

## Pages

- `/` — Home
- `/team` — The Team
- `/how-it-works` — How It Works
- `/roi-calculator` — Calculator

## Publish the ready-made site

Upload the contents of `site/` to a static host. The included `_redirects` supports Netlify-style hosts, and `.htaccess` supports Apache hosts. The host must send unknown page paths to `index.html`.

## Edit the theme

Requirements: Bun 1.x or Node.js 20+.

Using Bun:

```bash
cd source
bun install
bun run dev
```

Create a production build:

```bash
bun run build
```

The generated website will be in `source/dist/`.

## Theme locations

- Colors and global styling: `source/src/index.css`
- Tailwind theme mappings: `source/tailwind.config.ts`
- Shared header: `source/src/components/SiteHeader.tsx`
- Shared contact/footer: `source/src/components/FooterSection.tsx`
- Testimonials: `source/src/components/TestimonialsSection.tsx`
- Pages: `source/src/pages/`
- Images: `source/src/assets/`

The contact form currently opens the visitor's email application and sends to `hello@marketbetterstudio.com`.

# ZARX Technologies — Website

> **Business growth and technology, under one roof.**

The official website for **ZARX Technologies Pvt. Ltd.**, a business and technology consultancy based in New Delhi, India. The site presents two practices: **Business Consultancy** (digital marketing, influencer marketing, fundraising & sponsorship partnerships, brand partnerships) and **Technology Consultancy** (web platforms, mobile & gaming apps, Web3, AI automation, UI/UX, animation).

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3.4 + Custom Design System |
| Fonts | Inter via `next/font` |
| Animation | CSS transitions + a tiny IntersectionObserver (`RevealObserver`) |
| Icons | Lucide React |
| Deployment | Vercel (recommended) |

## Getting Started

### Prerequisites

- Node.js 20.9+ (LTS recommended)
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/bhanuuxo/ZARX-TECHNOLOGIES.git
cd ZARX-TECHNOLOGIES

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build   # static export to ./out (plus scripts/flatten-segment-data.mjs)
npm start       # preview ./out locally at http://localhost:3000
npm run deploy  # build and publish to Firebase Hosting
npm run deploy:staging  # build with draft markers and publish to a private preview link
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                 # Header, footer, skip link, scroll reveals, analytics events
│   ├── page.tsx                   # Home
│   ├── solutions/                 # Goal router, service comparison, what's always included
│   ├── services/[category]/       # Business and Technology Consultancy landing pages
│   ├── services/[category]/[slug]/ # Ten service pages (one template, data in content/services.ts and business-services.ts)
│   ├── why-zarx/ process/ partners/ contact/ careers/
│   ├── work/ work/[slug]/         # Case studies (hidden from nav until content/work.ts has entries)
│   ├── insights/ insights/[slug]/ # Articles (hidden from nav until content/insights.ts has entries)
│   ├── privacy/ terms/ cookies/ trust/
│   ├── not-found.tsx, error.tsx   # 404 and error pages
│   └── robots.ts, sitemap.ts, icon.png, apple-icon.png
├── content/                       # All copy: facts, categories, services, business-services, company, engagements, work, insights, careers
├── components/                    # Page sections and shared blocks (Navbar, Footer, CTABanner, forms, cards)
│   └── ui/                        # Primitives: Button, Section, PageHero, Lists, ProcessStrip, TrustStrip, JsonLd
└── lib/                           # site, cta, metadata, analytics, submit (form delivery), utils
scripts/
├── flatten-segment-data.mjs       # Post-build fix for static hosting (runs automatically)
├── deploy-staging.mjs             # Staging build (draft markers, noindex) and preview-channel deploy
├── guard-production.mjs           # Firebase predeploy hook: blocks a staging build from going live
└── make-og-images.py              # Regenerates the share images in public/og/
```

## Design System

- **Tokens:** defined once as CSS custom properties in `globals.css` and exposed to Tailwind
  (`bg-canvas`, `text-muted`, `bg-accent`, `bg-night`, …).
- **Palette:** white `#FFFFFF` / `#F7F8FA` surfaces, ink `#111827`, muted `#667085`,
  accent `#2563EB`, borders `#E5E7EB`, dark sections `#101828`, success `#15803D`, error `#B42318`.
- **Type:** Inter with fluid `clamp()` sizes (`text-display`, `text-h2`, `text-h3`, `text-lead`).
- **Motion:** short opacity/translate reveals via `data-reveal`; all motion is disabled under
  `prefers-reduced-motion`.

## Configuration

### Site URL
Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://zarxtechnologies.com`) so canonical URLs, the sitemap,
robots.txt, Open Graph images and structured data use the production domain.

### Contact Form
Forms post to Web3Forms with `facts.web3formsKey` (see `src/lib/submit.ts`); without a key they open the
visitor's email app addressed to `site.email`. Every project brief's subject starts with the team it belongs
to – `[Business Consultancy]`, `[Technology Consultancy]` or `[Not sure yet]` – from the service the visitor
picked, so the inbox can filter them.

### Business details
Email, location and other facts live in `src/lib/site.ts`. Page copy lives in `src/content/`; adding a service to `services.ts` or `business-services.ts` (with its `category`) creates its page under `/services/<category>/<slug>/`, its menu, footer and sitemap entries and its contact-form option automatically.

### Draft copy and staging
Copy still waiting for sign-off is flagged with `draft: true` in the content files (or the `draft` prop on `SectionHeading` / `PageHero`). Staging builds (`npm run deploy:staging`) show a “Draft copy” tag on it, block search engines and publish to a Firebase preview channel. Production builds hide the tags. Remove the flags once final copy is in.

## Facts only the founders can supply

`src/content/facts.ts` holds every fact the site must not invent: prices, booking link, phone and WhatsApp,
CIN, GSTIN, registered office, team size, proof numbers, review ratings, the data & grievance contact and the
Web3Forms key for form delivery. Anything left `null` is hidden on the site – never shown as a placeholder.
Case studies go in `src/content/work.ts`, articles in `src/content/insights.ts` and open roles in
`src/content/careers.ts`; Work and Insights appear in the navigation once they have entries.

## Share images

Each page has a 1200×630 card in `public/og/`. After changing a headline, regenerate them with
`python scripts/make-og-images.py` (needs Pillow).

## Deployment

The site is a static export (`npm run build` writes plain files to `out/`), so it can be served by any static host.

### Firebase Hosting (current)

Configured in `firebase.json`: publishes `out/`, keeps trailing-slash URLs, serves `404.html`, and caches hashed assets in `/_next/static/` for a year.

One-time setup:

1. `firebase login` (opens a Google sign-in).
2. Create a project at console.firebase.google.com (free Spark plan) and link it: `firebase use --add <project-id>`.

Deploy (also how you publish every update):

```bash
npm run deploy           # = npm run build && firebase deploy --only hosting
npm run deploy:staging   # private preview link for review; never touches the live site
```

A staging build leaves a marker in `out/`; `firebase.json` runs `scripts/guard-production.mjs` before every deploy and refuses to publish it to production.

Custom domain: Firebase console → **Hosting → Add custom domain** → `zarxtechnologies.com`. Add the TXT and A records it shows in Hostinger hPanel (**Domains → DNS / Nameservers**), removing Hostinger's old parking A records for `@` and `www`. Add `www.zarxtechnologies.com` too, set to redirect to the main domain. HTTPS is issued automatically (allow up to 24 hours).

### Other static hosts (e.g. Hostinger web hosting)

Upload the **contents** of `out/` to the web root (`public_html`). `public/.htaccess` (copied into `out/`) handles HTTPS, www → apex, trailing slashes and the 404 page on Apache/LiteSpeed hosts.

The domain is set in `src/lib/site.ts` (or via `NEXT_PUBLIC_SITE_URL`) and in `public/.htaccess`; change both if it ever moves.

## License

© 2026 ZARX Technologies Pvt. Ltd. All rights reserved.
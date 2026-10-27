# ZARX Technologies — Website

> **From Idea to Reality — We Build Digital Experiences That Scale.**

The official website for **ZARX Technologies Pvt. Ltd.**, a next-generation technology and gaming IP company based in New Delhi, India.

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
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                # Shared shell: header, footer, skip link, scroll reveals, site metadata
│   ├── page.tsx                  # Home: hero + short introductions linking to each page
│   ├── solutions/page.tsx        # All solutions overview
│   ├── solutions/[slug]/page.tsx # One detail page per service (generated from content/services.ts)
│   ├── why-zarx/page.tsx         # Differentiators, who we build for, how we work
│   ├── process/page.tsx          # Five stages in detail + process FAQ
│   ├── leadership/page.tsx       # Founder and CTO profiles, values
│   ├── investors/page.tsx        # Thesis, model, partnership options
│   ├── contact/page.tsx          # Enquiry form, contact details, FAQ
│   ├── globals.css               # Design tokens (colours, type, spacing, motion) + base styles
│   ├── not-found.tsx, error.tsx  # 404 and error pages
│   ├── robots.ts, sitemap.ts     # Generated /robots.txt and /sitemap.xml (all routes)
│   └── *-image.png, icon.png     # Open Graph / Twitter images and favicons
├── content/                      # All page copy lives here — edit text without touching layout
│   ├── services.ts               # The six services: offerings, deliverables, stack, FAQs
│   ├── company.ts                # Differentiators, audiences, process, FAQs, investor content
│   └── leaders.ts                # Leadership profiles and photos
├── components/
│   ├── ui/                       # Button, Section, PageHero, Lists (CheckList, FaqList, Tags), ProcessStrip, JsonLd, Logo
│   ├── Navbar.tsx, Footer.tsx
│   ├── Hero.tsx                  # Home hero
│   ├── Solutions.tsx, USP.tsx, Process.tsx, Leadership.tsx, Investor.tsx  # Home introductions
│   ├── CTABanner.tsx             # Configurable call-to-action band
│   └── ContactForm.tsx           # Validation, topic prefill (?topic=slug), email delivery
└── lib/
    ├── site.ts                   # Business details, site URL, navigation
    ├── metadata.ts               # Per-page title, description, canonical and social cards
    └── utils.ts                  # cn() class helper
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
There is no backend yet. Submitting validates the form and opens the visitor's email app with the
enquiry addressed to `site.email`. To post to an API or a service such as Resend or Formspree,
replace `deliver()` in `src/components/ContactForm.tsx`.

### Business details
Email, location and other facts live in `src/lib/site.ts`. Page copy lives in `src/content/`; adding a service to `services.ts` creates its page, footer link, sitemap entry and contact-form topic automatically.

## Deployment (Hostinger)

The site is a static export, so it runs on any Hostinger web-hosting plan (no Node.js needed).

1. `npm run build` — writes the site to `out/`, including `.htaccess` (HTTPS, www → apex, 404 page).
2. Zip the **contents** of `out/` (so `index.html` and `.htaccess` sit at the top of the zip).
3. hPanel → **Websites → zarxtechnologies.com → File Manager** → open `public_html`.
4. Delete any placeholder files there (e.g. `default.php`), upload the zip, then **Extract** it into `public_html`.
5. hPanel → **Security → SSL**: install the free certificate for the domain.
6. Visit https://zarxtechnologies.com and check a few pages, e.g. `/solutions/` and `/contact/`.

To update the site later, rebuild and repeat steps 2–4 (replacing the old files).

The domain is set in `src/lib/site.ts` (or via `NEXT_PUBLIC_SITE_URL`) and in `public/.htaccess`; change both if it ever moves.

## License

© 2026 ZARX Technologies Pvt. Ltd. All rights reserved.
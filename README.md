# HexTorq Portfolio 3

Production portfolio template for HexTorq.

Live site: https://portfolio-3.hextorq.tech/

## Website Overview

HexTorq Portfolio 3 is the long-form brand-story version of the website. It uses a cinematic one-page structure where every section behaves like a scene in the company narrative: hero, manifesto, technology reach, pillars, digital solutions, innovation, education, trust points, portfolio examples, process, and final call to action.

This version is best suited when the website needs to explain the full HexTorq story clearly and completely.

## Page Flow

- Home: animated HexTorq identity and primary action buttons.
- About: pillars and company positioning.
- Services: digital solutions and capability sections.
- Products: portfolio/product-style showcase.
- Projects: education, student projects, and innovation content.
- Process: idea-to-launch workflow.
- Contact: final call-to-action section.

## UI Direction

- Polished SaaS and innovation-lab style.
- Large narrative headings with scene-like scroll transitions.
- Glass panels, dashboard previews, orbit visuals, and timeline sections.
- Clearer explanatory structure than a purely decorative landing page.
- Small template-switch control for moving to another HexTorq portfolio style while keeping the same route.

## Static Build And SEO

The project uses Vite with a prerender step. Running the build generates static HTML route folders in `dist/`, so deployed pages can be served directly as HTML, CSS, and JavaScript.

```bash
npm install
npm run build
```

The generated output includes prerendered pages such as `/about/`, `/services/`, `/products/`, `/projects/`, `/process/`, and `/contact/`.

## Deployment Notes

This site is intended for Vercel static deployment. The included `vercel.json` allows cross-origin asset loading and iframe embedding from HexTorq domains so the portfolio mix website can preload and display this template.

The frame policy explicitly allows the production mix domains `https://hextorq.tech`, `https://www.hextorq.tech`, and HexTorq subdomains. After changing `vercel.json`, redeploy the Vercel project so the new response headers are applied in production.

## Content Editing

The primary website UI and copy live in `src/components/hextorq/HextorqSite.tsx`. Update that file for final company wording, project examples, product names, contact links, portfolio examples, and customer-facing claims.

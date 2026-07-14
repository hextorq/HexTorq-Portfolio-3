# Hextorq — Cinematic Brand Site

A single-page scroll experience that tells Hextorq's story rather than listing services. Dark premium theme, glassmorphism, neon blue/purple highlights, cinematic transitions. Organized around your three pillars: **Digital Solutions**, **Innovation & Automation**, **Education & Engineering**.

## Story flow (condensed from your 17 scenes)

1. **Intro** — black canvas, particle field, "HEXTORQ" wordmark assembles with glow.
2. **Manifesto** — rotating statements: *We don't build software. We build businesses. We automate workflows. We engineer innovation.*
3. **Connected world** — animated globe / node network: *Technology that powers modern businesses.*
4. **Three Pillars** — the spine of the site. Digital · Innovation · Education.
5. **Pillar I — Digital Solutions** — morphing browser + phone + ERP dashboard (Software, Web, Mobile, ERP/CRM/Billing).
6. **Pillar II — Innovation & Automation** — glowing AI core with neural mesh, IoT factory scene, SaaS products orbiting the logo.
7. **Pillar III — Education & Engineering** — student journey timeline: Idea → Research → Development → Testing → Presentation.
8. **Why Hextorq** — full-screen statements (Custom · Scalable · Secure · Reliable · Future-Ready).
9. **Portfolio** — floating glass project panels.
10. **Clients** — infinite auto-scrolling logo wall.
11. **Process** — animated path: Idea → Research → Design → Develop → Test → Deploy → Support.
12. **CTA** — *Let's Build Something Extraordinary* + Start Your Project.

## Design system

- Dark base (near-black with subtle blue tint), neon electric blue + violet accents, soft cyan highlights.
- Glassmorphism surfaces (blurred translucent cards, subtle borders).
- Large display typography (Space Grotesk / Sora heading, Inter body).
- Motion: scroll-triggered reveals, parallax, staggered text, section pinning for key scenes.
- All colors/gradients/shadows as tokens in `src/styles.css` — no hardcoded hex in components.

## Technical approach

- Framework: existing TanStack Start + Tailwind v4 (no Next.js swap).
- Animation: **Framer Motion** (already React-friendly) + **GSAP ScrollTrigger** for scroll-pinned scenes. Skip Three.js/React-Three-Fiber for v1 to keep build light — simulate 3D feel with CSS transforms, layered gradients, SVG neural networks, and canvas particle field. Can add R3F later for the intro wordmark / AI core if desired.
- **Lenis** for smooth scrolling.
- Generated hero imagery via image tool for portfolio panels and pillar visuals.
- Single route (`/`) composed of section components in `src/components/sections/`.

## Scope for v1

Ship all 12 scene sections above with polished motion, glass UI, particle intro, animated globe (SVG/canvas), morphing device mockups, orbiting SaaS products, student timeline, process path, portfolio grid, logo marquee, CTA. Metadata + SEO on root.

## Not in v1 (call out for later)

- Full Three.js scenes (wordmark assembly, 3D globe, AI core mesh) — v1 uses 2D/CSS analogs that still feel cinematic.
- Individual service detail pages / portfolio case study pages.
- Contact form backend (CTA links to mailto or a placeholder — enable Lovable Cloud when you want form submissions stored).
- CMS for portfolio/clients (hardcoded in v1).

Confirm and I'll build it.

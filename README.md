# Pileggi Olio

A scroll-driven, single-page **olive-harvest storytelling website** — built with Next.js 16 (App Router, React 19) and Tailwind CSS v4.

The page walks the visitor through the harvest journey: an intro gate, a hero with a five-step journey nav, and five chapters — **Groves · Harvesting · Milling · Cellar · Packaging** — each with a full-bleed parallax hero and an editorial content band, closing on a tasting call-to-action and a guided "continue the tour" section.

## Tech

- **Next.js 16** (App Router, TypeScript strict, `output: standalone`)
- **Tailwind CSS v4** with custom design tokens (olive / ivory / sage palette)
- Self-hosted display fonts (Quart, Plantin MT Pro, Sofia Pro)
- **Lenis** smooth scroll + IntersectionObserver reveals + lightweight scroll parallax
- Video sections render as lightweight placeholders (no streaming dependency)

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |
| `npm run check` | lint + typecheck + build |

## Structure

```
src/
  app/            # routes, layout, global styles + design tokens
  components/     # sections (intro, hero, chapters, outro) + shared primitives
  data/           # chapter content
  lib/            # smooth-scroll helpers, cn()
  types/          # content types
public/
  fonts/  images/  videos/  seo/
scripts/
  download-assets.mjs   # one-off asset fetch used to build the page
```

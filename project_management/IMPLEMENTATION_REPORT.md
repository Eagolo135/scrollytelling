# Implementation Report

_Last updated: 2026-04-30 — after Sprint 010 archive pilot implementation_

---

## Repository Scope

This report describes the actual application in the root folder:

`C:\Users\Nick\OneDrive\Documents\Web Development and Tools\Projects\scrollytelling`

The sibling `framework/` directory is reference material only and is off-limits for edits.

---

## Repository Snapshot

| Item | Value |
|------|-------|
| App type | Static-exported Next.js portfolio site |
| Framework | Next.js 16 App Router |
| Runtime | React 19 |
| Language | TypeScript (strict) |
| Content system | Markdown + gray-matter + Zod |
| Motion | framer-motion 12 |
| Styling | CSS Modules + CSS custom properties |
| Storage | File-based only |
| Backend / API | none |
| Tests | Vitest unit tests + Playwright e2e |
| Deployment target | GitHub Pages |
| Git repo state | Initialized at root with `origin` set |

---

## Current App Structure

```
src/app/
  layout.tsx              root html shell and metadata
  page.tsx                homepage from content/home.md
  globals.css             root design tokens and base styles
  [...slug]/page.tsx      statically-generated markdown pages
  images/page.tsx         image library browser
```

### Root layout
- Uses Geist Sans and Geist Mono via `next/font/google`.
- Site metadata already reflects the portfolio identity: `Nuclear Engineering Portfolio`.
- Root shell no longer relies on Tailwind utilities.

### Home route
- Loads `content/home.md` via `getHomeRepo().getPageBySlug("home")`.
- Generates metadata from frontmatter SEO fields.
- Renders through `PageLayoutFactory`.

### Dynamic route
- `dynamicParams = false`.
- `generateStaticParams()` enumerates `content/pages/*.md`.
- Current generated content is limited to the portfolio support pages.

---

## Routing and Content State

### Intended portfolio routes currently present
| Route | Source file | Layout | Status |
|-------|-------------|--------|--------|
| `/` | `content/home.md` | presentation | portfolio homepage |
| `/projects` | `content/pages/projects.md` | standard | implemented |
| `/research` | `content/pages/research.md` | standard | implemented |
| `/credentials` | `content/pages/credentials.md` | standard | implemented |
| `/contact` | `content/pages/contact.md` | standard | implemented |
| `/nuclear-archive` | `content/pages/nuclear-archive.md` | archive | Sprint 010 pilot |
| `/images` | `src/app/images/page.tsx` | utility | asset browser |

### Content observations
- Homepage content is already converted to a 5-slide portfolio narrative.
- Supporting portfolio pages exist and are linked from the global header.
- The previously broken homepage image reference has been removed.

---

## Content Pipeline

### Repository layer
`src/lib/content/repository.ts`
- File-system content loader.
- Validates slugs as kebab-case.
- Parses frontmatter with gray-matter.
- Validates metadata with Zod before returning `PageData`.
- Returns clearer `ContentValidationError` details for missing markdown files and malformed frontmatter.
- Returns sorted slug lists for deterministic route generation and test behavior.

### Frontmatter schema
`src/lib/content/schema.ts`

```
title: string
layout: "standard" | "presentation" | "archive"
heroImage?: string
summary?: string
order?: number
description?: string
type?: string
category?: string
seo?: {
  title?: string
  description?: string
  openGraphImage?: string
}
```

**Archive Layout Addition (Sprint 010):**
- `"archive"` layout option enables scroll-driven effects and narrative depth styling
- Optional fields `description`, `type`, `category` support archive-specific metadata
- Backwards-compatible: all new fields are optional

### Slide parser
`src/lib/content/parser.ts`
- Splits markdown on `---` into slides.
- Supports `plain`, `bg`, `split`, and `split-reverse` kinds.
- Supports `bg x% y%` object-position directives.

---

## Rendering Architecture

```
PageData
  -> PageLayoutFactory
       -> StandardLayout
       -> PresentationLayout
            -> PresentationSlide
                 -> MarkdownRenderer
                      -> Reveal
                      -> visualization components
```

### PageLayoutFactory
- Correctly dispatches `standard` vs `presentation` layouts.

### StandardLayout
- Uses `SiteHeader` plus a centered article body.
- Styling is module-based and tokenized.
- Maintains top spacing for the fixed header via CSS Modules.

### PresentationLayout
- Already upgraded to real sticky-stage scrollytelling.
- Uses `splitMarkdownIntoSlides()` and wraps each slide in `PresentationSlide`.
- Supports `bg`, `split`, `split-reverse`, and `plain` slide render paths.
- Layout styling is now primarily module-based and tokenized.

### MarkdownRenderer
- Custom lightweight markdown renderer, not MDX.
- Handles headings, paragraphs, lists, inline links, and fenced visualization blocks.
- Uses CSS Module prose styling instead of Tailwind utility classes.

---

## Motion Architecture

| Component | File | Status |
|-----------|------|--------|
| `Reveal` | `src/components/motion/Reveal.tsx` | viewport reveal for non-slide content |
| `PresentationSlide` | `src/components/motion/PresentationSlide.tsx` | sticky full-height slide stage |
| `SlideContext` | `src/components/motion/SlideContext.tsx` | scroll progress context |
| `LayeredRevealGroup` | `src/components/motion/LayeredRevealGroup.tsx` | exists, not central to current portfolio pages |
| `ScrollFade` | `src/components/motion/ScrollFade.tsx` | scroll-triggered fade effect (Sprint 010) |
| `ScrollParallax` | `src/components/motion/ScrollParallax.tsx` | scroll-driven parallax offset (Sprint 010) |

`Reveal.tsx` already has the hooks-order lint issue fixed in the root repo.

**Sprint 010 Additions:**
- `ScrollFade` uses IntersectionObserver for efficient viewport-entering fade animations
- `ScrollParallax` uses requestAnimationFrame for smooth scroll-driven position effects
- Both are reusable motion primitives integrated into `ArchiveLayout`

---

## Visualization Components

All are routed from fenced blocks in `MarkdownRenderer`:

| Fence tag | Component |
|-----------|-----------|
| `stat-grid` | `StatGrid` |
| `timeline` | `Timeline` |
| `progress-bar` | `ProgressBar` |
| `mermaid` | `Mermaid` |
| `code-sample` | `CodeSample` |
| `scroll-demo` | `ScrollDemo` |

Active visualization styling is now CSS Module based.

---

## Styling State

### What exists now
- `src/app/globals.css` defines the root token layer for color, typography, spacing, radius, motion, and shared UI values.
- Tailwind has been removed from `package.json` and `postcss.config.mjs`.
- `StandardLayout`, `PresentationLayout`, `SiteHeader`, `MarkdownRenderer`, and active visualization primitives now use CSS Modules.
- Root lint config ignores `framework/` so the reference scaffold stays outside the active project QA surface.

### Remaining styling follow-up
- Styling migration is complete for the active portfolio surface.
- Visual polish and broader responsiveness tuning remain for later sprints.

---

## Testing and Quality State

### Unit tests
- 14 tests passing in 7 files (includes Sprint 010 scroll effect tests)
- Coverage includes malformed frontmatter, missing-file handling, deterministic slug filtering/sorting, parser/schema/link contracts, markdown asset existence checks, URL-normalization regression checks, and scroll effect component rendering.

### Browser tests
- 15 tests passing.
- Assertions cover homepage rendering, navigation visibility, mobile navigation usability, keyboard tab flow across header links, supporting route H1s, presentation rendering, reduced-motion rendering, and `404` coverage for removed scaffold routes.
- Archive/history route accessible but not yet covered by specific e2e tests (pilot validation phase in Sprint 011)

### Verified current commands
- `npm run lint` ✅
- `npm run test` ✅ (14 unit tests)
- `npm run build` ✅ (10 routes prerendered including `/nuclear-archive`)
- `npm run test:e2e` ✅ (15 browser tests)
- `npm run verify:basepath` ✅ (basePath safety confirmed)

---

## Layout Architecture

| Layout | File | Status |
|--------|------|--------|
| `StandardLayout` | `src/components/layouts/StandardLayout.tsx` | standard portfolio pages |
| `PresentationLayout` | `src/components/layouts/PresentationLayout.tsx` | sticky-stage presentation pages |
| `ArchiveLayout` | `src/components/layouts/ArchiveLayout.tsx` | archive/history narrative (Sprint 010) |
| `PageLayoutFactory` | `src/components/layouts/PageLayoutFactory.tsx` | router dispatcher |

**ArchiveLayout (Sprint 010):**
- Integrates `ScrollFade` and `ScrollParallax` for immersive narrative experience
- Supports optional title and description from frontmatter
- Responsive design for mobile/tablet/desktop viewports

---

## Deployment and Operations State

### Deployment
- `next.config.ts` is correctly configured for static export and GitHub Pages subpath deployment.
- `.github/workflows/deploy.yml` exists for GitHub Pages deployment.
- `scripts/verify-basepath-output.mjs` provides a repeatable check for duplicated basePath tokens in exported HTML.
- `/nuclear-archive` route prerendered correctly in static export build.

### Maintenance and operations
- `project_management/MAINTENANCE_RUNBOOK.md` defines routine update and release-check procedures.
- `project_management/ROADMAP_PRIORITIES.md` captures constrained next-cycle prioritization.
- `project_management/DECISIONS.md` records formal roadmap decisions and rationale.

### Completed sprints
- Sprint 001-009 complete; all quality gates passed
- Sprint 010 (archive/history pilot) complete with 10 routes prerendered

---

## Main Drift Findings

1. Archive/history pilot is now implemented; no significant drift remains.
2. All quality gates consistently passing (lint, unit, build, e2e, basePath verify).

---

## Recommended Active Sprint

**Sprint 011: Archive Pilot Evaluation and Expansion Decision**

Sprint 011 should focus on pilot evaluation:
- assess scroll effect performance and UX impact
- evaluate archive content quality and narrative fit
- record decision for expansion, iteration, or halt in `DECISIONS.md`
- define Sprint 012 scope based on decision outcome

# Implementation Report

_Last updated: 2026-04-30 — after Sprint 003 UI Foundation_

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
  globals.css             minimal globals + Tailwind import
  [...slug]/page.tsx      statically-generated markdown pages
  images/page.tsx         image library browser
```

### Root layout
- Uses Geist Sans and Geist Mono via `next/font/google`.
- Site metadata already reflects the portfolio identity: `Nuclear Engineering Portfolio`.
- Still relies on Tailwind utility classes directly on `<html>` and `<body>`.

### Home route
- Loads `content/home.md` via `getHomeRepo().getPageBySlug("home")`.
- Generates metadata from frontmatter SEO fields.
- Renders through `PageLayoutFactory`.

### Dynamic route
- `dynamicParams = false`.
- `generateStaticParams()` enumerates `content/pages/*.md`.
- Current generated content includes both portfolio pages and leftover scaffold pages.

---

## Routing and Content State

### Intended portfolio routes currently present
| Route | Source file | Status |
|------|-------------|--------|
| `/` | `content/home.md` | portfolio homepage, presentation layout |
| `/projects` | `content/pages/projects.md` | implemented |
| `/research` | `content/pages/research.md` | implemented |
| `/credentials` | `content/pages/credentials.md` | implemented |
| `/contact` | `content/pages/contact.md` | implemented |
| `/images` | `src/app/images/page.tsx` | utility asset browser |

### Legacy scaffold routes still present
| Route | Source file | Status |
|------|-------------|--------|
| `/getting-started` | `content/pages/getting-started.md` | still published |
| `/sticky-slides` | `content/pages/sticky-slides.md` | still published |

### Content observations
- Homepage content is already converted to a 5-slide portfolio narrative.
- Supporting portfolio pages exist and are linked from the global header.
- Homepage references `/images/media/modules/portraits/placeholder.jpg`, but that asset does not exist in `public/`.

---

## Content Pipeline

### Repository layer
`src/lib/content/repository.ts`
- File-system content loader.
- Validates slugs as kebab-case.
- Parses frontmatter with gray-matter.
- Validates metadata with Zod before returning `PageData`.

### Frontmatter schema
`src/lib/content/schema.ts`

```
title: string
layout: "standard" | "presentation"
heroImage?: string
summary?: string
order?: number
seo?: {
  title?: string
  description?: string
  openGraphImage?: string
}
```

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
- Styling is still Tailwind utility class based.
- Uses an inline `paddingTop` to compensate for the fixed header.

### PresentationLayout
- Already upgraded to real sticky-stage scrollytelling.
- Uses `splitMarkdownIntoSlides()` and wraps each slide in `PresentationSlide`.
- Supports `bg`, `split`, `split-reverse`, and `plain` slide render paths.
- Layout styling is entirely inline rather than tokenized or module-based.

### MarkdownRenderer
- Custom lightweight markdown renderer, not MDX.
- Handles headings, paragraphs, lists, inline links, and fenced visualization blocks.
- Still uses Tailwind `prose` classes and utility classes directly.

---

## Motion Architecture

| Component | File | Status |
|-----------|------|--------|
| `Reveal` | `src/components/motion/Reveal.tsx` | viewport reveal for non-slide content |
| `PresentationSlide` | `src/components/motion/PresentationSlide.tsx` | sticky full-height slide stage |
| `SlideContext` | `src/components/motion/SlideContext.tsx` | scroll progress context |
| `LayeredRevealGroup` | `src/components/motion/LayeredRevealGroup.tsx` | exists, not central to current portfolio pages |

`Reveal.tsx` already has the hooks-order lint issue fixed in the root repo.

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

Current styling for these components remains Tailwind utility based.

---

## Styling State

### What exists now
- `src/app/globals.css` defines the root token layer for color, typography, spacing, radius, motion, and shared UI values.
- Tailwind has been removed from `package.json` and `postcss.config.mjs`.
- `StandardLayout`, `PresentationLayout`, `SiteHeader`, `MarkdownRenderer`, and active visualization primitives now use CSS Modules.
- Root lint config ignores `framework/` so the reference scaffold stays outside the active project QA surface.

### Remaining styling follow-up
- Styling migration is complete for the active portfolio surface, but visual polish and route cleanup still remain for later sprints.
- README still overstates the old styling story from the scaffold context.

---

## Testing and Quality State

### Unit tests
- 7 tests passing in 5 files.
- Coverage focuses on parser, schema, repository, and link contracts.

### Browser tests
- 11 tests passing.
- Assertions cover homepage rendering, navigation visibility, supporting route H1s, presentation rendering, and reduced-motion rendering.

### Verified current commands
- `npm run lint` ✅
- `npm run test` ✅
- `npm run build` ✅
- `npm run test:e2e` ✅

---

## Deployment and Operations State

### Deployment
- `next.config.ts` is correctly configured for static export and GitHub Pages subpath deployment.
- `.github/workflows/deploy.yml` exists for GitHub Pages deployment.

### Operational gaps
- Root README still documents the original teaching scaffold rather than the portfolio app.
- Deploy workflow hardening beyond the existing Pages setup is still pending.

---

## Main Drift Findings

1. Legacy scaffold routes are still live in production output.
2. Homepage references a missing image asset.
3. Root README still describes the scaffold instead of the shipped portfolio app.

---

## Recommended Active Sprint

Sprint 004 should focus on route and repo hardening:
- remove or repurpose legacy scaffold routes
- resolve the broken homepage image reference
- rewrite the root README
- keep the current route behavior covered by tests

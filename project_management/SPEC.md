# SPEC — Nuclear Engineering Scrollytelling Portfolio

_Last updated: 2026-04-30 — after Sprint 008 stabilization pass_

> `SPEC.md` is the single source of truth for the root `scrollytelling/` project. `framework/` is reference-only and must not be edited.

---

## Project Purpose

Build a personal nuclear engineering portfolio as a static scrollytelling site that communicates technical credibility, project depth, research experience, and availability for engineering work.

---

## Target Users

| User | Priority | What they need |
|------|----------|----------------|
| Engineering peers and technical leads | Primary | Technical depth, methods, project outcomes, rigor |
| Hiring managers and recruiters | Secondary | Fast scan of scope, tools, and professionalism |
| Research mentors and collaborators | Secondary | Publications, methods, and contact path |

---

## Core User Experience

1. The homepage should deliver a scroll-led professional story, not a generic landing page.
2. Each slide should earn attention with strong hierarchy, technical proof, and concise explanations.
3. Supporting pages should provide deeper case-study and credential detail without breaking the narrative flow.
4. Navigation should make it easy to move between portfolio sections at any point.
5. The site must remain statically deployable, fast, and accessible.

---

## Main Features

- Markdown-driven portfolio content with Zod-validated frontmatter.
- Homepage presentation layout using real sticky scrollytelling slides.
- Standard-layout supporting pages for projects, research, credentials, and contact.
- Embedded technical visualizations via fenced code blocks.
- Reduced-motion-safe reveal and slide behavior.
- Global site navigation header.
- Static metadata generation from frontmatter.
- Static image library route at `/images`.

---

## Technical Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 App Router |
| Runtime | React 19 |
| Language | TypeScript strict mode |
| Motion | framer-motion |
| Content | gray-matter + Zod + local Markdown |
| Styling target | CSS Modules + CSS custom properties |
| Styling current state | CSS Modules + CSS custom properties |
| Unit tests | Vitest + jsdom |
| Browser tests | Playwright |
| Deployment | GitHub Pages static export |
| Git remote target | `https://github.com/Eagolo135/scrollytelling` |

---

## Design Direction

Visual direction: technical data-lab portfolio.

- Dark, atmospheric scrollytelling slides for the homepage.
- Light, clean reading surfaces for standard content pages.
- Tight information hierarchy with eyebrow labels, metrics, and strong titles.
- Motion should support comprehension, not decoration.
- Typography should feel analytical and deliberate.

### UI foundation requirements
- Central design tokens in `src/app/globals.css`.
- No repeated hardcoded spacing and colors once Sprint 003 is complete.
- Layout styling should migrate out of inline objects and utility class strings.

---

## Pages and Routes

### Required portfolio routes
| Route | Source | Layout | Purpose |
|-------|--------|--------|---------|
| `/` | `content/home.md` | presentation | Main scrollytelling narrative |
| `/projects/` | `content/pages/projects.md` | standard | Portfolio case studies |
| `/research/` | `content/pages/research.md` | standard | Research and publications |
| `/credentials/` | `content/pages/credentials.md` | standard | Education, certifications, skills |
| `/contact/` | `content/pages/contact.md` | standard | Contact and availability |
| `/images/` | `src/app/images/page.tsx` | custom | Asset browser |

Legacy scaffold routes have been removed from the published portfolio route set.

---

## Components Needed

### Existing components to keep and evolve
- `PageLayoutFactory`
- `StandardLayout`
- `PresentationLayout`
- `MarkdownRenderer`
- `Reveal`
- `PresentationSlide`
- `SlideContext`
- `LayeredRevealGroup`
- `ContextualLink`
- `StatGrid`, `Timeline`, `ProgressBar`, `Mermaid`, `CodeSample`, `ScrollDemo`
- `SiteHeader`

### Required component behavior
- `PresentationLayout` must remain slide-driven and support `plain`, `bg`, `split`, and `split-reverse` slides.
- `StandardLayout` must keep readable long-form article structure.
- `SiteHeader` must remain global and must not break scroll behavior.
- `MarkdownRenderer` must continue to support the fenced visualization contract.

### Planned later component
- `SiteFooter` is allowed in a later polish sprint.

Rule: do not introduce new major shared components without documenting the need in `DECISIONS.md` or expanding this spec.

---

## Data and Storage Requirements

- All content is local and file-based.
- All route content comes from `content/` and `content/pages/`.
- All assets must come from `public/`.
- No database, CMS, auth system, or runtime API is required for v1.
- All routes must remain statically enumerable at build time.

---

## AI / Search / Backend Requirements

- No AI feature, search feature, or backend service is in scope for v1.
- Any future AI/search/backend work requires:
  1. a decision entry in `DECISIONS.md`
  2. a spec update here
  3. a dedicated phase and sprint

---

## Deployment Requirements

- Build output must remain `next build` static export.
- Site must work under a GitHub Pages subpath using `NEXT_PUBLIC_BASE_PATH`.
- Internal navigation and image paths must be basePath-safe.
- Repository target is GitHub at `https://github.com/Eagolo135/scrollytelling`.
- Root repo should be initialized with `main` as the default branch.

---

## Constraints

1. No edits are allowed inside `framework/`.
2. Work only in the root `scrollytelling/` project.
3. Keep changes scoped to the active sprint.
4. Do not randomly restructure folders or rename files without documenting why.
5. Keep the site statically deployable.
6. Do not add secrets or keys to source control.
7. Every meaningful implementation sprint must exit with `npm run lint`, `npm run test`, `npm run build`, and `npm run test:e2e` passing.
8. Update project-management docs after meaningful changes.

---

## Out of Scope

- Dynamic backend features
- Authentication or user accounts
- CMS integration
- Analytics integrations for v1
- Search or AI features for v1
- Editing the `framework/` reference scaffold

---

## Definition of Done

- [x] Portfolio identity replaces scaffold identity in the root app metadata.
- [x] Homepage uses `layout: presentation` with at least 5 slides.
- [x] Supporting portfolio pages exist for projects, research, credentials, and contact.
- [x] `SiteHeader` navigation is present.
- [x] Sticky-slide rendering is wired in the homepage presentation layout.
- [x] Root project-management docs exist.
- [x] Root README reflects the portfolio project rather than the teaching scaffold.
- [x] Legacy scaffold routes are removed or intentionally repurposed.
- [x] Homepage missing image reference is resolved.
- [x] Styling architecture is migrated to CSS Modules + tokenized CSS.
- [x] Content validation failures are clearer and covered by targeted unit tests.
- [x] Site is responsive and visually coherent across mobile and desktop.
- [x] Reduced-motion and core keyboard navigation behavior are covered by browser checks.
- [x] Deploy pipeline and root git setup are aligned with the target GitHub repository.
- [x] BasePath publish behavior is verified with a repeatable output check.
- [x] Maintenance runbook and roadmap-priority guidance are documented for stable operations.
- [x] `npm run lint` passes.
- [x] `npm run test` passes.
- [x] `npm run build` passes.
- [x] `npm run test:e2e` passes.

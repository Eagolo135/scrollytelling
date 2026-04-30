# Changelog

_All notable project changes are documented here._  
_Format: `## [YYYY-MM-DD] — Sprint N — Description`_

---

## [2026-04-30] — Sprint 001 — Project Management Bootstrap

### Added
- `project_management/IMPLEMENTATION_REPORT.md` — full technical baseline audit of the repository: stack, routing, content pipeline, layout implementation, styling, motion architecture, visualization dispatch, tests, deployment, and gap analysis vs portfolio requirements.
- `project_management/SPEC.md` — authoritative project specification: purpose, target users, core UX, features, tech stack, design direction, routes, components, data model, deployment requirements, constraints, out-of-scope, definition of done.
- `project_management/PHASES.md` — phased delivery roadmap (8 phases) tied to actual repository state.
- `project_management/CURRENT_SPRINT.md` — Sprint 001 scope and task list.
- `project_management/NEXT_SPRINT.md` — Sprint 002 plan (portfolio content scaffolding).
- `project_management/DECISIONS.md` — initial decisions log with drift findings and process rules.
- `project_management/CHANGELOG.md` — this file.
- `project_management/COMPLETED_SPRINTS/` — folder for archived sprint files.
- `project_management/QA_REPORTS/` — folder for per-sprint QA reports.

### Notes
- No implementation code changed in Sprint 001.
- Template content and e2e tests retained unchanged for build stability.
- Sprint 002 will begin portfolio content implementation.

---

## [2026-04-30] — Sprint 002 — Portfolio Content Scaffolding

### Added
- `src/components/ui/SiteHeader.tsx` — fixed glass navigation header with links to all portfolio routes; wired into both StandardLayout and PresentationLayout.
- `content/pages/projects.md` — five nuclear engineering project case studies with stat-grid blocks.
- `content/pages/research.md` — publications list, research interests timeline, methodology expertise.
- `content/pages/credentials.md` — education, professional certifications timeline, work experience, technical skills.
- `content/pages/contact.md` — contact information, availability, work preferences.
- `project_management/QA_REPORTS/qa-sprint-001-002.md` — QA report for Sprints 001 and 002.
- `project_management/COMPLETED_SPRINTS/sprint-001-project-management-bootstrap.md` — Sprint 001 archive.
- `project_management/COMPLETED_SPRINTS/sprint-002-portfolio-content-scaffolding.md` — Sprint 002 archive.

### Changed
- `content/home.md` — replaced template starter with 5-slide portfolio presentation (`layout: presentation`): hero → stats proof → core expertise → featured projects → CTA.
- `src/components/layouts/PresentationLayout.tsx` — completely rewritten to real sticky-stage scrollytelling: uses `splitMarkdownIntoSlides()` + `PresentationSlide`, supports `bg`, `split`, `split-reverse`, and `plain` slide kinds.
- `src/components/layouts/StandardLayout.tsx` — integrated `SiteHeader`; added `paddingTop` on `<main>` to clear fixed header.
- `src/app/layout.tsx` — site title changed to "Nuclear Engineering Portfolio"; description updated.
- `tests/browser/homepage.spec.ts` — updated assertions to portfolio content.
- `tests/browser/standard.spec.ts` — updated to test real portfolio routes and H1s.
- `tests/browser/presentation.spec.ts` — updated for new sticky-stage structure.
- `tests/browser/reduced-motion.spec.ts` — updated for portfolio pages.

### Fixed
- `src/components/motion/Reveal.tsx` — React hooks rules: moved `useRef`, `useInView`, `useReducedMotion` above early conditional return.
- `src/components/layouts/PageLayoutFactory.tsx` — removed unused `MarkdownRenderer` import.
- `src/components/motion/LayeredRevealGroup.tsx` — removed unused `stagger` prop from destructuring.

### Quality Gate
`lint ✅  ·  unit 7/7 ✅  ·  build 11 routes ✅  ·  e2e 11/11 ✅`

---

### Planning Notes After Sprint 002
- Root `project_management/` was refreshed to match the actual root portfolio implementation.
- `framework/` is explicitly treated as read-only reference material.
- Sprint 003 is reserved for UI Foundation work in the root repo.

---

## [2026-04-30] — Sprint 003 — UI Foundation

### Added
- `src/components/ui/SiteHeader.module.css` — tokenized styling for the fixed global header.
- `src/components/markdown/MarkdownRenderer.module.css` — tokenized prose styling for headings, paragraphs, and lists.
- `src/components/visualization/StatGrid.module.css`
- `src/components/visualization/Timeline.module.css`
- `src/components/visualization/ProgressBar.module.css`
- `src/components/visualization/CodeSample.module.css`
- `src/components/visualization/Mermaid.module.css`
- `src/components/visualization/ScrollDemo.module.css`
- `project_management/QA_REPORTS/qa-sprint-003.md` — Sprint 003 QA report.
- `project_management/COMPLETED_SPRINTS/sprint-003-ui-foundation.md` — Sprint 003 archive.

### Changed
- `src/app/globals.css` — replaced duplicated globals and Tailwind import with shared design tokens and base styles.
- `src/app/layout.tsx` — removed Tailwind utility classes from the root html/body shell.
- `src/components/layouts/StandardLayout.tsx` — migrated to CSS Modules.
- `src/components/layouts/StandardLayout.module.css` — implemented the standard page layout system.
- `src/components/layouts/PresentationLayout.tsx` — migrated slide shells away from inline layout styling where practical.
- `src/components/layouts/PresentationLayout.module.css` — implemented tokenized presentation slide styling with responsive split-slide fallback.
- `src/components/ui/SiteHeader.tsx` — replaced inline header styles with CSS Modules.
- `src/components/markdown/MarkdownRenderer.tsx` — replaced Tailwind prose utility usage with CSS Module classes.
- `src/components/visualization/StatGrid.tsx`
- `src/components/visualization/Timeline.tsx`
- `src/components/visualization/ProgressBar.tsx`
- `src/components/visualization/CodeSample.tsx`
- `src/components/visualization/Mermaid.tsx`
- `src/components/visualization/ScrollDemo.tsx`
- `package.json` and `package-lock.json` — removed Tailwind-related packages from the root project.
- `postcss.config.mjs` — removed Tailwind PostCSS plugin.
- `eslint.config.mjs` — excluded `framework/**` from root linting.
- `.gitignore` — excluded the read-only `framework/` folder from the root repo.

### Quality Gate
`lint ✅  ·  unit 7/7 ✅  ·  build 11 routes ✅  ·  e2e 11/11 ✅`

---

_Next planned sprint: Sprint 004 — Portfolio Hardening and Route Cleanup_

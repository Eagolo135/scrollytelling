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

## [2026-04-30] — Sprint 004 — Portfolio Hardening and Route Cleanup

### Changed
- `content/home.md` — removed the broken `placeholder.jpg` image directive so the affected slide renders as valid content.
- `README.md` — rewritten to describe the actual nuclear engineering portfolio app, repo, workflow, and structure.
- `tests/browser/standard.spec.ts` — added coverage confirming `/getting-started/` and `/sticky-slides/` now return `404`.
- `project_management/IMPLEMENTATION_REPORT.md` — updated to the new 9-route state.
- `project_management/SPEC.md` — updated to reflect the cleaned route set and resolved asset/README drift.
- `project_management/PHASES.md` — Phase 3 marked complete.

### Removed
- `content/pages/getting-started.md`
- `content/pages/sticky-slides.md`

### Added
- `project_management/QA_REPORTS/qa-sprint-004.md` — Sprint 004 QA report.
- `project_management/COMPLETED_SPRINTS/sprint-004-portfolio-hardening-and-route-cleanup.md` — Sprint 004 archive.

### Quality Gate
`lint ✅  ·  unit 7/7 ✅  ·  build 9 routes ✅  ·  e2e 13/13 ✅`

---

## [2026-04-30] — Sprint 005 — Content Pipeline Hardening

### Added
- `tests/unit/content-assets.test.ts` — validates markdown `/images/...` references point to existing files under `public/`.
- `project_management/QA_REPORTS/qa-sprint-005.md` — Sprint 005 QA report.
- `project_management/COMPLETED_SPRINTS/sprint-005-content-pipeline-hardening.md` — Sprint 005 archive.

### Changed
- `src/lib/content/repository.ts` — improved error clarity for missing markdown files and malformed frontmatter; added deterministic slug sorting.
- `tests/unit/repository.test.ts` — expanded coverage for malformed frontmatter, missing files, and slug filtering/sorting behavior.
- `project_management/IMPLEMENTATION_REPORT.md` — updated testing baseline and drift state after content hardening.
- `project_management/SPEC.md` — marked content-validation hardening as complete in definition of done.
- `project_management/PHASES.md` — marked Phase 4 complete.

### Quality Gate
`lint ✅  ·  unit 12/12 ✅  ·  build 9 routes ✅  ·  e2e 13/13 ✅`

---

## [2026-04-30] — Sprint 006 — Polish, Responsiveness, and Deployment Readiness

### Added
- Browser coverage for mobile navigation usability on the homepage (`tests/browser/homepage.spec.ts`).
- Browser coverage for keyboard-tab traversal across core global navigation links (`tests/browser/homepage.spec.ts`).
- `project_management/QA_REPORTS/qa-sprint-006.md` — Sprint 006 QA report.
- `project_management/COMPLETED_SPRINTS/sprint-006-polish-responsiveness-and-deployment-readiness.md` — Sprint 006 archive.

### Changed
- `src/components/ui/SiteHeader.module.css` — improved visible focus states and stabilized mobile nav behavior with horizontal overflow handling.
- `src/components/layouts/PresentationLayout.module.css` — improved mobile slide readability spacing and content alignment.
- `README.md` — updated status to reflect Sprint 005 completion and active Sprint 006 focus.
- `project_management/PHASES.md` — marked Phase 7 complete.

### Quality Gate
`lint ✅  ·  unit 12/12 ✅  ·  build 9 routes ✅  ·  e2e 15/15 ✅`

---

## [2026-04-30] — Sprint 007 — Release Verification and Publish Confidence

### Added
- `scripts/verify-basepath-output.mjs` — verifies static-export HTML contains expected basePath prefixes and no duplicated basePath tokens.
- `tests/unit/site-config.test.ts` — regression coverage for internal URL normalization behavior.
- `project_management/QA_REPORTS/qa-sprint-007.md` — Sprint 007 QA report.
- `project_management/COMPLETED_SPRINTS/sprint-007-release-verification-and-publish-confidence.md` — Sprint 007 archive.

### Changed
- `src/lib/site-config.ts` — fixed internal route normalization to avoid basePath double-prefix behavior under `next/link`.
- `package.json` — added `verify:basepath` script.
- `README.md` — added release-verification command sequence and basePath check instructions.
- `project_management/CURRENT_SPRINT.md` — promoted Sprint 008.
- `project_management/NEXT_SPRINT.md` — promoted Sprint 009 planning target.

### Quality Gate
`lint ✅  ·  unit 14/14 ✅  ·  build 9 routes ✅  ·  e2e 15/15 ✅  ·  basePath verify ✅`

---

_Next planned sprint: Sprint 008 — Post-Release Stabilization and Backlog Grooming_

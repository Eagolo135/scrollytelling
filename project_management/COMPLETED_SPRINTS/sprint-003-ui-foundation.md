# Sprint 003 — UI Foundation

_Status: COMPLETE — 2026-04-30_

---

## Goal

Replace styling drift with a maintainable UI foundation for the root portfolio project.

---

## Scope Completed

- Defined root design tokens in `src/app/globals.css`
- Removed Tailwind 4 and `@tailwindcss/postcss` from the root project
- Migrated `StandardLayout` to CSS Modules and tokens
- Migrated `PresentationLayout` to CSS Modules and tokens
- Migrated `SiteHeader` to CSS Modules and tokens
- Migrated `MarkdownRenderer` and active visualization primitives off Tailwind utility classes
- Updated root lint config to ignore the read-only `framework/` reference folder
- Reconciled `package-lock.json` after dependency removal

---

## Out of Scope

- Route cleanup for `/getting-started/` and `/sticky-slides/`
- Homepage broken image reference repair
- README rewrite
- Deploy workflow hardening
- AI/search/backend work

---

## Files Affected

```
src/app/globals.css
src/app/layout.tsx
src/components/layouts/StandardLayout.tsx
src/components/layouts/StandardLayout.module.css
src/components/layouts/PresentationLayout.tsx
src/components/layouts/PresentationLayout.module.css
src/components/ui/SiteHeader.tsx
src/components/ui/SiteHeader.module.css
src/components/markdown/MarkdownRenderer.tsx
src/components/markdown/MarkdownRenderer.module.css
src/components/visualization/StatGrid.tsx
src/components/visualization/StatGrid.module.css
src/components/visualization/Timeline.tsx
src/components/visualization/Timeline.module.css
src/components/visualization/ProgressBar.tsx
src/components/visualization/ProgressBar.module.css
src/components/visualization/CodeSample.tsx
src/components/visualization/CodeSample.module.css
src/components/visualization/Mermaid.tsx
src/components/visualization/Mermaid.module.css
src/components/visualization/ScrollDemo.tsx
src/components/visualization/ScrollDemo.module.css
package.json
package-lock.json
postcss.config.mjs
eslint.config.mjs
.gitignore
project_management/*
```

---

## Acceptance Criteria

- [x] Root app no longer depends on Tailwind for layout/header styling
- [x] Shared design tokens exist and are used in migrated components
- [x] Homepage and supporting pages render with equivalent structure after migration
- [x] `npm run lint` passes
- [x] `npm run test` passes
- [x] `npm run build` passes
- [x] `npm run test:e2e` passes

---

## Quality Gate

`lint ✅  ·  unit 7/7 ✅  ·  build 11 routes ✅  ·  e2e 11/11 ✅`

---

## Drift Check

- Aligns with `SPEC.md` styling target for the root project.
- Completes `PHASES.md` Phase 2 from the actual root codebase state.
- Intentionally leaves route cleanup and README alignment for the next sprint.

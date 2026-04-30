# Sprint 004 — Portfolio Hardening and Route Cleanup

_Status: COMPLETE — 2026-04-30_

---

## Goal

Remove remaining scaffold artifacts and resolve credibility gaps in the published portfolio.

---

## Scope Completed

- Removed the legacy `/getting-started/` route by deleting `content/pages/getting-started.md`
- Removed the legacy `/sticky-slides/` route by deleting `content/pages/sticky-slides.md`
- Removed the broken homepage `placeholder.jpg` reference from `content/home.md`
- Rewrote the root `README.md` to describe the real portfolio project and repo
- Added Playwright coverage asserting both legacy scaffold routes now return `404`

---

## Out of Scope

- New user-facing feature work beyond cleanup
- Content pipeline hardening
- Deploy workflow redesign
- Search, AI, or backend features

---

## Files Affected

```
content/home.md
content/pages/getting-started.md               deleted
content/pages/sticky-slides.md                 deleted
README.md
tests/browser/standard.spec.ts
project_management/IMPLEMENTATION_REPORT.md
project_management/SPEC.md
project_management/PHASES.md
project_management/CURRENT_SPRINT.md
project_management/NEXT_SPRINT.md
project_management/DECISIONS.md
project_management/CHANGELOG.md
project_management/QA_REPORTS/qa-sprint-004.md
```

---

## Acceptance Criteria

- [x] Legacy scaffold routes no longer ship unintentionally
- [x] Homepage has no broken image reference
- [x] README describes the real portfolio project and root repo URL
- [x] Full quality gate passes after cleanup

---

## Quality Gate

`lint ✅  ·  unit 7/7 ✅  ·  build 9 routes ✅  ·  e2e 13/13 ✅`

---

## Drift Check

- Aligns with `PHASES.md` Phase 3 by cleaning up scaffold leftovers after the UI Foundation sprint.
- Resolves the known route drift, broken asset drift, and README drift recorded in the project-management layer.
- Keeps scope limited to hardening the existing portfolio deliverable.
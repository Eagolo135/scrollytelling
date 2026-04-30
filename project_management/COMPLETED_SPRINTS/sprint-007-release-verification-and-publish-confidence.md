# Sprint 007 — Release Verification and Publish Confidence

_Status: COMPLETE — 2026-04-30_

---

## Goal

Run a release-candidate verification pass so deployment and long-term maintenance are stable at publish time.

---

## Scope Completed

- Validated Pages-oriented basePath assumptions in `next.config.ts` and deploy workflow behavior.
- Identified and fixed duplicated basePath generation in markdown-rendered internal links.
- Added a reusable static-output basePath verification script.
- Added URL-normalization regression tests.
- Updated release-facing README instructions with repeatable verification commands.

---

## Out of Scope

- New route or feature development
- Motion-system redesign
- Content model changes
- AI/search/backend expansion

---

## Files Affected

```
src/lib/site-config.ts
tests/unit/site-config.test.ts
scripts/verify-basepath-output.mjs
package.json
README.md
project_management/CHANGELOG.md
project_management/CURRENT_SPRINT.md
project_management/NEXT_SPRINT.md
project_management/PHASES.md
project_management/SPEC.md
project_management/IMPLEMENTATION_REPORT.md
project_management/DECISIONS.md
project_management/QA_REPORTS/qa-sprint-007.md
```

---

## Acceptance Criteria

- [x] Deployment configuration is verified against target hosting assumptions
- [x] Core routes and assets behave correctly under basePath expectations
- [x] Release docs are aligned with current implementation and update workflow
- [x] Full quality gate passes

---

## Quality Gate

`lint ✅  ·  unit 14/14 ✅  ·  build 9 routes ✅  ·  e2e 15/15 ✅  ·  basePath verify ✅`

---

## Drift Check

- Aligns with `PHASES.md` Phase 8 by validating deployment-readiness behavior directly.
- Resolves a concrete basePath regression risk before release confidence sign-off.
- Keeps product scope unchanged while improving publish safety and operational repeatability.

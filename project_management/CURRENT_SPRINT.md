# CURRENT SPRINT — Sprint 007: Release Verification and Publish Confidence

_Status: READY — promoted after Sprint 006 completion on 2026-04-30_

---

## Goal

Run a release-candidate verification pass so deployment and long-term maintenance are stable at publish time.

---

## Scope

- Re-validate deployment assumptions for GitHub Pages subpath hosting
- Verify static assets and internal links under production basePath
- Finalize operational docs for future updates
- Capture release QA evidence in project management artifacts

---

## Out of Scope

- New route or feature development
- Motion-system redesign
- Content model changes
- AI/search/backend expansion

---

## Tasks

- [ ] Validate `next.config.ts` and deploy workflow assumptions against GitHub Pages requirements
- [ ] Verify basePath-safe links and image references across the published route set
- [ ] Finalize release-facing README and operational update notes
- [ ] Produce final QA report for publish readiness
- [ ] Run full quality gate before release tagging

---

## Files Likely Affected

```
src/components/layouts/*
src/components/motion/*
src/app/*
next.config.ts
README.md
.github/workflows/deploy.yml
tests/browser/*.spec.ts
project_management/CHANGELOG.md
project_management/QA_REPORTS/qa-sprint-007.md
```

---

## Acceptance Criteria

- [ ] Deployment configuration is verified against target hosting assumptions
- [ ] Core routes and assets behave correctly under basePath expectations
- [ ] Release docs are aligned with current implementation and update workflow
- [ ] Full quality gate passes

---

## Testing / QA Steps

1. Run the full quality gate.
2. Verify route and asset behavior using production-like basePath settings.
3. Confirm reduced-motion and keyboard behavior on key routes.
4. Record release QA outcomes in `project_management/QA_REPORTS/`.

---

## Drift Check

- Follows `PHASES.md` Phase 8 release-readiness goals.
- Depends on Sprint 006 completing visual polish and responsiveness checks first.
- Keeps scope on verification and documentation rather than net-new product surface.

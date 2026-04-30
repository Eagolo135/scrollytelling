# NEXT SPRINT — Sprint 006: Polish, Responsiveness, and Deployment Readiness

_Planned start: after Sprint 005 completes_

---

## Goal

Raise the production quality of the published portfolio with a focused polish, responsiveness, and release-readiness pass.

---

## Scope

- Review homepage and supporting pages at mobile and desktop breakpoints
- Tune presentation-page readability and spacing where needed
- Audit reduced-motion and keyboard interaction behavior
- Harden release-facing docs and deployment confidence

---

## Out of Scope

- New portfolio features or route additions
- Search, AI, or backend features
- Content model redesign
- Large component architecture changes

---

## Tasks

- [ ] Review homepage, projects, research, credentials, and contact on mobile and desktop
- [ ] Tune slide spacing, text contrast, and section rhythm where needed
- [ ] Audit reduced-motion behavior and keyboard interaction expectations
- [ ] Review deploy workflow and release-facing docs for production readiness
- [ ] Run full quality gate after polish changes

---

## Files Likely Affected

```
src/components/layouts/*
src/components/motion/*
src/app/*
README.md
.github/workflows/deploy.yml
tests/browser/*.spec.ts
project_management/CHANGELOG.md
project_management/QA_REPORTS/qa-sprint-006.md
```

---

## Acceptance Criteria

- [ ] Portfolio is visually coherent across mobile and desktop
- [ ] Reduced-motion and core keyboard interactions behave acceptably
- [ ] Release-facing docs and deploy workflow are aligned
- [ ] Full quality gate passes

---

## Testing / QA Steps

1. Run the full quality gate.
2. Manually review the key routes at desktop and mobile sizes.
3. Verify reduced-motion behavior on homepage and standard pages.
4. Verify release docs and deployment settings before shipping.

---

## Drift Check

- Follows `PHASES.md` Phase 7 and the release-hardening goals in Phase 8.
- Depends on Sprint 005 completing content-pipeline hardening first.
- Does not expand product scope beyond polishing the existing portfolio app.

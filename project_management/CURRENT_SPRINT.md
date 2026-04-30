# CURRENT SPRINT — Sprint 004: Portfolio Hardening and Route Cleanup

_Status: READY — promoted after Sprint 003 completion on 2026-04-30_

---

## Goal

Remove the remaining scaffold artifacts and resolve credibility gaps in the published portfolio.

---

## Scope

- Remove or repurpose `/getting-started/` and `/sticky-slides/`
- Resolve the missing homepage image reference
- Align root README with the portfolio rather than the teaching scaffold
- Reconcile route count, metadata, and supporting assets with the intended portfolio-only site

---

## Out of Scope

- New feature work beyond cleanup and alignment
- Search, AI, or backend features
- Major animation redesign
- Deploy pipeline hardening beyond what cleanup work requires

---

## Tasks

- [ ] Decide whether legacy scaffold pages are deleted or repurposed
- [ ] Update affected content files and route expectations
- [ ] Replace or remove `/images/media/modules/portraits/placeholder.jpg` reference on the homepage
- [ ] Update browser tests to match the final route set
- [ ] Rewrite root README with correct project identity, setup, and repo URL
- [ ] Update implementation report and changelog to reflect the route cleanup

---

## Files Likely Affected

```
content/home.md
content/pages/getting-started.md
content/pages/sticky-slides.md
README.md
tests/browser/*.spec.ts
project_management/CHANGELOG.md
project_management/QA_REPORTS/qa-sprint-004.md
```

---

## Acceptance Criteria

- [ ] Legacy scaffold routes no longer ship unintentionally
- [ ] Homepage has no broken image reference
- [ ] README describes the real portfolio project and root repo URL
- [ ] Full quality gate passes after cleanup

---

## Testing / QA Steps

1. Run the full quality gate.
2. Confirm exported routes match the intended portfolio route set.
3. Manually verify homepage media renders correctly.
4. Manually verify removed or repurposed routes behave as intended.

---

## Drift Check

- Follows `PHASES.md` Phase 3.
- Resolves documented drift already present in `IMPLEMENTATION_REPORT.md`.
- Does not expand product scope; it tightens the existing portfolio implementation.

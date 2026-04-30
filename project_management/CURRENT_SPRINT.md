# CURRENT SPRINT — Sprint 010: Archive/History Pilot Implementation

_Status: READY — promoted after Sprint 009 completion on 2026-04-30_

---

## Goal

Implement a constrained archive/history storytelling increment that improves portfolio narrative depth while preserving static-export stability.

---

## Scope

- Add one archive/history-focused content route or section using the existing markdown pipeline
- Reuse existing visualization primitives where possible, extending minimally only if needed
- Keep route and asset behavior basePath-safe and statically exportable
- Add or update tests for any introduced parsing/render behavior

---

## Out of Scope

- AI/search implementation
- Backend services or runtime APIs
- Broad architecture rewrites
- Multi-route expansion beyond the scoped pilot

---

## Tasks

- [ ] Design the pilot archive/history content slice and add markdown source
- [ ] Implement minimal layout/render updates required for the pilot
- [ ] Add/update tests covering new behavior
- [ ] Verify basePath and static-export safety for new content paths
- [ ] Run full quality gate and record sprint QA

---

## Files Likely Affected

```
content/pages/*
src/components/layouts/*
src/components/markdown/*
src/components/visualization/*
src/app/[...slug]/page.tsx
tests/unit/*.test.ts
tests/browser/*.spec.ts
project_management/CHANGELOG.md
project_management/QA_REPORTS/qa-sprint-010.md
```

---

## Acceptance Criteria

- [ ] Archive/history pilot content is published through the existing markdown route pipeline
- [ ] Any renderer/layout extensions are minimal and test-covered
- [ ] Static export and basePath behavior remain valid
- [ ] Full quality gate passes

---

## Testing / QA Steps

1. Run `npm run lint`.
2. Run `npm run test`.
3. Run `npm run build`.
4. Run `npm run test:e2e`.
5. If new navigation/path behavior is introduced, run basePath verification with `verify:basepath`.

---

## Drift Check

- Executes the Sprint 009-approved conditional phase path.
- Keeps implementation tightly scoped to a single pilot increment.
- Preserves static-export and portfolio-focus constraints.

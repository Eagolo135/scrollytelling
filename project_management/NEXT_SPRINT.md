# NEXT SPRINT — Sprint 005: Content Pipeline Hardening

_Planned start: after Sprint 004 completes_

---

## Goal

Tighten the markdown content system so malformed content, slug issues, and asset mistakes are easier to catch before release.

---

## Scope

- Add targeted tests for content edge cases
- Improve content-validation failure clarity where needed
- Audit image and slug integrity in the markdown source set
- Keep the static-export contract intact

---

## Out of Scope

- New user-facing features
- Route or content strategy changes unrelated to validation
- AI/search/backend work
- Deployment workflow redesign

---

## Tasks

- [ ] Add unit tests for malformed frontmatter and missing or invalid slugs where coverage is thin
- [ ] Review `src/lib/content/repository.ts`, `schema.ts`, and `parser.ts` for failure clarity
- [ ] Audit markdown image references across `content/`
- [ ] Document any new content constraints in `SPEC.md` and `IMPLEMENTATION_REPORT.md`
- [ ] Run full quality gate after hardening changes

---

## Files Likely Affected

```
src/lib/content/repository.ts
src/lib/content/schema.ts
src/lib/content/parser.ts
tests/unit/*.test.ts
content/**/*.md
project_management/CHANGELOG.md
project_management/QA_REPORTS/qa-sprint-005.md
```

---

## Acceptance Criteria

- [ ] Content validation failures are clearer and test-covered
- [ ] Markdown asset and slug issues are documented or fixed
- [ ] Full quality gate passes

---

## Testing / QA Steps

1. Run `npm run lint`.
2. Run `npm run test`.
3. Run `npm run build`.
4. Run `npm run test:e2e`.
5. Intentionally validate at least one malformed content case during development.

---

## Drift Check

- Follows `PHASES.md` Phase 4.
- Tightens the existing content system without changing portfolio direction.
- Depends on Sprint 004 resolving the known route and asset drift first.

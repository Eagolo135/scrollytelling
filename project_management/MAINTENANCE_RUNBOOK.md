# Maintenance Runbook

_Last updated: 2026-04-30_

This runbook defines the standard, low-risk process for routine updates after release verification.

---

## 1) Content Update Flow (Markdown)

1. Edit only files under `content/` or `content/pages/`.
2. Keep frontmatter valid against `src/lib/content/schema.ts`.
3. Use route-safe slugs (kebab-case only).
4. For image references, use `/images/...` paths mapped to files under `public/images/`.

Checks:
- `npm run test` (includes content and asset integrity tests)
- `npm run build`

---

## 2) UI/Behavior Update Flow

1. Prefer existing tokens and CSS modules.
2. Avoid route or architecture changes unless scoped by active sprint docs.
3. If interaction behavior changes, update Playwright coverage for affected flows.

Checks:
- `npm run lint`
- `npm run test:e2e`

---

## 3) Release Confidence Flow

Run full quality gate:

```bash
npm run lint
npm run test
npm run build
npm run test:e2e
```

Run basePath verification (GitHub Pages profile):

```powershell
$env:NEXT_PUBLIC_BASE_PATH='/scrollytelling'; npm run build
npm run verify:basepath -- /scrollytelling
```

Expected result:
- Build succeeds
- No duplicated basePath token in `out/` HTML

---

## 4) Documentation Sync Rules

For each completed sprint:
1. Update `project_management/CHANGELOG.md`.
2. Archive sprint in `project_management/COMPLETED_SPRINTS/`.
3. Add QA report in `project_management/QA_REPORTS/`.
4. Promote `CURRENT_SPRINT.md` and refresh `NEXT_SPRINT.md`.
5. Sync status sections in `SPEC.md`, `IMPLEMENTATION_REPORT.md`, and `DECISIONS.md` as needed.

---

## 5) Safety Constraints

- Never edit `framework/`.
- Keep static export compatibility.
- Keep AI/search/backend out of scope unless approved by documented decision gate.
- Do not widen scope inside a stabilization sprint.

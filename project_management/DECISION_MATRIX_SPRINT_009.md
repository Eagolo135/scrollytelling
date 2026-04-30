# Sprint 009 Decision Matrix

_Date: 2026-04-30_

Purpose: evaluate conditional roadmap branches against current constraints and select the next scoped implementation direction.

---

## Constraints Baseline

- Static export deployment must remain intact.
- Root project scope must stay portfolio-focused.
- No edits in `framework/`.
- Full quality-gate contract remains mandatory for implementation sprints.

---

## Candidate Options

| Option | Summary | Static-Export Fit | Delivery Risk | Portfolio Value | Decision |
|---|---|---|---|---|---|
| A | Activate AI/search exploration in next sprint | Low-Medium (likely client-side only) | High | Medium | Reject for Sprint 010 |
| B | Activate archive/history storytelling pilot | High | Medium | High | Approve for Sprint 010 |
| C | Continue docs-only stabilization | High | Low | Low-Medium | Reject (insufficient product progress) |

---

## Rationale

- Option A adds architectural uncertainty and broadens scope too early.
- Option B improves portfolio narrative depth with low infrastructure risk because content and rendering are already markdown-driven.
- Option C is operationally safe but does not materially advance portfolio differentiation.

---

## Decision Output

Approved direction: **Option B - Archive/History storytelling pilot**.

Guardrails for Sprint 010:
- No backend services.
- No AI/search implementation.
- Add at most one new route-level content page and minimal visualization extensions.
- Keep markdown-first authoring and static-export compatibility.
- Exit with full quality gate.

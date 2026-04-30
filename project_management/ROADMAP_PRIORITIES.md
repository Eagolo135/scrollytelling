# Roadmap Priorities

_Last updated: 2026-04-30 (Sprint 008)_

Purpose: prioritize next-cycle options while preserving static-export constraints and portfolio scope discipline.

---

## Priority Order

1. **Operational Stability and Maintenance Ergonomics**
- Keep release checks repeatable and lightweight.
- Prevent regressions in content and deployment behavior.
- Continue strengthening docs as the operating surface.

2. **Conditional Decision Gate (No Immediate Feature Build)**
- Evaluate whether any conditional phase should activate.
- Require explicit acceptance/rejection rationale in `DECISIONS.md`.
- Keep decision sprint mostly doc/governance focused unless a low-risk fix is required.

3. **Archive/History Expansion (Only if Portfolio Value Is Clear)**
- Candidate only if it improves narrative quality and credibility.
- Must remain markdown-first and static-export compatible.

4. **AI/Search Exploration (Lowest Priority, Conditional)**
- Evaluate feasibility under static hosting constraints.
- No implementation without explicit approval and spec/phase updates.

---

## Deferred / Not Prioritized

- Large visual redesign
- Route architecture overhaul
- Backend-first enhancements incompatible with static deploy

---

## Entry Criteria for Any New Implementation Sprint

- Decision logged in `project_management/DECISIONS.md`
- Scope written in `project_management/CURRENT_SPRINT.md`
- Acceptance criteria and QA steps defined before code changes
- Full quality gate retained as sprint exit condition

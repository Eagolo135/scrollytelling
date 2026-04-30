# NEXT SPRINT — Sprint 012: Direction TBD (Post-Pilot Decision)

_Planned start: after Sprint 011 decision completes_

---

## Goal

Execute the post-pilot decision direction: continue archive expansion, iterate pilot, or resume standard development track.

---

## Scope

_Scope will be determined by Sprint 011 pilot evaluation decision._

---

## Conditional Plans

### If Archive Expansion Approved (Option A)
- [ ] Design next archive sections (e.g., engineering case studies, historical milestones)
- [ ] Integrate nuclear engineering photography assets
- [ ] Extend scroll effects or visualization primitives if needed
- [ ] Maintain markdown-first, static-export-safe discipline

### If Archive Iteration Approved (Option B)
- [ ] Implement specific refinements identified in pilot evaluation
- [ ] Address performance issues or UX concerns from user feedback
- [ ] Add asset integration or visualization extensions
- [ ] Stabilize scroll effect components for production use

### If Archive Phase Halted (Option C)
- [ ] Resume priority features on standard development roadmap
- [ ] Preserve archive code and tests for future reactivation
- [ ] Shift focus to deferred features (if any) or next-priority track
- [ ] Document archive/history deferral decision for future reconsideration

---

## Exit Criteria

- Decision from Sprint 011 is implemented
- All quality gates pass (lint, unit, build, e2e)
- Static-export and basePath safety maintained

---

**Planned Start:** Immediately after Sprint 011 completion  
**Target Duration:** 1-2 weeks depending on decision outcome
project_management/QA_REPORTS/qa-sprint-011.md
```

---

## Acceptance Criteria

- [ ] Pilot outcome decision is explicitly documented
- [ ] Spec/phase docs accurately reflect continuation choice
- [ ] Next-sprint scope is clear and constraint-aware
- [ ] Quality gate remains green if code changes are made

---

## Testing / QA Steps

1. Validate pilot behaviors and any changed user flows.
2. Run full quality gate if implementation files change.
3. Re-run basePath verification if route/link behavior changed.
4. Record evaluation QA outcomes in `project_management/QA_REPORTS/`.

---

## Drift Check

- Depends on Sprint 010 pilot outcomes.
- Keeps continuation decisions explicit rather than implicit.
- Maintains static-export and scope-discipline guardrails.

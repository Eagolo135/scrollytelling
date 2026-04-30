# Decisions Log

_Source of truth for intentional spec changes, architectural choices, and drift findings._

---

## Format

Each entry:
- **Date** — when the decision was made
- **Category** — Drift / Architecture / Scope / Process
- **Context** — what situation triggered this decision
- **Decision** — what was decided
- **Rationale** — why
- **Impact** — what changes as a result
- **Linked phase/sprint** — traceability

---

## 2026-04-30 — Root `scrollytelling/` is the only editable project

**Category:** Process  
**Context:** The workspace contains both a root application and a `framework/` reference scaffold. The user explicitly restricted edits to the root project only.  
**Decision:** Only files under the root `scrollytelling/` app are editable. `framework/` is read-only reference material and must never be modified as part of delivery work.  
**Rationale:** Prevents confusion about which app is being shipped and preserves the scaffold for comparison and reference.  
**Impact:** All sprint files, implementation work, QA, and git setup apply only to the root repo.  
**Linked:** All phases

---

## 2026-04-30 — Project management layer established as execution source of truth

**Category:** Process  
**Context:** The repository contains framework-level documentation (`docs/specs/`, `docs/phases/`) created for the original teaching scaffold. This documentation describes a general scrollytelling framework build, not the specific nuclear engineering portfolio delivery. Without a separate execution layer, implementation work could drift against framework-level concerns.  
**Decision:** `project_management/SPEC.md` becomes the authoritative definition of scope, routes, components, and constraints for this portfolio delivery. Framework docs remain as reference material only.  
**Rationale:** Clear separation between the teaching scaffold specification and the portfolio product specification prevents ambiguity about what needs to be built, and allows targeted phase tracking.  
**Impact:** All sprint planning, feature requests, and implementation decisions must be resolved against `project_management/SPEC.md`, not `docs/specs/`.  
**Linked:** Phase 1, Sprint 001

---

## 2026-04-30 — Phase-order drift exists in the root repo and is accepted

**Category:** Drift  
**Context:** The root repo already contains portfolio content, global navigation, and a working presentation layout, while the styling foundation still lags behind. This means interaction/content work landed before the UI foundation phase was finished.  
**Decision:** Accept the current root implementation as the baseline and continue forward from reality. Do not try to fake historical phase purity.  
**Rationale:** The project needs disciplined continuation from the current working state, not a rewrite to preserve planned sequencing.  
**Impact:** Sprint 003 focuses on styling infrastructure cleanup, even though some later-feature work is already present.  
**Linked:** Phase 2, Sprint 003

---

## 2026-04-30 — Drift: root docs and README are behind the implemented portfolio

**Category:** Drift  
**Context:** The root application metadata, content, routes, and tests already describe a nuclear engineering portfolio, but several root docs still describe the original teaching scaffold.  
**Decision:** Update `project_management/` immediately to match the actual root application. Defer root README rewrite to a dedicated cleanup sprint.  
**Rationale:** The project-management layer must describe the real codebase first; public-facing repo docs can follow in a controlled sprint.  
**Impact:** `IMPLEMENTATION_REPORT.md`, `SPEC.md`, `PHASES.md`, and sprint files now track the portfolio app rather than the scaffold story.  
**Linked:** Phase 1 refresh, Sprint 003 prep

---

## 2026-04-30 — Styling debt is the highest-priority implementation risk

**Category:** Architecture  
**Context:** The root app is functionally working, but it still mixes Tailwind utilities, inline style objects, duplicated globals, and empty CSS Module files.  
**Decision:** Prioritize UI foundation work before additional feature scope.  
**Rationale:** Continuing to add features on top of styling drift will increase duplication, make QA harder, and complicate responsive fixes later.  
**Impact:** Sprint 003 is dedicated to tokenization and style-system cleanup, not new features.  
**Linked:** Phase 2, Sprint 003

---

## 2026-04-30 — Sprint 003 removes Tailwind from the root project

**Category:** Architecture  
**Context:** The root app mixed Tailwind utilities, inline style objects, and empty CSS Module files, which conflicted with the intended maintainable styling architecture.  
**Decision:** Remove Tailwind from the root dependency graph and migrate the active portfolio surface to CSS Modules plus tokenized globals.  
**Rationale:** This reduces repeated values, improves maintainability, and makes future visual changes more controlled.  
**Impact:** `globals.css`, layouts, header, markdown renderer, and active visualization components now use CSS Modules and shared tokens.  
**Linked:** Phase 2, Sprint 003

---

## 2026-04-30 — Root lint excludes the read-only reference scaffold

**Category:** Process  
**Context:** The root workspace includes a `framework/` reference directory that should not affect active project QA.  
**Decision:** Ignore `framework/**` in root ESLint configuration and in root git tracking.  
**Rationale:** Keeps validation and commits scoped to the real deliverable only.  
**Impact:** Root lint and git staging focus only on the actual portfolio project.  
**Linked:** All phases

---

## 2026-04-30 — Legacy scaffold routes remain temporarily published

**Category:** Scope  
**Context:** The root portfolio is live in code, but `/getting-started/` and `/sticky-slides/` still ship because they remain in `content/pages/` and are still included by static param generation.  
**Decision:** Leave them in place until a dedicated cleanup sprint removes or repurposes them.  
**Rationale:** Route cleanup should be done deliberately with coordinated test and content updates, not as an incidental side effect of another sprint.  
**Impact:** Build output currently contains extra scaffold routes; Sprint 004 is responsible for resolving them.  
**Linked:** Phase 3, Sprint 004

---

## 2026-04-30 — No new components without a DECISIONS.md or SPEC.md entry

**Category:** Process  
**Context:** Uncontrolled component creation leads to duplication, inconsistent API surface, and scope creep.  
**Decision:** Any new component not listed in `SPEC.md §Components Needed` must first be documented here with rationale before implementation.  
**Rationale:** Keeps component surface minimal and intentional.  
**Impact:** Developers/agents must check this file before creating new components.  
**Linked:** All phases

---

## 2026-04-30 — Missing homepage asset is tracked as known drift

**Category:** Drift  
**Context:** `content/home.md` references `/images/media/modules/portraits/placeholder.jpg`, but that file does not exist in `public/`.  
**Decision:** Treat this as a controlled cleanup item rather than silently swapping assets during the documentation pass.  
**Rationale:** The current task is to align the control plane first. Asset correction belongs to an implementation sprint with QA.  
**Impact:** Sprint 004 must resolve the broken asset reference or replace it with a valid portfolio image.  
**Linked:** Phase 3, Sprint 004

---

## 2026-04-30 — Sprint 004 removes scaffold-only routes from the published site

**Category:** Scope  
**Context:** The root portfolio implementation was still publishing `/getting-started/` and `/sticky-slides/`, which were scaffold leftovers rather than intended portfolio routes.  
**Decision:** Delete the source markdown files for those routes from the root project and treat any future similar pages as explicit spec additions rather than inherited leftovers.  
**Rationale:** The published route set should match the portfolio product, not the teaching scaffold.  
**Impact:** Static export is reduced to the intended portfolio routes, and browser tests now assert `404` for the removed routes.  
**Linked:** Phase 3, Sprint 004

---

## 2026-04-30 — Sprint 004 resolves the broken homepage media reference by simplification

**Category:** Architecture  
**Context:** The homepage referenced a nonexistent `placeholder.jpg` asset. There was no valid project-owned replacement image ready in the root portfolio.  
**Decision:** Remove the broken image directive and allow the section to render as a plain content slide for now.  
**Rationale:** Removing a broken reference is safer than substituting unrelated reference media and keeps the page valid until real portfolio imagery exists.  
**Impact:** Homepage content remains intact, no missing asset is shipped, and future image additions can be deliberate.  
**Linked:** Phase 3, Sprint 004

---

## 2026-04-30 — AI/search integration explicitly out of scope for v1

**Category:** Scope  
**Context:** Request assessed whether search or AI features should be included. Static export constraint limits options. Adding AI/search adds deployment complexity without clear portfolio benefit at this stage.  
**Decision:** AI and search are out of scope for v1. Phase 5 is conditional; it requires explicit approval and a `DECISIONS.md` entry before implementation begins.  
**Rationale:** Keeps v1 deliverable focused, testable, and statically deployable.  
**Impact:** No AI/search code should be added in Phases 1–4 or 7–8 without a new decision entry.  
**Linked:** Phase 5 (conditional)

---

## 2026-04-30 — Sprint 005 standardizes repository failure clarity

**Category:** Architecture  
**Context:** Content loading failures were technically detectable, but error details for missing files and malformed frontmatter were inconsistent and harder to diagnose quickly.  
**Decision:** Normalize repository failure paths to return explicit `ContentValidationError` details for missing markdown files and malformed frontmatter parsing failures.  
**Rationale:** Clearer failure messages reduce debugging time and improve confidence when content changes are introduced.  
**Impact:** `src/lib/content/repository.ts` now reports consistent issue paths/messages for these error classes, and unit tests assert these behaviors.  
**Linked:** Phase 4, Sprint 005

---

## 2026-04-30 — Sprint 005 adds automated markdown asset integrity checks

**Category:** Process  
**Context:** Homepage and supporting markdown can reference `/images/...` assets that may drift from `public/` over time.  
**Decision:** Add a dedicated unit test that scans markdown content for `/images/...` references and verifies each referenced file exists.  
**Rationale:** This prevents shipping broken media references and turns a recurring manual check into a repeatable automated guardrail.  
**Impact:** `tests/unit/content-assets.test.ts` is now part of the quality gate and catches broken asset references early.  
**Linked:** Phase 4, Sprint 005

---

## 2026-04-30 — Sprint 006 adds explicit keyboard-navigation regression coverage

**Category:** Process  
**Context:** Browser checks covered route/content rendering and reduced motion, but did not explicitly assert keyboard tab flow through the global nav.  
**Decision:** Add Playwright assertions for tab-based focus order across the primary header links on the homepage.  
**Rationale:** This creates a stable accessibility guardrail for a critical interaction path and catches future focus regressions quickly.  
**Impact:** `tests/browser/homepage.spec.ts` now includes keyboard-navigation coverage and is part of the standard quality gate.  
**Linked:** Phase 7, Sprint 006

---

## 2026-04-30 — Sprint 006 stabilizes mobile nav interaction with overflow handling

**Category:** Architecture  
**Context:** Header link layout on narrow screens could become cramped and less predictable when relying on wrap-heavy behavior.  
**Decision:** Keep mobile nav on a stable single row with horizontal overflow support and preserve focus visibility for keyboard users.  
**Rationale:** This favors predictable interaction and readability while preserving access to all top-level routes.  
**Impact:** `src/components/ui/SiteHeader.module.css` now uses no-wrap mobile nav behavior, overflow handling, and explicit focus-visible outlines.  
**Linked:** Phase 7, Sprint 006

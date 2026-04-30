# PHASES — Root Portfolio Delivery Plan

_Last updated: 2026-04-30 — realigned to root repo state_

Exit gate for any completed implementation sprint:
`npm run lint && npm run test && npm run build && npm run test:e2e`

---

## Phase 1: Project Audit and Spec Setup ✅

**Goal**
Establish `project_management/` as the execution control plane for the root repo.

**Features included**
- Root repo audit
- Spec and phase plan
- Sprint tracking files
- Decision and changelog files

**Files likely affected**
- `project_management/*`

**Completion criteria**
- Root documentation reflects the real application, not the scaffold docs.

**Risks or unknowns**
- Framework docs can easily be mistaken for the active project unless explicitly separated.

---

## Phase 2: UI Foundation ✅

**Goal**
Replace styling drift with a real tokenized CSS foundation.

**Features included**
- Design tokens in `src/app/globals.css`
- Tailwind removal from dependencies and PostCSS
- Layout and header migration to CSS Modules
- Removal of repeated inline layout values

**Files likely affected**
- `src/app/globals.css`
- `src/components/layouts/*`
- `src/components/ui/SiteHeader.tsx`
- `src/components/markdown/MarkdownRenderer.tsx`
- visualization components using Tailwind utility strings
- `package.json`
- `postcss.config.mjs`

**Completion criteria**
- Layout/header/renderer primitives no longer depend on Tailwind utilities.
- Shared colors, spacing, type, and motion values come from tokens.

**Risks or unknowns**
- Visual regressions are likely if migration is done too broadly in one pass.

---

## Phase 3: Portfolio Hardening and Route Cleanup ✅

**Goal**
Resolve leftover scaffold artifacts and tighten portfolio credibility.

**Features included**
- Remove or repurpose `/getting-started/` and `/sticky-slides/`
- Fix missing homepage image reference
- Review page ordering, metadata, and image usage
- Align README with the actual portfolio app

**Files likely affected**
- `content/home.md`
- `content/pages/*`
- `README.md`
- `tests/browser/*`

**Completion criteria**
- No scaffold route remains live unintentionally.
- No broken asset reference remains in portfolio content.

**Risks or unknowns**
- Removing legacy routes requires coordinated e2e updates.

---

## Phase 4: Content Pipeline Hardening ✅

**Goal**
Improve content-system resilience and error clarity.

**Features included**
- Additional schema and parser coverage
- Better malformed-content failure modes
- Image-path validation and slug edge-case tests

**Files likely affected**
- `src/lib/content/*`
- `tests/unit/*`
- `content/**/*.md`

**Completion criteria**
- Content failures are explicit and test-covered.
- Markdown image references are guarded by automated validation.

**Risks or unknowns**
- Current lightweight renderer may need careful extension to avoid breaking existing content.

---

## Phase 5: AI/Search Integration (Conditional)

**Goal**
Support search or AI only if explicitly approved and still compatible with static export.

**Features included**
- Decision-first evaluation
- Architecture selection
- Spec and phase extension if approved

**Files likely affected**
- TBD only after approval

**Completion criteria**
- No work starts without a decision entry and spec update.

**Risks or unknowns**
- Static deployment constraints may rule out most server-backed options.

---

## Phase 6: Archive / History System (Conditional, Approved for Sprint 010 Pilot)

**Goal**
Add archival or historical storytelling only if it materially improves the portfolio.

**Features included**
- Optional expanded timelines
- Optional archive views or historical content sections

**Files likely affected**
- `content/pages/*`
- visualization components

**Completion criteria**
- New historical content has a clear portfolio purpose and is documented in spec.
- Sprint 009 decision gate approves implementation scope before execution.

**Risks or unknowns**
- Could dilute the main portfolio narrative if added without strong scope control.

Decision status:
- Activated for a scoped pilot in Sprint 010 by Sprint 009 decision gate.

---

## Phase 7: Polish, Animation, and Responsiveness ✅

**Goal**
Raise UX quality after the styling foundation and route cleanup are stable.

**Features included**
- Motion tuning
- accessibility and reduced-motion review
- mobile presentation fallback tuning
- optional footer
- keyboard interaction improvements

**Files likely affected**
- `src/components/motion/*`
- `src/components/layouts/*`
- `tests/browser/*`

**Completion criteria**
- Mobile and reduced-motion experiences are intentionally designed rather than incidental.
- Keyboard navigation coverage exists for the global navigation path.

**Risks or unknowns**
- Sticky presentation behavior can regress on smaller screens if not tested explicitly.

---

## Phase 8: Testing, QA, and Deployment Readiness ✅

**Goal**
Prepare the root project for maintainable release and handoff.

**Features included**
- Root git initialization and remote setup
- deploy workflow verification
- QA reports for final release pass
- README and changelog alignment

**Files likely affected**
- `.github/workflows/deploy.yml`
- `README.md`
- `project_management/*`

**Completion criteria**
- Root git repository is initialized and points to the intended GitHub remote.
- Docs, tests, deploy config, and release notes are aligned.
- BasePath publish behavior is verified through a repeatable check.

**Risks or unknowns**
- Pages subpath behavior must still be validated after release configuration changes.

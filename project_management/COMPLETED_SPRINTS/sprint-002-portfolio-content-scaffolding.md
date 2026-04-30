# Sprint 002 — Portfolio Content Scaffolding

_Archived: 2026-04-30_
_Status: COMPLETE_

---

## Goal

Build the full route and content scaffold for the nuclear engineering portfolio: homepage presentation, four supporting pages, upgraded scrollytelling layout, and global navigation.

---

## Deliverables

| Item | Status |
|---|---|
| `content/home.md` — 5-slide presentation layout | ✅ |
| `content/pages/projects.md` — 5 case studies | ✅ |
| `content/pages/research.md` — publications, interests | ✅ |
| `content/pages/credentials.md` — education, certs, skills | ✅ |
| `content/pages/contact.md` — contact, availability | ✅ |
| `PresentationLayout.tsx` — real sticky-stage scrollytelling | ✅ |
| `SiteHeader.tsx` — fixed glass nav, wired into both layouts | ✅ |
| `src/app/layout.tsx` — portfolio title/description | ✅ |
| E2E tests updated (4 files) | ✅ |
| 3 pre-existing lint errors fixed | ✅ |

---

## Files Changed

```
src/components/ui/SiteHeader.tsx              created
src/components/layouts/PresentationLayout.tsx rewritten
src/components/layouts/StandardLayout.tsx     updated
src/components/motion/Reveal.tsx              fixed
src/components/layouts/PageLayoutFactory.tsx  fixed
src/components/motion/LayeredRevealGroup.tsx  fixed
src/app/layout.tsx                            updated
content/home.md                               replaced
content/pages/projects.md                     created
content/pages/research.md                     created
content/pages/credentials.md                  created
content/pages/contact.md                      created
tests/browser/homepage.spec.ts                updated
tests/browser/standard.spec.ts                updated
tests/browser/presentation.spec.ts            updated
tests/browser/reduced-motion.spec.ts          updated
project_management/QA_REPORTS/qa-sprint-001-002.md  created
```

---

## Quality Gate Results

| Check | Result |
|---|---|
| `npm run lint` | ✅ clean |
| `npm run test` | ✅ 7/7 |
| `npm run build` | ✅ 11 routes |
| `npm run test:e2e` | ✅ 11/11 |

---

## Bugs Fixed

1. **`Reveal.tsx`** — React hooks rules violation: `useRef`, `useInView`, `useReducedMotion` were called after an early return. Moved all three hooks above the conditional return.
2. **`PageLayoutFactory.tsx`** — Unused `MarkdownRenderer` import removed.
3. **`LayeredRevealGroup.tsx`** — Unused `stagger` prop destructured but never referenced; removed from props signature.

---

## Drift Notes

- All five routes match `SPEC.md` route definitions exactly.
- Phase 2 CSS token work was explicitly excluded and untouched.
- `splitMarkdownIntoSlides` parser pre-existed in codebase; leveraged rather than rewritten.

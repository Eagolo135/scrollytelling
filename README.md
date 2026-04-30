# Nuclear Engineering Portfolio

A statically exported Next.js portfolio site for a nuclear engineer, built as a scrollytelling experience with markdown-authored content, scroll-linked presentation slides, and supporting project and research pages.

- Repo: https://github.com/Eagolo135/scrollytelling
- Stack: Next.js 16 App Router, React 19, TypeScript, framer-motion, gray-matter, Zod, CSS Modules
- Deployment target: GitHub Pages

## What the site contains

- A scrollytelling homepage powered by `content/home.md`
- Supporting pages for projects, research, credentials, and contact
- Markdown-driven visual blocks such as stat grids, timelines, progress bars, and code samples
- A static `/images/` route for browsing assets in `public/images/`

## Project management workflow

The active delivery process lives in `project_management/`.

- `project_management/SPEC.md` is the source of truth.
- `project_management/CURRENT_SPRINT.md` defines the work in progress.
- `project_management/NEXT_SPRINT.md` defines the next planned sprint.
- `project_management/IMPLEMENTATION_REPORT.md` describes how the current codebase is implemented.

The `framework/` folder is reference-only and not part of the editable deliverable.

## Local development

```bash
npm install
npm run dev
```

App URL during development: `http://localhost:3000`

## Quality checks

```bash
npm run lint
npm run test
npm run build
npm run test:e2e
```

## Content model

Portfolio content is file-based:

- `content/home.md` drives the homepage
- `content/pages/*.md` drives supporting routes
- Frontmatter is validated through Zod in `src/lib/content/schema.ts`
- Page loading and slug generation live in `src/lib/content/repository.ts`

## Project structure

```text
scrollytelling/
├── .github/workflows/          GitHub Pages deploy workflow
├── content/                    Markdown content source
├── project_management/         Spec, sprints, QA reports, decisions
├── public/                     Static assets
├── src/app/                    App Router routes
├── src/components/             Layout, motion, UI, markdown, and viz components
├── tests/                      Unit and browser tests
└── framework/                  Read-only reference scaffold
```

## Deployment

The site is configured for static export in `next.config.ts` and is intended to be deployed to GitHub Pages. The deploy workflow lives in `.github/workflows/deploy.yml`.

## Current status

Sprint 003 (UI Foundation) is complete. Sprint 004 is focused on hardening the published portfolio by cleaning up scaffold leftovers and aligning repo-facing documentation.

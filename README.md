# LvSG Digital Operations Platform

Next.js 16 + Tailwind CSS application for the Longview Solutions Group digital operations platform described in `/Users/roydunn/Longview.Website.2026/SPRINT_PLAN.md`.

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript, React 19)
- **Styling:** Tailwind CSS 4, CSS variables for the LvSG design system
- **CMS:** Sanity (workspace pending authentication)
- **Hosting:** Vercel with preview deployments per pull request
- **Data / Integrations:** Mapbox, Algolia, Plausible or Fathom analytics

## Local Development

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:3000`. Tailwind, TypeScript, and ESLint are preconfigured.

## Quality Gates

| Command             | Description                                              |
| ------------------- | -------------------------------------------------------- |
| `npm run lint`      | Runs ESLint with the Next.js shared config               |
| `npm run format`    | Applies Prettier formatting                              |
| `npx husky install` | (Run automatically via `npm install`) prepares Git hooks |

Pre-commit hooks run `lint-staged` (ESLint + Prettier) over staged files before each commit.

## Environment Variables

Copy `.env.example` to `.env.local` and populate the values before integrating Sanity, Mapbox, Algolia, or analytics providers.

```
cp .env.example .env.local
```

Secrets are consumed via Next.js runtime support. Do **not** commit `.env.local`.

## Branching Strategy

- `main`: production-ready state (mirrors Vercel Production)
- `develop`: integration branch for approved sprint increments
- `feature/*`: short-lived branches for sprint backlog items

Use conventional commits and open pull requests from `feature/*` into `develop`. Merge to `main` only when a sprint Definition of Done has been signed off.

## Deployment Checklist (Sprint 0)

- [x] Next.js project scaffolded with TypeScript + Tailwind
- [x] ESLint, Prettier, Husky, and lint-staged configured
- [x] `.env.example` established for secrets management
- [ ] Sanity project + Studio authenticated
- [ ] Vercel project linked with preview deployments
- [ ] Analytics provider (Plausible or Fathom) connected
- [ ] Domain + SSL mapped inside Vercel (LongviewSolutionsGroup.com)

Pending items above require Roy's credentials or explicit approvals before completion.

## References

- Sprint Development Plan: `../SPRINT_PLAN.md`
- Architecture Source: Digital Operations Platform Architecture v1.0

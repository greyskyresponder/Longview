# Contributing Guidelines

The LvSG Digital Operations Platform follows the gated sprint model defined in `SPRINT_PLAN.md`. All contributors are expected to honor the following rules:

## Branching & Pull Requests

1. Create feature branches from `develop` using the pattern `feature/<sprint>-<slug>` (e.g., `feature/sprint-1-nav-shell`).
2. Keep branches short-lived and focused on a single sprint backlog item.
3. Open a pull request into `develop` and include:
   - Sprint reference (number + name)
   - Definition of Done checklist with evidence (screenshots, logs, links)
   - Confirmation that lint/tests pass locally
4. Require at least one reviewer before merging into `develop`.
5. Merge `develop` into `main` only when the sprint Decision Gate has been cleared by Roy.

## Commit Discipline

- Use conventional commits (`feat:`, `chore:`, `fix:`, `docs:` ...).
- Never commit directly to `main`.
- Run `npm run lint` and `npm run format` before pushing.
- Do not commit `.env*`, Vercel tokens, or Sanity API keys.

## Environment & Secrets

- Populate `.env.local` locally from `.env.example`.
- Store production secrets in Vercel/Sanity dashboards, not in Git.
- Update `.env.example` whenever new configuration keys are required.

## Code Review Criteria

1. **Alignment:** Does the change map to the sprint backlog item?
2. **Quality:** Lint passes, no console errors, responsive behavior intact.
3. **Performance:** Follow Next.js best practices and avoid blocking operations on the server.
4. **Accessibility:** Ensure semantic markup and WCAG-compliant interactions.

## Release Rhythm

- Sprint increments deploy to Vercel Preview automatically.
- Roy reviews preview URLs at each Decision Gate.
- `main` is reserved for production releases only after gate approval.

Questions or blockers should be captured inline in the sprint tracker (Trello/Linear) and surfaced before attempting to bypass prerequisites.

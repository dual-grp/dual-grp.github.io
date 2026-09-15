# DUAL Group Website

Website of the **D**istributed comp**U**ting, optimiz**A**tion, and **L**earning (DUAL) Group at the School of Computer Science, University of Sydney.

**Production:** https://dual-grp.github.io

## Stack

- [Astro 5](https://astro.build) — static site generator with Content Collections
- [Tailwind CSS 4](https://tailwindcss.com) — via `@tailwindcss/vite`, design tokens in `src/styles/global.css`
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) + [JetBrains Mono](https://www.jetbrains.com/mono/) — self-hosted via `@fontsource`
- nginx — static file serving in Docker, mirroring the GitHub Pages production setup

## Quickstart

Requires Node.js 20+.

```bash
npm install
npm run dev       # dev server → http://localhost:4321
npm run build     # production build → dist/
```

Type and content validation: `npx astro check`.

## Docker

Production-faithful local serve (multi-stage build → nginx, no bind mounts):

```bash
docker compose up --build
```

Then open http://localhost:8080.

## Content

- Members: `src/content/members/<slug>.md`
- Research work: `src/content/works/<slug>.md`
- Site-wide data (nav, emails, news): `src/data/`

See [AGENTS.md](AGENTS.md) for the full content-maintenance guide.

## Deployment

GitHub Pages via `.github/workflows/deploy.yml` (official Astro action): a push to `main` builds the site and publishes `dist/`.

# CLAUDE.md

Read [AGENTS.md](AGENTS.md) first — it is the canonical maintenance guide for this repo (content schemas, design-token rules, copy ownership, full command set).

Three most common commands:

```bash
npm run build               # production build → dist/
npx astro check             # type + content validation
docker compose up --build   # production-faithful serve → http://localhost:8080
```

Golden rules: design tokens only — never hardcode colors (see `src/styles/global.css`); every page uses `src/layouts/Base.astro`; no new npm dependencies without approval; never commit or push unless explicitly asked.

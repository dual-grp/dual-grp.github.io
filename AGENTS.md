# AGENTS.md — AI-agent maintenance guide

This repo is the DUAL Group website: **Astro 5 + Tailwind CSS 4 + Content Collections**. Static output, no server code, no client framework. This file is the canonical guide for coding agents (and humans) making content or design changes.

## Non-negotiable rules

1. **Design tokens only.** Never hardcode colors or fonts. Use the CSS variables / Tailwind theme utilities defined in `src/styles/global.css` (`bg-bg`, `bg-bg-elev`, `text-fg`, `text-muted`, `border-line`, `text-accent`, `font-sans`, `font-mono`, …) and the shared component classes (`.kicker`, `.node-glyph`, `.card`, `.btn`, `.btn-primary`, `.btn-ghost`, `.rule`, `.link-arrow`, `.badge`, `.prose-dual`). Dark and light themes must both keep working.
2. **Restrained design.** No heavy shadows, no gradients, generous whitespace, hairline rules. Match the existing pages before inventing new patterns.
3. **Every page uses `src/layouts/Base.astro`.** Never hand-roll `<html>`/`<head>`.
4. **All site copy in English.**
5. **No new npm dependencies** without explicit approval.
6. **Never `git commit` or `git push`** unless the user explicitly asks.
7. The legacy Jekyll stack is fully deleted (recoverable only via git history). The Astro site under `src/` + `public/` is the only source of truth.

## Commands

| Task                                  | Command                                       |
| ------------------------------------- | --------------------------------------------- |
| Dev server                            | `npm run dev` → http://localhost:4321         |
| Production build                      | `npm run build` → `dist/`                     |
| Type + content validation             | `npx astro check`                             |
| Production-faithful serve (Docker)    | `docker compose up --build` → http://localhost:8080 |

Always run `npm run build` (and ideally `npx astro check`) after changing schemas, loaders, data files, or page structure.

## Add a member

Create `src/content/members/<slug>.md`. The slug becomes the URL: `/members/<slug>/`.

```markdown
---
name: Jane Doe
role: phd
description: Federated learning on resource-constrained edge devices.
image: /assets/img/team/jane_doe.jpg
links:
  email: jane.doe@sydney.edu.au
  github: janedoe
  google-scholar: AbCdEfGhIjK
  home-page: https://janedoe.example.com
---

Short bio in plain Markdown. One or two paragraphs is plenty.
```

Schema (enforced by `src/content.config.ts`):

| Field         | Type   | Required | Notes                                                                 |
| ------------- | ------ | -------- | --------------------------------------------------------------------- |
| `name`        | string | yes      | Display name: Given Family, Latin script, no diacritics. Hyphenate compound given names (`Tzu-Hao`, `Tung-Anh`). |
| `role`        | enum   | yes      | One of `professor`, `phd`, `mphil`, `research-pathway`, `honours`, `alumni`. Groups the `/people/` page. Within each group, members sort A–Z by `name`. |
| `description` | string | no       | Research or current-position one-liner. Do not repeat the role title. |
| `image`       | string | no       | Path under `public/`, e.g. `/assets/img/team/jane_doe.jpg`.           |
| `links`       | map    | no       | Recognized keys: `email`, `github`, `home-page`, `website`, `linkedin`, `google-scholar`. |

Body = free Markdown bio.

**Member photos** go in `public/assets/img/team/`. Use a square-ish crop and keep files reasonably sized (< 500 KB).

- Removing a member = delete their `.md` file (photo optional).
- Graduated members stay in the collection with `role: alumni`.

## Add a research work

Create `src/content/works/<slug>.md`. The filename is the entry id and the `/research/#<slug>` anchor. The Research page regroups by year automatically. Body may be empty — the card does not render it.

```markdown
---
title: "FedX: Efficient Federated Learning at the Edge"
authors:
  - Jane Doe
  - Nguyen H. Tran
year: 2026
kind: conference
status: "ICML 2026"
url: https://arxiv.org/abs/2601.00001
venue_url: https://proceedings.mlr.press/v267/doe26a.html
code: https://github.com/dual-grp/fedx
img: /assets/img/projects/fedx.png
image_alt: Diagram of the FedX pipeline
image_fit: contain
hot: true
bibtex: |
  @inproceedings{doe2026fedx,
    title     = {FedX: Efficient Federated Learning at the Edge},
    author    = {Doe, Jane and Tran, Nguyen H.},
    booktitle = {International Conference on Machine Learning},
    year      = {2026}
  }
---
```

Schema (enforced by `src/content.config.ts`):

| Field       | Type                           | Required | Notes                                                                 |
| ----------- | ------------------------------ | -------- | --------------------------------------------------------------------- |
| `title`     | string                         | yes      | Card heading. Linked when `url` is set.                               |
| `authors`   | string[]                       | yes      | Display names, given-name first.                                      |
| `year`      | number                         | yes      | Grouping key on `/research/`.                                         |
| `kind`      | `conference` \| `journal` \| `arxiv` | yes | The only filter tags: Conference / Journal / arXiv. Do **not** use venue abbreviations as tags. |
| `status`    | string                         | yes      | Last line on the card: venue of record (`CVPR 2026`, `IEEE TON, 2020`, `arXiv preprint`). Linked when `venue_url` is set. |
| `url`       | url                            | no       | Best public reading copy (usually arXiv). The title links here.       |
| `venue_url` | url                            | no       | Official / DOI / proceedings page. The status line links here.        |
| `code`      | url                            | no       | Shown as `[Code]` when present.                                       |
| `img`       | string                         | no       | Path under `public/`. Omit the field if there is no figure — the card stays text-only. |
| `image_alt` | string                         | no       | Always set when `img` is set.                                         |
| `image_fit` | `cover` \| `contain`           | no (default `contain`) | Use `contain` for diagrams.                                    |
| `hot`       | boolean                        | no (default `false`) | Recently published. Small `hot` badge only — no star, no highlight card. Keep the count small. |
| `bibtex`    | string                         | no       | Raw BibTeX for the copy button.                                       |

There is no separate systems/projects collection and no publication BibTeX loader. Old `/projects/<slug>/` URLs redirect to the matching `#` anchor.

## Edit site copy

| What                                        | Where                                                                   |
| ------------------------------------------- | ----------------------------------------------------------------------- |
| Homepage                                    | `src/pages/index.astro`                                                 |
| People page / member profiles               | `src/pages/people.astro`, `src/pages/members/[slug].astro`              |
| Unified Research page (work index)          | `src/pages/research.astro`                                              |
| Research work cards                         | `src/components/WorkCard.astro`                                         |
| Redirect stubs (old URLs → `/research/`)    | `src/pages/publications.astro`, `src/pages/projects/index.astro`, `src/pages/projects/[slug].astro`, `src/pages/repositories.astro` |
| Repo catalog (unused on the page)           | `src/data/repositories.ts`                                              |
| Homepage news items                          | `src/data/news.ts`                                                        |
| Contact page                                | `src/pages/contact.astro`                                               |
| 404 page                                    | `src/pages/404.astro`                                                   |
| Nav items, emails, org name, hero phrases   | `src/data/site.ts`                                                      |
| Status orb / border beam components         | `src/components/OrbStatus.astro`, `src/components/BorderBeam.astro`    |
| Header / footer / theme toggle              | `src/components/Nav.astro`, `src/components/Footer.astro`, `src/components/ThemeToggle.astro` |
| Design tokens + shared classes              | `src/styles/global.css`                                                 |

## Architecture notes

- `src/content.config.ts` defines the two collections (`members`, `works`) and their zod schemas. Change schemas there, never ad-hoc in a page.
- `/research/` is one chronological list of `works`. Filter chips are `all` / `Conference` / `Journal` / `arXiv` plus a `hot` toggle. `/publications/`, `/projects/`, `/projects/<slug>/`, and `/repositories/` are redirect stubs (meta refresh → `/research/` or a `#` anchor) so old links keep working.
- Images live under `public/assets/img/` and are referenced by absolute path (`/assets/img/...`).
- `docker-compose.yml` builds the multi-stage `Dockerfile` (Node build → nginx serve) and exposes port 8080. There are no bind mounts by design: it mirrors production.

## Brand identity (de-RAIDS rebrand, 2026-09)

The visual identity is deliberately distinct from raids-lab.com. Do not reintroduce their motifs (numbered "01 /" section headers, terminal/typewriter heroes, mint/teal accents, stat counters, version strings).

- **Brand blue**: `--accent: #0070b5` (light) / `#47a3f5` (dark), sampled from the official DUAL logo. Palette is white/light-grey + navy in light mode, deep navy in dark mode.
- **Logo components** (`src/components/`): `DualIcon.astro` (icon only — removed from the Nav on 2026-09-12 by user request; the nav is text-only "DUAL Group"), `UsydLogo.astro` (university crest, footer), `DualLogo.astro` (monochrome wordmark, currently unused — kept for single-color contexts). All are inline SVG with `fill="currentColor"` — color them via Tailwind `text-*` classes, never edit the fill. Sources in `public/assets/img/branding/`.
- **Hero lockup**: the homepage hero uses the **full-color artwork** `public/assets/img/branding/dual-hero-lockup.png` (transparent PNG, navy strokes + blue gradient flows; since 2026-09-12 the bottom tagline line is cropped out — the user asked for its removal — the asset is 600×318, original in `/tmp` backups and `public/assets/img/branding/` sources). Do NOT flatten it to a single color. In dark themes it is adapted with the `.logo-adaptive` CSS class (`filter: invert(1) hue-rotate(180deg)` — hue-preserving luminance inversion defined in `global.css`); any new placement of this artwork must keep that class. The D/U/A/L initial highlight lives in the homepage intro paragraph instead: "The **D**istributed comp**U**ting, optimiz**A**tion, and **L**earning" with the four initials in `text-accent`.
- **Typeface**: `Space Grotesk` (sans — body + headings, `@fontsource/space-grotesk`) + `JetBrains Mono` (mono, labels/captions/code). Wired in `Base.astro` imports and the `--font-sans` token in `global.css`. Inter was replaced on 2026-09-12 for a more tech/geek voice.
- **Signature hero**: `src/components/AsciiHero.astro` — interactive ASCII canvas. Boots as a **Gaussian-noise field** (edge-feathered, no hard rectangle) and waits. **One click plays the whole show unattended** — sample a frame, hold it, re-noise, sample the next — through a four-frame sequence spelling out the group's name: **distributed** (coordinator over three worker nodes, orthogonal bus, dashed peer links) → **optimization** (coordinate frame with a staircase of iterates descending onto `f*`, plus the linear-rate bound) → **learning** (layers of units on a forward pass with the gradient returning underneath to each layer) → **DUAL** wordmark with the acronym spelled out beneath a hairline rule — and then **settles back into noise** rather than looping, so the piece has an ending and always returns to the state that invites the next click. A click on a formed frame cuts its hold short and moves on; clicks mid-transition are dropped. Read the design constraints before touching the art:
  - Frames are composed as **literal character grids**, not vector shapes sampled into a density ramp. At hero resolution (~56–95 cols × 18 rows) a rasterized outline dithers into blobs, and 18 rows cannot hold curves, nested contours or a wired-up neuron mesh — all three were tried and collapsed into mush. Keep motifs **sparse and orthogonal**; box-drawing hairlines are the house style.
  - `makeGrid(cols, rows, aspect)` is the drawing kit: `put`/`text`/`hline`/`vline`/`box`/`edge`, plus `stroke(x, y, bits, w, round?)`. Box pieces are tracked as a 4-bit up/right/down/left mask and OR-merged on overlap, so junctions resolve themselves — punch a stub into a chassis edge as a single direction bit and it becomes `┬`/`┴` on its own. `aspect` is `cellH/cellW` (~2.1): one row is worth ~2 columns, so correct any slope or circle through it.
  - Cell metrics are **measured from the font's own box-drawing ink** (`'│'` ink height, `'─'` advance) instead of guessed from the em, which is what makes rules join seamlessly rather than dashing. `'█'` cells are flagged `solid` and painted as rects — its glyph is shorter than the box cell and would stripe.
  - Per-cell `weight` drives brightness (`--muted`→`--fg`) via the `W_HAIR`/`W_LINK`/`W_LABEL`/`W_RULE`/`W_FRAME`/`W_MARK` ladder. Structure stays quiet; only the marks that carry meaning (`●`, `L`, iterates) reach full contrast.
  - The wordmark is a **hand-authored 11×7 bitmap face** (`FACE`), not rasterized type: an outline font downsampled to seven rows loses its counters and closes into slabs. Stems are two columns because a cell is ~half as wide as tall. Wider plates get more **tracking**, never bigger letters.
  - Verify glyph coverage before using a character — JetBrains Mono has all box-drawing, blocks, `● ○ ◦ · ▪ ◆ ▲ ▶ ★ ≡ ∇ ⊙ → ⋯ ✓`, but `∑ θ λ μ β ≈ ≤ ≥ ∂ ∫` are non-monospace (tolerable only because glyphs are centred per cell) and `⟶` is too wide.
  - In `npm run dev` only, `window.__asciiDump()` returns the composed frame as text. Composing character art blind is the hard part — read the dump, not the pixels, then confirm visually.
  - Idle life is confined to `●`/`○` marks pulsing through `PULSE` dimmer variants, and the mouse halo only brightens + reveals latent glyphs in empty space. Do **not** scramble random glyphs into linework: on hairline schematics a broken rule reads as a rendering defect, not as life.
  - **Motion is per-frame and semantic, not decorative.** Painters register `flow(cells, from, to, trail?, gain?)` pulses that travel the wires they just drew, using `route(waypoints)` — the same waypoints the geometry came from, so the animation can never drift off the line it is supposed to run along. `from`/`to` are positions in the frame's own `cycleMs`, which lets flows be choreographed against each other: dispatches fan out down the bus then the bottom tier gossips; one pulse walks the staircase so the iterates light in sequence; activations sweep forward into the loss and the gradient then runs back along the bus, climbing into each layer **right to left**, the order it is actually computed; the wordmark gets one soft band of light with every row in phase, which reads as a sheen rather than as scanning. A frame **holds for exactly one loop of its own choreography** (`artCycle + HOLD_PAD_MS`) so pacing follows from the art instead of a second set of numbers to keep in sync.
  - Two details do the heavy lifting for legibility, and both were arrived at the hard way: at the head of a pulse a hairline is swapped for `▪` (`PACKET_AT`) — on a monochrome ramp a brightness step on a 1px rule barely registers, and it is the change in **density** the eye tracks — and trails are long enough to read as a comet. A per-cell `shimPhase` breathes the drawing at `SHIM_AMP`; `solid` cells sit it out, since mottling the wordmark reads as a dithering fault.

  While the field is idle a **centred hint** (`click to generate`, letterspaced, behind a blinking caret drawn as a rect — the block glyph is shorter than its cell) invites the click, with the noise yielding in a feathered three-row band behind it so the type sits in an opening rather than fighting the static. The corner `[ data-ascii-phase ]` readout is a **state readout only** (`[ sampling: … ]`, `[ distributed · 1/4 ]`) and is hidden while idle: two prompts competing for the same click is one too many. It sits **top-left**, because every frame keeps its first two rows clear whereas the bottom edge carries node labels and the `k` axis — and it is hidden via the `hidden` **attribute**, never a `hidden` utility class, which would outrank `el.hidden = false` and silently suppress it (it did, for a while). `?ascii=<frame>` deep-links/boots straight into a formed frame, held indefinitely with its motion looping — the way to inspect a frame or shoot it. Root is a `role="button"` with `tabindex` + Enter/Space, since the hint asks for an interaction. Strictly monochrome `--muted`→`--fg`, DPR-aware, theme-reactive, `prefers-reduced-motion` renders one static **DUAL** frame with no shimmer and ignores clicks, `<noscript>` `<pre>` fallback. Home page only. The hero section also carries the About DUAL copy — there is no separate About section on the homepage. Beside the logo sits `AustraliaMap.astro`: a simplified Australia outline with an accent dot + pulse marking Sydney, set at `h-16 sm:h-20` — it was `h-12`, at which size the silhouette was unreadable and the pair was visually dominated by the letterspaced `SYDNEY, AUSTRALIA` label next to it. Its strokes are `vector-effect: non-scaling-stroke` with widths in px, so the coast stays a crisp hairline at any rendered size instead of thickening into a band as the shape grows.
- **Meta-label system**: muted mono `.kicker` labels; accent `.crosshair` "+" marks lead meta lines and section heading rows; `.chip` filter pills; `FIG. NN /` captions. **No numbered section headers and no numbered card/group markers** — the bare-digit device read as raids-lab and was retired site-wide on 2026-09-12 (user-confirmed); the crosshair is the section-row mark instead. `.meta-index` is gone from `global.css`.
- **Signature interactive elements** (adapted from libraries.dev, kept restrained):
  - `OrbStatus.astro` — thinking-orb status pill; the dot cloud has four motions (`globe` sphere / `orbits` rings / `web` node graph with pulses / `ring` breathing circle), dots interpolate `--muted` → `--accent` (NOT monochrome — AsciiHero keeps that discipline alone). Cycle label+motion together via the `states` + `modes` props (homepage), or switch motion externally by setting `root[data-mode]` (the research filter flips to `orbits` while a filter is active, `globe` at rest). Variants: default capsule, `plain` (no border/background — the homepage hero uses this), `bare` (naked canvas for theme cards, no hover interaction). Cycling labels get a fixed `min-width` from the longest state so surrounding layout never reflows.
  - `BorderBeam.astro` — a single accent light tracing the host card's 1px border (pure CSS: `@property --beam-angle` + conic-gradient + mask; browsers without `@property` render no beam). Triggers: `focus` (also `.is-beaming`), `hover`, `on`, `off` (passthrough). Used on the research filter card while filtering. Disabled under `prefers-reduced-motion`.
- **Section headings**: `SectionHeading.astro` renders `crosshair + kicker + hairline` then the title — no index numbers.
- **Campus imagery**: the J12 building photo is `public/assets/img/lab/campus-building.jpg` (banner on `/contact/`).

## Backlog (future directions)

Not in the current scope; pick up only when asked:

- Pagefind static search
- Publication ↔ member cross-linking (author names → member pages)
- Publication dashboard / analytics page

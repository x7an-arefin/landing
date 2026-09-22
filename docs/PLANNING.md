# Planning — Astro + DaisyUI Component Registry

**Goal:** a reusable, theme-swappable component library template in **pure Astro + raw
JavaScript + DaisyUI 5** (no frameworks, no component libraries, no CSS frameworks other
than Tailwind-as-DaisyUI-CSS). The catalog mirrors the [Relume React library](https://www.relume.ai/react/components)
(1,524 components, 68 categories) so we have a proven, market-tested set of patterns to
reproduce — while the *implementation* is 100% ours, driven by screenshots.

**The one-rule requirement:** changing the theme (one `data-theme` attribute on `<html>`)
must instantly re-skin the entire library. Everything below is designed to make that true.

---

## 1. What we captured (done)

| Artifact | Where | Notes |
|---|---|---|
| 1,519 reference screenshots | `public/reference-images/<category>/` | 800px JPEG, ~32 MB. Crawled 2026-09-21 from all 32 pages. |
| Name → image map | `docs/components-map.md` | Every component: local image path + live Relume preview URL + flags. |
| Machine-readable manifest | `data/components.json` | 1,524 entries: `name, category, cid, image, relumePreview, flags, predictedBehavior, status`. |
| Generated spec pages | `/components/<slug>` (1,524 routes) | Screenshot + predicted behavior + status + preview link. |
| Live reference | `https://www.relume.ai/preview?cid=<cid>&context=react` | Relume renders the real component — used to verify predicted behavior. |

**Flags captured per component** (from Relume's UI):
`I` = has interaction, `U` = uncommon, `O` = off-grid, `B` = bento.

**How the crawl worked** (reproducible if Relume updates the catalog):
The page is a Webflow site; pagination is client-side (Jetboost), and SSR only pre-renders
~16 pages. The working recipe:
1. Real pagination param is the generic `?page=N` (48 items/page, 32 pages, natural name order).
2. Render with a headless browser (Playwright), extract per item:
   name (`.heading-xxsmall`), screenshot (`img.component_screenshot`),
   `cid` (from `a[href*="preview?cid="]`), visible flag labels.
3. Download images from the Webflow CDN, re-encode (sharp) to 800px JPEG.
4. Regenerate `data/components.json` + `docs/components-map.md`
   (pipeline scripts in `scripts/` — see `scripts/README.md`; re-run on re-crawl).

---

## 2. Predicting component behavior from images (methodology)

Relume doesn't publish the code — only screenshots. So each catalog entry gets a
**predicted behavior** (already generated per category in `data/components.json`) derived
from visual evidence, then **verified against the live preview URL** before implementation.

Signals we read from a screenshot:

| Visual signal | Inference |
|---|---|
| Overlapping panel + dimmed background | Modal — daisyUI `modal` on `<dialog>` |
| One row expanded, others collapsed (+/→ icon) | Accordion — `collapse` + radio group |
| One card highlighted among siblings | Selected state / "popular plan" — `menu-active`, scale/ring |
| Dots/arrows below a wide image | Carousel — `carousel` + small vanilla JS for slide state |
| Numbered circles connected by lines | Steps — `steps` + `step-primary` on active |
| Vertical line with nodes | Timeline — `timeline` |
| Big number + small label, 3–4 in a row | Stats band — `stats` |
| Rows of ✓/✗ icons in columns | Comparison table — `table` or badge columns |
| Row of identical boxes with icon | Feature grid — `card` grid |
| Two columns, one with an image | Split feature — `sm:card-side` / grid |
| Thin bar with logo + links + button | Navbar — `navbar` (+ `drawer` for mobile) |
| Column of links at bottom | Footer — `footer` |
| Small button + "N" superscript | Indicator — `indicator` |
| Repeated image grid with hover caption | Gallery — `card`/`hover-gallery` |
| Stepper + one visible form step | Multi-step form — `steps` + state machine (vanilla JS) |
| Checkbox/radio groups | Filter — daisyUI `filter` (radio group) |
| Rotating words | Text rotate — `text-rotate` (pure CSS) |
| Stacked/offset cards | Off-grid — absolute/relative offsets + `aura` for emphasis |

**Verification step (mandatory):** open the component's live preview
(`relumePreview` in the manifest). Watch hover/focus/click behavior, mobile collapse,
keyboard access. Adjust the prediction, *then* implement. This is what keeps the
"pure CSS where possible" rule honest: we only add JS where the reference actually has state.

**JS budget rule:** if a behavior can't be done with native HTML
(`details`, `dialog`, checkbox/radio groups, `:hover`, `:focus`, CSS scroll-snap) +
daisyUI classes, the allowed fallback is a **self-contained vanilla `<script>` in the
component file** (currently ≤ ~10 lines per component: modal open/close, tab panel
toggle, carousel step, toast auto-dismiss, theme switch). No event libraries, no state
libraries, no build-time framework code.

---

## 3. daisyUI 5 class inventory → Relume category mapping

From the official skill file ([daisyui.com/llms.txt](https://daisyui.com/llms.txt),
daisyUI 5.x — the version this template targets). Coverage estimate: **~90% of the
catalog is layout + existing daisyUI components**; the rest is Tailwind utilities
(grids, spacing, offsets) — still zero custom CSS.

| Relume category (count) | daisyUI 5 building blocks | JS needed? |
|---|---|---|
| hero-header-sections (55+29+18+…), page-headers, product-headers, portfolio-headers | `hero`, `hero-content`, `hero-overlay`, `btn`, `badge`, `avatar`, `text-rotate` | none |
| navbars (22) | `navbar`, `menu`, `drawer` (mobile), `dropdown` | none (details) |
| footers (17) | `footer`, `menu`, `input` (newsletter) | none |
| feature-sections-* (≈ 450 across 12 sub-categories) | `card`, `card-side`, `grid`/`flex` utilities, `badge`, `btn`, `tabs` (tabs variant), `aura` (emphasize one), `hover-3d`/`hover-gallery` (grid-cards) | tabs: radio inputs |
| stats-sections (60), stat-cards (8) | `stats`, `stat-*` | none |
| blog-headers (32), blog-sections (36) | `card` grid, `badge` (tags), `pagination`, `menu` (filters), `divider` | filter chips: radio `filter` |
| cta-sections (36+18) | `hero`/`card` + `btn` | none |
| faq-sections (14) | `collapse` + radio group | none |
| forms (20), multi-step-forms (46), onboarding-forms (15) | `label`/`input`, `select`, `textarea`, `checkbox`, `radio`, `toggle`, `otp`, `validator`, `steps` (multi-step) | multi-step: small state machine |
| pricing-sections (17+10) | `card`, `toggle` (monthly/yearly), `badge`, ✓/✗ via `mask` icons | toggle is native |
| testimonial-sections (41) | `card`, `avatar`, `rating` (mask-star) | none |
| team-sections (20) | `card`/`avatar` grid | none |
| timelines (21) | `timeline` | none |
| event-sections (37), event-headers/item-headers (17) | `card` + `badge` (date), `menu` | none |
| comparison-sections (15) | `table`, `badge`, `card` (2-col) | none |
| contact-sections (30), contact-modals (6) | form fields + `alert` (validation), `modal` (`<dialog>`) | modal: 5-line script |
| gallery-sections (26), portfolio-sections (17), grid-lists (10) | `card`/`hover-gallery` grid, `badge` | hover-only |
| application-shells (16), sidebars (9) | `drawer` + `lg:drawer-open`, `navbar`, `menu` | none (checkbox) |
| signup-login-pages (17), sign-up-log-in-modals (5) | `card`, form fields, `tabs` (login/signup), `modal` | modal script |
| tables (10), product-list-sections (12) | `table` (zebra/pin), `pagination` | none |
| loaders (5), cookies (5), topbars (4) | `loading`, `alert` + `toast`, `navbar` (thin) | cookie: localStorage 1-liner |
| long-form-content-sections (32) | `divider`, `card`, `table`, `blockquote` (utility), `mockup-browser` (embeds) | none |
| career-sections (27), links-pages (16), logo-sections (6) | `card`/`list`, `menu` columns, logo grid/marquee (CSS animation) | none |
| category-filters (6) | `filter` (radio group + reset) | none |
| description-lists (4), card-headers (2), section-headers (4), stacked-lists (10) | `list`, `card`, `badge`, `divider` | none |
| uncommon-components (82 across 4 sets) | mixed — `aura`, `text-rotate`, `hover-3d`, `stack`, `mask` shapes, CSS marquee | only where screenshots show state |

**Gaps (no daisyUI component → pure Tailwind utilities):** off-grid asymmetry
(positions/transforms), image overlaps (z-index + negative margins), marquees
(keyframes), complex bento grids (`grid-cols` + `col-span`). All utility-only, no CSS files.

---

## 4. Architecture (implemented in this repo)

```
astro-daisyui-registry/
├── data/components.json        # THE catalog (source of truth, crawled)
├── docs/components-map.md      # human name→image map (deliverable)
├── docs/PLANNING.md            # this document
├── public/reference-images/    # 1,519 screenshots (800px JPEG)
├── src/
│   ├── styles/global.css       # Tailwind 4 + @plugin "daisyui" { themes: all }
│   ├── lib/
│   │   ├── registry.js         # catalog access, slugs, IMPLEMENTED status map
│   │   └── themes.js           # raw-JS theme engine (setTheme/persist)
│   ├── components/
│   │   ├── daisy/              # ← THE LIBRARY: one file per daisyUI primitive
│   │   │   ├── Button.astro  Badge.astro  Field.astro  Alert.astro
│   │   │   ├── Tooltip.astro Card.astro   Hero.astro   Navbar.astro
│   │   │   ├── Footer.astro  Accordion.astro  Modal.astro  Tabs.astro
│   │   │   ├── Drawer.astro  Dropdown.astro Pagination.astro Stats.astro
│   │   │   ├── Steps.astro   Timeline.astro  Table.astro  Toast.astro
│   │   │   ├── Rating.astro  ThemeSwitcher.astro
│   │   ├── sections/           # ← Relume-category compositions (Phase 1+2+3)
│   │   │   ├── Navbar.astro    Footer.astro    Topbar.astro    CategoryFilter.astro
│   │   │   ├── Hero.astro      HeroOffGrid.astro    Cta.astro    PageHeader.astro
│   │   │   ├── FeatureSplit.astro  FeatureCols.astro  FeatureBento.astro
│   │   │   ├── FeatureOffGrid.astro  FeatureOverlapping.astro  FeatureTabs.astro
│   │   │   └── LongForm.astro  SectionHeader.astro
│   │   └── ui/                 # registry chrome (gallery cards, filters, sections)
│   ├── layouts/Layout.astro    # navbar + footer + pre-paint theme restore
│   └── pages/
│       ├── index.astro         # catalog grid (search + 68 category chips + load-more)
│       ├── components/[slug].astro  # 1,524 generated spec pages
│       ├── demo.astro          # live showcase of every building block
│       ├── sections.astro      # Phase 1+2+3 showcase (the 734 catalog components)
│       └── planning.md         # this doc, rendered
```

### Component conventions (the "reusable" contract)
1. **One `.astro` file per daisyUI primitive** in `src/components/daisy/`. Props map 1:1
   to daisyUI class names (`variant → btn-primary`, `size → btn-sm`…). Consumers compose;
   the file never contains page-specific content.
2. **Slots for content, props for state.** Slots = `default`, `actions`, `icon`,
   `title`, `media`. Props = variants/sizes/counts.
3. **Zero-JS by default.** Prefer `details`, `dialog`, checkbox/radio groups,
   `:hover`, CSS scroll-snap. JS only per §2 budget, inline in the same file.
4. **No colors hardcoded.** Only `primary/secondary/accent/neutral/base-*/info/…`
   semantic names (daisyUI skill rule) — this is what makes theme-swap universal.
   Screenshots get a white plate (`.reference-shot`) because they're light-mode captures.
5. **Each component is self-contained & documented** (header comment: what it is, which
   Relume category it serves, JS notes).

### Status tracking
`src/lib/registry.js → IMPLEMENTED` maps `cid → {status, component, notes}`.
Every spec page shows the effective status. Gallery badges: `done` (green) /
`wip` (amber) / `todo` (ghost). This is the progress ledger for the whole library.

### Theming (the core requirement)
- `global.css`: `@plugin "daisyui" { themes: all; }` → all 35 built-in themes compiled
  as CSS custom-property scopes (`[data-theme="…"]`).
- Switch = `document.documentElement.dataset.theme = name` (one line, instant, no reload).
- `ThemeSwitcher` (navbar) + persistence (`localStorage`, restored in `<head>` before
  first paint → no flash) — see `src/lib/themes.js`.
- **Custom brand theme later** = one `@plugin "daisyui/theme" { name: "…"; --color-… }`
  block (oklch values) — no component changes, ever. That's the reuse model: fork the
  template, drop in a brand theme, the whole registry is your brand.

---

## 5. Build order (roadmap)

**Phase 0 — Scaffold (DONE, this repo):** crawl, map, manifest, registry UI,
21 building blocks, demo, 1,524 spec pages, theme engine. `npm i && npm run dev`.

**Phase 1 — Navigation & chrome (DONE 2026-09-21):** all 49 catalog entries —
`navbars` (22), `footers` (17), `topbars` (4), `category-filters` (6) — reproduced
with four flexible sections in `src/components/sections/`:
- `Navbar.astro` — logo + links + compact `details` dropdowns; `menu.width="mega"`
  renders a full-width mega menu (2–4 "Page group" columns + optional "Featured
  from Blog" card column); `align="center"`, `tone="dark"`, `sticky`, `compact`.
  Mobile = zero-JS checkbox+peer full-screen overlay (catalog navbars 15–22 are
  exactly this open state; extra content via the `mobile-extra` slot).
- `Footer.astro` — daisyUI v5 `footer` grid (each direct child is a column): brand +
  newsletter + contact column, N link columns, social column; full-width CTA row,
  big wordmark row, and copyright/legal row live outside the grid; `centered`.
- `Topbar.astro` — app-shell bar: logo or page title, links + dropdown, search
  (left/center/right), notification `indicator` bell, avatar, user `details` dropdown.
- `CategoryFilter.astro` — `variant="sidebar"` (Clear all, "Showing X of Y", category
  list, collapsible checkbox/radio groups, tag chips, Apply) or `variant="bar"`
  (tab buttons, sort select, count, search + facet selects, chips).

All 49 cids are registered in `IMPLEMENTED` (status `done`, per-variant notes) and
showcased at `/sections`. Verified: mega/dropdown open states, mobile drawer, and the
5-theme matrix (light/dark/cyberpunk/garden/lofi). Two daisyUI v5 gotchas learned:
`footer` is a CSS grid with `grid-auto-flow: column` (direct children are the columns;
full-width blocks must live outside it), and a full-width mega menu is a plain
`<details>` + absolutely-positioned panel (`.mega-panel` rule in `global.css`), since
`.dropdown-content` is anchor-anchored and right-aligned.

**Phase 2 — Hero & CTA (DONE 2026-09-22):** all **161** catalog entries —
`hero-header-sections` (55), `hero-header-sections-off-grid` (29),
`hero-header-sections-grid-cards` (18), `page-headers` (5), `cta-sections` (36) and
`cta-sections-grid-cards` (18) — reproduced with four flexible sections in
`src/components/sections/`. All 161 cids are registered in `IMPLEMENTED`
(status `done`, per-variant notes) and showcased at `/sections`.
- `Hero.astro` — one flexible hero covering the whole `hero-header-sections`
  family **and** the grid-cards sub-set (via `contained=true`). Props:
  `align` (start/center), `tone` (light/dark full-bleed), `media`
  (`kind` image|video, `side` right|left|below|center, optional `src` — an
  absent `src` renders the reference's gray placeholder block, video gets the
  play glyph), `capture` (buttons|email|none — email is a decorative `join`
  input + Sign Up/Subscribe), `note` (fine-print line). Verified live: the
  reference heroes are static (no real `<video>`/`<input>` in the DOM — the
  "video" look is a placeholder block + play glyph, and the e-mail box is
  un-wired), so zero JS is faithful.
- `HeroOffGrid.astro` — the off-grid signature: a text block beside an
  **asymmetric collage** of 2–4 rounded placeholder blocks with vertical
  offsets. `layout` presets a–f map to the six observed arrangements
  (a = big+small+medium, b = single large, c = small-top+medium-bottom,
  d = single medium, e = wide-top+small-bottom, f = four blocks);
  `tone`/`side`/`align` as usual.
- `Cta.astro` — the CTA band, plus the grid-cards sub-set via `contained=true`.
  Props: `align` (start/center/**split** = text left, actions right),
  `tone`, `capture`, `media` (small image right / wide media below),
  `logos` (brand logo row), `cols` (3–4 mini feature columns), `note`.
- `PageHeader.astro` — app-shell page header: breadcrumb + title + subtext
  (or iconed meta row: Location/Team/Created, or an avatar+name profile),
  optional image banner (above the row, or overlapping a profile card via
  `-mt-16`), and a right-hand search + button cluster.

All four are zero-JS and use only semantic colors, so they re-skin in every
theme. Verified across `light` / `dark` / `cyberpunk` (full-page + per-family
crops) and against the live Relume previews for split/centered/media-below
heroes, the off-grid collage, the logo-row CTA and the meta/profile page
headers. Two v5 gotchas: a forced-dark `tone` band uses `bg-neutral`
(`text-neutral-content`) which stays dark across all 35 themes, and the dark
media/blocks use a `bg-neutral-content/10` overlay (not `base-200`) so they
read as raised panels on the dark band regardless of theme.

**Phase 3 — Feature & content sections (DONE 2026-09-22):** all **524** catalog
entries — the `feature-sections-*` families (231 split 1-2-col, 122 three-column,
53 bento grid-cards, 43 off-grid, 15 overlapping-images, 24 tabs),
`long-form-content-sections` (32) and `section-headers` (4) — reproduced with
eight flexible sections in `src/components/sections/`. All 524 cids are registered
in `IMPLEMENTED` (status `done`, per-variant notes assigned from the 16-per-row
contact sheets in catalog order) and showcased at `/sections`.
- `FeatureSplit.astro` — the 231 1-2-col layouts (left, left-part-2, centre,
  right). Composable text column in order: optional tagline → heading →
  paragraph → stats (big number + caption) → subheads (2 or 2×2, plain or
  iconed) → brand logo row → buttons; media column = image/video placeholder
  right (left-1-2-col), left (right-1-2-col), above/below (centre-1-2-col), or
  a faint watermark behind the right-side text (layouts 49/61 style). Some
  catalog items drop the media entirely (heading left + list/subheads right).
- `FeatureCols.astro` — the 122 three-column layouts: 3–4 columns of
  icon + short heading + small text (optional bullet sub-items), bare or
  bordered cards, optional centered heading + brand logo row.
- `FeatureBento.astro` — the 53 bento grid-cards: heading + asymmetric card
  grid (dominant 2×2 image/text card + smaller cards); `layout` presets a–f
  map to the six observed arrangements; light page or dark full-bleed.
- `FeatureOffGrid.astro` — the 43 off-grid features: same asymmetric
  collage signature as the hero off-grid (2–4 offset rounded blocks),
  `layout` a–f, `side` left/right/center, light/dark.
- `FeatureOverlapping.astro` — the 15 overlapping-images features: text block
  + 2–3 image blocks that overlap (z-index + negative margins), cluster
  right/left/below.
- `FeatureTabs.astro` — the 24 tab features. Verified live: the reference
  previews render the tab bar static (0 buttons/radios in the DOM, active tab
  pre-selected), but the `interaction` flag says the real component switches.
  We go further: **genuinely functional, zero-JS tabs** using daisyUI 5's
  radio pattern — `<input type="radio" class="tab">` + following
  `.tab-content` (checked radio shows its panel). `style="underline"` (plain
  `tabs`, layouts 501–504) or `style="box"` (`tabs-box`, bordered cells,
  layouts 507–508); optional centered header above the bar; panels = tagline +
  heading + text + image right.
- `LongForm.astro` — the 32 long-form articles: heading + paragraphs with an
  image/video block right/left/below (or double stack), optional 4-mini-column
  row, optional "Table of contents" sidebar (heading anchor list) for the
  content23–32 variants. content5/6 carry the `interaction` flag but are plain
  static articles (links only).
- `SectionHeader.astro` — the 4 app-shell list headers: heading + subtext |
  buttons or search+filter+sort, optional tab row.

Verified across `light` / `dark` / `cyberpunk` + mobile 360px. Note: the only
true interaction in all 524 is the tab switching — everything else in these
families is static layout, which is why zero JS covers the whole phase.

**Phase 4 — Social Proof & Metrics (DONE 2026-09-22):** all **186** catalog entries —
`faq-sections` (14), `testimonial-sections` (41), `team-sections` (20), `stats-sections` (60),
`stat-cards` (8), `timelines` (21), `uncommon-components-timeline` (1), `comparison-sections` (15),
and `logo-sections` (6) — reproduced with seven flexible sections in `src/components/sections/`:
- `Faq.astro` — split, centered, and 2-column grid accordions using zero-JS `<input type="radio">` + DaisyUI `collapse collapse-plus`.
- `Testimonial.astro` — single big quote, 2/3/4-col review card grids, and split quote/photo with DaisyUI `rating` (5-star `mask-star-2`).
- `Team.astro` — responsive 2/3/4-col member cards with initials avatars, roles, bio snippets, and social icon buttons.
- `Stats.astro` — full-width metrics strip, 4-card metric decks with icons, and split 2x2 stats block using DaisyUI `stats`/`stat`.
- `Timeline.astro` — alternating vertical roadmap and single-sided compact timeline using DaisyUI `timeline` and status `badge`s.
- `Comparison.astro` — feature specification matrix with DaisyUI `table table-zebra`, plan overview headers, and checkmarks.
- `LogoGrid.astro` — centered 6-brand logo wall with SVG icons.

All 186 cids registered in `IMPLEMENTED` (`status: done`) and showcased at `/sections`. Total library progress reaches **920 components (60.4%)**.

**Phase 5 — Content, Media & Marketing (~193):** `blog-sections` (36), `blog-headers` (16),
`blog-headers-2` (16), `blog-post-headers` (5), `gallery-sections` (26), `portfolio-sections` (17),
`portfolio-headers` (12), `event-sections` (37), `event-headers` (6), `event-item-headers` (11),
`career-sections` (27), `links-pages` (16).

**Phase 6 — Pricing, Commerce & Lists (~64):** `pricing-sections` (17), `pricing-sections-2` (10),
`product-list-sections` (12), `product-headers` (9), `tables` (10), `stacked-lists` (10),
`description-lists` (4), `card-headers` (2).

**Phase 7 — Forms, Auth & Modals (~120):** `forms` (20), `multi-step-forms` (46),
`onboarding-forms` (17), `signup-login-pages` (17), `contact-sections` (30), `contact-modals` (6),
`sign-up-log-in-modals` (5).

**Phase 8 — App Shells, Chrome & Utility (~51):** `application-shells` (16), `sidebars` (9),
`banners` (10), `grid-lists` (10), `loaders` (5), `cookies` (5).

**Phase 9 — Uncommon & Experimental (82):** `uncommon-components` (30), `uncommon-components-2` (37),
`uncommon-components-part-3` (15).

**Phase 7 — Polish:** a11y pass (focus order, `aria-*`, reduced-motion),
search/filter upgrades (fuzzy, URL state), per-category index pages,
`components.json` export for AI/LLM consumption (llms.txt-style manifest for *our* library).

### Per-component workflow (repeat ~1,500 times)
1. Open the spec page `/components/<slug>` → read screenshot + predicted behavior.
2. Open the live Relume preview → watch states (hover/focus/click/mobile/keyboard).
3. Pick the daisyUI pattern from §3 (this doc is the lookup table).
4. Implement in `src/components/daisy/` or `src/components/sections/` (sections =
   compositions of primitives; keep new primitives if a pattern repeats 3+ times).
5. Add to `IMPLEMENTED` (`status: done`, component path, notes) → badge flips.
6. Check in 3+ themes from the switcher (light, one dark, one colorful) —
   any color that "doesn't belong" is a hardcoded-color bug.

### QA rules
- **Theme matrix:** smoke every new component in `light`, `dark`, `cyberpunk`,
  `garden`, `lofi` (covers light/dark/colorful/neutral poles).
- **Responsive:** 360 / 768 / 1280 — Relume screenshots are desktop-first; mobile
  collapse behavior comes from the live preview.
- **A11y:** native elements first (that's why we standardized on `details`/`dialog`/
  radio groups); `aria-*` on anything custom.
- **No-JS audit:** `alert('no-js')` test — accordion, tabs (radio), drawer, modal
  (dialog), dropdown must all still function without the inline scripts where possible.

---

## 6. Reuse model (why this template is valuable)

1. **Copy the repo.** `npm i && npm run dev` → full registry, all themes.
2. **Brand it.** Add one `@plugin "daisyui/theme"` block (oklch tokens:
   base/primary/secondary/accent/neutral/info/success/warning/error + radii + border +
   depth/noise). Instant full re-skin — including the registry UI itself.
3. **Pick components.** The manifest (`data/components.json`) doubles as an
   LLM-consumable catalog: names, categories, screenshots, behavior notes, status.
   Future tooling (copy-to-clipboard, CLI, AI generation) reads one file.
4. **Keep extending.** New component = one `.astro` file + one manifest status flip.
   Conventions in §4 keep it uniform.

## 7. Known constraints / risks
- **Copyright:** Relume screenshots are used as *reference* only (local, internal
  planning). Our implementations are independent code built from visual patterns;
  do not ship Relume's screenshots or naming in public products.
- **Image fidelity:** 800px JPEGs are fine for planning; full-res URLs are d
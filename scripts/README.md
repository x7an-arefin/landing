# Re-crawl pipeline (Relume catalog)

Run when the Relume catalog changes, or to rebuild the reference set from scratch.
Requires Node 18+ and (for the browser steps) `playwright` with a Chromium install:

```bash
npm i -D playwright && npx playwright install chromium
# system libs for chromium if missing: npx playwright install-deps chromium
```

## Pipeline

| Step | Script | Output |
|---|---|---|
| 1. Crawl all 32 pages (1,524 items: name, image URL, cid, flags) | `crawl-relume.js` | `../data/components_raw.json` |
| 2. Build unique image job list (dedupe, category/slug file names) | `generate-manifest.py` (jobs section) | `../data/img_jobs.json` |
| 3. Download all images (12 parallel) | `download-images.js` | `../public/reference-images/…` |
| 4. Re-encode to 800px JPEG (~126MB → ~32MB) | `resize-images.js` | in place (png→jpg) |
| 5. Regenerate manifest + name→image map | `generate-manifest.py` | `../data/components.json`, `../docs/components-map.md` |

Notes:
- The live pagination parameter is the **generic `?page=N`** (48 items/page, 32 pages,
  natural name order). The `828abbe1_page=N` parameter is a Jetboost override that SSR
  only honors for the first ~16 pages — don't use it for a full crawl.
- Item DOM contract (verify if Relume restyles the page): name = `.heading-xxsmall`,
  screenshot = `img.component_screenshot`, id = `a[href*="preview?cid="]`,
  flags = `.interaction-label` / `.uncommon-label` / `.offgrid-label` / `.bento-label`
  (visible = class without `w-condition-invisible`).
- After step 5, run `npm run build` — all 1,524 spec pages, the gallery, and the counts
  regenerate automatically from `data/components.json`.

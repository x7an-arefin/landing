#!/usr/bin/env python3
"""Generate data/components.json (registry manifest) + docs/components-map.md (name->image map)."""
import json, os, re
from collections import OrderedDict

ROOT = '/home/user/astro-daisyui-registry'
items = json.load(open('/home/user/scratch/components_raw.json'))
jobs = {j['url']: j['path'] for j in json.load(open('/home/user/scratch/img_jobs.json'))}

# category -> predicted behavior (from screenshot analysis; verify against relume preview)
PRED = {
 'application-shells': 'Full app frame: fixed topbar + fixed sidebar nav, scrollable main content. Interactions: hover/active nav states, sidebar section collapse, mobile drawer fallback.',
 'banners': 'Standalone promo strip: eyebrow/heading + CTA button, image on one side. Mostly static; responsive stack on mobile.',
 'blog-headers': 'Blog index hero: title, intro, category filter chips, and a grid of post cards (cover image, meta, title, excerpt). Card hover lift.',
 'blog-headers-2': 'Blog index variant set 2: same anatomy as blog-headers (card grid + filters), different layout/rhythm.',
 'blog-post-headers': 'Single-post header: category, big title, author avatar/date meta, hero image. Static.',
 'blog-sections': 'Blog content blocks: post card lists, author boxes, tag clouds, related-post rows.',
 'card-headers': 'Card header/footer treatments: title + action row on top of a card body.',
 'category-filters': 'Filter bar: chip/tab buttons (sometimes with counts). JS: active state swap + content filtering (daisyUI tabs/check-radios or small vanilla JS).',
 'comparison-sections': 'Plan/feature comparison: 2-3 columns with check/cross icon rows; one column highlighted as recommended. Optional monthly/yearly toggle.',
 'contact-modals': 'Contact form in a modal: name/email/message + submit. Opens via button, closes via backdrop/X (daisyUI modal).',
 'contact-sections': 'Contact block: info column (address/phone/email rows with icons) + form column (inputs + textarea + submit). Form validation via native/JS.',
 'cookies': 'Cookie consent: fixed bottom bar, short text + accept/decline buttons; dismisses on choice (vanilla JS + localStorage).',
 'cta-sections': 'Call-to-action band: heading, subtext, primary + secondary buttons, optional side image. Static.',
 'cta-sections-grid-cards': 'Multiple CTA cards in a grid, each with icon/heading/button.',
 'description-lists': 'Definition-list layout: term/definition rows with dividers (dl/dt/dd).',
 'event-headers': 'Event hero: title, date/time/place meta with icons, register CTA, background image.',
 'event-item-headers': 'Single event card header: date block + title + meta + link.',
 'event-sections': 'Event listings: rows/cards with date block, title, location, RSVP button; possible upcoming/past split.',
 'faq-sections': 'FAQ accordion: question rows that expand/collapse (details/summary or daisyUI collapse); sometimes 2-column with side image.',
 'feature-sections-left-1-2-col': 'Split feature: text left (icon list + heading + CTA), image right; alternating per row.',
 'feature-sections-left-1-2-col-part-2': 'More split feature rows (text-left variant set 2).',
 'feature-sections-right-1-2-col': 'Split feature: image left, text right.',
 'feature-sections-centre-1-2-col': 'Centered split: image on one side, centered text on the other.',
 'feature-sections-3-col': '3-column feature rows: icon + title + text per column, sometimes with media.',
 'feature-sections-3-col-2': '3-column feature variant set 2.',
 'feature-sections-grid-cards': 'Feature cards in a grid (2/3/4-up): icon, title, description; hover state.',
 'feature-sections-tabs': 'Feature showcase with tabs: tab buttons switch between feature panels (daisyUI tabs).',
 'feature-sections-off-grid': 'Asymmetric/off-grid composition: overlapping cards, irregular grid, decorative offsets.',
 'feature-sections-overlapping-images': 'Feature with layered/overlapping image cards (parallax-ish offsets).',
 'forms': 'Form blocks: single/multi-field forms with labels, inputs, select, checkbox, submit button.',
 'footer': 'n/a',
 'footers': 'Site footer: logo, nav columns, social icons, newsletter input, legal line. Static; responsive stack.',
 'gallery-sections': 'Image gallery: grid/masonry of images, hover overlay caption, optional lightbox.',
 'grid-lists': 'Grid of small tiles (products/categories): image + label, hover state.',
 'header-sections': 'Hero header: big headline, subtext, CTAs, supporting visual.',
 'hero-header-sections': 'Hero variants: headline + sub + CTA + image/illustration; logo strip below is common.',
 'hero-header-sections-grid-cards': 'Hero with a row/grid of cards beneath the fold (feature cards or logos).',
 'hero-header-sections-off-grid': 'Asymmetric hero: off-center text column, image overlap, decorative elements.',
 'links-pages': 'Link-directory page: grouped anchor lists in columns (resources, legal, company).',
 'loaders': 'Loading indicators: spinners/skeletons/progress in various sizes.',
 'logo-sections': 'Logo wall / "trusted by": grayscale logo grid or auto-scrolling marquee (CSS animation).',
 'long-form-content-sections': 'Article body blocks: prose with h2/h3, pull quotes, media embeds, lists, callouts; sometimes sticky TOC.',
 'multi-step-forms': 'Multi-step form: stepper + one step visible, next/back buttons, per-step validation, final submit (small vanilla JS state machine).',
 'navbars': 'Navigation bar: logo, primary links, right-side actions (login/CTA), mobile hamburger collapse (daisyUI drawer).',
 'onboarding-forms': 'Onboarding flows: welcome screen + progressive steps with progress indicator.',
 'page-headers': 'Simple page header: title + breadcrumb/subtitle, optional actions.',
 'portfolio-headers': 'Portfolio hero: name/tagline + featured work preview.',
 'portfolio-sections': 'Project grid: image cards with title/category, hover zoom/overlay; sometimes filterable.',
 'pricing-sections': 'Pricing table: 2-4 plan cards, popular-plan highlight, monthly/yearly toggle (JS), feature checklist, CTA per plan.',
 'pricing-sections-2': 'Pricing variant set 2 (different card anatomy/rhythm).',
 'product-headers': 'Product hero: product image + name/price + add-to-cart/CTA.',
 'product-list-sections': 'Product grid: card per product (image, name, price, action) with optional sort/filter bar.',
 'section-headers': 'Reusable section header: eyebrow + title + subtitle + optional side action. Building block for other sections.',
 'sidebars': 'Sidebar layouts: sticky sidebar (filters/TOC/account) + content column; mobile collapses to drawer.',
 'sign-up-log-in-modals': 'Auth modal: login/signup tabs, inputs, social buttons; overlay + backdrop dismiss.',
 'signup-login-pages': 'Auth pages: centered form card, social logins, "no account?" switch link; optional side image.',
 'stacked-lists': 'Stacked rows/cards: numbered or avatar rows (rankings, activity), divider between items.',
 'stat-cards': 'Stat cards: big number + label, optional icon/delta, in cards or bare.',
 'stats-sections': 'Stats band: row of 3-4 big numbers + labels; sometimes with icons or background image.',
 'tables': 'Data table: thead + striped rows, badges/avatars inside cells, optional header actions + pagination.',
 'team-sections': 'Team grid: member cards (photo, name, role, social icons).',
 'testimonial-sections': 'Testimonial cards: quote, avatar, name, role, star rating; grid or slider/carousel.',
 'timelines': 'Timeline: vertical/horizontal line with dots/nodes and event cards (past/future).',
 'topbars': 'Utility bar above navbar: announcement text, region/language select, social links.',
 'uncommon-components': 'Experimental layouts: bento grids, marquees, stickers, bold gradients. JS only where interaction is implied.',
 'uncommon-components-2': 'Experimental layouts set 2.',
 'uncommon-components-part-3': 'Experimental layouts set 3.',
 'uncommon-components-timeline': 'Experimental timeline treatment.',
}

def norm_ext(p):
    return p.replace('.png', '.jpg')  # all re-encoded to .jpg at 800px

manifest = []
for idx, it in enumerate(items, 1):
    url = it.get('img')
    local = norm_ext(jobs[url]) if url in jobs else None
    cid = it.get('cid') or ''
    cat = cid.split('/', 1)[0] if cid else 'unknown'
    m = manifest_entry = {
        'id': idx,
        'name': it['name'],
        'category': cat,
        'cid': cid,
        'image': f'/reference-images/{local}' if local else None,
        'relumePreview': f'https://www.relume.ai/preview?cid={cid}&context=react' if cid else None,
        'relumeUrl': 'https://www.relume.ai/react/components',
        'flags': [f for f, v in (('interaction', it.get('interaction')), ('uncommon', it.get('uncommon')), ('off-grid', it.get('offgrid')), ('bento', it.get('bento'))) if v],
        'description': it.get('desc'),
        'predictedBehavior': PRED.get(cat, 'Layout block: inspect screenshot + relume preview to derive behavior.'),
        'status': 'todo',
    }
    manifest.append(m)

# sanity: every image exists
missing = [m['image'] for m in manifest if m['image'] and not os.path.exists(os.path.join(ROOT, 'public', m['image']))]
print('manifest entries:', len(manifest))
print('missing image files:', len(missing), missing[:5])

json.dump({'source': 'https://www.relume.ai/react/components', 'crawledAt': '2026-09-21', 'count': len(manifest), 'components': manifest},
          open(os.path.join(ROOT, 'data/components.json'), 'w'), indent=1)

# ---------------- markdown map ----------------
from collections import Counter
cats = OrderedDict()
for m in manifest:
    cats.setdefault(m['category'], []).append(m)

flag_legend = 'I = has interaction, U = uncommon, O = off-grid, B = bento'
lines = []
lines.append('# Relume React Library — Component → Image Map')
lines.append('')
lines.append('- **Source:** https://www.relume.ai/react/components (relume React UI library, 1524 components, 68 categories)')
lines.append('- **Crawled:** 2026-09-21 (all 32 pages, 48 items/page, last page = 36 items)')
lines.append('- **Images:** downloaded locally into `public/reference-images/<category>/` (re-encoded to 800px-wide JPEG, ~32MB total).')
lines.append('  - Local path column is relative to repo root. Original full-res URL pattern: `https://cdn.prod.website-files.com/61789b489343c8242282a0ae/<asset>.png` (see `data/components.json` for exact per-item source URLs if needed).')
lines.append('  - Live behavior reference: open the **Preview** URL (Relume renders the real component).')
lines.append(f'- **Flags:** {flag_legend}')
lines.append('')
lines.append('## Category index')
lines.append('')
lines.append('| # | Category | Components | Anchor |')
lines.append('|---|----------|-----------|--------|')
for i, (cat, ms) in enumerate(cats.items(), 1):
    lines.append(f'| {i} | {cat} | {len(ms)} | [{cat}](#{cat}) |')
lines.append('')
lines.append(f'**Total: {len(manifest)} components / {len(cats)} categories**')
lines.append('')
lines.append('---')
lines.append('')
for cat, ms in cats.items():
    lines.append(f'## {cat}')
    lines.append('')
    lines.append('Predicted behavior: ' + PRED.get(cat, 'inspect each screenshot + preview.'))
    lines.append('')
    lines.append('| # | Component | Local image | Flags | Relume preview |')
    lines.append('|---|-----------|-------------|-------|----------------|')
    for m in ms:
        fl = ''.join(x[0].upper() if x not in ('off-grid',) else 'O' for x in m['flags']) or '—'
        img = f"[`{m['image'].replace('/reference-images/','')}`]({m['image']})" if m['image'] else '—'
        prev = f"[open]({m['relumePreview']})" if m['relumePreview'] else '—'
        lines.append(f"| {m['id']} | {m['name']} | {img} | {fl} | {prev} |")
    lines.append('')

open(os.path.join(ROOT, 'docs/components-map.md'), 'w').write('\n'.join(lines))
print('wrote docs/components-map.md (', len(lines), 'lines )')

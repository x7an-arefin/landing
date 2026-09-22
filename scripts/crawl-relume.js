const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  page.setDefaultTimeout(60000);

  const all = [];
  let maxPage = 32;

  for (let p = 1; p <= maxPage; p++) {
    const url = 'https://www.relume.ai/react/components' + (p === 1 ? '' : `?page=${p}`);
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    // wait for items to exist
    await page.waitForSelector('.components-item.w-dyn-item', { timeout: 30000 }).catch(() => {});
    await page.waitForTimeout(2500);

    const items = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.components-item.w-dyn-item')).map(el => {
        const name = el.querySelector('.heading-xxsmall')?.textContent.trim() || null;
        const img = el.querySelector('img.component_screenshot')?.src || null;
        const link = el.querySelector('a[href*="preview?cid="]');
        const cid = link ? (link.getAttribute('href').match(/cid=([^&]+)/) || [])[1] || null : null;
        const idTexts = Array.from(el.querySelectorAll('.component_id-text')).map(t => t.textContent.trim());
        const desc = idTexts.length > 1 && idTexts[1] && idTexts[1] !== 'This is some text inside of a div block.' ? idTexts[1] : null;
        const flag = (sel) => {
          const l = el.querySelector(sel);
          return !!(l && !l.className.includes('w-condition-invisible'));
        };
        return { name, img, cid, desc, interaction: flag('.interaction-label'), uncommon: flag('.uncommon-label'), offgrid: flag('.offgrid-label'), bento: flag('.bento-label') };
      });
    });

    if (!items.length) {
      console.log(`page ${p}: EMPTY -> stopping`);
      break;
    }
    const first = items[0].name, last = items[items.length - 1].name;
    console.log(`page ${p}: ${items.length} items | first: ${first} | last: ${last}`);
    items.forEach(it => all.push({ ...it, page: p }));
  }

  fs.writeFileSync('/home/user/scratch/components_raw.json', JSON.stringify(all, null, 1));
  const uniqueImgs = new Set(all.map(i => i.img).filter(Boolean));
  const uniqueCids = new Set(all.map(i => i.cid).filter(Boolean));
  console.log(`TOTAL: ${all.length} items, ${uniqueImgs.size} unique images, ${uniqueCids.size} unique cids`);
  await browser.close();
})().catch(e => { console.error('FATAL', e.message); process.exit(1); });

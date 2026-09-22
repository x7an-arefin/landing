const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ROOT = '/home/user/astro-daisyui-registry/reference-images';

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

(async () => {
  const files = walk(ROOT);
  let converted = 0, failed = 0, kept = 0;
  for (const f of files) {
    const meta = await sharp(f).metadata().catch(() => null);
    if (!meta) { failed++; continue; }
    const w = meta.width || 800;
    const target = path.join(path.dirname(f), path.basename(f).replace(/\.png$/i, '.jpg'));
    try {
      await sharp(f).resize({ width: Math.min(w, 800), withoutEnlargement: true }).jpeg({ quality: 82, mozjpeg: true }).toFile(target + '.tmp');
      fs.renameSync(target + '.tmp', target);
      fs.unlinkSync(f);
      converted++;
    } catch (e) {
      try { fs.unlinkSync(target + '.tmp'); } catch {}
      if (e.message && /Input file is too large|unknown image format/.test(e.message)) failed++;
      else { kept++; failed++; console.log('keep original:', f, e.message); }
    }
    if (converted % 200 === 0) console.log(`${converted}/${files.length}`);
  }
  console.log(`DONE converted=${converted} kept=${kept} failed=${failed}`);
})().catch(e => { console.error('FATAL', e); process.exit(1); });

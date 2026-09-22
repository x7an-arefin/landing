const fs = require('fs');
const path = require('path');

const JOBS = JSON.parse(fs.readFileSync('/home/user/scratch/img_jobs.json', 'utf8'));
const OUT = '/home/user/astro-daisyui-registry/reference-images';
const CONC = 12;
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';

let done = 0, failed = 0, skipped = 0;
const failures = [];

async function download(job) {
  const dest = path.join(OUT, job.path);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) { skipped++; return; }
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      const res = await fetch(job.url, { headers: { 'User-Agent': UA, 'Referer': 'https://www.relume.ai/' }, redirect: 'follow' });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 500) throw new Error('too small: ' + buf.length);
      fs.writeFileSync(dest, buf);
      return;
    } catch (e) {
      if (attempt === 4) { failed++; failures.push({ path: job.path, url: job.url, err: e.message }); }
      else await new Promise(r => setTimeout(r, 800 * attempt));
    }
  }
}

(async () => {
  const queue = [...JOBS];
  const t0 = Date.now();
  async function worker() {
    while (queue.length) {
      const job = queue.shift();
      if (!job) break;
      await download(job);
      done++;
      if (done % 100 === 0) console.log(`${done}/${JOBS.length} done (${Date.now() - t0}s) failed=${failed}`);
    }
  }
  await Promise.all(Array.from({ length: CONC }, worker));
  console.log(`FINISHED: ${done} processed, ${skipped} skipped-existing, ${failed} failed in ${((Date.now() - t0) / 1000).toFixed(1)}s`);
  if (failures.length) fs.writeFileSync('/home/user/scratch/img_failures.json', JSON.stringify(failures, null, 1));
})();

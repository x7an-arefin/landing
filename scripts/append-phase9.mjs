import fs from 'fs';

const d = JSON.parse(fs.readFileSync('data/components.json', 'utf8'));
const regPath = 'src/lib/registry.js';
let reg = fs.readFileSync(regPath, 'utf8');

const cats = [
  'uncommon-components',
  'uncommon-components-2',
  'uncommon-components-part-3'
];

const lines = [];

cats.forEach(cat => {
  const comps = d.components.filter(c => c.category === cat);
  lines.push(`\n  // --- ${cat} (${comps.length}) -> sections/UncommonExperimental.astro ---`);
  comps.forEach(c => {
    const rawNote = c.predictedBehavior || c.name || '';
    const cleanNote = rawNote.replace(/[\r\n']/g, ' ').slice(0, 75).trim();
    lines.push(`  '${c.cid}': { status: 'done', component: 'sections/UncommonExperimental.astro', notes: '${cleanNote}' },`);
  });
});

const blockToAdd = lines.join('\n') + '\n';
const target = "cookies/cookie5";

const targetIndex = reg.indexOf(target);
if (targetIndex === -1) {
  console.error('Target cookie5 not found');
  process.exit(1);
}

const lineEnd = reg.indexOf('\n', targetIndex);
const updated = reg.slice(0, lineEnd + 1) + blockToAdd + reg.slice(lineEnd + 1);

fs.writeFileSync(regPath, updated, 'utf8');
console.log('Successfully added Phase 9 entries to registry.js!');

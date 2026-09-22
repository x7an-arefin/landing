import fs from 'fs';

const d = JSON.parse(fs.readFileSync('data/components.json', 'utf8'));
const regPath = 'src/lib/registry.js';
let reg = fs.readFileSync(regPath, 'utf8');

const cats = [
  'pricing-sections',
  'pricing-sections-2',
  'product-list-sections',
  'product-headers',
  'tables',
  'stacked-lists',
  'description-lists',
  'card-headers'
];

const compMap = {
  'pricing-sections': 'sections/Pricing.astro',
  'pricing-sections-2': 'sections/Pricing.astro',
  'product-list-sections': 'sections/ProductList.astro',
  'product-headers': 'sections/ProductHeader.astro',
  'tables': 'sections/DataTable.astro',
  'stacked-lists': 'sections/StackedList.astro',
  'description-lists': 'sections/DescriptionList.astro',
  'card-headers': 'sections/CardHeader.astro'
};

const lines = [];

cats.forEach(cat => {
  const comps = d.components.filter(c => c.category === cat);
  lines.push(`\n  // --- ${cat} (${comps.length}) -> ${compMap[cat]} ---`);
  comps.forEach(c => {
    const rawNote = c.predictedBehavior || c.name || '';
    const cleanNote = rawNote.replace(/[\r\n']/g, ' ').slice(0, 75).trim();
    lines.push(`  '${c.cid}': { status: 'done', component: '${compMap[cat]}', notes: '${cleanNote}' },`);
  });
});

const blockToAdd = lines.join('\n') + '\n';
const target = "  'links-pages/section_links16': { status: 'done', component: 'sections/LinksPage.astro', notes: 'community discord and forum link stack' },";

if (!reg.includes(target)) {
  console.error('Target line not found in registry.js');
  process.exit(1);
}

const updated = reg.replace(target, target + blockToAdd);
fs.writeFileSync(regPath, updated, 'utf8');
console.log('Successfully added Phase 6 entries to registry.js!');

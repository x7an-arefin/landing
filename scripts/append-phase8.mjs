import fs from 'fs';

const d = JSON.parse(fs.readFileSync('data/components.json', 'utf8'));
const regPath = 'src/lib/registry.js';
let reg = fs.readFileSync(regPath, 'utf8');

const cats = [
  'application-shells',
  'sidebars',
  'header-sections',
  'banners',
  'grid-lists',
  'loaders',
  'cookies'
];

const compMap = {
  'application-shells': 'sections/AppShell.astro',
  'sidebars': 'sections/Sidebar.astro',
  'header-sections': 'sections/HeaderSection.astro',
  'banners': 'sections/Banner.astro',
  'grid-lists': 'sections/GridList.astro',
  'loaders': 'sections/Loader.astro',
  'cookies': 'sections/CookieConsent.astro'
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
const target = "contact-modals/section_contact-modal6";

const targetIndex = reg.indexOf(target);
if (targetIndex === -1) {
  console.error('Target contact-modal6 not found');
  process.exit(1);
}

const lineEnd = reg.indexOf('\n', targetIndex);
const updated = reg.slice(0, lineEnd + 1) + blockToAdd + reg.slice(lineEnd + 1);

fs.writeFileSync(regPath, updated, 'utf8');
console.log('Successfully added Phase 8 entries to registry.js!');

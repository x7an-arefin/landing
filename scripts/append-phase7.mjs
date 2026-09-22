import fs from 'fs';

const d = JSON.parse(fs.readFileSync('data/components.json', 'utf8'));
const regPath = 'src/lib/registry.js';
let reg = fs.readFileSync(regPath, 'utf8');

const cats = [
  'forms',
  'multi-step-forms',
  'onboarding-forms',
  'signup-login-pages',
  'sign-up-log-in-modals',
  'contact-sections',
  'contact-modals'
];

const compMap = {
  'forms': 'sections/FormSection.astro',
  'multi-step-forms': 'sections/MultiStepForm.astro',
  'onboarding-forms': 'sections/OnboardingForm.astro',
  'signup-login-pages': 'sections/AuthForm.astro',
  'sign-up-log-in-modals': 'sections/AuthModal.astro',
  'contact-sections': 'sections/Contact.astro',
  'contact-modals': 'sections/ContactModal.astro'
};

const lines = [];

// Also add gallery27 if not present
if (!reg.includes('gallery-sections/section_gallery27')) {
  lines.push(`  'gallery-sections/section_gallery27': { status: 'done', component: 'sections/Gallery.astro', notes: 'interactive gallery section' },`);
}

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
const target = "card-headers/card-header2_component";

// Find where card-header2 is
const targetIndex = reg.indexOf(target);
if (targetIndex === -1) {
  console.error('Target card-header2 not found');
  process.exit(1);
}

// Find the end of this line
const lineEnd = reg.indexOf('\n', targetIndex);
const updated = reg.slice(0, lineEnd + 1) + blockToAdd + reg.slice(lineEnd + 1);

fs.writeFileSync(regPath, updated, 'utf8');
console.log('Successfully added Phase 7 entries to registry.js!');

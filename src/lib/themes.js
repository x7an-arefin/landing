// ---------------------------------------------------------------------------
// Theme engine (raw JavaScript, no dependencies).
// DaisyUI 5 themes are pre-compiled CSS custom properties; switching is a single
// attribute flip on <html> — the ENTIRE registry re-skins instantly.
// ---------------------------------------------------------------------------

/** All built-in daisyUI 5 themes (compiled via `themes: all` in global.css). */
export const THEMES = [
  'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate',
  'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden',
  'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black',
  'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade',
  'night', 'coffee', 'winter', 'dim', 'nord', 'sunset', 'caramellatte',
  'abyss', 'silk',
];

const KEY = 'registry-theme';

export function currentTheme() {
  return document.documentElement.dataset.theme || 'light';
}

export function setTheme(name) {
  if (!THEMES.includes(name)) name = 'light';
  document.documentElement.dataset.theme = name;
  try { localStorage.setItem(KEY, name); } catch { /* private mode */ }
}

/**
 * Bind <select data-theme-select> elements to the engine. Idempotent.
 */
export function initThemeSwitcher(root = document) {
  const selects = root.querySelectorAll('select[data-theme-select]');
  selects.forEach((sel) => {
    sel.value = currentTheme();
    sel.addEventListener('change', () => setTheme(sel.value));
  });
}

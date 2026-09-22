// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// Pure static site: no frameworks, no adapters. Styling = Tailwind 4 + daisyUI 5
// configured in CSS (src/styles/global.css) — there is no tailwind.config.* file.
export default defineConfig({
  trailingSlash: 'never',
  // The sandboxed live preview proxies through a dynamic *.e2b.app host.
  // `astro dev` (dev server) accepts arbitrary hosts so the live preview loads.
  server: { host: true, allowedHosts: true },
  vite: {
    plugins: [tailwindcss()],
    build: {
      // 1500+ reference images live in /public — keep them out of the asset pipeline.
      chunkSizeWarningLimit: 2000,
    },
  },
});

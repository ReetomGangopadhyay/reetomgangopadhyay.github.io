import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://reetomgangopadhyay.github.io',
  output: 'static',
  devToolbar: { enabled: false },
  integrations: [sitemap()],
  vite: { plugins: [tailwind()] },
});

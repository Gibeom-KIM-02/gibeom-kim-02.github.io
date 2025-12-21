// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gibeom-kim-02.github.io',
  trailingSlash: 'always',
  integrations: [sitemap()],
});

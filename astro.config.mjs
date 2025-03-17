// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';
import expressiveCode from 'astro-expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {

      wrap: true
    }
  },
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    expressiveCode({
      defaultProps: {
        frame: "code",
        wrap: true,
      },
      plugins: [pluginLineNumbers()],
      themes: ['vitesse-dark', 'github-light'],
      themeCssSelector: (theme) => {
        let siteTheme = theme.name === 'vitesse-dark' ? '[data-theme="dark"]' : '[data-theme="light"]';
        console.log('siteTheme:', siteTheme);
        console.log('name:', theme.name, 'type:', theme.type);

        return siteTheme;
      },
      styleOverrides: {
        codeFontFamily: 'Cascadia Code'
      },

    }),
    mdx()
  ],

  site: "https://penyland.github.io",
});
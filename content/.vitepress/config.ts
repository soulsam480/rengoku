import { defineConfig } from 'vitepress';
import { genMetaData, getPosts } from './getPosts';

genMetaData(getPosts);

export default defineConfig({
  appearance: 'force-dark',
  markdown: {
    anchor: {
      level: 0,
      permalink: () => {
        //
      },
    },

    linkify: true,
    typographer: true,
    toc: { level: [1, 2, 3] },
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },
  title: 'Sambit Sahoo',
  description: 'Small engineer, vue, vite, react, node',
  vite: {
    define: {
      __VUE_OPTIONS_API__: false,
    },
    build: {
      minify: 'esbuild',
    },
  },
});

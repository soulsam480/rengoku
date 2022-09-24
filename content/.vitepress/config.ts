import { defineConfig } from 'vitepress';
import { genMetaData, getPosts } from './getPosts';

genMetaData(getPosts);

export default defineConfig({
  markdown: {
    anchor: {
      level: 0,
      permalink: () => {
        //
      },
    },
    linkify: true,
    toc: { level: [1, 2, 3] },
  },
  title: 'Sambit Sahoo',
  description: 'Small engineer, vue, vite, react, node',
  vite: {
    define: {
      __VUE_OPTIONS_API__: false,
    },
    build: {
      minify: 'terser',
    },
  },
});

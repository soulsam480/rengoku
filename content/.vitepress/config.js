import { defineConfig } from 'vitepress';

const { genMetaData, getPosts } = require('./getPosts');

genMetaData(getPosts);

export default defineConfig({
  markdown: {
    anchor: { permalink: false },
    linkify: true,
    toc: { includeLevel: [1, 2, 3] },
  },
  title: 'Rengoku',
  description: 'Small engineer, vue, vite, react, node',
  themeConfig: {
    splitRow: true,
    feedOnHomepage: true,
    siteUrl: 'https://sambitsahoo.com',
    twitterUsername: '@sambitsahoojs',
    nav: [
      {
        link: '/blog/index.html',
        text: 'Blog',
      },
      {
        link: '/about.html',
        text: 'About',
      },
      {
        link: '/projects.html',
        text: 'Projects',
      },
    ],
    comments: true,
    cusdis_host: 'https://cusdis.com',
    cusdis_id: 'ab5ba4a4-9ec7-4c53-bc90-3c290bed5c85',
  },
  vite: {
    define: {
      __VUE_OPTIONS_API__: false,
    },
    build: {
      minify: 'terser',
    },
  },
});

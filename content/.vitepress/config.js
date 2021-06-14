// this is important as it's being used for listing blog articless
const { getPosts } = require('./getPosts');
/**
 * @type {import("vitepress").UserConfig}
 */
module.exports = {
  markdown: {
    linkify: true,
    toc: { includeLevel: [1, 2, 3] },
  },
  title: 'Rengoku Docs',
  description: 'A vitepress docs theme inspired by Flame Hashira Kyōjurō Rengoku.',
  themeConfig: {
    nav: [
      {
        link: '/',
        text: 'Home',
      },
      {
        link: '/docs.html',
        text: 'Docs',
      },
    ],
  },
};

/**
 * @type {import("vitepress").UserConfig<import("vitepress").DefaultTheme.Config>}
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
        link: '/docs/docs.html',
        text: 'Docs',
      },
    ],
  },
};

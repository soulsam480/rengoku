const { getPosts } = require('./getPosts');

/**
 * @type {import("vitepress").UserConfig<import("./theme/config").DefaultTheme.Config> }
 */
module.exports = {
  title: 'Rengoku',
  description: 'Just playing around.',
  customData: {
    posts: getPosts(),
  },
  themeConfig: {
    sidebar: false,
    nextLinks: true,
    prevLinks: true,
    gfont: {
      name: 'Noto+Sans',
      type: 'sans-serif',
    },
    nav: [
      {
        link: '/',
        text: 'Home',
      },
      {
        link: '/about.html',
        text: 'About',
      },
      {
        link: '/blog/index.html',
        text: 'Blog',
      },
    ],
  },
};

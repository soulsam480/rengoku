// this is important as it's being used for listing blog articless
const { getPosts } = require('./getPosts');
/**
 * @type {import("vitepress").UserConfig<import("./theme/config").DefaultTheme.Config> }
 */
module.exports = {
  markdown: {
    anchor: false,
  },
  title: 'Rengoku',
  description: 'Just playing around.',
  customData: {
    posts: getPosts(),
  },
  themeConfig: {
    feedOnHomepage: false,
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

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
  description: 'A vitepress theme inspired by Flame Hashira Kyōjurō Rengoku.',
  customData: {
    posts: getPosts(),
  },
  themeConfig: {
    splitRow: true,
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

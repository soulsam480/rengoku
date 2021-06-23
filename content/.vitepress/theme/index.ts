import '../theme/styles/main.scss';
import '../theme/styles/code.scss';
import { Theme } from 'vitepress';
import Layout from './Layout.vue';
import NotFound from './NotFound.vue';
import About from './components/About.vue';
//  const head = createHead();
//  app.use(head);
//  nextTick();
//  watch(
//    () => router.route.path,
//    (val) => {
//      if (val.match(/\/blog\/(.*?).html/)) {
//        useHead({
//          meta: [
//            {
//              property: 'author',
//              content: 'Sambit Sahoo',
//              key: 'author',
//            },
//            {
//              property: 'og:title',
//              content: siteData.value.title,
//              key: 'og:title',
//            },
//            {
//              property: 'og:type',
//              content: 'article',
//              key: 'og:type',
//            },
//            {
//              property: 'og:url',
//              content: siteData.value.themeConfig.siteUrl,
//              key: 'og:url',
//            },
//            {
//              property: 'og:description',
//              content: siteData.value.description,
//              key: 'og:decsription',
//            },
//            {
//              property: 'twitter:card',
//              content: 'summary',
//              key: 'twitter:card',
//            },
//            {
//              property: 'twitter:creator',
//              content: siteData.value.themeConfig.twitterUsername,
//              key: 'twitter:creator',
//            },
//          ],
//        });
//      }
//    },
//    { immediate: true },
//  );

const theme: Theme = {
  Layout,
  NotFound,
  enhanceApp: ({ app }) => {
    app.component('About', About);
  },
};

export default theme;

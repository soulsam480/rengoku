import '../theme/styles/main.scss';
import '../theme/styles/code.scss';
import { Theme } from 'vitepress';
import Layout from './Layout.vue';
import NotFound from './NotFound.vue';
import { createHead } from '@vueuse/head';

const theme: Theme = {
  Layout,
  NotFound,
  enhanceApp: ({ app, router }) => {
    const head = createHead();
    app.use(head);

    if (router.route.path.match(/\/blog\/(.*?).html/)) {
      console.log('blog pages');
    }
  },
};

export default theme;

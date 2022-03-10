import '../theme/styles/main.scss';

import { Theme } from 'vitepress';
import Layout from './Layout.vue';
import NotFound from './NotFound.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';

const theme: Theme = {
  Layout,
  NotFound,
  enhanceApp: ({ app }) => {
    app.component('About', About);
    app.component('Projects', Projects);
  },
};

export default theme;

import './styles.scss';
import './code.scss';

import { Theme } from 'vitepress';
import Layout from './Layout.vue';
import NotFound from './NotFound.vue';
import Projects from './pages/Projects.vue';
import Tags from './pages/Tags.vue';

const theme: Theme = {
  Layout,
  NotFound,
  enhanceApp: ({ app }) => {
    app.component('Projects', Projects);
    app.component('Tags', Tags);
  },
};

export default theme;

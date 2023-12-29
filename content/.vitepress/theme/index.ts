import { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import Layout from './Layout.vue';
import NotFound from './NotFound.vue';
import Projects from './pages/Projects.vue';
import Tags from './pages/Tags.vue';
import './styles.scss';

const theme: Theme = {
  Layout,
  NotFound,
  enhanceApp: ({ app }) => {
    app.component('Projects', Projects);
    app.component('Tags', Tags);
  },
  extends: DefaultTheme,
};

export default theme;

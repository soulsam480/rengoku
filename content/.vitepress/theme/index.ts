import '../theme/styles/main.scss';
import '../theme/styles/code.scss';
import { Theme } from 'vitepress';
import Layout from './Layout.vue';
import NotFound from './NotFound.vue';

const theme: Theme = {
  Layout,
  NotFound,
};

export default theme;

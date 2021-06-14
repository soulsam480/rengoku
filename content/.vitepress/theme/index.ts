import { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/dist/client/theme-default';
import Layout from './Layout.vue';
import './index.css';
const theme: Theme = {
  ...DefaultTheme,
  // Layout: Layout,
};

export default theme;

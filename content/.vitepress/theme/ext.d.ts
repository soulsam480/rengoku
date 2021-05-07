import { PageData, SiteData } from 'vitepress';
export interface Post {
  title?: string;
  href?: string;
  date?: string;
  excerpt?: string;
}
export interface CustomData {
  posts?: Post[];
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $withBase: (param: string) => string;
    $site: SiteData<any>;
    $siteByRoute: SiteData<any>;
    $themeConfig: Record<string, any>;
    $page: PageData;
    $frontmatter: Record<string, any>;
    $lang: string;
    $localePath: string;
    $title: string;
    $description: string;
  }
}
export * from '@vue/runtime-core';

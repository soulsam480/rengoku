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

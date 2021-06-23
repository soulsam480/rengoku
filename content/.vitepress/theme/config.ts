export namespace DefaultTheme {
  export interface Config {
    /**
     * Deployed site url for SEO tag generation
     * Add without trailing slash
     * @example https://sambitsahoo.com
     */
    siteUrl: string;
    /**
     * Twitter username with @
     * @example @sambitsahoojs
     */
    twitterUsername: string;
    /**
     * Show posts feed on home
     * @default false
     */
    feedOnHomepage?: boolean;
    /**
     * Nav items on the Nav bar
     * max array length 3
     */
    nav?: Nav[];
    /**
     * Split row in blog listing page into two column layout
     *
     * can also be enabled from  `content/blog/index.md` , e.g.
     * ```yaml
     * ---
     * splitRow: true
     * ---
     * ```
     * @default false
     */
    splitRow?: boolean;
    /**
     * Setup comments for blog articles
     * For this to work properly, you need to have siteUrl set
     */
    comments?: boolean;
    /**
     * Your cusdis APP ID for comments
     * mandatory if comments are enabled
     */
    cusdis_id?: string;
    /**
     * Your cusdis host URL
     * @default https://cusdis.com
     */
    cusdis_host: string;
  }
  export type Nav = {
    /**
     * link - url of page
     */
    link?: string;
    /**
     * text - nav label
     */
    text?: string;
  };
}

export namespace DefaultTheme {
  export interface Config {
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

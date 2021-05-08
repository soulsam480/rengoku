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
  }
  export type Nav = {
    link?: string;
    text?: string;
  };
}

## Rengoku

![Rengoku banner](./content/public/rengoku_banner.webp)

A Vitepress blog theme inspired from `Flame` Hashira `Kyōjurō Rengoku`. 

> In active development. New features are possible to arrive.
## How to use

- Clone the theme branch
```bash
yarn
yarn dev //dev server
yarn build // ssg
```
- Write content in `content`
  - Blog posts in `content/blog`
  - see [vitepress config](https://vitepress.vuejs.org/guide/markdown.html#links)

### Config 
see [`content/.vitepress/theme/config.ts`](./content/.vitepress/theme/config.ts)

```ts
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
```
### Inspirations
From the amazing work behind 
- [Vitepress](https://vitepress.vuejs.org)
- [The Vue Point (Official Vuejs Blog)](https://blog.vuejs.org/)
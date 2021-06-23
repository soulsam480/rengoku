## Rengoku

![Rengoku banner](./content/public/rengoku_banner.webp)

A Vitepress blog theme inspired from `Flame` Hashira `Kyōjurō Rengoku`. 

> In active development. New features are possible to arrive.
## Installation

Instead of publishing this theme to npm, I prefer to clone it from the `theme` branch, so that you can customize the theme easily according to your liking.

- Scaffold the theme branch 
```
git clone https://github.com/soulsam480/rengoku.git
# or
npx degit soulsam480/rengoku#theme my-rengoku-directory
```
- Install dependencies
```bash
cd my-rengoku-directory
yarn # or npm install
```
- Run the dev server
```bash
yarn dev
```
- Build for production
```bash
yarn build
yarn serve # to preview built files in a browser
```

## Home page

The `content/index.md` file serves as the home page of the theme. It's **critical** that you don't change the name of the **content** directory.

### Frontmatter variables
The home page has some specific **frontmatter** variables by using them you can enable some features.

```yaml
---
hero: true
heroImage: /rengoku_banner.webp
heroQuote: Go ahead and live with your head held high. No matter how devastated you may be by your own weakness or uselessness, set your heart ablaze. Grit your teeth and look straight ahead.
heroName: Kyōjurō Rengoku
---
```
By setting the **hero** variable to `false` you can disble the default **hero banner** layout of the homepage. Only when it's set to false, the markdown content of the `index.md` file will be visible on the homepage.

### Blog feed on home page
To show your blog feed on home page, set `feedOnHomepage` true in `content/.vitepress/config.js`.

## Writing blog articles
 The **content/blog** directory is used to store blog articles and it's **critical** that you don't change the name of the directory. Also the presence of **content/blog/index.md** is also **mandatory** as the blog listing is rendered on that page. All the other files in the **content/blog** directory except the **content/blog/index.md** are treated as blog articles and will be loaded with metadata for blog listing.

 ### Frontmatter variables for blog articles
 The blog articles use some pre-defined frontmatter variables for specific features.
 ```yaml
 ---
title: Rengoku - a vitepress theme. # MANDATORY - Article title
description: A vitepress theme inspired by Flame Hashira Kyōjurō Rengoku. # MANDATORY - A description under 200 words, exceeding length will be truncated
date: 2021-05-10 # MANDATORY - Article date in YYYY-MM-DD format
banner: /rengoku_banner.webp # article banner, loaded from content/public directory
author: 
    name: Sambit Sahoo
    github: soulsam480 # github username
tags: welcome,rengoku,introduction # comma separated values with no space in between
---
 ``` 
Along with these variables, **vitepress** specific variables can also be used [see](https://vitepress.vuejs.org/guide/frontmatter.html).

## Blog article tags
To get full support for **tags** in blog articles, create `content/tags.md`. This page will be used to render tag specific articles when clicked on a tag. Tags for an article can be added by using the pre-defined frontmatter variable **tags** in blog article files.
```yaml
---
tags: welcome,rengoku,introduction # comma separated values with no space in between
---
```
## Images
To use images inside blog aricles, put them in the `content/public` directory and reference them by absolute paths e.g. **/rengoku_banner.webp**. 

## Comments
Rengoku uses [cusdis](https://cusdis.com/) for comment system. Change `app_id` in `cinfig.js` to setup your account for comments.

## Theme config

Theme config can be referenced from [`content/.vitepress/theme/config.ts`](./content/.vitepress/theme/config.ts).
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

```
### Inspirations
From the amazing work behind 
- [Vitepress](https://vitepress.vuejs.org)
- [The Vue Point (Official Vuejs Blog)](https://blog.vuejs.org/)
---
title: Vite code splitting that just works
description: Vite is an amazing tool that makes the DX while building apps a lot better. While vite brings pre-configured and optimized build setup with rollup, code-splitting isn't setup effectively. In this article we are going to discuss how to code-split vite powered apps effectively.
date: 2021-05-23
banner: /vite-article.svg
author: 
    name: Sambit Sahoo
    github: soulsam480  
tags: vite,rollup,code-splitting,tips
---
The performance of a web app relies on many factors and **code-splitting** is an important one. The main advantage of code-splitting is that you can **lazy-load** the production bundles or to be more specific chunks, so that the **initial loading time** of the web app decreases. When coupled with **route level lazy-loading** of chunks, the UX improves **_dramatically_** as the app will only load the chunks of the specific routes on visit. The code-splitting concept is not new, its been there for years and many bundlers already have support for it. Also all the major **front-end** frameworks support rute level code-splitting and lazy laoding these days. Vite uses **Rollup** as it's bundler which is an amazing libray in itself. While there are many features that make rollup awesome, setting up code-splitting manually isn't.

These days most of my projects are built using vite as the tooling. It's really fast in dev, but the issue arises while building the app for deployment. After building the app, vite puts all the built code into a single **JS** and **CSS** chunk. After deployment this will take forever to download the chunk and the performance will decrease drastically. There are some **framework specific** ways to do code-splitting, but that'll only splits the app specific files. The **bundled dependencies** will be inside a single fat chunk and we don't want that. Before going to the solution let's see how can we do code-splitting in framework specific approach.

### Vue

Vue router supports code-splitting **out of the box**. While defining the routes, we can achive that by **lazy importing** the components. e.g.

```ts
const routes = [
    {
        path: '/path',
        component: () => import('/path/to/component')
    }
]
```
This will load the route specific files only when the route is visited and it does that by splitting the production bundle to multiple chunks of smaller sizes. Again this will only split the app specific code.

### React

React router also supports code-splitting but the bare **lazy imports** don't work properly in vite/rollup. From my time with lazy loading components in React with vite, you have to warp **Lazy imports** inside a **React.lazy()** to get it working. e.g.

 ```js
 const Template = React.lazy(() => import('./pages/Template'));
 ```
Here the story is same as Vue, it'll only split the app specific code. 

### The solution for vite
The plan is to import the dpendencies from the **package.json** and modify the rollup output chunks to split each dependency from the vendor bundle.    
```ts
import { dependencies } from './package.json';
function renderChunks(deps: Record<string, string>) {
  let chunks = {};
  Object.keys(deps).forEach((key) => {
    if (['react', 'react-router-dom', 'react-dom'].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-router-dom', 'react-dom'],
          ...renderChunks(dependencies),
        },
      },
    },
  },
  })
  ```
As we can see, when rollup starts building our app, it'll split the vendor chunk on the basis of the **output.manualChunks** configuration. The vendor array should be there with the boot dependencies i.e. modules that will be loaded during app boot. This works for me and currently the most effective way to split vite generated bundles.

Thanks for reading ✌️. Peace ☮️
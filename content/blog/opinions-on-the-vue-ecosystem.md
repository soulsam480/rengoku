---
title: Opinions on The Vue ecosystem
description: 
  It's been a year since Vue 3 was released, and a lot more has happened since then. As a developer who works with Vue almost every day, here is my observation of the Vue ecosystem and my opinions on the future of Vue.
date: 2021-10-15
author: 
   name: Sambit Sahoo
   github: soulsam480 
banner: /vue-opinions.png
tags: vue,ecosystem,vite,opinions
---
It's been a year since Vue 3 was released. This release was hailed as a revolutionary change to the classic `Vue` approach as it introduced the `Composition API` and a complete rewrite of the Vue core in typescript. It brought many new things for developers, which included native `TS` support, functional API, faster performance to name a few. At first sight, the new API may seem a bit complex, but believe me, after working with Vue 3 and composition API for over a year now, I bet this is what Vue should be. When it was released last year, many developers were pretty skeptical about migrating to Vue 3 as most of the core libs were in either `rc` or `beta` . Many famous Vue component libs e.g. Quasar, Vuetify were also working on their port of Vue 3. The state of tooling i.e. Vetur, Vue CLI etc. were not reliable with partial support for Vue 3. But times have changed, the ecosystem has come a long way with most of the core libs in stable status, great upgrades to tooling and amazing contribution from the community. In this article I'll share my opinions on the Vue ecosystem and how Vue will grow to something further our imagination.


### The framework
Currently, the latest Vue release is `3.2.20`. There were 2 minor and multiple patch releases since it came out for the first time. IMO the framework has grown a lot in this previous year. I'll go through some of the notable features and fixes below.

#### `<script setup>` `3.2.x`
- Script setup is a new approach to write Vue apps with composition API
- Basically it assumes that you write the script block in pure composition API
- From the Vue docs 

`<script setup>` is a compile-time syntactic sugar for using Composition API inside Single File Components (SFCs). It is the recommended syntax if you are using both SFCs and Composition API. It provides a number of advantages over the normal `<script>` syntax:

- More succinct code with less boilerplate
- Ability to declare props and emitted events using pure TypeScript
- Better runtime performance (the template is compiled into a render function in the same scope, without an intermediate proxy)
- Better IDE type-inference performance (less work for the language server to extract types from code)

- e.g.

So this becomes
```vue
<script>
import { ref } from "vue"
export default defineComponent({
  setup() {
    const someVar = ref('')

    return {
      someVar
    }
  }
})
</script>
```

this
```vue
<script setup>
import { ref } from "vue"

const someVar = ref('')
</script>
```

notice the reduction in boilerplate. Also there are `macros` for defining props, emits, expose and default props. e.g.
```vue
<script setup lang="ts">
import { ref } from "vue"

withDefaults(defineProps<{
  someProp: string
}>(),{
  someProp:'someValue'
});

defineEmits<{
  (e:'some-event', val: string): void
}>()

const someVar = ref('')
</script>
```
The above code snippet is declarative, looks clean, easy to read and understand. It's also easy for extensions to provide near-to-native `TS` intellisense. Learn more about this feature [here](https://v3.vuejs.org/api/sfc-script-setup.html#basic-syntax)

#### State driven style binding `3.2.x`
- Now it's possible to bind your component state to css values inside `<style>` blocks
- e.g.
```vue
// from vue docs
<template>
  <div class="text">hello</div>
</template>

<script setup>
import { ref } from "vue"

const color = 'red'
</script>

<style>
.text {
  color: v-bind(color);
}
</style>
```
- This brings a lot of new possibilities to design components by making it easier and cleaner to manipulate CSS based on state. Learn more [here](https://v3.vuejs.org/api/sfc-style.html#state-driven-dynamic-css)

#### Performance imorovements
- The reactivity internals is improved
- Now effects consume less memory and give better performace
- There are also some improvements in `ref` track/trigger
- see this [PR](https://github.com/vuejs/vue-next/pull/2345) for more info  

These were some of the major changes/improvements that had an impact on my development experience. There are many other changes which improved the framework as a whole. Please see vue [changelogs](https://github.com/vuejs/vue-next/blob/master/CHANGELOG.md) for more info. In my opinion the new API and coding approach make Vue more `intuitive` and `approachable` for beginners and I hope more and more developers will choose Vue for their projects. During my time with Vue I found it really enjoyable to write code and more specifically in Typescript as the support is near to the standards of React. I also write react a lot and believe me, the experience is `indifferent`.

### Core libraries

#### [Vue-router](https://next.router.vuejs.org/) `4.x`
- API is stable and similar to previous version
- New API follows the same `functional` approach as Vue 3
- Also has composition API helpers or composables
- Introduces small breaking changes

#### [Vuex](https://next.vuex.vuejs.org/) `4.x`
- API is stable and similar to previous version
- New API follows the same `functional` approach as Vue 3
- Also has composition API helpers or composables
- Introduces small breaking changes

#### [Vue test utils](https://next.vue-test-utils.vuejs.org/) `2.x`
- Currently in `rc`
- Small breaking changes

### Third party frameworks and libraries

#### [Nuxt](https://v3.nuxtjs.org/) `3.x`
- Public beta
- Complete re-write in TS
- New server engine
- New CLI
- First class vite support
- Upto 75x smaller server deployments

#### [Quasar](https://quasar.dev/) `2.x`
- Stable API
- Webpack 5
- Regular minor and patch releases

#### [Vuetify](https://vuetifyjs.com/en/) `3.x`
- Currently in alpha
- target release Feb 2022

#### [VueUse](https://vueuse.org/)
- Collection of essential Vue Composition Utilities
- Supports Vue 2 and 3

#### [VeeValidate](https://vee-validate.logaretm.com/v4/) `4.x`
- Stable API
- Vue 2 support via `v3.x`

Other famous existing libs are currently supporting `Vue3` while some of them are still in progress. TBH the vue community was really fast in adapting the new API and most of them almost did a complete rewrite with the new API. It's a really good sign and motivates developers like me to adopt the new API and write clean, declarative and functional code. Many new component libs have also come out with exclusive support for Vue 3. It makes me really happy that if someone decides to use Vue 3 in their application, there is a vast number of stable, maintained libs available to use.

### Tooling
#### [Vue CLI](https://next.cli.vuejs.org/) `5.x`
- Currently in `beta`
- Webpack 5
- New cli plugins
- many other breaking changes

#### [Vue Devtools](https://devtools.vuejs.org/) `6.x`
- Currently in `beta`
- New Timeline API for inspection
- Supports `vue-router`, `vuex` via plugins with new plugin API
- regular minor and patch releases

#### [Vite](https://vitejs.dev/) `2.x`
- Vite is a fast frontend tooling which works on native ESM for dev server with `esbuild` as its bundler
- It has a pre-optimized and opinionated preset for production builds based on `Rollup` which is an amazing lib in itself
- Supports Vue out of the box with `@vitejs/plugin-vue`
- It's created by `Evan You`, the creator of `Vue`
- With a great Plugin API, vite has many useful plugins for alomost every use case
- It's framework agnostic and also supports SSR

#### [Volar](https://github.com/johnsoncodehk/volar) `0.x`
- Currently **`the Best`** language support implementation for `Vue 3`
- Near to native TypeScript and Javascript intellisense
- Supports `<script setup>` out of the box
- Many other useful features which improves DX
- Type checking of `.vue` files in terminal via `vue-tsc`
- Improves really fast, as an early user I can confirm that
- Maintained really well, most of the issues get resolved within 2-3 days

Vetur is also in the works to support Vue 3 but it's not that good. IMO, tooling has improved the most. These improvements and regular updates have made it possible to get started quickly while having excellent DX. Give it a try, you'll be amazed by the DX that `Vue` provides these days.


### Community
Again this year `Vue` community has grown a lot. Many new useful libs were released and are also maintained properly. The `vue-next` repo or the Vue core releases patches frequently and same goes with other core libs. In my observation, many developers are contributing to the framework now and the participation only grows day by day. This change assures that `Vue` is and will continue to improve itself. 


### Final words
Vue has come a long way since it's first release. If you consider Vue 3, it's in a great shape. Many apps are being built, I can say that confidently as many issues are being opened every day, vast participation from developers in github discussions etc.IMO, **`The Vue ecosystem`** is fairly complete. I claim it because I'm a regular consumer of the ecosystem. Many React developers argue that vue files look bloated in comparision to react, I request them to use Vue 3 and re-consider their opinion. They also argue that it's comparatively slow and the DX is really bad, again I request them to try the new tooling. IMO the word **`community`** is very broad, it doesn't only mean maintainers, contributors and developers. **Companies** who use these frameworks and the **authroties** who decide what to use are also a part of the same community. A piece of software will only grow and become robust when more companies use them and decide to train their developers to use the same. By doing this they can help the framework grow while producing great trained engineers. So I request new startups, companies to consider **`Vue`** as your next frontend framework to build your product, and by doing so you'll be helping a framework grow and community too. 

I know that many points were missed, but this was just my opinion and I tried to convey this with least no. of points, please comment your siggestions. Thanks for reading ✌️. Peace ☮️
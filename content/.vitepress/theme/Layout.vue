<script setup lang="ts">
import { Content, useRoute } from 'vitepress';
import { computed } from 'vue';
import NotFound from './NotFound.vue';
import Home from './pages/Home.vue';
import Article from './pages/Article.vue';
import ArticleListing from './pages/ArticleListing.vue';

const route = useRoute();

const page_is = computed(() => route.path.replace(/index.html$/, ''));
const is_not_found = computed(() => route.component === NotFound);
</script>

<template>
  <div class="antialiased">
    <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
      <nav
        class="flex items-center justify-between pt-3 pb-3 font-bold border-b border-gray-300"
      >
        <a class="text-lg" href="/" aria-label="ZoroZuro"> ZoroZuro </a>

        <div class="flex items-center gap-2 text-sm leading-5">
          <a class="text-sm link" href="/blog/index.html" aria-label="blog">
            blog
          </a>
          <a class="text-sm link" href="/projects.html" aria-label="projects">
            projects
          </a>
        </div>
      </nav>
    </div>

    <main class="max-w-3xl px-4 mx-auto mt-3 sm:px-6 xl:max-w-5xl xl:px-0">
      <ArticleListing v-if="page_is === '/blog/'" />

      <Article v-else-if="page_is.match(/\/blog\/(.*?).html/)" />

      <Home v-else-if="page_is === '/'" />

      <not-found v-else-if="is_not_found" />

      <Content v-else />
    </main>

    <footer class="flex flex-col items-center justify-center gap-2 my-5">
      <h3>
        <a href="https://github.com/soulsam480/rengoku" class="link">source</a>
      </h3>
      <div class="text-sm">MIT Licensed @ Sambit Sahoo</div>
    </footer>
  </div>
</template>

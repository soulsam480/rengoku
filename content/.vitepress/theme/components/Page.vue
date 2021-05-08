<script setup lang="ts">
import { useRoute } from 'vitepress';
import { computed } from 'vue';
import Posts from './Posts.vue';
import Post from './Post.vue';
import Home from './Home.vue';
const route = useRoute();
const routeIs = computed((): string => route.path);
</script>
<template>
  <div class="page">
    <Posts v-if="routeIs === '/blog/index.html'" />
    <Post v-else-if="routeIs.match(/\/blog\/(.*?).html/)" />
    <Home v-else />
  </div>
</template>
<style lang="scss" scoped>
.page {
  max-width: 55rem;
  margin: auto;
  padding: 30px 1rem 30px 1rem;
}
</style>

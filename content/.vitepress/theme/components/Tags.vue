<script setup lang="ts">
import { useData } from 'vitepress';
import { ref, toRef, watchEffect } from 'vue';
import type { Post } from '../types';
import PostCards from './PostCards.vue';
const { site: siteData } = useData();
const posts = toRef(siteData.value.customData as { posts: Post[] }, 'posts');
const showPosts = ref<Post[]>([]);
const hash = ref<string | null>(null);
watchEffect(() => {
  if (window.location.hash) {
    hash.value = window.location.hash.replace('#', '');
    showPosts.value = posts.value
      .slice()
      .filter((el) => el.tags?.includes(window.location.hash.replace('#', '')));
  }
});
</script>
<template>
  <div>
    <div v-if="showPosts.length > 0">
      <h2>
        Showing articles for <span class="rengoku-alt">{{ hash }}</span>
      </h2>
      <PostCards :posts="showPosts" />
    </div>
    <p v-else>
      Nothing found for tag <span class="rengoku-alt">{{ hash }}</span>
    </p>
  </div>
</template>
<style lang="scss" scoped>
h2 {
  margin-bottom: 0;
}
</style>

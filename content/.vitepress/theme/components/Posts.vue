<script setup lang="ts">
import { useData } from 'vitepress';
import type { Post } from '../types';
import PostCards from './PostCards.vue';
const { site: siteData } = useData();
const { posts } = siteData.value.customData as { posts: Post[] };
</script>
<template>
  <div>
    <PostCards :posts="posts" />
    <footer class="rengoku-alt" style="text-align: center">
      © Sambit Sahoo , MIT Licensed
    </footer>
  </div>
</template>

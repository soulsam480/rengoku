<script setup lang="ts">
import { useSiteData } from 'vitepress';
import type { Post } from '../types';
import PostCards from './PostCards.vue';
const siteData = useSiteData();
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

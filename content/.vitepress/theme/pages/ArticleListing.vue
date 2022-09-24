<script setup lang="ts">
import type { Post } from '../types';
import Posts from '../../metadata.json';
import { truncateDesc } from '../utils';

const posts: Post[] = Posts;
</script>
<template>
  <div class="flex flex-col gap-5">
    <div class="text-lg font-semibold">Blog</div>

    <div v-for="post in posts" class="flex flex-col gap-1" :key="post.href">
      <div class="text-sm text-gray-700">{{ post.date?.string }}</div>
      <h3>
        <a :href="post.href" class="text-lg font-semibold link">
          {{ post.title }}
        </a>
      </h3>

      <p v-if="post.description" class="text-sm text-gray-800">
        {{ truncateDesc(post.description) }}
      </p>
    </div>
  </div>
</template>

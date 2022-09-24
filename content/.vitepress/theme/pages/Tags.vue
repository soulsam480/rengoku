<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import type { Post } from '../types';
import Posts from '../../metadata.json';
import { truncateDesc } from '../utils';

const posts = Posts as Post[];
const showPosts = ref<Post[]>([]);
const hash = ref<string | null>(null);

watchEffect(() => {
  if (window.location.hash) {
    hash.value = window.location.hash.replace('#', '');

    showPosts.value = posts
      .slice()
      .filter((el) => el.tags?.includes(window.location.hash.replace('#', '')));
  }
});
</script>
<template>
  <div>
    <div class="flex flex-col gap-5" v-if="showPosts.length > 0">
      <div class="text-lg font-semibold">
        Found {{ showPosts.length }} articles for {{ hash }}
      </div>

      <div
        v-for="post in showPosts"
        class="flex flex-col gap-1"
        :key="post.href"
      >
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

    <p class="text-base" v-else>
      Nothing found for tag <span class="font-semibold">{{ hash }}</span>
    </p>
  </div>
</template>

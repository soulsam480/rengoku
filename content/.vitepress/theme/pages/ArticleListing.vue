<script setup lang="ts">
import { data as posts } from "../posts.data";
import { truncateDesc } from "../utils";
</script>
<template>
  <div class="flex flex-col gap-5">
    <div class="text-lg font-semibold">Blog</div>

    <div v-for="post in posts" class="flex flex-col gap-1" :key="post.href">
      <div class="text-sm text-brand-1">{{ post.date?.string }}</div>
      <h3>
        <a :href="post.href" class="text-lg font-semibold link">
          {{ post.title }}
        </a>
      </h3>

      <p v-if="post.description" class="text-sm text-brand-2">
        {{ truncateDesc(post.description) }}
      </p>
    </div>
  </div>
</template>

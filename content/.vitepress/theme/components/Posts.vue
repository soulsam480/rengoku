<script setup lang="ts">
import { useSiteData } from 'vitepress';
import { truncateDesc } from '../utils';
interface PostDate {
  time?: string;
  string?: string;
}
interface Post {
  title?: string;
  href?: string;
  date?: PostDate;
  excerpt?: string;
  description?: string;
}
const siteData = useSiteData();

const { posts } = siteData.value.customData as { posts: Post[] };
</script>
<template>
  <div>
    <div class="posts">
      <div class="post-card" v-for="post in posts" :key="post.href">
        <p class="title">{{ post.title }}</p>
        <p v-if="post.description" class="desc">
          {{ truncateDesc(post.description) }}
        </p>
        <p class="date">{{ post.date?.string }}</p>
        <p class="read-more"><a :href="post.href">Read more ></a></p>
      </div>
    </div>
    <footer class="rengoku-alt" style="text-align: center">
      © Sambit Sahoo , MIT Licensed
    </footer>
  </div>
</template>
<style lang="scss" scoped>
.posts {
  padding-top: 20px;
  .post-card {
    &:not(:last-child) {
      border-bottom: 1px solid var(--rengoku-alt);
    }
    .title {
      font-size: 22px;
      margin-bottom: 0;
      @media (min-width: 768px) {
        font-size: 30px;
      }
    }
    .date {
      color: var(--rengoku);
    }
    .desc {
      color: mix(black, white, 50%);
    }
    .read-more {
      text-align: right;
      color: var(--rengoku-alt);
      a {
        padding-bottom: 1px;
        text-decoration: underline solid;
      }
    }
  }
}
</style>

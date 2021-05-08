<script setup lang="ts">
import { useSiteDataByRoute } from 'vitepress';
import { computed, ref } from 'vue';
import { useSiteData } from 'vitepress';
interface PostDate {
  time?: string;
  string?: string;
}
interface Post {
  title?: string;
  href?: string;
  date?: PostDate;
  excerpt?: string;
}
const siteDataByRoute = useSiteDataByRoute();
const isFeedOnHome = computed((): boolean => {
  if (!siteDataByRoute.value.themeConfig.feedOnHomepage) return false;
  return siteDataByRoute.value.themeConfig.feedOnHomepage;
});
const siteData = useSiteData();
const { posts } = siteData.value.customData as { posts: Post[] };
</script>
<template>
  <div>
    <article>
      <Content />
      <div class="posts" v-if="isFeedOnHome">
        <div class="post-card" v-for="post in posts" :key="post.href">
          <p class="title">{{ post.title }}</p>
          <p class="date">{{ post.date?.string }}</p>
          <p class="read-more"><a :href="post.href">Read more ></a></p>
        </div>
      </div>
    </article>
    <footer class="license rengoku-alt" v-if="!isFeedOnHome">
      © Sambit Sahoo , MIT Licensed
    </footer>
    <footer class="rengoku-alt" v-else style="text-align: center">
      © Sambit Sahoo , MIT Licensed
    </footer>
  </div>
</template>
<style lang="scss" scoped>
article {
  padding-top: 30px;
}
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

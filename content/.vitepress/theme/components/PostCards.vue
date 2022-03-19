<script setup lang="ts">
import type { PropType } from 'vue';
import { truncateDesc } from '../utils';
import type { Post } from '../types';
import { useData, useRouter } from 'vitepress';
const { theme: themeConfig, frontmatter } = useData();

const router = useRouter();

defineProps({
  posts: {
    type: Object as PropType<Post[]>,
    required: true,
  },
});
</script>
<template>
  <div class="posts">
    <div v-if="frontmatter.splitRow || themeConfig.splitRow">
      <div
        class="post-card"
        :class="{ row: post.banner }"
        v-for="post in posts"
        :key="post.href"
      >
        <div class="col-sm-6" v-if="post.banner">
          <img class="banner" :src="post.banner" :alt="post.title" />
        </div>
        <div :class="{ 'col-sm-6': post.banner }">
          <a class="title" :href="post.href">{{ post.title }}</a>
          <p v-if="post.description" class="desc">
            {{ truncateDesc(post.description) }}
          </p>
          <p class="date">{{ post.date?.string }}</p>
          <div v-if="post.tags" class="tags">
            <span class="tag" v-for="tag in post.tags" :key="tag">
              <a :href="`/tags.html#${tag}`">{{ tag }}</a>
            </span>
          </div>
          <p class="read-more"><a :href="post.href">Read more</a></p>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="post-card" v-for="post in posts" :key="post.href">
        <p class="title">{{ post.title }}</p>
        <img
          class="banner"
          :src="post.banner"
          v-if="post.banner"
          :alt="post.title"
        />

        <p v-if="post.description" class="desc">
          {{ truncateDesc(post.description) }}
        </p>
        <p class="date">{{ post.date?.string }}</p>
        <div v-if="post.tags" class="tags">
          <span class="tag" v-for="tag in post.tags" :key="tag">
            <a :href="`/tags.html#${tag}`">{{ tag }}</a>
          </span>
        </div>
        <p class="read-more"><a :href="post.href">Read more ></a></p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  align-items: center;
}
.col-sm-6 {
  padding: 0 1rem;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  max-width: 100%;
  .banner {
    @media (max-width: 768px) {
      width: 90% !important;
    }
  }
}
@media (min-width: 768px) {
  .col-sm-6 {
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    max-width: 50%;
    padding: 0;
  }
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
      cursor: pointer;
      @media (min-width: 768px) {
        font-size: 30px;
      }
    }
    .banner {
      display: block;
      margin: 2em auto;
      width: 80%;
      @media (max-width: 768px) {
        margin: 1em auto;
      }
    }
    .date {
      color: var(--rengoku);
    }
    .tags {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: center;
      .tag {
        margin: 4px;
        padding: 4px 8px;
        border-radius: 25px;
        border: 1px solid var(--rengoku-light);
        background-color: mix(white, #f4d278, 80%);
      }
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

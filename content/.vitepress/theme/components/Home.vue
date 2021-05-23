<script setup lang="ts">
import { useSiteData } from 'vitepress';
import type { Post } from '../types';
import PostCards from './PostCards.vue';
const siteData = useSiteData();
const { posts } = siteData.value.customData as { posts: Post[] };
</script>
<template>
  <div>
    <article v-if="!$frontmatter.hero">
      <Content />
    </article>
    <div class="hero" v-else>
      <img class="landing-image" :src="$frontmatter.heroImage" />
      <blockquote class="quote">
        {{ $frontmatter.heroQuote }}
        <span class="rengoku-alt"> {{ $frontmatter.heroName }} </span>
      </blockquote>
    </div>
    <div v-if="$themeConfig.feedOnHomepage">
      <hr v-if="$frontmatter.hero" class="feed-splitter" />
      <h1 v-if="$frontmatter.hero" class="home-feed-header">Blog articles</h1>
      <PostCards :posts="posts.slice(0, 4)" />
      <p class="visit-blog"><a href="/blog/index">Visit blog</a></p>
    </div>
    <footer class="license rengoku-alt" v-if="!$themeConfig.feedOnHomepage">
      © Sambit Sahoo , MIT Licensed
    </footer>
    <footer class="rengoku-alt" v-else style="text-align: center">
      <div>© Sambit Sahoo , MIT Licensed</div>
      <div>
        <a href="https://github.com/soulsam480" class="nav-link">github</a> ,
        <a href="https://https://github.com/soulsam480/rengoku" class="nav-link"
          >rengoku</a
        >
        ,
        <a href="mailto:soulsam480@hotmail.com" class="nav-link">mail</a>
      </div>
    </footer>
  </div>
</template>
<style lang="scss" scoped>
.feed-splitter {
  margin-top: 3rem;
  border: 1px solid var(--rengoku-alt-light);
}
.home-feed-header {
  text-align: center;
  margin-bottom: 0;
  @media (min-width: 768px) {
    font-size: 50px;
  }
}
</style>

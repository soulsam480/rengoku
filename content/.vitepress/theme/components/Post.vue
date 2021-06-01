<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { usePageData, useRoute, useSiteData } from 'vitepress';
import { computed } from 'vue';
import { formatDate } from '../utils';
const pageData = usePageData();
const route = useRoute();
const { themeConfig } = useSiteData().value;
const posts = useSiteData().value.customData.posts;
function ifImageMeta() {
  if (!pageData.value.frontmatter.banner) return [];
  return [
    {
      property: 'og:image',
      content: computed(
        () =>
          `${themeConfig.siteUrl || 'https://sambitsahoo.com'}${
            pageData.value.frontmatter.banner
          }`,
      ),
      key: 'og:image',
    },
  ];
}
useHead({
  meta: [
    {
      property: 'author',
      content: 'Sambit Sahoo',
      key: 'author',
    },
    {
      property: 'og:title',
      content: computed(() => pageData.value.frontmatter.title),
      key: 'og:title',
    },
    {
      property: 'og:type',
      content: 'article',
      key: 'og:type',
    },
    {
      property: 'og:url',
      content: computed(
        () =>
          `${themeConfig.siteUrl || 'https://sambitsahoo.com'}${route.path}`,
      ),
      key: 'og:url',
    },

    {
      property: 'og:description',
      content: computed(() => pageData.value.frontmatter.description),
      key: 'og:decsription',
    },
    {
      property: 'twitter:card',
      content: 'summary',
      key: 'twitter:card',
    },
    {
      property: 'twitter:creator',
      content: themeConfig.twitterUsername || '@sambitsahoojs',
      key: 'twitter:creator',
    },
    ...ifImageMeta(),
  ],
});

function findCurrentIndex(p: any) {
  return posts.findIndex((p: any) => p.href === route.path);
}
// use the customData date which contains pre-resolved date info
const nextPost = computed(() => posts[findCurrentIndex() - 1]);
const prevPost = computed(() => posts[findCurrentIndex() + 1]);
</script>
<template>
  <article class="article">
    <p class="date" v-if="pageData.frontmatter.date">
      {{ formatDate(pageData.frontmatter.date).string }}
    </p>

    <h1 class="title">{{ pageData.title }}</h1>
    <p class="author" v-if="pageData.frontmatter.author">
      <span v-if="pageData.frontmatter.author.github">
        <a
          target="_blank"
          :href="`https://github.com/${pageData.frontmatter.author.github}`"
          >@{{ pageData.frontmatter.author.name }}</a
        >
      </span>
      <span v-else>@{{ pageData.frontmatter.author.name }}</span>
    </p>

    <img
      class="banner"
      v-if="pageData.frontmatter.banner"
      :src="pageData.frontmatter.banner"
      :alt="pageData.frontmatter.title"
    />
    <div v-if="pageData.frontmatter.tags" class="tags">
      <span
        class="tag"
        v-for="tag in pageData.frontmatter.tags.split(',')"
        :key="tag"
      >
        <a :href="`/tags.html#${tag}`">{{ tag }}</a>
      </span>
    </div>
    <div class="content"><Content /></div>
  </article>
  <footer class="post-switch">
    <div v-if="nextPost" class="next">
      <p>Next</p>
      <div class="link">
        <a :href="nextPost.href">{{ nextPost.title }}</a>
      </div>
    </div>
    <div v-if="prevPost" class="previous">
      <p>Previous</p>
      <div class="link">
        <a :href="prevPost.href">{{ prevPost.title }}</a>
      </div>
    </div>
  </footer>
  <br />
  <footer class="rengoku-alt" style="text-align: center">
    © Sambit Sahoo {{ new Date().getFullYear() }} , MIT Licensed
  </footer>
</template>
<style lang="scss" scoped>
.article {
  padding: 30px 0 0 0;
  .title {
    margin: 0;
    font-weight: normal;
    @media (min-width: 768px) {
      text-align: center;
      font-size: 50px;
    }
  }
  .date {
    color: var(--rengoku);
    @media (min-width: 768px) {
      text-align: center;
    }
  }
  .author {
    color: var(--rengoku-alt);
    @media (min-width: 768px) {
      text-align: center;
    }
  }
  .banner {
    padding-top: 15px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding-top: 20px;
    align-items: center;
    .tag {
      margin: 3px;
      padding: 4px 8px;
      border-radius: 25px;
      border: 1px solid var(--rengoku-light);
      background-color: mix(white, #f4d278, 80%);
    }
    @media (min-width: 768px) {
      text-align: center;
    }
  }
  .content {
    padding: 15px 0 30px 0;
    border-bottom: 1px solid var(--rengoku-light);
    :deep(h1) {
      font-size: 1.8rem;
    }
  }
}
.post-switch {
  .next,
  .previous {
    border-bottom: 1px solid var(--rengoku-light);
    padding: 10px 0;
    p {
      margin: 0;
    }
    .link {
      font-size: 18px;
      color: var(--rengoku-alt);
    }
  }
  .next {
    text-align: right;
  }
  .previous {
    text-align: left;
  }
}
</style>

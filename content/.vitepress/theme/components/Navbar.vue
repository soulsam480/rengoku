<script setup lang="ts">
import { useRoute, useSiteDataByRoute } from 'vitepress';
import { computed } from 'vue';
const siteByRoute = useSiteDataByRoute();
const route = useRoute();
const isRouteActive = (path: string) => route.path === path;
const homeColors = computed(() => {
  if (
    !route.path.match(/\/blog\/(.*?).html/) ||
    route.path === '/blog/index.html'
  )
    return ['rengoku'];
  return ['rengoku-alt'];
});
const routes = computed(() => {
  const { themeConfig } = siteByRoute.value;
  if (themeConfig.nav.length > 3) {
    console.error('Maximum 3 nav bar elements are allowed!');
    return themeConfig.nav.slice(0, 3);
  }

  return themeConfig.nav;
});
</script>
<template>
  <header class="nav nav-bar">
    <div class="brand" :class="homeColors">
      <a href="/">{{ $site.title }}</a>
    </div>
    <div class="nav-items">
      <div class="nav-item" v-for="nav in routes" :key="nav.link">
        <a :href="nav.link" :class="{ active: isRouteActive(nav.link) }">
          {{ nav.text }}</a
        >
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 1.5rem 0.7rem 1.5rem;
  background-color: var(--rengoku-bg);
  height: 30px;
  max-width: 55rem;
  margin: auto;
  .brand {
    font-size: 22px;
    font-weight: bold;
  }
  .flex-grow {
    flex-grow: 1;
  }
  .nav-items {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .nav-item {
      padding-left: 10px;
      transition: color ease-in-out 0.1s;
      &:hover {
        color: var(--rengoku);
      }
      @media (min-width: 768px) {
        padding-left: 20px;
      }
      a {
        padding-bottom: 3px;
        &.active {
          color: var(--rengoku-alt);
          font-weight: bold;
          letter-spacing: 0.2px;
        }
      }
    }
  }
}
</style>

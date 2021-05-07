<script setup lang="ts">
import { useRoute, useSiteDataByRoute } from 'vitepress';
import { computed } from 'vue';
const siteByRoute = useSiteDataByRoute();
const route = useRoute();
const isRouteActive = (path: string) => route.path === path;

const routes = computed(() => {
  const { themeConfig } = siteByRoute.value;
  return themeConfig.nav;
});
</script>
<template>
  <header class="nav">
    <div class="brand">
      {{ $site.title }}
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
      a {
        padding-bottom: 3px;
        &.active {
          font-weight: bold;
          letter-spacing: 0.2px;
        }
      }
    }
  }
}
</style>

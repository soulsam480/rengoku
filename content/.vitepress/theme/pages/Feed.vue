<script setup lang="ts">
import Giscus from "@giscus/vue";
import { onBeforeMount, ref } from "vue";

const hasLoaded = ref(false);

onBeforeMount(() => {
  window.addEventListener("message", (event) => {
    if (event.origin !== "https://giscus.app") return;
    if (!(typeof event.data === "object" && event.data.giscus)) return;

    if (!hasLoaded.value && event.data.giscus.resizeHeight !== 0) {
      hasLoaded.value = true;
    }
  });
});
</script>
<template>
  <div class="flex items-center justify-center" v-if="!hasLoaded">
    Loading Feed....
  </div>

  <Giscus
    repo="soulsam480/rengoku"
    repo-id="MDEwOlJlcG9zaXRvcnkzNjUxODYwMTY="
    category="Announcements"
    category-id="DIC_kwDOFcRL4M4CeZMl"
    mapping="number"
    strict="0"
    reactions-enabled="0"
    emit-metadata="1"
    input-position="top"
    theme="dark_dimmed"
    lang="en"
    loading="eager"
    term="14"
  />
</template>

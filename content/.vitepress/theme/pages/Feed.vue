<script setup lang="ts">
import Giscus from "@giscus/vue";
import { useData } from "vitepress";
import { onBeforeMount, ref } from "vue";

const { isDark } = useData();

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
    <div class="flex flex-col gap-4">
        <h1 class="text-lg font-semibold">Train of Thoughts</h1>

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
            :theme="isDark ? 'dark_dimmed' : 'light'"
            lang="en"
            loading="eager"
            term="14"
        />
    </div>
</template>

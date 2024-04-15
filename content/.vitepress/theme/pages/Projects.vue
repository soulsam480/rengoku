<script setup lang="ts">
import { projects } from "../constants";

const MY_GITHUB = "https://github.com/soulsam480";
</script>
<template>
  <div class="flex flex-col gap-3">
    <h1 class="text-lg font-semibold">Projects</h1>

    <div class="grid sm:grid-cols-2 grid-cols-1 gap-x-2 gap-y-4">
      <div
        v-for="project in projects"
        :key="project.title"
        class="flex flex-col gap-1"
      >
        <div class="flex items-end gap-2">
          <h4 class="text-base font-semibold text-brand-1">
            {{ project.title }}
          </h4>

          <template v-for="link in project.links" :key="link.url">
            <a
              v-if="link.label !== 'github'"
              :href="link.url"
              target="_blank"
              class="link text-sm"
            >
              {{ link.label }}
            </a>

            <a
              v-else
              :href="
                link.url.includes('github.com')
                  ? link.url
                  : MY_GITHUB + link.url
              "
              target="_blank"
              class="link text-sm"
              >{{ link.label }}
            </a>
          </template>
        </div>

        <h5 class="text-sm text-brand-1">
          {{ project.desc }}
        </h5>

        <h5 v-if="project.stack.length" class="text-xs text-brand-2">
          stack: {{ project.stack.join(", ") }}
        </h5>
      </div>
    </div>

    <a
      target="_blank"
      class="mt-4 link max-w-max"
      href="https://github.com/soulsam480?tab=repositories&type=source"
      >Explore more projects on github
    </a>
  </div>
</template>

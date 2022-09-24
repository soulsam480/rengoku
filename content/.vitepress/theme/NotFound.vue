<template>
  <div class="flex flex-col items-center justify-center gap-5">
    <h1 class="text-4xl">404</h1>

    <blockquote class="text-2xl">{{ getMsg() }}</blockquote>

    <a class="link" href="/" aria-label="go to home">Take me home.</a>
  </div>
</template>

<script setup lang="ts">
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`,
];

function getMsg() {
  return msgs[Math.floor(Math.random() * msgs.length)];
}
</script>

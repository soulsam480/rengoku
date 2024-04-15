<script setup lang="ts">
import { data as posts } from "../posts.data";
import { truncateDesc } from "../utils";

const PREVIOUS_WORK = [
  {
    name: "Evidev LLP",
    position: "Frontend Developer",
    range: "2020 DEC - 2022 MAR",
    what: "Worked in Fintech Domain and lead the Frontend team for a while",
    link: "https://evidev.tech/",
  },
  {
    name: "Public Incubator Inc",
    position: "Frontend Intern",
    range: "2020 MAR - 2020 APR",
    what: "Primarily worked on the Landing Page of the company.",
    link: "https://www.publicincubator.com/",
  },
  {
    name: "Tiaamo.com",
    position: "Co-Founder",
    range: "2018 MAR - 2021 MAY",
    what: "Co-Founded the company and built the E-commerce platform.",
    link: "https://github.com/tiaamoclothing",
  },
];

const SOCIAL_LINKS = [
  {
    link: "mailto:soulsam480@hotmail.com",
    label: "soulsam480@hotmail.com",
  },
  {
    link: "https://github.com/soulsam480",
    label: "github",
  },
  {
    link: "https://www.linkedin.com/in/sambit-sahoo-6a3859190/",
    label: "linkedin",
  },
  {
    link: "https://elk.zone/fosstodon.org/@zorozuro",
    label: "mastodom",
  },
];
</script>

<template>
  <div class="flex flex-col gap-5">
    <div>
      <h1 class="text-lg">hello,</h1>

      <div class="text-base lowercase">
        this is sambit. Been working at
        <a target="_blank" href="https://revenuehero.io" class="link"
          >RevenueHero</a
        >
        since the last two years. It's been a journey full of learning and fun.
        I rarely write on
        <a href="/blog/index.html" class="link">my blog</a>. Thanks for
        visiting.
      </div>
    </div>

    <div class="flex flex-col gap-2 mt-10">
      <div class="text-lg font-semibold">Previously</div>

      <div class="grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-2">
        <div
          class="flex flex-col gap-0.5"
          v-for="work in PREVIOUS_WORK"
          :key="work.name"
        >
          <h3 class="text-base">
            <a target="_blank" :href="work.link" class="link">{{
              work.name
            }}</a>
          </h3>

          <h4 class="text-sm max-w-[90%] text-brand-1">
            {{ work.what }}
          </h4>

          <h4 class="text-xs text-brand-2">
            {{ work.position }} \\ {{ work.range }}
          </h4>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-2 mt-10">
      <div class="text-lg font-semibold">Reach me at</div>

      <div class="text-xs text-brand-1">
        I'm not active on the following channels except email. To see what I'm
        upto right now, check out my
        <a
          class="link"
          rel="noopener"
          target="_blank"
          href="https://github.com/soulsam480"
          >github profile</a
        >
      </div>

      <div class="flex flex-wrap items-center gap-2">
        <a
          target="_blank"
          v-for="social in SOCIAL_LINKS"
          class="text-sm sm:text-base link"
          :href="social.link"
          >{{ social.label }}</a
        >
      </div>
    </div>

    <div class="flex flex-col gap-4 mt-10">
      <div class="text-lg font-semibold">Recent articles</div>
      <div
        v-for="post in posts.slice(0, 6)"
        class="flex flex-col gap-1"
        :key="post.href"
      >
        <div class="text-sm text-brand-1">{{ post.date?.string }}</div>
        <h3>
          <a :href="post.href" class="text-lg font-semibold link">
            {{ post.title }}
          </a>
        </h3>

        <p v-if="post.description" class="text-sm text-brand-2">
          {{ truncateDesc(post.description) }}
        </p>
      </div>
    </div>
  </div>
</template>

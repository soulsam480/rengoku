<script setup lang="ts">
import type { Post } from '../types';
import Posts from '../../metadata.json';
import { truncateDesc } from '../utils';

const posts: Post[] = Posts;

const previous_work = [
  {
    name: 'Evidev LLP',
    position: 'Frontend Developer',
    range: '2020 DEC - 2022 MAR',
    what: 'Worked in Fintech Domain and lead the Frontend team for a while',
    link: 'https://evidev.tech/',
  },
  {
    name: 'Public Incubator Inc',
    position: 'Frontend Intern',
    range: '2020 MAR - 2020 APR',
    what: 'Primarily worked on the Landing Page of the company.',
    link: 'https://www.publicincubator.com/',
  },
  {
    name: 'Tiaamo.com',
    position: 'Co-Founder',
    range: '2018 MAR - 2021 MAY',
    what: 'Co-Founded the company and built the E-commerce platform.',
    link: 'https://github.com/tiaamoclothing',
  },
];

const social_links = [
  {
    link: 'mailto:sambitsahoojs@gmail.com',
    label: 'sambitsahoojs@gmail.com',
  },
  {
    link: 'https://github.com/soulsam480',
    label: 'github',
  },
  {
    link: 'https://www.linkedin.com/in/sambit-sahoo-6a3859190/',
    label: 'linkedin',
  },
  {
    link: 'https://twitter.com/sambitsahoojs',
    label: 'twitter',
  },
];
</script>

<template>
  <div class="flex flex-col gap-5">
    <div>
      <h1 class="text-lg">Hello,</h1>
      <div class="text-base">
        This is sambit. These days I'm working at
        <a target="_blank" href="https://revenuehero.io" class="link"
          >RevenueHero</a
        >
        on many random things. Don't have much time after work to finalize
        <a
          target="_blank"
          href="https://github.com/soulsam480/mirai"
          class="link"
          >Mirai</a
        >. But I'm learning a lot at work. It's been a mix of hard-core React,
        TypeScript, and REST APIs in Node.js.

        <br />
        <br />

        Also moved to Bangalore. It's a super cool city. Everyone is busy doing
        something. That's it. I also occasionally write on
        <a href="/blog/index.html" class="link">my blog</a>. Thanks for
        visiting.
      </div>
    </div>

    <div class="flex flex-col gap-2 mt-10">
      <div class="text-lg font-semibold">Previously</div>

      <div class="grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-2">
        <div
          class="flex flex-col gap-0.5"
          v-for="work in previous_work"
          :key="work.name"
        >
          <h3 class="text-base">
            <a target="_blank" :href="work.link" class="link">{{
              work.name
            }}</a>
          </h3>

          <h4 class="text-sm max-w-[90%] text-gray-800">
            {{ work.what }}
          </h4>

          <h4 class="text-xs text-gray-800">
            {{ work.position }} \\ {{ work.range }}
          </h4>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-2 mt-10">
      <div class="text-lg font-semibold">Reach me at</div>

      <div class="flex flex-wrap items-center gap-2">
        <a
          target="_blank"
          v-for="social in social_links"
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
        <div class="text-sm text-gray-700">{{ post.date?.string }}</div>
        <h3>
          <a :href="post.href" class="text-lg font-semibold link">
            {{ post.title }}
          </a>
        </h3>

        <p v-if="post.description" class="text-sm text-gray-800">
          {{ truncateDesc(post.description) }}
        </p>
      </div>
    </div>
  </div>
</template>

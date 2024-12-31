<script setup lang="ts">
import { useData, useRoute } from "vitepress";
import { computed } from "vue";
//@ts-ignore
import VueCusdis from "vue-cusdis";
import { data as posts } from "../posts.data";
import { formatDate } from "../utils";

const { frontmatter, isDark } = useData();
const route = useRoute();

function findCurrentIndex() {
	return posts.findIndex((p) => p.href === route.path);
}

// use the customData date which contains pre-resolved date info
const nextPost = computed(() => posts[findCurrentIndex() - 1]);
const prevPost = computed(() => posts[findCurrentIndex() + 1]);
</script>
<template>
	<article class="flex flex-col gap-4">
		<header class="flex flex-col gap-2 pt-6 text-left sm:text-center xl:pb-10">
			<p class="text-brand-2" v-if="frontmatter.date">
				{{ formatDate(frontmatter.date).string }}
			</p>

			<h1
				class="text-3xl font-semibold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
				{{ frontmatter.title }}
			</h1>

			<p class="author">
				<a target="_blank" class="link" href="https://github.com/soulsam480">soulsam480</a>

			</p>
		</header>

		<img class="banner" v-if="frontmatter.banner" :src="frontmatter.banner" :alt="frontmatter.title" />

		<h3 v-if="frontmatter.banner_title" :title="frontmatter.banner_title"
			class="text-center text-brand-2 text-sm italic">
			{{ frontmatter.banner_title }}
		</h3>

		<div v-if="frontmatter.tags" class="flex flex-wrap items-center gap-2">
			<span class="tag" v-for="tag in frontmatter.tags.split(',')" :key="tag">
				<a :href="`/tags.html#${tag}`" class="p-1 !border rounded-md hover:!border-b-2 link">#{{
					tag }}</a>
			</span>
		</div>

		<Content class="pb-8 prose max-w-none dark:prose-invert prose-neutral" />
	</article>

	<div class="flex flex-col gap-2">
		<div v-if="nextPost" class="text-right">
			<p class="text-sm text-brand-2">Next</p>

			<h3>
				<a class="link" :href="nextPost.href">{{ nextPost.title }}</a>
			</h3>
		</div>

		<hr />

		<div v-if="prevPost" class="text-left">
			<p class="text-sm text-brand-2">Previous</p>
			<div>
				<a class="link" :href="prevPost.href">{{ prevPost.title }}</a>
			</div>
		</div>
	</div>

	<div class="mt-5">
		<h3 class="text-lg font-semibold">Comments</h3>

		<ClientOnly>
			<VueCusdis :key="route.path" :attrs="{
				host: 'https://cusdis.com',
				appId: 'ab5ba4a4-9ec7-4c53-bc90-3c290bed5c85',
				pageId: route.path,
				pageTitle: frontmatter.title,
				pageUrl: `https://sambitsahoo.com${route.path}`,
				theme: isDark ? 'dark' : undefined,
			}" />
		</ClientOnly>
	</div>
</template>

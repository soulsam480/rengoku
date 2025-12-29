import { defineConfig } from "vitepress";

export default defineConfig({
	appearance: "force-dark",
	markdown: {
		anchor: {
			level: 0,
			permalink: () => {
				//
			},
		},
		linkify: true,
		typographer: true,
		toc: { level: [1, 2, 3] },
		codeTransformers: [
			{
				pre(el) {
					this.addClassToHast(el, "not-prose");
				},
			},
		],
		theme: {
			light: "vitesse-light",
			dark: "vitesse-dark",
		},
	},
	title: "Sambit Sahoo",
	description: "Small engineer, vue, vite, react, node",
	vite: {
		define: {
			__VUE_OPTIONS_API__: false,
		},
		build: {
			minify: "esbuild",
		},
	},
	transformHead({ pageData }) {
		if (!pageData.relativePath.startsWith("blog")) {
			return;
		}

		const url = `https://sambitsahoo.com/${pageData.relativePath.replace(
			/\.md$/,
			"",
		)}`;

		const headConfig = [];

		headConfig.push(
			[
				"meta",
				{
					property: "og:title",
					content:
						pageData.frontmatter.title ||
						pageData.title,
				},
			],
			[
				"meta",
				{
					property: "og:description",
					content:
						pageData.frontmatter
							.description ||
						pageData.description,
				},
			],
			[
				"meta",
				{
					property: "og:url",
					content: url,
				},
			],
		);

		if (pageData.frontmatter.banner) {
			headConfig.push([
				"meta",
				{
					property: "og:image",
					content: `https://sambitsahoo.com${pageData.frontmatter.banner}`,
				},
			]);
		}

		return headConfig;
	},
});

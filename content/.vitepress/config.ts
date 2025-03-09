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
});

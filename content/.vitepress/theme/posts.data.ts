import { createContentLoader } from "vitepress";
import { Post } from "./types";
import { formatDate } from "./utils";

declare const data: Post[];

export { data };

export default createContentLoader("blog/!(index)*.md", {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .filter((it) => !it.frontmatter.hidden)
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        href: url,
        date: formatDate(frontmatter.date),
        description: frontmatter.description,
        banner: frontmatter.banner,
        tags: (frontmatter.tags && frontmatter.tags.split(",")) ?? [],
        excerpt,
      }))
      .sort((a, b) => (b.date.time > a.date.time ? 1 : -1));
  },
});

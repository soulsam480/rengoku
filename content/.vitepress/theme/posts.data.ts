import { createContentLoader } from "vitepress";
import { Post } from "./types";

declare const data: Post[];

export { data };

export default createContentLoader("blog/!(index)*.md", {
  excerpt: true,
  transform(raw): Post[] {
    return raw
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

function formatDate(date: string | Date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }

  date.setUTCHours(12);

  return {
    time: date,
    string: date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
}

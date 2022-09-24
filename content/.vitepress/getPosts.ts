import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getPosts() {
  const postDir = path.resolve(__dirname, '../blog');

  return fs
    .readdirSync(postDir)
    .map((file) => {
      const src = fs.readFileSync(path.join(postDir, file), 'utf-8');

      const { data } = matter(src);

      if (!file.split('.').includes('index')) {
        const post = {
          title: data.title,
          href: `/blog/${file.replace(/\.md$/, '.html')}`,
          date: formatDate(data.date),
          description: data.description,
          banner: data.banner,
          tags: (data.tags && data.tags.split(',')) || [],
        };

        return post;
      }
      return null;
    })
    .filter(Boolean)
    .sort((a, b) => (b as any).date.time - (a as any).date.time);
}

export function genMetaData(get: typeof getPosts) {
  fs.writeFileSync(
    path.resolve(__dirname, 'metadata.json'),
    JSON.stringify(get()),
  );
}

function formatDate(date: string | Date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }

  date.setUTCHours(12);

  return {
    time: date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  };
}

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

exports.getPosts = function getPosts(asFeed = false) {
  const postDir = path.resolve(__dirname, '../blog');
  return fs
    .readdirSync(postDir)
    .map((file) => {
      const src = fs.readFileSync(path.join(postDir, file), 'utf-8');
      const { data, content } = matter(src);
      if (!file.split('.').includes('index')) {
        const post = {
          title: data.title,
          href: `/blog/${file.replace(/\.md$/, '.html')}`,
          date: formatDate(data.date),
          description: data.description,
          banner: data.banner,
          tags: (data.tags && data.tags.split(',')) || [],
        };
        if (asFeed) {
          // only attach these when building the RSS feed to avoid bloating the
          // client bundle size
          post.data = data;
        }
        return post;
      }
      return null;
    })
    .filter((el) => el !== null)
    .sort((a, b) => b.date.time - a.date.time);
};

function formatDate(date) {
  if (!date instanceof Date) {
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

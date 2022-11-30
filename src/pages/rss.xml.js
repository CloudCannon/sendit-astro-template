import rss from '@astrojs/rss';
import site from '@data/site.json';

const postImportResult = import.meta.glob('./blog/**/*.md', { eager: true });
const posts = Object.values(postImportResult);

export const get = () => rss({
  title: site.site_title,
  description: site.description,
	site: import.meta.env.SITE,
  items: posts.map((post) => ({
    link: post.url,
    title: post.frontmatter.title,
    pubDate: post.frontmatter.date,
  }))
});
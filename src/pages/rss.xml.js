import rss from '@astrojs/rss';
import site from '@data/site.json';
import { getCollection } from "astro:content";

const posts = await getCollection('blog');

export const get = () => rss({
  title: site.site_title,
  description: site.description,
	site: import.meta.env.SITE,
  items: posts.map((post) => ({
    link: `/blog/${post.slug}`,
    title: post.data.title,
    pubDate: post.data.date,
  }))
});
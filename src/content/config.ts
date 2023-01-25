import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    date: z.date(),
    title: z.string(),
    tags: z.array(z.string()),
    author: z.string(),
    thumb_image: z.object({
      image: z.string(),
      image_alt: z.string(),
    }),
    featured_image: z.object({
      image: z.string(),
      image_alt: z.string(),
    }),
    seo: z.object({
      page_description: z.string().nullable(),
      canonical_url: z.string().nullable(),
      featured_image: z.string(),
      featured_image_alt: z.string().nullable(),
      author_twitter_handle: z.string().nullable(),
      open_graph_type: z.string(),
      no_index: z.boolean(),
    }),
  }),
});

export const collections = {
  blog: blogCollection,
};

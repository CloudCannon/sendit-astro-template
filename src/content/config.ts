import { defineCollection, z } from "astro:content";

const seoSchema = z
  .object({
    page_description: z.string().nullable(),
    canonical_url: z.string().nullable(),
    featured_image: z.string().nullable(),
    featured_image_alt: z.string().nullable(),
    author_twitter_handle: z.string().nullable(),
    open_graph_type: z.string().nullable(),
    no_index: z.boolean(),
  })
  .optional();

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
    seo: seoSchema,
  }),
});

const pageSchema = z.object({
  _schema: z.any().optional(),
  title: z.string(),
  content_blocks: z.array(z.any()),
  page_size: z.undefined(),
  description: z.undefined(),
  seo: seoSchema,
});

const paginatedCollectionSchema = z.object({
  _schema: z.literal("paginated_collection"),
  title: z.string(),
  description: z.string().optional(),
  page_size: z.number().positive(),
  content_blocks: z.undefined(),
  seo: seoSchema,
});

const pagesCollection = defineCollection({
  schema: z.union([paginatedCollectionSchema, pageSchema]),
});

export const collections = {
  blog: blogCollection,
  pages: pagesCollection,
};

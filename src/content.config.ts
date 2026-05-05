import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    target_keyword: z.string(), // primary SEO target — used by the weekly site report. Required.
    secondary_keywords: z.array(z.string()).default([]),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Anonymous'),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    categories: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    kitTagId: z.string().optional(), // Kit tag ID for post-specific lead magnets
    hideRelatedPosts: z.boolean().default(false),
    kitHeadline: z.string().optional(),
    kitDescription: z.string().optional(),
    kitButtonText: z.string().optional(),
    kitFormId: z.string().optional(), // Kit form ID for post-specific lead magnets (e.g., download gating)
  }),
});

export const collections = { blog };

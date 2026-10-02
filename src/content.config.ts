import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

const notesCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  notes: notesCollection,
};

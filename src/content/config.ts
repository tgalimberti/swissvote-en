// src/content/config.ts
import { z, defineCollection } from 'astro:content';

const mattersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(), // The date of the vote
    level: z.enum(['federal', 'cantonal']),
    canton: z.string().optional(), // e.g., 'TI' (only needed if level is cantonal)
    order: z.number(), // Is it the 1st matter, 2nd matter?
  }),
});

export const collections = {
  'matters': mattersCollection,
};

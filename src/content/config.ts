import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    cluster: z.enum(['empathy', 'agents', 'society']),
    stage: z.string(),
    oneLine: z.string(),
    lastActivity: z.string().optional(),
    collaborators: z.array(z.string()).optional(),
    venue: z.string().optional(),
    order: z.number().default(0),
  }),
});

const people = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    affiliation: z.string().optional(),
    email: z.string().optional(),
    photo: z.string().optional(),
    links: z
      .object({
        scholar: z.string().optional(),
        github: z.string().optional(),
        website: z.string().optional(),
      })
      .optional(),
    order: z.number().default(0),
  }),
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.date(),
    title: z.string(),
  }),
});

const publications = defineCollection({
  type: 'data',
  schema: z.object({
    key: z.string(),
    title: z.string(),
    authors: z.array(z.string()),
    year: z.number(),
    venue: z.string(),
    type: z.enum(['journal', 'conference', 'workshop', 'preprint', 'thesis']),
    url: z.string().optional(),
    doi: z.string().optional(),
    note: z.string().optional(),
  }),
});

export const collections = { projects, people, news, publications };

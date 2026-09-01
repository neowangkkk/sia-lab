import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    cluster: z.enum(['km', 'agents', 'education']),
    area: z.string().optional(),
    stage: z.string(),
    oneLine: z.string(),
    whyMatters: z.string().optional(),
    idea: z.string().optional(),
    researchQuestion: z.string().optional(),
    keyProposition: z.string().optional(),
    dataDescription: z.string().optional(),
    findings: z.string().optional(),
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
    website: z.string(),
    photo: z.string().optional(),
    role: z.string().optional(),
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

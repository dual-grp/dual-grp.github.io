import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const members = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/members' }),
  schema: z.object({
    name: z.string(),
    role: z.enum(['professor', 'phd', 'mphil', 'research-pathway', 'honours', 'alumni']),
    description: z.string().optional(),
    image: z.string().optional(),
    links: z.record(z.string(), z.string()).optional(),
  }),
});

const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    year: z.number(),
    kind: z.enum(['conference', 'journal', 'arxiv']),
    status: z.string(),
    url: z.string().url().optional(),
    venue_url: z.string().url().optional(),
    code: z.string().url().optional(),
    img: z.string().optional(),
    image_alt: z.string().optional(),
    image_fit: z.enum(['cover', 'contain']).default('contain'),
    hot: z.boolean().default(false),
    bibtex: z.string().optional(),
  }),
});

export const collections = { members, works };

import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const jobs = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/jobs" }),
  schema: z.object({
    company: z.string(),
    url: z.url().optional(),
    role: z.string(),
    start: z.coerce.date(),
    // Omit `end` for the current role.
    end: z.coerce.date().optional(),
    stack: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    period: z.string(),
    summary: z.string(),
    stack: z.array(z.string()).default([]),
    url: z.url().optional(),
    // Lower numbers are listed first.
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

export const collections = { jobs, projects };

// src/content/config.ts
import { defineCollection, z } from "astro:content";

const diaryx = defineCollection({
  type: "content",
  schema: z.object({
    // Required properties
    title: z.string(),
    author: z.string(),
    audience: z.array(z.string()),

    // Recommended properties
    created: z.date().optional(),
    updated: z.date().optional(),
    format: z.string().optional(),

    // Optional properties
    contents: z.array(z.string()).optional(),
    part_of: z.string().optional(),
    version: z.string().optional(),
    copying: z.string().optional(),
    tags: z.array(z.string()).optional(),
    aliases: z.array(z.string()).optional(),
    description: z.string().optional(),
    starred: z.boolean().optional(),
    pinned: z.boolean().optional(),

    // Optional health properties
    mood: z.string().optional(),
    mood_scale: z.string().optional(),
    activity_distance: z.string().optional(),
    activity_duration: z.string().optional(),
    activity_type: z.string().optional(),
    calories_burned: z.number().optional(),
    steps: z.number().optional(),
    sleep_hours: z.number().optional(),
    sleep_scale: z.string().optional(),
    blood_pressure: z.string().optional(),
    heart_rate: z.number().optional(),
    body_weight: z.number().optional(),
    calories_consumed: z.number().optional(),
    carbs_consumed: z.number().optional(),
    protein_consumed: z.number().optional(),
    fats_consumed: z.number().optional(),
    water_consumed: z.string().optional(),

    // Optional location properties
    location: z.string().optional(),
    coordinates: z.string().optional(),
    position: z.string().optional(),

    // Optional weather property
    weather: z.array(z.string()).optional(),

    // Optional software/hardware properties
    created_on_hardware: z.string().optional(),
    created_on_software: z.string().optional(),
  }),
});

export const collections = { diaryx };

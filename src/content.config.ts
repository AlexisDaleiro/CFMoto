import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

import {
  experienceSchema,
  locationSchema,
  productSchema,
} from "./content/schemas";

const products = defineCollection({
  loader: glob({ base: "./src/content/products", pattern: "**/*.json" }),
  schema: productSchema,
});

const locations = defineCollection({
  loader: glob({ base: "./src/content/locations", pattern: "**/*.json" }),
  schema: locationSchema,
});

const experiences = defineCollection({
  loader: glob({ base: "./src/content/experiences", pattern: "**/*.json" }),
  schema: experienceSchema,
});

export const collections = { experiences, locations, products };

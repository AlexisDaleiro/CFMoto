import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

import { productSchema } from "./content/schemas";

const products = defineCollection({
  loader: glob({ base: "./src/content/products", pattern: "**/*.json" }),
  schema: productSchema,
});

export const collections = { products };

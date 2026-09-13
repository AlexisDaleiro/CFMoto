import type { ImageMetadata } from "astro";

import concept450Desktop from "@/assets/prototypes/450sr-concept-hero.png";
import concept450Mobile from "@/assets/prototypes/450sr-concept-hero-mobile.png";

const productMedia: Record<string, ImageMetadata> = {
  "src/assets/prototypes/450sr-concept-hero.png": concept450Desktop,
  "src/assets/prototypes/450sr-concept-hero-mobile.png": concept450Mobile,
};

export const resolveProductMedia = (src: string) => productMedia[src];

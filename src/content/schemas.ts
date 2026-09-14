import { z } from "astro/zod";

export const verificationStatusSchema = z.enum([
  "verified",
  "needsClientValidation",
  "needsReview",
  "unverified",
  "deprecated",
]);

export const verificationSchema = z.object({
  status: verificationStatusSchema,
  source: z.object({
    label: z.string().min(1),
    url: z.url().optional(),
    market: z.string().min(1).optional(),
  }),
  verifiedAt: z.coerce.date().optional(),
  note: z.string().min(1).optional(),
});

export const imageSchema = z.object({
  id: z.string().min(1),
  role: z.enum(["hero", "cutout", "gallery", "feature", "thumbnail"]),
  src: z.string().min(1),
  alt: z.string(),
  width: z.number().int().positive().optional(),
  height: z.number().int().positive().optional(),
  aspectRatio: z.string().min(1).optional(),
  focalPoint: z
    .object({
      x: z.number().min(0).max(1),
      y: z.number().min(0).max(1),
    })
    .optional(),
  colorRef: z.string().min(1).optional(),
  rights: z.object({
    status: z.enum(["unknown", "reference", "proposal", "production"]),
    owner: z.string().min(1).optional(),
    allowedUse: z.string().min(1).optional(),
    expiresAt: z.coerce.date().optional(),
  }),
});

const pricedOfferFields = {
  amount: z.number().nonnegative(),
  currency: z.enum(["USD", "UYU"]),
  taxIncluded: z.boolean().optional(),
  validFrom: z.coerce.date().optional(),
  validUntil: z.coerce.date().optional(),
  disclaimer: z.string().min(1).optional(),
  verification: verificationSchema,
};

export const priceSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("fixed"), ...pricedOfferFields }),
  z.object({ type: z.literal("startingAt"), ...pricedOfferFields }),
  z.object({
    type: z.literal("enquire"),
    note: z.string().min(1).optional(),
    verification: verificationSchema,
  }),
  z.object({
    type: z.literal("unavailable"),
    note: z.string().min(1).optional(),
    verification: verificationSchema,
  }),
]);

const specificationIdentity = {
  key: z.string().regex(/^[a-z][a-zA-Z0-9]*$/),
  label: z.string().min(1),
  group: z.enum([
    "engine",
    "chassis",
    "dimensions",
    "electronics",
    "capacities",
  ]),
};

export const specificationSchema = z.discriminatedUnion("status", [
  z.object({
    ...specificationIdentity,
    status: z.literal("available"),
    value: z.union([z.string().min(1), z.number(), z.boolean()]),
    unit: z.string().min(1).optional(),
    displayValue: z.string().min(1).optional(),
    verification: verificationSchema,
  }),
  z.object({
    ...specificationIdentity,
    status: z.literal("notInformed"),
    note: z.string().min(1).optional(),
    verification: verificationSchema,
  }),
  z.object({
    ...specificationIdentity,
    status: z.literal("notAvailable"),
    note: z.string().min(1).optional(),
    verification: verificationSchema,
  }),
  z.object({
    ...specificationIdentity,
    status: z.literal("notApplicable"),
    note: z.string().min(1).optional(),
    verification: verificationSchema,
  }),
]);

export const compareAttributeReferenceSchema = z.object({
  key: z.string().regex(/^[a-z][a-zA-Z0-9]*$/),
  priority: z.number().int().min(1).max(100),
});

export const productSchema = z.object({
  productId: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  name: z.string().min(1),
  category: z.enum(["motorcycle", "atv", "side-by-side"]),
  family: z.string().min(1),
  usage: z
    .array(
      z.enum([
        "sport",
        "naked",
        "adventure",
        "heritage",
        "recreation",
        "utility",
        "work",
      ]),
    )
    .default([]),
  modelYear: z.number().int().min(2000).max(2100).optional(),
  publicationStatus: z.enum([
    "draft",
    "active",
    "unlisted",
    "legacy",
    "discontinued",
  ]),
  descriptor: z.string().min(1).optional(),
  description: z.string().min(1).optional(),
  copyStatus: z.enum(["verified", "proposal"]).default("proposal"),
  compareGroup: z.string().min(1),
  availability: z.enum([
    "available",
    "onRequest",
    "temporarilyUnavailable",
    "unknown",
  ]),
  keyStats: z.array(specificationSchema).max(5).default([]),
  specifications: z.array(specificationSchema).default([]),
  compareAttributes: z.array(compareAttributeReferenceSchema).default([]),
  features: z
    .array(
      z.object({
        id: z.string().min(1),
        type: z.enum(["performance", "technology", "design", "capability"]),
        title: z.string().min(1),
        body: z.string().min(1),
        verification: verificationSchema,
      }),
    )
    .default([]),
  relatedProducts: z.array(z.string().min(1)).max(4).default([]),
  images: z.array(imageSchema).default([]),
  colors: z
    .array(
      z.object({
        id: z.string().min(1),
        name: z.string().min(1),
        visualReference: z.string().min(1).optional(),
        imageRefs: z.array(z.string().min(1)).default([]),
        availability: z
          .enum(["available", "onRequest", "unavailable", "unknown"])
          .default("unknown"),
      }),
    )
    .default([]),
  price: priceSchema.optional(),
  cta: z.object({
    quote: z.boolean(),
    testRide: z.boolean(),
    whatsapp: z.boolean(),
    dealer: z.boolean(),
  }),
  verification: verificationSchema,
  locale: z.literal("es-UY").default("es-UY"),
});

export type Product = z.infer<typeof productSchema>;
export type Verification = z.infer<typeof verificationSchema>;

export const experienceSourceStatusSchema = z.enum([
  "official",
  "publicOfficial",
  "proposal",
  "needsClientValidation",
]);

const experienceSectionSchema = z.object({
  id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  eyebrow: z.string().min(1).optional(),
  title: z.string().min(1),
  body: z.string().min(1),
  emphasis: z.string().min(1).optional(),
  items: z
    .array(
      z.object({
        title: z.string().min(1),
        body: z.string().min(1),
      }),
    )
    .max(6)
    .default([]),
  sourceStatus: experienceSourceStatusSchema,
});

export const experienceSchema = z.object({
  slug: z.enum(["racing", "adventure", "tecnologia", "comunidad"]),
  title: z.string().min(1),
  descriptor: z.string().min(1),
  mode: z.enum(["racing", "adventure", "technology", "community"]),
  hero: z.object({
    eyebrow: z.string().min(1),
    statement: z.string().min(1),
    supportingText: z.string().min(1),
    visualMode: z.enum(["velocity", "terrain", "precision", "human"]),
    sourceStatus: experienceSourceStatusSchema,
  }),
  sections: z.array(experienceSectionSchema).min(1),
  relatedProducts: z.array(z.string().min(1)).max(4).default([]),
  sourceStatus: experienceSourceStatusSchema,
  sourceReferences: z
    .array(
      z.object({
        label: z.string().min(1),
        url: z.url().optional(),
      }),
    )
    .default([]),
});

export type Experience = z.infer<typeof experienceSchema>;

const locationContactSchema = z.object({
  display: z.string().min(1),
  hrefValue: z.string().regex(/^\+?[0-9]+$/),
});

export const locationSchema = z.object({
  name: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  department: z.string().min(1),
  locality: z.string().min(1),
  address: z.string().min(1),
  phone: locationContactSchema,
  whatsapp: locationContactSchema.optional(),
  coordinates: z
    .object({
      latitude: z.number().min(-90).max(90),
      longitude: z.number().min(-180).max(180),
    })
    .optional(),
  hours: z
    .array(
      z.object({
        days: z.string().min(1),
        schedule: z.string().min(1),
      }),
    )
    .optional(),
  capabilities: z.object({
    sales: z.literal(true).optional(),
    service: z.literal(true).optional(),
    parts: z.literal(true).optional(),
    testRide: z.literal(true).optional(),
  }),
  source: z.object({
    type: z.literal("publicCurrentSite"),
    url: z.url(),
    capturedAt: z.coerce.date(),
  }),
  verificationStatus: verificationStatusSchema,
  verifiedAt: z.coerce.date().optional(),
  sourceNote: z.string().min(1).optional(),
});

export type Location = z.infer<typeof locationSchema>;

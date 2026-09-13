import { z } from "astro/zod";

export const verificationStatusSchema = z.enum([
  "verified",
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
  compareAttributes: z.array(specificationSchema).default([]),
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

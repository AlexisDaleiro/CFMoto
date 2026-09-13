import {
  formatSpecification,
  getProductHref,
  isVerifiedSpecification,
  type ProductEntry,
} from "@/lib/products";

export const compareGroupLabels = {
  engine: "Motor",
  chassis: "Chasis",
  dimensions: "Dimensiones",
  electronics: "Electrónica",
  capacities: "Capacidades",
} as const;

export interface CompareAttributeValue {
  key: string;
  label: string;
  group: keyof typeof compareGroupLabels;
  priority: number;
  display: string;
  state: "available" | "notInformed" | "notAvailable" | "notApplicable";
}

export const getCompareAttributes = (
  product: ProductEntry,
): CompareAttributeValue[] =>
  product.data.compareAttributes
    .map((reference) => {
      const specification = product.data.specifications.find(
        (item) => item.key === reference.key,
      );
      if (!specification || specification.verification.status !== "verified")
        return undefined;

      const display = isVerifiedSpecification(specification)
        ? formatSpecification(specification)
        : specification.status === "notInformed"
          ? "No informado"
          : specification.status === "notAvailable"
            ? "No disponible"
            : "No aplica";

      return {
        key: reference.key,
        label: specification.label,
        group: specification.group,
        priority: reference.priority,
        display,
        state: specification.status,
      };
    })
    .filter((item): item is CompareAttributeValue => Boolean(item))
    .sort((a, b) => a.priority - b.priority);

export const toCompareProduct = (product: ProductEntry) => ({
  slug: product.data.slug,
  name: product.data.name,
  category: product.data.category,
  family: product.data.family,
  href: getProductHref(product),
  attributes: getCompareAttributes(product),
});

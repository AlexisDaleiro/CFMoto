import type { CollectionEntry } from "astro:content";

export type LocationEntry = CollectionEntry<"locations">;
export type LocationCapability = keyof LocationEntry["data"]["capabilities"];

export const capabilityLabels: Record<LocationCapability, string> = {
  sales: "Ventas",
  service: "Service",
  parts: "Repuestos",
  testRide: "Test ride",
};

export const hasLocationCapability = (
  location: LocationEntry,
  capability: LocationCapability,
) => location.data.capabilities[capability] === true;

export const getDirectionsHref = (location: LocationEntry) => {
  const query = [
    location.data.name,
    location.data.address,
    location.data.locality,
    location.data.department,
    "Uruguay",
  ].join(", ");
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
};

export const normalizeSearchText = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es-UY")
    .trim();

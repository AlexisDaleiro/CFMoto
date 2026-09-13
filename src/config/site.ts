interface SiteConfig {
  name: string;
  locale: "es-UY";
  defaultTitle: string;
  defaultDescription: string;
  baseUrl: string | null;
  allowIndexing: boolean;
}

export const siteConfig: SiteConfig = {
  name: "CFMOTO Uruguay",
  locale: "es-UY",
  defaultTitle: "CFMOTO Uruguay",
  defaultDescription: "Explorá motos, ATV y Side-by-Side de CFMOTO Uruguay.",
  baseUrl: null,
  allowIndexing: false,
};

import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  output: "static",
  trailingSlash: "always",
  image: {
    layout: "constrained",
    responsiveStyles: true,
  },
  fonts: [
    {
      name: "Barlow Condensed",
      cssVariable: "--font-display-loaded",
      provider: fontProviders.fontsource(),
      weights: ["100 900"],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["Arial Narrow", "Arial", "sans-serif"],
    },
    {
      name: "Inter",
      cssVariable: "--font-ui-loaded",
      provider: fontProviders.fontsource(),
      weights: ["100 900"],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["Arial", "sans-serif"],
    },
  ],
});

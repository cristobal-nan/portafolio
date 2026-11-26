import type { MetadataRoute } from "next";
import { PROJECT_SLUGS, siteConfig } from "@/content/site";
import { getHomePath, getProjectPath } from "@/lib/i18n";

export const dynamic = "force-static";

function toAbsoluteUrl(path: string): string {
  const base = siteConfig.siteUrl.replace(/\/+$/, "");
  return path === "/" ? base : `${base}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const homeEntry: MetadataRoute.Sitemap[number] = {
    url: toAbsoluteUrl(getHomePath("es")),
    lastModified,
    changeFrequency: "monthly",
    priority: 1,
    alternates: {
      languages: {
        es: toAbsoluteUrl(getHomePath("es")),
        en: toAbsoluteUrl(getHomePath("en")),
      },
    },
  };

  const enHomeEntry: MetadataRoute.Sitemap[number] = {
    url: toAbsoluteUrl(getHomePath("en")),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.9,
    alternates: {
      languages: {
        es: toAbsoluteUrl(getHomePath("es")),
        en: toAbsoluteUrl(getHomePath("en")),
      },
    },
  };

  const projectEntries: MetadataRoute.Sitemap = PROJECT_SLUGS.flatMap(
    (slug) => {
      const esUrl = toAbsoluteUrl(getProjectPath("es", slug));
      const enUrl = toAbsoluteUrl(getProjectPath("en", slug));

      return [
        {
          url: esUrl,
          lastModified,
          changeFrequency: "monthly" as const,
          priority: 0.8,
          alternates: {
            languages: { es: esUrl, en: enUrl },
          },
        },
        {
          url: enUrl,
          lastModified,
          changeFrequency: "monthly" as const,
          priority: 0.7,
          alternates: {
            languages: { es: esUrl, en: enUrl },
          },
        },
      ];
    }
  );

  return [homeEntry, enHomeEntry, ...projectEntries];
}

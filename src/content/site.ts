import type { ProjectSlug, SiteConfig } from "@/content/types";

export const PROJECT_SLUGS: readonly ProjectSlug[] = [
  "mavepos",
  "udp-attendance",
  // "data2o-cdp-integrations", // Preservado en repositorio; deshabilitado temporalmente
  "collectibles-app",
] as const;

export const siteConfig: SiteConfig = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://cristobal-nanjari.vercel.app",
  authorName: "Cristóbal Nanjarí",
  authorNameIsPlaceholder: false,
  email: "cristobal.nan@gmail.com",
  emailIsPlaceholder: false,
  location: {
    es: "Santiago, Chile",
    en: "Santiago, Chile",
  },
  cv: {
    href: "/cv/cv.pdf",
    fileName: "CV_Cristobal_Nanjari.pdf",
    available: true,
    languageTag: "ES",
  },
  social: {
    github: {
      url: "https://github.com/cristobal-nan",
      handlePlaceholder: "github.com/cristobal-nan",
    },
    linkedin: {
      url: "https://www.linkedin.com/in/crist%C3%B3bal-nanjar%C3%AD-100377109",
      handlePlaceholder: "linkedin.com/in/cristóbal-nanjarí-100377109",
    },
  },
};

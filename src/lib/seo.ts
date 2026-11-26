import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import type { ProfileContent, ProjectCaseStudy, UiDictionary } from "@/content/types";
import { getHomePath, getProjectPath, type Locale } from "@/lib/i18n";

function toAbsoluteUrl(path: string): string {
  const base = siteConfig.siteUrl.replace(/\/+$/, "");
  return path === "/" ? base : `${base}${path}`;
}

export function buildHomeMetadata(locale: Locale, ui: UiDictionary): Metadata {
  const canonicalPath = getHomePath(locale);
  const esUrl = toAbsoluteUrl(getHomePath("es"));
  const enUrl = toAbsoluteUrl(getHomePath("en"));

  return {
    title: ui.seo.homeTitle,
    description: ui.seo.homeDescription,
    alternates: {
      canonical: toAbsoluteUrl(canonicalPath),
      languages: {
        es: esUrl,
        en: enUrl,
        "x-default": esUrl,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_CL" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_CL",
      url: toAbsoluteUrl(canonicalPath),
      siteName: ui.seo.siteName,
      title: ui.seo.homeTitle,
      description: ui.seo.homeDescription,
    },
    twitter: {
      card: "summary",
      title: ui.seo.homeTitle,
      description: ui.seo.homeDescription,
    },
  };
}

export function buildProjectMetadata(
  locale: Locale,
  ui: UiDictionary,
  project: ProjectCaseStudy
): Metadata {
  const canonicalPath = getProjectPath(locale, project.slug);
  const esUrl = toAbsoluteUrl(getProjectPath("es", project.slug));
  const enUrl = toAbsoluteUrl(getProjectPath("en", project.slug));

  return {
    title: `${project.seo.title} — ${ui.seo.siteName}`,
    description: project.seo.description,
    alternates: {
      canonical: toAbsoluteUrl(canonicalPath),
      languages: {
        es: esUrl,
        en: enUrl,
        "x-default": esUrl,
      },
    },
    openGraph: {
      type: "article",
      locale: locale === "es" ? "es_CL" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_CL",
      url: toAbsoluteUrl(canonicalPath),
      siteName: ui.seo.siteName,
      title: project.seo.title,
      description: project.seo.description,
    },
    twitter: {
      card: "summary",
      title: project.seo.title,
      description: project.seo.description,
    },
  };
}

export function buildPersonJsonLd(locale: Locale, profile: ProfileContent) {
  const sameAs = [
    siteConfig.social.github.url,
    siteConfig.social.linkedin.url,
  ].filter((url): url is string => Boolean(url));

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorNameIsPlaceholder
      ? profile.hero.eyebrow
      : siteConfig.authorName,
    jobTitle: profile.hero.targetRoles.join(" / "),
    url: toAbsoluteUrl(getHomePath(locale)),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function buildProjectJsonLd(locale: Locale, project: ProjectCaseStudy) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.seo.description,
    inLanguage: locale,
    url: toAbsoluteUrl(getProjectPath(locale, project.slug)),
  };
}

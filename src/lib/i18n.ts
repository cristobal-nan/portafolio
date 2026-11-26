export type Locale = "es" | "en";

export const DEFAULT_LOCALE: Locale = "es";
export const LOCALES: readonly Locale[] = ["es", "en"] as const;

export function isLocale(value: string): value is Locale {
  return value === "es" || value === "en";
}

export function getHomePath(locale: Locale): string {
  return locale === "es" ? "/" : "/en";
}

export function getProjectPath(locale: Locale, slug: string): string {
  return locale === "es" ? `/projects/${slug}` : `/en/projects/${slug}`;
}

export function getSectionPath(locale: Locale, sectionId: string): string {
  const base = getHomePath(locale);
  return base === "/" ? `/#${sectionId}` : `${base}#${sectionId}`;
}

export function switchLocalePath(pathname: string, targetLocale: Locale): string {
  const normalized = pathname.replace(/\/+$/, "") || "/";

  if (targetLocale === "en") {
    if (normalized === "/en" || normalized.startsWith("/en/")) {
      return normalized;
    }
    return normalized === "/" ? "/en" : `/en${normalized}`;
  }

  // targetLocale === "es"
  if (normalized === "/en") {
    return "/";
  }
  if (normalized.startsWith("/en/")) {
    return normalized.slice(3) || "/";
  }
  return normalized;
}

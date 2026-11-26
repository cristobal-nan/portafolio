import { profileEn } from "@/content/locales/en/profile";
import { projectsEn } from "@/content/locales/en/projects";
import { uiEn } from "@/content/locales/en/ui";
import { profileEs } from "@/content/locales/es/profile";
import { projectsEs } from "@/content/locales/es/projects";
import { uiEs } from "@/content/locales/es/ui";
import type {
  ProfileContent,
  ProjectCaseStudy,
  UiDictionary,
} from "@/content/types";
import type { Locale } from "@/lib/i18n";

const contentByLocale: Record<
  Locale,
  {
    ui: UiDictionary;
    profile: ProfileContent;
    projects: ProjectCaseStudy[];
  }
> = {
  es: {
    ui: uiEs,
    profile: profileEs,
    projects: projectsEs,
  },
  en: {
    ui: uiEn,
    profile: profileEn,
    projects: projectsEn,
  },
};

export function getUi(locale: Locale): UiDictionary {
  return contentByLocale[locale].ui;
}

export function getProfile(locale: Locale): ProfileContent {
  return contentByLocale[locale].profile;
}

export function getProjects(locale: Locale): ProjectCaseStudy[] {
  return contentByLocale[locale].projects;
}

export function getProjectBySlug(
  locale: Locale,
  slug: string
): ProjectCaseStudy | undefined {
  return contentByLocale[locale].projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(locale: Locale, slug: string): {
  previous: ProjectCaseStudy | null;
  next: ProjectCaseStudy | null;
} {
  const projects = contentByLocale[locale].projects;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) {
    return { previous: null, next: null };
  }
  return {
    previous: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}

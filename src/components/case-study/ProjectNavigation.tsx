import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/ui/Icons";
import type { ProjectCaseStudy, UiDictionary } from "@/content/types";
import { getProjectPath, type Locale } from "@/lib/i18n";

interface ProjectNavigationProps {
  locale: Locale;
  ui: UiDictionary;
  previous: ProjectCaseStudy | null;
  next: ProjectCaseStudy | null;
}

export function ProjectNavigation({
  locale,
  ui,
  previous,
  next,
}: ProjectNavigationProps) {
  return (
    <nav
      aria-label={
        locale === "es" ? "Navegación entre proyectos" : "Project navigation"
      }
      className="mt-14 grid gap-4 border-t border-border-subtle pt-10 sm:grid-cols-2"
    >
      {previous ? (
        <Link
          href={getProjectPath(locale, previous.slug)}
          className="group flex flex-col rounded-xl border border-border-subtle bg-surface p-5 transition-colors hover:border-border-strong"
        >
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted">
            <ArrowLeftIcon className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            {ui.actions.previousProject}
          </span>
          <span className="mt-2 text-base font-semibold text-primary">
            {previous.shortTitle}
          </span>
        </Link>
      ) : (
        <div className="hidden sm:block" />
      )}

      {next ? (
        <Link
          href={getProjectPath(locale, next.slug)}
          className="group flex flex-col items-end rounded-xl border border-border-subtle bg-surface p-5 text-right transition-colors hover:border-border-strong"
        >
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted">
            {ui.actions.nextProject}
            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
          <span className="mt-2 text-base font-semibold text-primary">
            {next.shortTitle}
          </span>
        </Link>
      ) : null}
    </nav>
  );
}

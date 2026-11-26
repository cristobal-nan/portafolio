import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
  DocumentIcon,
  PlayIcon,
} from "@/components/ui/Icons";
import type { ProjectCaseStudy, UiDictionary } from "@/content/types";
import { getSectionPath, type Locale } from "@/lib/i18n";

interface CaseStudyHeaderProps {
  locale: Locale;
  ui: UiDictionary;
  project: ProjectCaseStudy;
}

export function CaseStudyHeader({
  locale,
  ui,
  project,
}: CaseStudyHeaderProps) {
  const visibleLinks = project.links.filter(
    (item) => !(item.type === "demo" && !item.href)
  );

  return (
    <header className="border-b border-border-subtle pb-10">
      <Link
        href={getSectionPath(locale, "projects")}
        className="inline-flex items-center gap-2 text-sm text-secondary transition-colors hover:text-primary"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        <span>{ui.actions.backToProjects}</span>
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <Badge>{project.category}</Badge>
        <Badge
          variant={project.depth === "very-detailed" ? "accent" : "default"}
        >
          {project.depthLabel}
        </Badge>
        {project.confidentialityNote ? (
          <Badge variant="accent">{ui.actions.confidentialBadge}</Badge>
        ) : null}
      </div>

      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
        {project.title}
      </h1>

      <p className="mt-4 max-w-3xl text-base leading-7 text-secondary sm:text-lg">
        {project.tagline}
      </p>

      {project.confidentialityNote ? (
        <aside
          aria-label={ui.actions.confidentialBadge}
          className="mt-6 rounded-lg border border-accent/25 bg-accent-soft/60 p-4 text-sm leading-6 text-primary"
        >
          {project.confidentialityNote}
        </aside>
      ) : null}

      <dl className="mt-8 grid gap-4 rounded-xl border border-border-subtle bg-surface p-5 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <dt className="font-mono text-xs text-muted uppercase">
            {ui.caseStudyLabels.organization}
          </dt>
          <dd className="mt-1.5 text-sm font-medium text-primary">
            {project.organization}
          </dd>
        </div>
        <div>
          <dt className="font-mono text-xs text-muted uppercase">
            {ui.caseStudyLabels.role}
          </dt>
          <dd className="mt-1.5 text-sm font-medium text-primary">
            {project.role}
          </dd>
        </div>
        <div>
          <dt className="font-mono text-xs text-muted uppercase">
            {ui.caseStudyLabels.period}
          </dt>
          <dd className="mt-1.5 font-mono text-sm text-primary tabular-nums">
            {project.period}
          </dd>
        </div>
        <div>
          <dt className="font-mono text-xs text-muted uppercase">
            {ui.caseStudyLabels.status}
          </dt>
          <dd className="mt-1.5 text-sm font-medium text-primary">
            {project.status}
          </dd>
        </div>
      </dl>

      {project.keyMetrics && project.keyMetrics.length > 0 ? (
        <dl className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {project.keyMetrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-border-subtle bg-subtle/40 p-4"
            >
              <dt className="font-mono text-[11px] text-muted uppercase">
                {metric.label}
              </dt>
              <dd className="mt-1.5 font-mono text-lg font-semibold text-primary tabular-nums">
                {metric.value}
              </dd>
              {metric.note ? (
                <p className="mt-1 text-xs leading-5 text-secondary">
                  {metric.note}
                </p>
              ) : null}
            </div>
          ))}
        </dl>
      ) : null}

      {visibleLinks.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-3">
          {visibleLinks.map((item) => {
            const Icon =
              item.type === "demo"
                ? PlayIcon
                : item.type === "document"
                  ? DocumentIcon
                  : ArrowUpRightIcon;

            if (item.href) {
              const isLocalPdf = item.href.endsWith(".pdf");
              return (
                <ButtonLink
                  key={item.label}
                  href={item.href}
                  external={!isLocalPdf}
                  download={isLocalPdf}
                  variant={item.type === "demo" ? "primary" : "secondary"}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </ButtonLink>
              );
            }

            return (
              <span
                key={item.label}
                title={item.placeholderNote}
                className="inline-flex items-center gap-2 rounded-lg border border-dashed border-border-strong bg-subtle/50 px-3.5 py-2 text-xs text-muted"
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{item.label}</span>
                <span className="font-mono text-[11px]">
                  ({ui.actions.pendingBadge})
                </span>
              </span>
            );
          })}
        </div>
      ) : null}
    </header>
  );
}

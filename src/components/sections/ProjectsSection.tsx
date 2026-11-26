import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { ProjectCaseStudy, UiDictionary } from "@/content/types";
import { getProjectPath, type Locale } from "@/lib/i18n";

interface ProjectsSectionProps {
  locale: Locale;
  ui: UiDictionary;
  projects: ProjectCaseStudy[];
}

export function ProjectsSection({
  locale,
  ui,
  projects,
}: ProjectsSectionProps) {
  return (
    <section id="projects" className="border-t border-border-subtle py-16 sm:py-20">
      <Container>
        <SectionHeader
          index={ui.sections.projects.index}
          title={ui.sections.projects.title}
          subtitle={ui.sections.projects.subtitle}
        />

        <div className="grid gap-6 md:grid-cols-2">
          {(() => {
            const intermediateCount = projects.filter(
              (item) => item.depth === "intermediate"
            ).length;

            return projects.map((project, index) => {
              const isWide =
                project.depth === "very-detailed" ||
                project.depth === "detailed" ||
                intermediateCount === 1;

              return (
              <article
                key={project.slug}
                className={`group relative flex flex-col justify-between rounded-xl border border-border-subtle bg-surface p-6 transition-colors hover:border-border-strong ${
                  isWide ? "md:col-span-2 sm:p-7" : ""
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs text-muted tabular-nums">
                      {String(index + 1).padStart(2, "0")} · {project.category}
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge
                        variant={
                          project.depth === "very-detailed"
                            ? "accent"
                            : "default"
                        }
                      >
                        {project.depthLabel}
                      </Badge>
                      {project.confidentialityNote ? (
                        <Badge variant="accent">
                          {ui.actions.confidentialBadge}
                        </Badge>
                      ) : null}
                    </div>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-primary sm:text-2xl">
                    <Link
                      href={getProjectPath(locale, project.slug)}
                      className="after:absolute after:inset-0 focus:outline-none"
                    >
                      {project.title}
                    </Link>
                  </h3>

                  <p className="mt-1.5 font-mono text-xs text-muted">
                    {project.organization}
                  </p>

                  <p className="mt-4 max-w-3xl text-sm leading-6 text-secondary">
                    {project.summary}
                  </p>

                  {project.keyMetrics && project.keyMetrics.length > 0 ? (
                    <dl className="mt-5 grid gap-3 rounded-lg border border-border-subtle bg-subtle/50 p-4 sm:grid-cols-2 lg:grid-cols-4">
                      {project.keyMetrics.map((metric) => (
                        <div key={metric.label}>
                          <dt className="font-mono text-[11px] text-muted uppercase">
                            {metric.label}
                          </dt>
                          <dd className="mt-1 font-mono text-base font-semibold text-primary tabular-nums">
                            {metric.value}
                          </dd>
                          {metric.note ? (
                            <p className="mt-0.5 text-xs leading-4 text-secondary">
                              {metric.note}
                            </p>
                          ) : null}
                        </div>
                      ))}
                    </dl>
                  ) : null}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.featuredTags.map((tag) => (
                      <Badge
                        key={tag.label}
                        variant={tag.isPlaceholder ? "placeholder" : "default"}
                      >
                        {tag.label}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 border-t border-border-subtle pt-4 text-sm font-medium text-accent">
                  <span>{ui.actions.viewCaseStudy}</span>
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </article>
              );
            });
          })()}
        </div>
      </Container>
    </section>
  );
}

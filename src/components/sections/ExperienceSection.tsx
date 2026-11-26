import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PROJECT_SLUGS } from "@/content/site";
import type { ExperienceItem, UiDictionary } from "@/content/types";
import { getProjectPath, type Locale } from "@/lib/i18n";

interface ExperienceSectionProps {
  locale: Locale;
  ui: UiDictionary;
  experience: ExperienceItem[];
}

export function ExperienceSection({
  locale,
  ui,
  experience,
}: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      className="border-t border-border-subtle py-16 sm:py-20"
    >
      <Container>
        <SectionHeader
          index={ui.sections.experience.index}
          title={ui.sections.experience.title}
          subtitle={ui.sections.experience.subtitle}
        />

        <div className="divide-y divide-border-subtle border-y border-border-subtle">
          {experience.map((item) => (
            <article
              key={item.id}
              className={`grid gap-4 py-8 md:grid-cols-[220px_minmax(0,1fr)] md:gap-8 ${
                item.isPlaceholder ? "opacity-85" : ""
              }`}
            >
              <div className="space-y-1">
                <p className="font-mono text-xs text-muted tabular-nums">
                  {item.period}
                </p>
                {item.location ? (
                  <p className="font-mono text-xs text-muted">
                    {item.location}
                  </p>
                ) : null}
                {item.isPlaceholder ? (
                  <div className="pt-1">
                    <Badge variant="placeholder">{ui.actions.pendingBadge}</Badge>
                  </div>
                ) : null}
              </div>

              <div>
                <h3 className="text-lg font-semibold tracking-tight text-primary">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {item.organization}
                </p>

                <p
                  className={`mt-4 text-sm leading-6 ${
                    item.summary.isPlaceholder
                      ? "rounded-lg border border-dashed border-border-strong bg-subtle/40 p-3 text-secondary"
                      : "text-secondary"
                  }`}
                >
                  {item.summary.text}
                </p>

                <ul className="mt-4 space-y-2.5 text-sm leading-6 text-secondary">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-border-strong"
                      />
                      <span>{highlight.text}</span>
                    </li>
                  ))}
                </ul>

                {item.relatedProjectSlug &&
                PROJECT_SLUGS.includes(item.relatedProjectSlug) ? (
                  <div className="mt-5">
                    <Link
                      href={getProjectPath(locale, item.relatedProjectSlug)}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                    >
                      <span>{ui.actions.viewCaseStudy}</span>
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

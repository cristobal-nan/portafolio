import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type {
  EducationItem,
  LanguageProficiency,
  UiDictionary,
} from "@/content/types";
import type { Locale } from "@/lib/i18n";

interface EducationSectionProps {
  locale: Locale;
  ui: UiDictionary;
  education: EducationItem[];
  languages: LanguageProficiency[];
}

export function EducationSection({
  locale,
  ui,
  education,
  languages,
}: EducationSectionProps) {
  return (
    <section
      id="education"
      className="border-t border-border-subtle py-16 sm:py-20"
    >
      <Container>
        <SectionHeader
          index={ui.sections.education.index}
          title={ui.sections.education.title}
          subtitle={ui.sections.education.subtitle}
        />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="space-y-4">
            {education.map((item) => (
              <article
                key={item.id}
                className="rounded-xl border border-border-subtle bg-surface p-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold tracking-tight text-primary">
                    {item.degree}
                  </h3>
                  <span className="font-mono text-xs text-muted tabular-nums">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-accent">
                  {item.institution}
                </p>

                <ul className="mt-4 space-y-2 text-sm leading-6 text-secondary">
                  {item.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className={
                        detail.isPlaceholder
                          ? "rounded-lg border border-dashed border-border-strong bg-subtle/40 p-3"
                          : ""
                      }
                    >
                      {detail.text}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <aside className="rounded-xl border border-border-subtle bg-surface p-6">
            <h3 className="font-mono text-xs tracking-wider text-muted uppercase">
              {locale === "es" ? "Idiomas" : "Languages"}
            </h3>
            <ul className="mt-4 divide-y divide-border-subtle">
              {languages.map((lang) => (
                <li
                  key={lang.language}
                  className="flex flex-col gap-1.5 py-3 first:pt-0 last:pb-0"
                >
                  <span className="text-sm font-medium text-primary">
                    {lang.language}
                  </span>
                  {lang.isPlaceholder ? (
                    <Badge variant="placeholder" className="w-fit">
                      {lang.level}
                    </Badge>
                  ) : (
                    <span className="text-sm text-secondary">{lang.level}</span>
                  )}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  );
}

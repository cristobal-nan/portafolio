import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { SkillGroup, UiDictionary } from "@/content/types";

interface SkillsSectionProps {
  ui: UiDictionary;
  skills: SkillGroup[];
}

export function SkillsSection({ ui, skills }: SkillsSectionProps) {
  return (
    <section
      id="skills"
      className="border-t border-border-subtle py-16 sm:py-20"
    >
      <Container>
        <SectionHeader
          index={ui.sections.skills.index}
          title={ui.sections.skills.title}
          subtitle={ui.sections.skills.subtitle}
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.id}
              className="rounded-xl border border-border-subtle bg-surface p-6"
            >
              <h3 className="text-base font-semibold tracking-tight text-primary">
                {group.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-secondary">
                {group.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Badge
                      variant={item.isPlaceholder ? "placeholder" : "default"}
                    >
                      {item.label}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

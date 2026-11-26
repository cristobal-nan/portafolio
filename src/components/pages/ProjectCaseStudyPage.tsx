import { notFound } from "next/navigation";
import { ArchitectureBlock } from "@/components/case-study/ArchitectureBlock";
import { CaseStudyHeader } from "@/components/case-study/CaseStudyHeader";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import {
  CaseStudyToc,
  type TocEntry,
} from "@/components/case-study/CaseStudyToc";
import { ChallengesList } from "@/components/case-study/ChallengesList";
import { DesignSystemBlock } from "@/components/case-study/DesignSystemBlock";
import { MediaGallery } from "@/components/case-study/MediaGallery";
import { ProjectNavigation } from "@/components/case-study/ProjectNavigation";
import { ResultsGrid } from "@/components/case-study/ResultsGrid";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { FormattedText } from "@/components/ui/FormattedText";
import { PlaceholderBlock } from "@/components/ui/PlaceholderBlock";
import {
  getAdjacentProjects,
  getProjectBySlug,
  getUi,
} from "@/content";
import type { ContentText } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { buildProjectJsonLd } from "@/lib/seo";

interface ProjectCaseStudyPageProps {
  locale: Locale;
  slug: string;
}

function TextBlocks({
  items,
  pendingBadge,
}: {
  items: ContentText[];
  pendingBadge: string;
}) {
  return (
    <div className="space-y-4">
      {items.map((item, idx) =>
        item.isPlaceholder ? (
          <PlaceholderBlock
            key={idx}
            badgeLabel={pendingBadge}
            description={item.text}
            checklistRef={item.checklistRef}
          />
        ) : (
          <p key={idx} className="text-base leading-7 text-secondary">
            <FormattedText text={item.text} />
          </p>
        )
      )}
    </div>
  );
}

export function ProjectCaseStudyPage({
  locale,
  slug,
}: ProjectCaseStudyPageProps) {
  const project = getProjectBySlug(locale, slug);
  if (!project) {
    notFound();
  }

  const ui = getUi(locale);
  const { previous, next } = getAdjacentProjects(locale, slug);
  const jsonLd = buildProjectJsonLd(locale, project);
  const visibleMedia = project.media.filter(
    (item) => !(item.kind === "video-demo" && !item.src && !item.externalUrl)
  );

  const tocEntries: TocEntry[] = [
    { id: "context", label: ui.caseStudyLabels.context },
    { id: "problem", label: ui.caseStudyLabels.problem },
    { id: "solution", label: ui.caseStudyLabels.solution },
    { id: "responsibilities", label: ui.caseStudyLabels.responsibilities },
    { id: "technologies", label: ui.caseStudyLabels.technologies },
    { id: "architecture", label: ui.caseStudyLabels.architecture },
    ...(project.designSystem
      ? [{ id: "design-system", label: ui.caseStudyLabels.designSystem }]
      : []),
    { id: "challenges", label: ui.caseStudyLabels.challenges },
    { id: "results", label: ui.caseStudyLabels.results },
    ...(visibleMedia.length > 0
      ? [{ id: "media", label: ui.caseStudyLabels.media }]
      : []),
  ];

  let sectionNum = 0;
  const nextIndex = () => String(++sectionNum).padStart(2, "0");

  return (
    <article className="py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Container>
        <CaseStudyHeader locale={locale} ui={ui} project={project} />

        <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_220px]">
          <div className="min-w-0">
            <CaseStudySection
              id="context"
              index={nextIndex()}
              title={ui.caseStudyLabels.context}
            >
              <TextBlocks
                items={project.context}
                pendingBadge={ui.actions.pendingBadge}
              />
            </CaseStudySection>

            <CaseStudySection
              id="problem"
              index={nextIndex()}
              title={ui.caseStudyLabels.problem}
            >
              <TextBlocks
                items={project.problem}
                pendingBadge={ui.actions.pendingBadge}
              />
            </CaseStudySection>

            <CaseStudySection
              id="solution"
              index={nextIndex()}
              title={ui.caseStudyLabels.solution}
            >
              <TextBlocks
                items={project.solution}
                pendingBadge={ui.actions.pendingBadge}
              />

              {project.differentiators && project.differentiators.length > 0 ? (
                <div className="mt-6 space-y-3 border-t border-border-subtle pt-6">
                  <h3 className="text-base font-semibold tracking-tight text-primary">
                    {ui.caseStudyLabels.differentiators}
                  </h3>
                  <TextBlocks
                    items={project.differentiators}
                    pendingBadge={ui.actions.pendingBadge}
                  />
                </div>
              ) : null}
            </CaseStudySection>

            <CaseStudySection
              id="responsibilities"
              index={nextIndex()}
              title={ui.caseStudyLabels.responsibilities}
            >
              <TextBlocks
                items={project.responsibilities}
                pendingBadge={ui.actions.pendingBadge}
              />
            </CaseStudySection>

            <CaseStudySection
              id="technologies"
              index={nextIndex()}
              title={ui.caseStudyLabels.technologies}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {project.technologies.map((techGroup) => (
                  <div
                    key={techGroup.group}
                    className={`rounded-xl border p-4 ${
                      techGroup.isPlaceholder
                        ? "border-dashed border-border-strong bg-subtle/30"
                        : "border-border-subtle bg-surface"
                    }`}
                  >
                    <h3 className="font-mono text-xs text-muted uppercase">
                      {techGroup.group}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {techGroup.items.map((tech) => (
                        <Badge
                          key={tech}
                          variant={
                            techGroup.isPlaceholder ? "placeholder" : "default"
                          }
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CaseStudySection>

            <CaseStudySection
              id="architecture"
              index={nextIndex()}
              title={ui.caseStudyLabels.architecture}
            >
              <ArchitectureBlock ui={ui} architecture={project.architecture} />
            </CaseStudySection>

            {project.designSystem ? (
              <CaseStudySection
                id="design-system"
                index={nextIndex()}
                title={ui.caseStudyLabels.designSystem}
              >
                <DesignSystemBlock
                  ui={ui}
                  designSystem={project.designSystem}
                />
              </CaseStudySection>
            ) : null}

            <CaseStudySection
              id="challenges"
              index={nextIndex()}
              title={ui.caseStudyLabels.challenges}
            >
              <ChallengesList ui={ui} challenges={project.challenges} />
            </CaseStudySection>

            <CaseStudySection
              id="results"
              index={nextIndex()}
              title={ui.caseStudyLabels.results}
            >
              <ResultsGrid
                ui={ui}
                results={project.results}
                testSuiteBreakdown={project.testSuiteBreakdown}
                benchmarks={project.benchmarks}
                commercialMatrix={project.commercialMatrix}
              />
            </CaseStudySection>

            {visibleMedia.length > 0 ? (
              <CaseStudySection
                id="media"
                index={nextIndex()}
                title={ui.caseStudyLabels.media}
              >
                <MediaGallery ui={ui} items={visibleMedia} />
              </CaseStudySection>
            ) : null}
          </div>

          <aside className="hidden lg:block">
            <CaseStudyToc
              title={ui.actions.onThisPage}
              entries={tocEntries}
            />
          </aside>
        </div>

        <ProjectNavigation
          locale={locale}
          ui={ui}
          previous={previous}
          next={next}
        />
      </Container>
    </article>
  );
}

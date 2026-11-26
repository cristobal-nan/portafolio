import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { FormattedText } from "@/components/ui/FormattedText";
import { LayersIcon } from "@/components/ui/Icons";
import { PlaceholderBlock } from "@/components/ui/PlaceholderBlock";
import type { ProjectCaseStudy, UiDictionary } from "@/content/types";

interface ArchitectureBlockProps {
  ui: UiDictionary;
  architecture: ProjectCaseStudy["architecture"];
}

export function ArchitectureBlock({
  ui,
  architecture,
}: ArchitectureBlockProps) {
  const { overview, components, diagrams, adrs } = architecture;

  return (
    <div className="space-y-6">
      {overview.isPlaceholder ? (
        <PlaceholderBlock
          badgeLabel={ui.actions.pendingBadge}
          description={overview.text}
          checklistRef={overview.checklistRef}
        />
      ) : (
        <p className="text-base leading-7 text-secondary">
          <FormattedText text={overview.text} />
        </p>
      )}

      {diagrams.length > 0 ? (
        <div className="space-y-5">
          {diagrams.map((diagram) =>
            diagram.src ? (
              <figure
                key={diagram.id}
                className="overflow-hidden rounded-xl border border-border-subtle bg-surface"
              >
                <div className="bg-white p-3 sm:p-4">
                  <Image
                    src={diagram.src}
                    alt={diagram.alt || diagram.title}
                    width={1600}
                    height={900}
                    className="mx-auto h-auto max-h-[540px] w-auto max-w-full rounded-md object-contain"
                  />
                </div>
                <figcaption className="border-t border-border-subtle bg-subtle/40 px-4 py-3 text-xs leading-5 text-secondary">
                  <span className="font-medium text-primary">
                    {diagram.title}:{" "}
                  </span>
                  <FormattedText text={diagram.caption} />
                </figcaption>
              </figure>
            ) : (
              <div
                key={diagram.id}
                className="rounded-xl border border-dashed border-border-strong bg-subtle/40 p-6"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <LayersIcon className="h-4 w-4 text-muted" />
                  <span className="text-sm font-medium text-primary">
                    {diagram.title}
                  </span>
                  <Badge variant="placeholder">{ui.actions.pendingBadge}</Badge>
                </div>
                {diagram.checklistRef ? (
                  <p className="mt-2 font-mono text-xs text-muted">
                    {diagram.checklistRef}
                  </p>
                ) : null}
                <p className="mt-2 text-sm leading-6 text-secondary">
                  {diagram.caption}
                </p>
              </div>
            )
          )}
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-3">
        {components.map((component) => (
          <div
            key={component.name}
            className={`rounded-xl border p-4 ${
              component.isPlaceholder
                ? "border-dashed border-border-strong bg-subtle/30"
                : "border-border-subtle bg-surface"
            }`}
          >
            <p className="font-mono text-[11px] tracking-wider text-muted uppercase">
              {component.role}
            </p>
            <h3 className="mt-1.5 text-sm font-semibold text-primary">
              {component.name}
            </h3>
            <p className="mt-2 text-sm leading-6 text-secondary">
              <FormattedText text={component.details} />
            </p>
          </div>
        ))}
      </div>

      {adrs && adrs.length > 0 ? (
        <div className="space-y-3 pt-2">
          <h3 className="text-base font-semibold tracking-tight text-primary">
            {ui.caseStudyLabels.adrs}
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {adrs.map((adr) => (
              <div
                key={adr.id}
                className="rounded-xl border border-border-subtle bg-surface p-4"
              >
                <p className="font-mono text-xs font-medium text-accent">
                  {adr.id}
                </p>
                <h4 className="mt-1 text-sm font-semibold text-primary">
                  {adr.title}
                </h4>
                <p className="mt-1.5 text-xs leading-5 text-secondary">
                  <FormattedText text={adr.summary} />
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

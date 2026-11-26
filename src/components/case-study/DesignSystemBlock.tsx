import { FormattedText } from "@/components/ui/FormattedText";
import { PlaceholderBlock } from "@/components/ui/PlaceholderBlock";
import type { DesignSystemSpec, UiDictionary } from "@/content/types";

interface DesignSystemBlockProps {
  ui: UiDictionary;
  designSystem: DesignSystemSpec;
}

export function DesignSystemBlock({
  ui,
  designSystem,
}: DesignSystemBlockProps) {
  return (
    <div className="space-y-5">
      {designSystem.overview.isPlaceholder ? (
        <PlaceholderBlock
          badgeLabel={ui.actions.pendingBadge}
          description={designSystem.overview.text}
          checklistRef={designSystem.overview.checklistRef}
        />
      ) : (
        <p className="text-base leading-7 text-secondary">
          <FormattedText text={designSystem.overview.text} />
        </p>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        {designSystem.pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="rounded-xl border border-border-subtle bg-surface p-5"
          >
            <h3 className="text-sm font-semibold text-primary">
              {pillar.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-secondary">
              <FormattedText text={pillar.details} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

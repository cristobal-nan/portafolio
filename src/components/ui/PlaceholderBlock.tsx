import { Badge } from "@/components/ui/Badge";

interface PlaceholderBlockProps {
  badgeLabel: string;
  title?: string;
  description: string;
  checklistRef?: string;
  className?: string;
}

export function PlaceholderBlock({
  badgeLabel,
  title,
  description,
  checklistRef,
  className = "",
}: PlaceholderBlockProps) {
  return (
    <div
      className={`rounded-lg border border-dashed border-border-strong bg-subtle/50 p-4 sm:p-5 ${className}`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="placeholder">{badgeLabel}</Badge>
        {checklistRef ? (
          <span className="font-mono text-xs text-muted">{checklistRef}</span>
        ) : null}
      </div>
      {title ? (
        <p className="mt-2.5 text-sm font-medium text-primary">{title}</p>
      ) : null}
      <p className="mt-1.5 text-sm leading-6 text-secondary">{description}</p>
    </div>
  );
}

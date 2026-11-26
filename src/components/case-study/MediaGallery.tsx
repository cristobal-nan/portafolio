import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FormattedText } from "@/components/ui/FormattedText";
import {
  ArrowUpRightIcon,
  DocumentIcon,
  ImageIcon,
  LayersIcon,
  PlayIcon,
} from "@/components/ui/Icons";
import type { ProjectMediaItem, UiDictionary } from "@/content/types";

interface MediaGalleryProps {
  ui: UiDictionary;
  items: ProjectMediaItem[];
}

function MediaKindIcon({
  kind,
  className,
}: {
  kind: ProjectMediaItem["kind"];
  className?: string;
}) {
  switch (kind) {
    case "video-demo":
      return <PlayIcon className={className} />;
    case "architecture-diagram":
      return <LayersIcon className={className} />;
    case "document":
      return <DocumentIcon className={className} />;
    default:
      return <ImageIcon className={className} />;
  }
}

function MediaCard({
  ui,
  item,
}: {
  ui: UiDictionary;
  item: ProjectMediaItem;
}) {
  if (item.kind === "video-demo" && item.src) {
    return (
      <figure className="overflow-hidden rounded-xl border border-border-subtle bg-surface sm:col-span-2">
        <video
          controls
          preload="metadata"
          poster={item.poster}
          className="aspect-video w-full bg-black"
        >
          <source src={item.src} />
        </video>
        <figcaption className="border-t border-border-subtle p-4 text-sm text-secondary">
          <p className="font-medium text-primary">{item.title}</p>
          <p className="mt-1 text-xs leading-5">
            <FormattedText text={item.caption} />
          </p>
        </figcaption>
      </figure>
    );
  }

  if (item.src && item.kind !== "document") {
    const isPortrait = item.orientation === "portrait";
    return (
      <figure className="overflow-hidden rounded-xl border border-border-subtle bg-surface">
        <a
          href={item.src}
          target="_blank"
          rel="noopener noreferrer"
          className={`block overflow-hidden bg-subtle/40 ${
            isPortrait ? "p-4" : ""
          }`}
          title={item.title}
        >
          <Image
            src={item.src}
            alt={item.alt || item.title}
            width={isPortrait ? 900 : 1600}
            height={isPortrait ? 2000 : 900}
            className={
              isPortrait
                ? "mx-auto h-auto max-h-[420px] w-auto rounded-lg border border-border-subtle object-contain transition-opacity hover:opacity-95"
                : "h-auto w-full object-cover transition-opacity hover:opacity-95"
            }
          />
        </a>
        <figcaption className="border-t border-border-subtle p-4 text-sm text-secondary">
          <p className="font-medium text-primary">{item.title}</p>
          <p className="mt-1 text-xs leading-5">
            <FormattedText text={item.caption} />
          </p>
        </figcaption>
      </figure>
    );
  }

  if (item.externalUrl) {
    return (
      <div className="flex flex-col justify-between rounded-xl border border-border-subtle bg-surface p-5">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-muted uppercase">
            <MediaKindIcon kind={item.kind} className="h-4 w-4" />
            <span>{item.group || item.kind}</span>
          </div>
          <h4 className="mt-2.5 text-base font-semibold text-primary">
            {item.title}
          </h4>
          <p className="mt-1.5 text-sm leading-6 text-secondary">
            <FormattedText text={item.caption} />
          </p>
        </div>
        <div className="mt-4">
          <ButtonLink href={item.externalUrl} external variant="secondary">
            <span>{ui.caseStudyLabels.openResource}</span>
            <ArrowUpRightIcon className="h-4 w-4" />
          </ButtonLink>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between rounded-xl border border-dashed border-border-strong bg-subtle/40 p-5">
      <div>
        <div className="flex aspect-video items-center justify-center rounded-lg border border-dashed border-border-subtle bg-canvas/60">
          <div className="flex flex-col items-center gap-2 px-4 text-center text-muted">
            <MediaKindIcon kind={item.kind} className="h-6 w-6" />
            <span className="font-mono text-xs">
              {item.group || item.title}
            </span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Badge variant="placeholder">{ui.actions.pendingBadge}</Badge>
          {item.checklistRef ? (
            <span className="font-mono text-[11px] text-muted">
              {item.checklistRef}
            </span>
          ) : null}
        </div>

        <h4 className="mt-2 text-sm font-semibold text-primary">
          {item.title}
        </h4>
        <p className="mt-1 text-xs leading-5 text-secondary">
          <FormattedText text={item.caption} />
        </p>
      </div>
    </div>
  );
}

export function MediaGallery({ ui, items }: MediaGalleryProps) {
  const visibleItems = items.filter(
    (item) => !(item.kind === "video-demo" && !item.src && !item.externalUrl)
  );

  const groups = new Map<string, ProjectMediaItem[]>();

  for (const item of visibleItems) {
    const key = item.group || "__default__";
    const existing = groups.get(key);
    if (existing) {
      existing.push(item);
    } else {
      groups.set(key, [item]);
    }
  }

  const groupEntries = Array.from(groups.entries());
  const showGroupHeadings =
    groupEntries.length > 1 ||
    (groupEntries.length === 1 && groupEntries[0][0] !== "__default__");

  return (
    <div className="space-y-8">
      {groupEntries.map(([groupName, groupItems]) => (
        <div key={groupName} className="space-y-4">
          {showGroupHeadings && groupName !== "__default__" ? (
            <div className="flex items-baseline justify-between gap-2 border-b border-border-subtle pb-2">
              <h3 className="text-sm font-semibold tracking-tight text-primary">
                {groupName}
              </h3>
              <span className="font-mono text-xs text-muted tabular-nums">
                {groupItems.length}
              </span>
            </div>
          ) : null}

          <div className="grid gap-5 sm:grid-cols-2">
            {groupItems.map((item) => (
              <MediaCard key={item.id} ui={ui} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

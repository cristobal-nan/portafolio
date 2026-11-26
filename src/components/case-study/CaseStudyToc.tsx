export interface TocEntry {
  id: string;
  label: string;
}

interface CaseStudyTocProps {
  title: string;
  entries: TocEntry[];
}

export function CaseStudyToc({ title, entries }: CaseStudyTocProps) {
  return (
    <nav aria-label={title} className="lg:sticky lg:top-24">
      <p className="font-mono text-xs tracking-wider text-muted uppercase">
        {title}
      </p>
      <ul className="mt-3 space-y-1 border-l border-border-subtle pl-3">
        {entries.map((entry) => (
          <li key={entry.id}>
            <a
              href={`#${entry.id}`}
              className="block py-1 text-sm text-secondary transition-colors hover:text-primary"
            >
              {entry.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

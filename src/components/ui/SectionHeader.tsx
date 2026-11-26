interface SectionHeaderProps {
  index: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ index, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-2 font-mono text-xs tracking-wider text-muted uppercase">
        {index}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base leading-7 text-secondary">{subtitle}</p>
      ) : null}
    </div>
  );
}

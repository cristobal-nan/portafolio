import type { ReactNode } from "react";

interface CaseStudySectionProps {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}

export function CaseStudySection({
  id,
  index,
  title,
  children,
}: CaseStudySectionProps) {
  return (
    <section
      id={id}
      className="border-b border-border-subtle py-10 first:pt-8 last:border-b-0"
    >
      <p className="font-mono text-xs tracking-wider text-muted uppercase">
        {index}
      </p>
      <h2 className="mt-1.5 text-xl font-semibold tracking-tight text-primary sm:text-2xl">
        {title}
      </h2>
      <div className="mt-5 space-y-4">{children}</div>
    </section>
  );
}

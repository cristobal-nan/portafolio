import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-primary text-canvas hover:opacity-90 border border-transparent",
  secondary:
    "bg-surface text-primary border border-border-strong hover:border-primary/40 hover:bg-subtle",
  ghost:
    "bg-transparent text-secondary hover:text-primary hover:bg-subtle border border-transparent",
};

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  download?: boolean | string;
  className?: string;
  ariaLabel?: string;
}

export function ButtonLink({
  href,
  children,
  variant = "secondary",
  external = false,
  download,
  className = "",
  ariaLabel,
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors";
  const classes = `${base} ${variantStyles[variant]} ${className}`;

  if (external || download) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(download ? { download } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

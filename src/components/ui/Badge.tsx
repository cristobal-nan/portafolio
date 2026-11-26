import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "placeholder" | "accent";
  className?: string;
}

const variantClasses: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default:
    "border border-border-subtle bg-subtle text-secondary",
  placeholder:
    "border border-dashed border-border-strong bg-subtle/70 text-muted",
  accent:
    "border border-accent/25 bg-accent-soft text-accent",
};

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2.5 py-0.5 font-mono text-xs leading-5 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

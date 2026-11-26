"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { switchLocalePath, type Locale } from "@/lib/i18n";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  groupLabel: string;
  switchToEsLabel: string;
  switchToEnLabel: string;
}

export function LanguageSwitcher({
  currentLocale,
  groupLabel,
  switchToEsLabel,
  switchToEnLabel,
}: LanguageSwitcherProps) {
  const pathname = usePathname() || "/";
  const esHref = switchLocalePath(pathname, "es");
  const enHref = switchLocalePath(pathname, "en");

  return (
    <div
      role="group"
      aria-label={groupLabel}
      className="inline-flex h-9 items-center rounded-lg border border-border-subtle bg-surface p-0.5 font-mono text-xs"
    >
      <Link
        href={esHref}
        hrefLang="es"
        aria-label={switchToEsLabel}
        aria-current={currentLocale === "es" ? "page" : undefined}
        className={`rounded-md px-2.5 py-1 transition-colors ${
          currentLocale === "es"
            ? "bg-subtle font-semibold text-primary"
            : "text-muted hover:text-primary"
        }`}
      >
        ES
      </Link>
      <Link
        href={enHref}
        hrefLang="en"
        aria-label={switchToEnLabel}
        aria-current={currentLocale === "en" ? "page" : undefined}
        className={`rounded-md px-2.5 py-1 transition-colors ${
          currentLocale === "en"
            ? "bg-subtle font-semibold text-primary"
            : "text-muted hover:text-primary"
        }`}
      >
        EN
      </Link>
    </div>
  );
}

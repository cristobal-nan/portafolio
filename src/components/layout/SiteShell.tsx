import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SkipLink } from "@/components/layout/SkipLink";
import type { UiDictionary } from "@/content/types";
import type { Locale } from "@/lib/i18n";

interface SiteShellProps {
  locale: Locale;
  ui: UiDictionary;
  children: ReactNode;
}

export function SiteShell({ locale, ui, children }: SiteShellProps) {
  return (
    <>
      <SkipLink label={ui.skipToContent} />
      <SiteHeader locale={locale} ui={ui} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <SiteFooter locale={locale} ui={ui} />
    </>
  );
}

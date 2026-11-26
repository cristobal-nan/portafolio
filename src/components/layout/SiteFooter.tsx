import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/content/site";
import type { UiDictionary } from "@/content/types";
import { getHomePath, type Locale } from "@/lib/i18n";

interface SiteFooterProps {
  locale: Locale;
  ui: UiDictionary;
}

export function SiteFooter({ locale, ui }: SiteFooterProps) {
  const year = new Date().getFullYear();
  const otherLocale: Locale = locale === "es" ? "en" : "es";

  return (
    <footer className="mt-auto border-t border-border-subtle bg-canvas py-10">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-primary">
            {siteConfig.authorNameIsPlaceholder
              ? ui.seo.siteName
              : siteConfig.authorName}
          </p>
          <p className="text-xs text-muted">
            © {year} · {ui.footer.builtWith}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs text-muted">
          <Link
            href={getHomePath(otherLocale)}
            hrefLang={otherLocale}
            className="transition-colors hover:text-primary"
          >
            {otherLocale === "en" ? "English version" : "Versión en español"}
          </Link>
          <span>·</span>
          <span>{ui.footer.rights}</span>
        </div>
      </Container>
    </footer>
  );
}

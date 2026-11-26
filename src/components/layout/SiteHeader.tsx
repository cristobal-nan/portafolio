import Link from "next/link";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { MobileNav } from "@/components/layout/MobileNav";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/content/site";
import type { UiDictionary } from "@/content/types";
import { getHomePath, getSectionPath, type Locale } from "@/lib/i18n";

interface SiteHeaderProps {
  locale: Locale;
  ui: UiDictionary;
}

export function SiteHeader({ locale, ui }: SiteHeaderProps) {
  const navItems = [
    { label: ui.nav.projects, href: getSectionPath(locale, "projects") },
    { label: ui.nav.experience, href: getSectionPath(locale, "experience") },
    { label: ui.nav.skills, href: getSectionPath(locale, "skills") },
    { label: ui.nav.education, href: getSectionPath(locale, "education") },
    { label: ui.nav.contact, href: getSectionPath(locale, "contact") },
  ];

  const brandLabel = siteConfig.authorNameIsPlaceholder
    ? ui.seo.siteName
    : siteConfig.authorName;

  return (
    <header className="sticky top-0 z-30 border-b border-border-subtle bg-canvas/90 backdrop-blur-md">
      <Container className="relative flex h-16 items-center justify-between gap-4">
        <Link
          href={getHomePath(locale)}
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-primary transition-colors hover:text-accent"
        >
          <span
            aria-hidden="true"
            className="inline-block h-2 w-2 rounded-full bg-accent"
          />
          <span>{brandLabel}</span>
        </Link>

        <nav
          aria-label={locale === "es" ? "Navegación principal" : "Primary navigation"}
          className="hidden items-center gap-1 md:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-sm text-secondary transition-colors hover:bg-subtle hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher
            currentLocale={locale}
            groupLabel={ui.language.label}
            switchToEsLabel={ui.language.switchToEs}
            switchToEnLabel={ui.language.switchToEn}
          />
          <ThemeToggle
            switchToDarkLabel={ui.theme.switchToDark}
            switchToLightLabel={ui.theme.switchToLight}
          />
          <MobileNav
            items={navItems}
            openLabel={ui.nav.openMenu}
            closeLabel={ui.nav.closeMenu}
          />
        </div>
      </Container>
    </header>
  );
}

import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import {
  ArrowRightIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/ui/Icons";
import { PlaceholderBlock } from "@/components/ui/PlaceholderBlock";
import { siteConfig } from "@/content/site";
import type { ProfileContent, UiDictionary } from "@/content/types";
import { getSectionPath, type Locale } from "@/lib/i18n";

interface HeroSectionProps {
  locale: Locale;
  ui: UiDictionary;
  profile: ProfileContent;
}

export function HeroSection({ locale, ui, profile }: HeroSectionProps) {
  const { hero } = profile;

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="font-mono text-xs tracking-wider text-accent uppercase">
            {hero.eyebrow}
          </p>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-primary sm:text-4xl lg:text-5xl lg:leading-[1.12]">
            {siteConfig.authorNameIsPlaceholder ? (
              <span className="block font-mono text-sm font-normal text-muted mb-2">
                {siteConfig.authorName}
              </span>
            ) : (
              <span className="block text-base font-medium text-secondary mb-2">
                {siteConfig.authorName}
              </span>
            )}
            {hero.headline}
          </h1>

          <ul
            aria-label={locale === "es" ? "Cargos objetivo" : "Target roles"}
            className="mt-6 flex flex-wrap gap-2"
          >
            {hero.targetRoles.map((role) => (
              <li key={role}>
                <Badge>{role}</Badge>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            {hero.summary.isPlaceholder ? (
              <PlaceholderBlock
                badgeLabel={ui.actions.pendingBadge}
                description={hero.summary.text}
                checklistRef={hero.summary.checklistRef}
              />
            ) : (
              <p className="text-base leading-7 text-secondary sm:text-lg sm:leading-8">
                {hero.summary.text}
              </p>
            )}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink
              href={getSectionPath(locale, "projects")}
              variant="primary"
            >
              <span>{hero.primaryCta}</span>
              <ArrowRightIcon className="h-4 w-4" />
            </ButtonLink>

            {siteConfig.cv.available ? (
              <ButtonLink
                href={siteConfig.cv.href}
                download={siteConfig.cv.fileName}
                variant="secondary"
              >
                <DownloadIcon className="h-4 w-4" />
                <span>{ui.actions.downloadCv}</span>
              </ButtonLink>
            ) : (
              <span
                title={ui.actions.downloadCvPendingNote}
                className="inline-flex items-center gap-2 rounded-lg border border-dashed border-border-strong bg-subtle/60 px-4 py-2.5 text-sm font-medium text-muted"
              >
                <DownloadIcon className="h-4 w-4" />
                <span>{ui.actions.downloadCv}</span>
                <span className="font-mono text-[11px]">
                  ({ui.actions.pendingBadge})
                </span>
              </span>
            )}

            <ButtonLink
              href={getSectionPath(locale, "contact")}
              variant="ghost"
            >
              <MailIcon className="h-4 w-4" />
              <span>{hero.secondaryCta}</span>
            </ButtonLink>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border-subtle pt-6 text-sm text-secondary">
            {siteConfig.social.linkedin.url ? (
              <a
                href={siteConfig.social.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <LinkedinIcon className="h-4 w-4 text-muted" />
                <span>LinkedIn</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 font-mono text-xs text-muted">
                <LinkedinIcon className="h-4 w-4" />
                <span>{siteConfig.social.linkedin.handlePlaceholder}</span>
              </span>
            )}

            {siteConfig.social.github.url ? (
              <a
                href={siteConfig.social.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <GithubIcon className="h-4 w-4 text-muted" />
                <span>GitHub</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 font-mono text-xs text-muted">
                <GithubIcon className="h-4 w-4" />
                <span>{siteConfig.social.github.handlePlaceholder}</span>
              </span>
            )}

            <span className="font-mono text-xs text-muted">
              {siteConfig.location[locale]}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

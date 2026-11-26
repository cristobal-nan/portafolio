import { CopyEmailButton } from "@/components/sections/CopyEmailButton";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import {
  ArrowUpRightIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/ui/Icons";
import { PlaceholderBlock } from "@/components/ui/PlaceholderBlock";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/content/site";
import type { ProfileContent, UiDictionary } from "@/content/types";
import type { Locale } from "@/lib/i18n";

interface ContactSectionProps {
  locale: Locale;
  ui: UiDictionary;
  profile: ProfileContent;
}

export function ContactSection({ locale, ui, profile }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="border-t border-border-subtle py-16 sm:py-20"
    >
      <Container>
        <SectionHeader
          index={ui.sections.contact.index}
          title={ui.sections.contact.title}
          subtitle={ui.sections.contact.subtitle}
        />

        <div className="rounded-xl border border-border-subtle bg-surface p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-5">
              {profile.contact.lead.isPlaceholder ? (
                <PlaceholderBlock
                  badgeLabel={ui.actions.pendingBadge}
                  description={profile.contact.lead.text}
                  checklistRef={profile.contact.lead.checklistRef}
                />
              ) : (
                <p className="text-base leading-7 text-secondary">
                  {profile.contact.lead.text}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-3">
                <ButtonLink
                  href={`mailto:${siteConfig.email}`}
                  external
                  variant="primary"
                >
                  <MailIcon className="h-4 w-4" />
                  <span>{ui.actions.sendEmail}</span>
                </ButtonLink>

                <CopyEmailButton
                  email={siteConfig.email}
                  copyLabel={ui.actions.copyEmail}
                  copiedLabel={ui.actions.emailCopied}
                />

                {siteConfig.cv.available ? (
                  <ButtonLink
                    href={siteConfig.cv.href}
                    download={siteConfig.cv.fileName}
                    variant="secondary"
                  >
                    <DownloadIcon className="h-4 w-4" />
                    <span>{ui.actions.downloadCv}</span>
                  </ButtonLink>
                ) : null}
              </div>

              <p className="font-mono text-xs text-muted">
                {siteConfig.email}
                {siteConfig.emailIsPlaceholder
                  ? ` · ${ui.actions.pendingBadge}`
                  : ""}
              </p>
            </div>

            <div className="flex flex-col justify-between gap-4 border-t border-border-subtle pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
              <div className="space-y-3">
                <p className="font-mono text-xs tracking-wider text-muted uppercase">
                  {locale === "es" ? "Perfiles y currículum" : "Profiles & CV"}
                </p>

                {siteConfig.social.linkedin.url ? (
                  <a
                    href={siteConfig.social.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg border border-border-subtle px-3.5 py-2.5 text-sm font-medium text-primary transition-colors hover:border-border-strong hover:bg-subtle"
                  >
                    <span className="inline-flex items-center gap-2">
                      <LinkedinIcon className="h-4 w-4 text-muted" />
                      LinkedIn
                    </span>
                    <ArrowUpRightIcon className="h-4 w-4 text-muted" />
                  </a>
                ) : (
                  <div className="flex items-center justify-between rounded-lg border border-dashed border-border-strong bg-subtle/40 px-3.5 py-2.5 text-xs text-muted">
                    <span className="inline-flex items-center gap-2 font-mono">
                      <LinkedinIcon className="h-4 w-4" />
                      {siteConfig.social.linkedin.handlePlaceholder}
                    </span>
                  </div>
                )}

                {siteConfig.social.github.url ? (
                  <a
                    href={siteConfig.social.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg border border-border-subtle px-3.5 py-2.5 text-sm font-medium text-primary transition-colors hover:border-border-strong hover:bg-subtle"
                  >
                    <span className="inline-flex items-center gap-2">
                      <GithubIcon className="h-4 w-4 text-muted" />
                      GitHub
                    </span>
                    <ArrowUpRightIcon className="h-4 w-4 text-muted" />
                  </a>
                ) : (
                  <div className="flex items-center justify-between rounded-lg border border-dashed border-border-strong bg-subtle/40 px-3.5 py-2.5 text-xs text-muted">
                    <span className="inline-flex items-center gap-2 font-mono">
                      <GithubIcon className="h-4 w-4" />
                      {siteConfig.social.github.handlePlaceholder}
                    </span>
                  </div>
                )}

                {!siteConfig.cv.available ? (
                  <div className="rounded-lg border border-dashed border-border-strong bg-subtle/40 px-3.5 py-2.5 text-xs text-muted">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-2 font-mono">
                        <DownloadIcon className="h-4 w-4" />
                        {ui.actions.downloadCv}
                      </span>
                      <Badge variant="placeholder">
                        {ui.actions.pendingBadge}
                      </Badge>
                    </div>
                    <p className="mt-1.5 text-[11px] leading-5 text-muted">
                      {ui.actions.downloadCvPendingNote}
                    </p>
                  </div>
                ) : null}
              </div>

              <p className="font-mono text-xs leading-5 text-muted">
                {profile.contact.availability.text}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

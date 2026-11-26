import { ContactSection } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { getProfile, getProjects, getUi } from "@/content";
import type { Locale } from "@/lib/i18n";
import { buildPersonJsonLd } from "@/lib/seo";

interface HomePageProps {
  locale: Locale;
}

export function HomePage({ locale }: HomePageProps) {
  const ui = getUi(locale);
  const profile = getProfile(locale);
  const projects = getProjects(locale);
  const jsonLd = buildPersonJsonLd(locale, profile);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection locale={locale} ui={ui} profile={profile} />
      <ProjectsSection locale={locale} ui={ui} projects={projects} />
      <ExperienceSection
        locale={locale}
        ui={ui}
        experience={profile.experience}
      />
      <SkillsSection ui={ui} skills={profile.skills} />
      <EducationSection
        locale={locale}
        ui={ui}
        education={profile.education}
        languages={profile.languages}
      />
      <ContactSection locale={locale} ui={ui} profile={profile} />
    </>
  );
}

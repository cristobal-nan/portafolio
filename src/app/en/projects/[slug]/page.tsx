import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCaseStudyPage } from "@/components/pages/ProjectCaseStudyPage";
import { getProjectBySlug, getUi } from "@/content";
import { PROJECT_SLUGS } from "@/content/site";
import { buildProjectMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug("en", slug);
  if (!project) {
    return {};
  }
  return buildProjectMetadata("en", getUi("en"), project);
}

export default async function EnProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getProjectBySlug("en", slug)) {
    notFound();
  }
  return <ProjectCaseStudyPage locale="en" slug={slug} />;
}

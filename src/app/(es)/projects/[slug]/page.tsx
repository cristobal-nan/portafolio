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
  const project = getProjectBySlug("es", slug);
  if (!project) {
    return {};
  }
  return buildProjectMetadata("es", getUi("es"), project);
}

export default async function EsProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getProjectBySlug("es", slug)) {
    notFound();
  }
  return <ProjectCaseStudyPage locale="es" slug={slug} />;
}

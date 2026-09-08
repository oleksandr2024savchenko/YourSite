import type { Metadata } from "next";
import { RenderPage, allEnglishParams, metadataForPage } from "@/lib/render-page";

export function generateStaticParams() {
  return allEnglishParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return metadataForPage("en", slug);
}

export default async function EnglishPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  return <RenderPage locale="en" segments={slug} />;
}

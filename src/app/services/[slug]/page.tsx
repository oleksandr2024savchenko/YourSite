import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceLanding from "@/components/service/ServiceLanding";
import {
  isServiceSlug,
  serviceSlugs,
  type ServiceSlug,
} from "@/lib/services";
import { getService } from "@/content/service-pages";
import { pageMetadata } from "@/lib/seo";
import { servicePath } from "@/lib/routes";
import { tx } from "@/content/copy";
import { oldServiceRedirects } from "@/lib/routes";
import RedirectNotice from "@/components/site/RedirectNotice";

export function generateStaticParams() {
  return [
    ...serviceSlugs.map((slug) => ({ slug })),
    ...Object.keys(oldServiceRedirects).map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const target = oldServiceRedirects[slug] ?? slug;
  if (!isServiceSlug(target)) return {};
  const page = getService(target);
  return pageMetadata({
    locale: "de",
    path: servicePath(target),
    title: tx(page.seoTitle, "de"),
    description: tx(page.seoDescription, "de"),
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (oldServiceRedirects[slug]) {
    return (
      <RedirectNotice locale="de" to={servicePath(oldServiceRedirects[slug])} />
    );
  }
  if (!isServiceSlug(slug)) notFound();
  return <ServiceLanding slug={slug as ServiceSlug} locale="de" />;
}

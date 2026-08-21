import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import ServiceDetail from "@/components/landing/ServiceDetail";
import { dictionaries } from "@/i18n/dictionary";
import {
  isServiceSlug,
  serviceIndex,
  serviceSlugs,
  type ServiceSlug,
} from "@/lib/services";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isServiceSlug(slug)) return {};

  const tier = dictionaries.en.pricing.tiers[serviceIndex(slug)];
  const detail = dictionaries.en.serviceDetail.items[slug];

  return {
    title: `${tier.name} — ${tier.price} | ClearPoint`,
    description: detail.summary,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isServiceSlug(slug)) notFound();

  return (
    <>
      <Header />
      <ServiceDetail slug={slug as ServiceSlug} />
      <Footer />
    </>
  );
}

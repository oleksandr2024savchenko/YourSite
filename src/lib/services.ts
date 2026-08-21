import type { Dictionary } from "@/i18n/dictionary";

/** Slugs are shared by the URL, the dictionary copy and the card order. */
export const serviceSlugs = [
  "relaunch",
  "onepage",
  "landing-page",
  "business-website",
  "online-shop",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export function isServiceSlug(value: string): value is ServiceSlug {
  return (serviceSlugs as readonly string[]).includes(value);
}

export function serviceHref(slug: ServiceSlug) {
  return `/services/${slug}` as const;
}

/** Cards, pricing tiers and detail copy all share the slug order above. */
export function serviceIndex(slug: ServiceSlug) {
  return serviceSlugs.indexOf(slug);
}

export function serviceDetailCopy(t: Dictionary, slug: ServiceSlug) {
  const detail = t.serviceDetail.items[slug];
  const tier = t.pricing.tiers[serviceIndex(slug)];
  const card = t.services.items[serviceIndex(slug)];

  return { detail, tier, card };
}

export const serviceSlugs = [
  "website-erstellen-lassen",
  "business-website",
  "onepage-website",
  "landing-page",
  "website-relaunch",
  "online-shop",
  "support-wartung",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export function isServiceSlug(value: string): value is ServiceSlug {
  return (serviceSlugs as readonly string[]).includes(value);
}

export function serviceHref(slug: ServiceSlug) {
  return `/services/${slug}/` as const;
}

/** Umbrella "start here" service, shown as a wide hub card above the package grids. */
export const hubServiceSlug = "website-erstellen-lassen" satisfies ServiceSlug;

/** One-off website packages shown in the services grid (the hub service sits above them). */
export const primaryServiceSlugs = [
  "onepage-website",
  "landing-page",
  "business-website",
  "online-shop",
] as const satisfies readonly ServiceSlug[];

/** Relaunch, support and other non-build packages. */
export const otherServiceSlugs = [
  "website-relaunch",
  "support-wartung",
] as const satisfies readonly ServiceSlug[];

/** Numeric starting price used to sort the pricing grid (monthly packs count as the monthly amount). */
export const serviceStartingPrice: Record<ServiceSlug, number> = {
  "support-wartung": 39,
  "website-erstellen-lassen": 699,
  "website-relaunch": 699,
  "onepage-website": 1499,
  "landing-page": 1799,
  "business-website": 2999,
  "online-shop": 4999,
};

export function sortByStartingPrice(
  slugs: readonly ServiceSlug[],
): ServiceSlug[] {
  return [...slugs].sort((a, b) => {
    const diff = serviceStartingPrice[a] - serviceStartingPrice[b];
    if (diff !== 0) return diff;
    return serviceSlugs.indexOf(a) - serviceSlugs.indexOf(b);
  });
}

export const pricingPrimarySlugs = sortByStartingPrice(primaryServiceSlugs);
export const pricingOtherSlugs = sortByStartingPrice(otherServiceSlugs);

export const serviceMenu = [
  {
    slug: "website-erstellen-lassen" as const,
    href: "/services/website-erstellen-lassen/",
  },
  {
    slug: "business-website" as const,
    href: "/services/business-website/",
  },
  {
    slug: "onepage-website" as const,
    href: "/services/onepage-website/",
  },
  {
    slug: "landing-page" as const,
    href: "/services/landing-page/",
  },
  {
    slug: "website-relaunch" as const,
    href: "/services/website-relaunch/",
  },
  {
    slug: "online-shop" as const,
    href: "/services/online-shop/",
  },
  {
    slug: "website-check" as const,
    href: "/website-check/",
  },
  {
    slug: "support-wartung" as const,
    href: "/services/support-wartung/",
  },
];

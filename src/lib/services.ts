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

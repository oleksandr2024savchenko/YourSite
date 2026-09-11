import type { Locale } from "@/i18n/dictionary";
import { serviceSlugs, type ServiceSlug } from "@/lib/services";

export type { Locale };

export const locales: Locale[] = ["de", "en"];
export const defaultLocale: Locale = "de";

export const paths = {
  home: "/",
  services: "/services/",
  preise: "/preise/",
  about: "/ueber-uns/",
  references: "/referenzen/",
  blog: "/blog/",
  contact: "/kontakt/",
  websiteCheck: "/website-check/",
  impressum: "/impressum/",
  datenschutz: "/datenschutz/",
  agb: "/agb/",
  danke: "/danke/",
} as const;

export function servicePath(slug: ServiceSlug) {
  return `/services/${slug}/` as const;
}

export function blogPath(slug: string) {
  return `/blog/${slug}/` as const;
}

export function withLocale(path: string, locale: Locale) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === "de") return normalized;
  if (normalized === "/") return "/en/";
  return `/en${normalized}`;
}

export function stripLocale(pathname: string) {
  if (pathname === "/en" || pathname === "/en/") return "/";
  if (pathname.startsWith("/en/")) {
    const rest = pathname.slice(3);
    return rest.startsWith("/") ? rest : `/${rest}`;
  }
  return pathname || "/";
}

export function localeFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "de";
}

export function switchLocalePath(pathname: string, locale: Locale) {
  return withLocale(stripLocale(pathname), locale);
}

export const staticPagePaths = [
  paths.home,
  paths.services,
  paths.preise,
  paths.about,
  paths.references,
  paths.blog,
  paths.contact,
  paths.websiteCheck,
  paths.impressum,
  paths.datenschutz,
  paths.agb,
  paths.danke,
] as const;

export function allLocalizedPaths(extra: string[] = []) {
  const unique = Array.from(new Set([...staticPagePaths, ...serviceSlugs.map(servicePath), ...extra]));
  return unique.flatMap((path) => locales.map((locale) => withLocale(path, locale)));
}

export const oldServiceRedirects: Record<string, ServiceSlug> = {
  relaunch: "website-relaunch",
  onepage: "onepage-website",
};

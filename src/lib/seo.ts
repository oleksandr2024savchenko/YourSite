import type { Metadata } from "next";
import type { Locale } from "@/i18n/dictionary";
import { absoluteUrl, SITE_NAME } from "@/lib/site";
import { withLocale } from "@/lib/routes";

export function pageMetadata({
  locale,
  path,
  title,
  description,
  ogImage = "/images/hero.jpg",
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  ogImage?: string;
}): Metadata {
  const canonical = absoluteUrl(withLocale(path, locale));
  const deUrl = absoluteUrl(withLocale(path, "de"));
  const enUrl = absoluteUrl(withLocale(path, "en"));

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        de: deUrl,
        en: enUrl,
        "x-default": deUrl,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "de" ? "de_AT" : "en_GB",
      alternateLocale: locale === "de" ? ["en_GB"] : ["de_AT"],
      url: canonical,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: absoluteUrl(ogImage),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(ogImage)],
    },
  };
}

import { CONTACT_EMAIL, CONTACT_PHONE, NAP, SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";
import { withLocale, type Locale } from "@/lib/routes";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    image: absoluteUrl("/images/hero.jpg"),
    url: SITE_URL,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    areaServed: [
      { "@type": "City", name: "Wien" },
      { "@type": "Country", name: "Österreich" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: NAP.city,
      addressRegion: NAP.region,
      addressCountry: NAP.countryCode,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      description: NAP.hours,
    },
    priceRange: "€€",
    description:
      "ClearPoint entwickelt professionelle Websites für Unternehmen in Wien – von der Onepage Website bis zum Online-Shop, inklusive SEO, Performance und DSGVO.",
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
  locale: Locale,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(withLocale(item.path, locale)),
    })),
  };
}

export function serviceJsonLd({
  name,
  description,
  path,
  locale,
}: {
  name: string;
  description: string;
  path: string;
  locale: Locale;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(withLocale(path, locale)),
    provider: {
      "@type": "ProfessionalService",
      name: SITE_NAME,
      url: SITE_URL,
      telephone: CONTACT_PHONE,
      email: CONTACT_EMAIL,
      areaServed: { "@type": "City", name: "Wien" },
    },
    areaServed: { "@type": "City", name: "Wien" },
    serviceType: name,
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  locale,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified,
    inLanguage: locale === "de" ? "de-AT" : "en",
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: absoluteUrl(withLocale(path, locale)),
  };
}

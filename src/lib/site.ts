export const SITE_NAME = "ClearPoint";

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const SITE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_ORIGIN ??
  "https://oleksandr2024savchenko.github.io";

export const SITE_URL = `${SITE_ORIGIN}${BASE_PATH}`;

export const CONTACT_EMAIL = "hello@clearpoint.at";
export const CONTACT_PHONE = "+43 1 234 567 890";
export const CONTACT_PHONE_TEL = "+431234567890";
export const CONTACT_WHATSAPP = "431234567890";

/** Consistent NAP: service-area business in Vienna, no fake office street. */
export const NAP = {
  name: SITE_NAME,
  legalName: "ClearPoint",
  city: "Wien",
  region: "Wien",
  country: "Österreich",
  countryCode: "AT",
  areaServed: "Wien und Umgebung",
  hours: "Termine nach Vereinbarung",
  responseTime: "Antwort innerhalb von 24 Stunden",
} as const;

export const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`.replace(/([^:]\/)\/+/g, "$1");
}

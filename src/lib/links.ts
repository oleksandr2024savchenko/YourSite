const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const CONTACT_EMAIL = "hello@clearpoint.at";

/**
 * Landing sections live on the home page, so links from a sub-page need the
 * home route (including basePath) in front of the anchor.
 */
export function sectionHref(pathname: string, anchor: string) {
  const onHome = pathname === "/" || pathname === "";
  return onHome ? `#${anchor}` : `${basePath}/#${anchor}`;
}

export function homeHref() {
  return `${basePath}/`;
}

/** Static export has no backend — enquiries go straight to the mail client. */
export function mailtoHref({
  subject,
  body,
}: {
  subject: string;
  body: string;
}) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

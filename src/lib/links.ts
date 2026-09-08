export { CONTACT_EMAIL } from "@/lib/site";
import { CONTACT_EMAIL } from "@/lib/site";

export function homeHref() {
  return "/";
}

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

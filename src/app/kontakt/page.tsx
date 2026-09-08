import type { Metadata } from "next";
import ContactView from "@/views/ContactView";
import { metadataForPage } from "@/lib/render-page";

export function generateMetadata(): Metadata {
  return metadataForPage("de", ["kontakt"]);
}

export default function Page() {
  return <ContactView locale="de" />;
}

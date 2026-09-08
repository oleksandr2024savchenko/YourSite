import type { Metadata } from "next";
import ServicesIndexView from "@/views/ServicesIndexView";
import { metadataForPage } from "@/lib/render-page";

export function generateMetadata(): Metadata {
  return metadataForPage("de", ["services"]);
}

export default function Page() {
  return <ServicesIndexView locale="de" />;
}

import type { Metadata } from "next";
import AboutView from "@/views/AboutView";
import { metadataForPage } from "@/lib/render-page";

export function generateMetadata(): Metadata {
  return metadataForPage("de", ["ueber-uns"]);
}

export default function Page() {
  return <AboutView locale="de" />;
}

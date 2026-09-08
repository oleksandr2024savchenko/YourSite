import type { Metadata } from "next";
import WebsiteCheckView from "@/views/WebsiteCheckView";
import { metadataForPage } from "@/lib/render-page";

export function generateMetadata(): Metadata {
  return metadataForPage("de", ["website-check"]);
}

export default function Page() {
  return <WebsiteCheckView locale="de" />;
}

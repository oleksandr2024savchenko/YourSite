import type { Metadata } from "next";
import DankeView from "@/views/DankeView";
import { metadataForPage } from "@/lib/render-page";

export function generateMetadata(): Metadata {
  return metadataForPage("de", ["danke"]);
}

export default function Page() {
  return <DankeView locale="de" />;
}

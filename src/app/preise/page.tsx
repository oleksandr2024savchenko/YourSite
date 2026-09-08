import type { Metadata } from "next";
import PreiseView from "@/views/PreiseView";
import { metadataForPage } from "@/lib/render-page";

export function generateMetadata(): Metadata {
  return metadataForPage("de", ["preise"]);
}

export default function Page() {
  return <PreiseView locale="de" />;
}

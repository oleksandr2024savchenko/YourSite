import type { Metadata } from "next";
import ReferencesView from "@/views/ReferencesView";
import { metadataForPage } from "@/lib/render-page";

export function generateMetadata(): Metadata {
  return metadataForPage("de", ["referenzen"]);
}

export default function Page() {
  return <ReferencesView locale="de" />;
}

import type { Metadata } from "next";
import LegalView from "@/views/LegalView";
import { metadataForPage } from "@/lib/render-page";

export function generateMetadata(): Metadata {
  return metadataForPage("de", ["agb"]);
}

export default function Page() {
  return <LegalView locale="de" kind="agb" />;
}

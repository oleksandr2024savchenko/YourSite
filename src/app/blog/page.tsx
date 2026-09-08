import type { Metadata } from "next";
import BlogIndexView from "@/views/BlogIndexView";
import { metadataForPage } from "@/lib/render-page";

export function generateMetadata(): Metadata {
  return metadataForPage("de", ["blog"]);
}

export default function Page() {
  return <BlogIndexView locale="de" />;
}

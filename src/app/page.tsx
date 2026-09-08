import type { Metadata } from "next";
import HomeView from "@/views/HomeView";
import { pageMetadata } from "@/lib/seo";
import { dictionaries } from "@/i18n/dictionary";

export function generateMetadata(): Metadata {
  return pageMetadata({
    locale: "de",
    path: "/",
    title: dictionaries.de.meta.title,
    description: dictionaries.de.meta.description,
  });
}

export default function Home() {
  return <HomeView locale="de" />;
}

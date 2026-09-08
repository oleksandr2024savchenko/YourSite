import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";
import { serviceSlugs } from "@/lib/services";
import { absoluteUrl } from "@/lib/site";
import { locales, servicePath, withLocale, staticPagePaths, blogPath } from "@/lib/routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const extras = [
    ...serviceSlugs.map((slug) => servicePath(slug)),
    ...blogPosts.map((post) => blogPath(post.slug)),
  ];
  const paths = [...staticPagePaths, ...extras];

  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: absoluteUrl(withLocale(path, locale)),
      lastModified: new Date("2026-09-08"),
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : path.includes("/services/") ? 0.8 : 0.6,
    })),
  );
}

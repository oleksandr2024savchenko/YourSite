import type { Locale } from "@/i18n/dictionary";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomeView from "@/views/HomeView";
import ServicesIndexView from "@/views/ServicesIndexView";
import AboutView from "@/views/AboutView";
import ContactView from "@/views/ContactView";
import PreiseView from "@/views/PreiseView";
import WebsiteCheckView from "@/views/WebsiteCheckView";
import BlogIndexView from "@/views/BlogIndexView";
import BlogPostView from "@/views/BlogPostView";
import LegalView from "@/views/LegalView";
import DankeView from "@/views/DankeView";
import ServiceLanding from "@/components/service/ServiceLanding";
import RedirectNotice from "@/components/site/RedirectNotice";
import { isServiceSlug } from "@/lib/services";
import { oldServiceRedirects, servicePath } from "@/lib/routes";
import { getService } from "@/content/service-pages";
import { blogPosts, getPost } from "@/content/blog";
import { pageMetadata } from "@/lib/seo";
import { tx } from "@/content/copy";
import { aboutPage, contactPage, legalPages, pricingPage, websiteCheckPage } from "@/content/pages";
import { dictionaries } from "@/i18n/dictionary";
import { serviceSlugs } from "@/lib/services";

export function pageFromSegments(segments: string[] | undefined) {
  const parts = (segments ?? []).filter(Boolean);
  if (parts.length === 0) return { type: "home" as const };
  if (parts[0] === "services" && parts.length === 1) return { type: "services" as const };
  if (parts[0] === "services" && parts[1]) return { type: "service" as const, slug: parts[1] };
  if (parts[0] === "preise") return { type: "preise" as const };
  if (parts[0] === "ueber-uns") return { type: "about" as const };
  if (parts[0] === "blog" && parts.length === 1) return { type: "blog" as const };
  if (parts[0] === "blog" && parts[1]) return { type: "post" as const, slug: parts[1] };
  if (parts[0] === "kontakt") return { type: "contact" as const };
  if (parts[0] === "website-check") return { type: "check" as const };
  if (parts[0] === "impressum") return { type: "legal" as const, kind: "impressum" as const };
  if (parts[0] === "datenschutz") return { type: "legal" as const, kind: "datenschutz" as const };
  if (parts[0] === "agb") return { type: "legal" as const, kind: "agb" as const };
  if (parts[0] === "danke") return { type: "danke" as const };
  return { type: "missing" as const };
}

export function metadataForPage(locale: Locale, segments?: string[]): Metadata {
  const page = pageFromSegments(segments);
  switch (page.type) {
    case "home":
      return pageMetadata({
        locale,
        path: "/",
        title: dictionaries[locale].meta.title,
        description: dictionaries[locale].meta.description,
      });
    case "services":
      return pageMetadata({
        locale,
        path: "/services/",
        title: locale === "de" ? "Leistungen Wien | ClearPoint" : "Services Vienna | ClearPoint",
        description:
          locale === "de"
            ? "Alle Website-Leistungen von ClearPoint in Wien: Business Website, Onepage, Landing Page, Relaunch, Shop und Wartung."
            : "All ClearPoint website services in Vienna: business site, one-pager, landing page, relaunch, shop and maintenance.",
      });
    case "service": {
      const target = oldServiceRedirects[page.slug] ?? page.slug;
      if (!isServiceSlug(target)) return {};
      const data = getService(target);
      return pageMetadata({
        locale,
        path: servicePath(target),
        title: tx(data.seoTitle, locale),
        description: tx(data.seoDescription, locale),
      });
    }
    case "preise":
      return pageMetadata({
        locale,
        path: "/preise/",
        title: tx(pricingPage.seoTitle, locale),
        description: tx(pricingPage.seoDescription, locale),
      });
    case "about":
      return pageMetadata({
        locale,
        path: "/ueber-uns/",
        title: tx(aboutPage.seoTitle, locale),
        description: tx(aboutPage.seoDescription, locale),
      });
    case "blog":
      return pageMetadata({
        locale,
        path: "/blog/",
        title: locale === "de" ? "Blog | ClearPoint Wien" : "Blog | ClearPoint Vienna",
        description:
          locale === "de"
            ? "Artikel zu Website-Kosten, Relaunch, SEO, DSGVO und Online-Shops in Wien."
            : "Articles on website costs, relaunch, SEO, GDPR and online shops in Vienna.",
      });
    case "post": {
      const post = getPost(page.slug);
      if (!post) return {};
      return pageMetadata({
        locale,
        path: `/blog/${post.slug}/`,
        title: tx(post.seoTitle, locale),
        description: tx(post.description, locale),
      });
    }
    case "contact":
      return pageMetadata({
        locale,
        path: "/kontakt/",
        title: tx(contactPage.seoTitle, locale),
        description: tx(contactPage.seoDescription, locale),
      });
    case "check":
      return pageMetadata({
        locale,
        path: "/website-check/",
        title: tx(websiteCheckPage.seoTitle, locale),
        description: tx(websiteCheckPage.seoDescription, locale),
      });
    case "legal":
      return pageMetadata({
        locale,
        path: `/${page.kind === "impressum" ? "impressum" : page.kind === "datenschutz" ? "datenschutz" : "agb"}/`,
        title: tx(legalPages[page.kind].seoTitle, locale),
        description: tx(legalPages[page.kind].seoDescription, locale),
      });
    case "danke":
      return pageMetadata({
        locale,
        path: "/danke/",
        title: locale === "de" ? "Danke | ClearPoint" : "Thank you | ClearPoint",
        description: locale === "de" ? "Ihre Anfrage ist angekommen." : "Your enquiry has arrived.",
      });
    default:
      return {};
  }
}

export function RenderPage({
  locale,
  segments,
}: {
  locale: Locale;
  segments?: string[];
}) {
  const page = pageFromSegments(segments);
  switch (page.type) {
    case "home":
      return <HomeView locale={locale} />;
    case "services":
      return <ServicesIndexView locale={locale} />;
    case "service":
      if (oldServiceRedirects[page.slug]) {
        return <RedirectNotice locale={locale} to={servicePath(oldServiceRedirects[page.slug])} />;
      }
      if (!isServiceSlug(page.slug)) notFound();
      return <ServiceLanding slug={page.slug} locale={locale} />;
    case "preise":
      return <PreiseView locale={locale} />;
    case "about":
      return <AboutView locale={locale} />;
    case "blog":
      return <BlogIndexView locale={locale} />;
    case "post": {
      const post = getPost(page.slug);
      if (!post) notFound();
      return <BlogPostView locale={locale} post={post} />;
    }
    case "contact":
      return <ContactView locale={locale} />;
    case "check":
      return <WebsiteCheckView locale={locale} />;
    case "legal":
      return <LegalView locale={locale} kind={page.kind} />;
    case "danke":
      return <DankeView locale={locale} />;
    default:
      notFound();
  }
}

export function allEnglishParams() {
  return [
    { slug: [] },
    { slug: ["services"] },
    ...serviceSlugs.map((slug) => ({ slug: ["services", slug] })),
    ...Object.keys(oldServiceRedirects).map((slug) => ({ slug: ["services", slug] })),
    { slug: ["preise"] },
    { slug: ["ueber-uns"] },
    { slug: ["blog"] },
    ...blogPosts.map((post) => ({ slug: ["blog", post.slug] })),
    { slug: ["kontakt"] },
    { slug: ["website-check"] },
    { slug: ["impressum"] },
    { slug: ["datenschutz"] },
    { slug: ["agb"] },
    { slug: ["danke"] },
  ];
}

import type { Locale } from "@/i18n/dictionary";
import Link from "next/link";
import SiteShell from "@/components/site/SiteShell";
import { blogPosts } from "@/content/blog";
import { tx } from "@/content/copy";
import { ui } from "@/content/ui";
import { blogPath, withLocale } from "@/lib/routes";
import JsonLd from "@/components/site/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";

export default function BlogIndexView({ locale }: { locale: Locale }) {
  return (
    <SiteShell locale={locale}>
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: tx(ui.breadcrumbs.home, locale), path: "/" },
            { name: tx(ui.nav.blog, locale), path: "/blog/" },
          ],
          locale,
        )}
      />
      <main className="flex-1">
        <section className="hero-atmosphere py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <h1 className="text-4xl font-semibold tracking-tight text-charcoal">
              {locale === "de"
                ? "Blog: Webdesign, SEO und Website-Kosten in Wien"
                : "Blog: web design, SEO and website costs in Vienna"}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted">
              {locale === "de"
                ? "Antworten auf echte Kundenfragen – mit Verlinkung zu den passenden Leistungen."
                : "Answers to real client questions – linked to the matching services."}
            </p>
          </div>
        </section>
        <section className="py-20">
          <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2 lg:px-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="rounded-2xl border border-border/80 bg-surface p-7">
                <p className="text-xs font-semibold tracking-wide text-accent-deep uppercase">
                  {post.category}
                </p>
                <h2 className="mt-3 text-xl font-semibold text-charcoal">
                  {tx(post.title, locale)}
                </h2>
                <p className="mt-2 text-xs text-muted">
                  {tx(ui.common.updated, locale)} {post.dateModified} · {tx(post.author, locale)}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {tx(post.excerpt, locale)}
                </p>
                <Link
                  href={withLocale(blogPath(post.slug), locale)}
                  className="mt-6 inline-flex text-sm font-medium text-accent-dark"
                >
                  {tx(ui.common.readMore, locale)}
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

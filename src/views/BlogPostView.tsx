import type { Locale } from "@/i18n/dictionary";
import Link from "next/link";
import SiteShell from "@/components/site/SiteShell";
import FaqList from "@/components/site/FaqList";
import type { BlogPost } from "@/content/blog";
import { tx } from "@/content/copy";
import { ui } from "@/content/ui";
import { blogPath, withLocale } from "@/lib/routes";
import JsonLd from "@/components/site/JsonLd";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/schema";

export default function BlogPostView({
  locale,
  post,
}: {
  locale: Locale;
  post: BlogPost;
}) {
  const faq = post.faq.map((item) => ({
    question: tx(item.question, locale),
    answer: tx(item.answer, locale),
  }));

  return (
    <SiteShell locale={locale}>
      <JsonLd
        data={[
          breadcrumbJsonLd(
            [
              { name: tx(ui.breadcrumbs.home, locale), path: "/" },
              { name: tx(ui.nav.blog, locale), path: "/blog/" },
              { name: tx(post.title, locale), path: blogPath(post.slug) },
            ],
            locale,
          ),
          articleJsonLd({
            title: tx(post.title, locale),
            description: tx(post.description, locale),
            path: blogPath(post.slug),
            locale,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
          }),
          faqJsonLd(faq),
        ]}
      />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <p className="text-xs font-semibold tracking-wide text-accent-deep uppercase">
            {post.category}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-charcoal">
            {tx(post.title, locale)}
          </h1>
          <p className="mt-4 text-sm text-muted">
            {tx(ui.common.author, locale)}: {tx(post.author, locale)} · {tx(ui.common.updated, locale)}{" "}
            {post.dateModified}
          </p>
          {post.sections.map((section) => (
            <section key={section.title.de} className="mt-12">
              <h2 className="text-2xl font-semibold text-charcoal">
                {tx(section.title, locale)}
              </h2>
              {section.paragraphs.map((p) => (
                <p key={p.de} className="mt-4 leading-relaxed text-muted">
                  {tx(p, locale)}
                </p>
              ))}
            </section>
          ))}
          <Link
            href={withLocale(post.targetHref, locale)}
            className="mt-12 inline-flex rounded-2xl bg-accent px-6 py-3 text-sm font-medium text-charcoal"
          >
            {tx(ui.common.consultCta, locale)}
          </Link>
        </article>
        <FaqList items={faq} title="FAQ" />
      </main>
    </SiteShell>
  );
}

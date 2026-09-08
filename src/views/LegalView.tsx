import type { Locale } from "@/i18n/dictionary";
import SiteShell from "@/components/site/SiteShell";
import { legalPages } from "@/content/pages";
import { tx } from "@/content/copy";

export default function LegalView({
  locale,
  kind,
}: {
  locale: Locale;
  kind: "impressum" | "datenschutz" | "agb";
}) {
  const page = legalPages[kind];
  return (
    <SiteShell locale={locale}>
      <main className="mx-auto max-w-3xl flex-1 px-6 py-20 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-tight text-charcoal">
          {tx(page.h1, locale)}
        </h1>
        {page.blocks.map((block) => (
          <section key={block.title.de} className="mt-10">
            <h2 className="text-xl font-semibold text-charcoal">{tx(block.title, locale)}</h2>
            <p className="mt-3 whitespace-pre-line leading-relaxed text-muted">
              {tx(block.text, locale)}
            </p>
          </section>
        ))}
      </main>
    </SiteShell>
  );
}

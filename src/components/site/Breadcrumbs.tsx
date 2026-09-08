import Link from "next/link";
import type { Locale } from "@/i18n/dictionary";
import { withLocale } from "@/lib/routes";

export default function Breadcrumbs({
  locale,
  items,
}: {
  locale: Locale;
  items: { name: string; path: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden>/</span>}
              {last ? (
                <span className="text-charcoal">{item.name}</span>
              ) : (
                <Link
                  href={withLocale(item.path, locale)}
                  className="transition-colors hover:text-charcoal"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

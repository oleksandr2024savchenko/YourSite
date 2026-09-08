"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ui } from "@/content/ui";
import { tx } from "@/content/copy";
import { paths, stripLocale, withLocale } from "@/lib/routes";

export default function StickyCta() {
  const pathname = usePathname();
  const { locale } = useLanguage();
  const path = stripLocale(pathname);
  if (path === paths.contact || path === paths.danke) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/80 bg-background/95 p-3 backdrop-blur-sm lg:hidden">
      <Link
        href={withLocale(paths.contact, locale)}
        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-accent px-5 py-3 text-sm font-medium text-charcoal shadow-sm"
      >
        {tx(ui.sticky.cta, locale)}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

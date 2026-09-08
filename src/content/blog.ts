import { c, type Copy } from "./copy";

export type BlogCategory =
  | "Webdesign"
  | "SEO"
  | "Website Kosten"
  | "Relaunch"
  | "Online Shop"
  | "Local SEO";

export type BlogPost = {
  slug: string;
  category: BlogCategory;
  datePublished: string;
  dateModified: string;
  author: Copy;
  title: Copy;
  description: Copy;
  seoTitle: Copy;
  excerpt: Copy;
  targetHref: string;
  sections: { title: Copy; paragraphs: Copy[] }[];
  faq: { question: Copy; answer: Copy }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "was-kostet-eine-website-in-wien",
    category: "Website Kosten",
    datePublished: "2026-03-12",
    dateModified: "2026-09-01",
    author: c("ClearPoint Redaktion", "ClearPoint editorial"),
    title: c("Was kostet eine Website in Wien?", "What does a website cost in Vienna?"),
    seoTitle: c("Website Kosten Wien: Preise und Beispiele", "Website costs Vienna: prices and examples"),
    description: c(
      "Website Kosten in Wien: Onepage ab 1.499 €, Business Website ab 2.999 €, Shop ab 4.999 €. Was im Fixpreis steckt, was extra ist und wovon der Preis abhängt.",
      "Website costs in Vienna: one-pager from €1,499, business site from €2,999, shop from €4,999. What the fixed price covers, what is extra and what drives the price.",
    ),
    excerpt: c(
      "Startpreise helfen bei der Orientierung. Der Fixpreis entsteht erst, wenn Umfang, Texte und Funktionen klar sind.",
      "Starting prices help you orient. The fixed price appears once scope, copy and features are clear.",
    ),
    targetHref: "/preise/",
    sections: [
      {
        title: c("Warum es keine ehrliche Einheitszahl gibt", "Why there is no honest single number"),
        paragraphs: [
          c(
            "In Wien sehen Sie Angebote von wenigen Hundert Euro bis weit über zehntausend. Der Unterschied ist selten „guter Wille“, sondern Umfang: Seitenanzahl, Design, CMS, Texte, Shop, Sprachen und wer nach dem Launch verantwortlich bleibt.",
            "In Vienna you see quotes from a few hundred euros to well over ten thousand. The difference is rarely goodwill, it is scope: pages, design, CMS, copy, shop, languages and who stays responsible after launch.",
          ),
        ],
      },
      {
        title: c("Orientierung bei ClearPoint", "Orientation at ClearPoint"),
        paragraphs: [
          c(
            "Relaunch ab 699 €, Onepage ab 1.499 €, Landing Page ab 1.799 €, Business Website ab 2.999 €, Online-Shop ab 4.999 €. Das sind Startpreise für einen definierten Rahmen – nicht versteckte Stundenzettel.",
            "Relaunch from €699, one-pager from €1,499, landing page from €1,799, business website from €2,999, online shop from €4,999. These are starting prices for a defined frame – not hidden timesheets.",
          ),
        ],
      },
      {
        title: c("Was den Preis nach oben treibt", "What pushes the price up"),
        paragraphs: [
          c(
            "Mehr Leistungsseiten, fehlende Texte, Produktimport, Buchung, Mehrsprachigkeit und Integrationen. Deshalb gehört ins Angebot, was enthalten ist und was nicht – inklusive laufender Gebühren für Hosting oder Payment.",
            "More service pages, missing copy, product import, booking, multilingual and integrations. That is why the quote must say what is included and what is not – including recurring hosting or payment fees.",
          ),
        ],
      },
    ],
    faq: [
      {
        question: c("Ist 699 € realistisch?", "Is €699 realistic?"),
        answer: c("Ja, für einen begrenzten Relaunch. Nicht für einen Shop oder eine achtseitige neue Markenwebsite.", "Yes, for a limited relaunch. Not for a shop or an eight-page new brand site."),
      },
      {
        question: c("Zahlt man MwSt. extra?", "Is VAT extra?"),
        answer: c("Preise verstehen sich als Netto-Startpreise, sofern nicht anders ausgewiesen.", "Prices are net starting prices unless stated otherwise."),
      },
    ],
  },
  {
    slug: "website-erstellen-lassen-oder-baukasten",
    category: "Webdesign",
    datePublished: "2026-03-18",
    dateModified: "2026-08-20",
    author: c("ClearPoint Redaktion", "ClearPoint editorial"),
    title: c(
      "Website erstellen lassen oder Baukasten nutzen?",
      "Have a website built or use a website builder?",
    ),
    seoTitle: c(
      "Website erstellen lassen Wien oder Baukasten?",
      "Have a website built in Vienna or use a builder?",
    ),
    description: c(
      "Baukasten, Wix und Templates sind schnell. Eine professionell erstellte Website in Wien liefert Struktur, SEO, Formulare und Verantwortung – wann sich was lohnt.",
      "Builders, Wix and templates are fast. A professionally built website in Vienna delivers structure, SEO, forms and ownership – when each option pays off.",
    ),
    excerpt: c(
      "Ein Baukasten spart am Anfang Zeit. Er kostet später oft Struktur, Tempo und eine klare Zuständigkeit.",
      "A builder saves time at the start. Later it often costs structure, speed and clear ownership.",
    ),
    targetHref: "/services/website-erstellen-lassen/",
    sections: [
      {
        title: c("Wann ein Baukasten reicht", "When a builder is enough"),
        paragraphs: [
          c(
            "Für ein privates Projekt, einen Test oder eine Seite ohne Anspruch auf Anfragen kann ein Baukasten genügen. Sobald Kundschaft, Google und rechtliche Pflichten dazukommen, fehlen oft Konzept, Texte und technische Sorgfalt.",
            "For a private project, a test or a page with no need for enquiries, a builder can suffice. As soon as customers, Google and legal duties arrive, concept, copy and technical care are often missing.",
          ),
        ],
      },
      {
        title: c("Was Studioarbeit zusätzlich liefert", "What studio work adds"),
        paragraphs: [
          c(
            "Seitenstruktur um Ihr Angebot, eigene URLs, Formular mit Zustellung, DSGVO-Checkbox, lokale Texte für Wien und jemand, der nach dem Launch noch antwortet.",
            "Page structure around your offer, own URLs, a form that actually delivers, a GDPR checkbox, local copy for Vienna and someone who still replies after launch.",
          ),
        ],
      },
    ],
    faq: [
      {
        question: c("Ist handgemacht immer teurer?", "Is handmade always more expensive?"),
        answer: c("Am ersten Tag oft ja. Über zwei Jahre inklusive Umbau, Plugins und verlorenen Anfragen selten.", "On day one often yes. Over two years including rebuilds, plugins and lost enquiries, rarely."),
      },
    ],
  },
  {
    slug: "wann-lohnt-sich-ein-website-relaunch",
    category: "Relaunch",
    datePublished: "2026-04-02",
    dateModified: "2026-08-28",
    author: c("ClearPoint Redaktion", "ClearPoint editorial"),
    title: c("Wann lohnt sich ein Website Relaunch?", "When is a website relaunch worth it?"),
    seoTitle: c("Website Relaunch Wien: wann er sich lohnt", "Website relaunch Vienna: when it pays off"),
    description: c(
      "Ein Website Relaunch in Wien lohnt sich bei altem Design, schlechter Mobile-Version, langsamer Ladezeit und fehlenden Anfragen – wenn SEO-Migration mitgedacht wird.",
      "A website relaunch in Vienna pays off with old design, weak mobile, slow loading and missing enquiries – if SEO migration is part of the plan.",
    ),
    excerpt: c(
      "Nicht jede alte Seite muss weg. Aber wenn Mobile, Tempo und Vertrauen fehlen, kostet Warten mehr als der Umbau.",
      "Not every old site must go. But if mobile, speed and trust are missing, waiting costs more than the rebuild.",
    ),
    targetHref: "/services/website-relaunch/",
    sections: [
      {
        title: c("Fünf Signale", "Five signals"),
        paragraphs: [
          c(
            "Design wirkt mehrere Jahre alt, Smartphone-Nutzung ist mühsam, Formulare kommen nicht an, niemand findet die Leistung, die Technik ist unsicher. Eines reicht oft schon für ein Gespräch, drei zusammen sprechen für einen Relaunch.",
            "The design looks several years old, phones are painful, forms do not arrive, nobody finds the service, the stack is unsafe. One is often enough for a call, three together argue for a relaunch.",
          ),
        ],
      },
      {
        title: c("Ohne Migration riskieren Sie Rankings", "Without migration you risk rankings"),
        paragraphs: [
          c(
            "Neue Optik auf neuen URLs ohne Redirects ist ein häufiger Fehler. Wichtige Adressen, Metas, Sitemap und Search Console gehören in denselben Plan wie das Design.",
            "New looks on new URLs without redirects is a common mistake. Important addresses, metas, sitemap and Search Console belong in the same plan as the design.",
          ),
        ],
      },
    ],
    faq: [
      {
        question: c("Kann ich Texte behalten?", "Can I keep my copy?"),
        answer: c("Ja. Ein Relaunch muss nicht bedeuten, alles zu löschen.", "Yes. A relaunch does not mean deleting everything."),
      },
    ],
  },
  {
    slug: "one-page-oder-mehrseitige-website",
    category: "Webdesign",
    datePublished: "2026-04-16",
    dateModified: "2026-09-02",
    author: c("ClearPoint Redaktion", "ClearPoint editorial"),
    title: c(
      "One Page Website oder mehrseitige Website?",
      "One-page website or a multi-page website?",
    ),
    seoTitle: c("One Page Website Wien oder mehrere Seiten?", "One-page website Vienna or multiple pages?"),
    description: c(
      "One Page Website in Wien für ein klares Angebot. Mehrere Seiten, wenn Leistungen einzeln gefunden werden sollen. Entscheidungshilfe ohne Template-Dogma.",
      "A one-page website in Vienna for one clear offer. Multiple pages if services should be found separately. A decision without template dogma.",
    ),
    excerpt: c(
      "Eine Seite ist klar. Mehrere Seiten sind findbar. Die richtige Wahl hängt von Ihren Leistungen ab, nicht vom Trend.",
      "One page is clear. Several pages are findable. The right choice depends on your services, not the trend.",
    ),
    targetHref: "/services/onepage-website/",
    sections: [
      {
        title: c("Onepage, wenn das Angebot eins ist", "One-pager when the offer is one"),
        paragraphs: [
          c(
            "Freelancer, Beratung, lokaler Dienst: Hero, Leistungen, Ablauf, Vertrauen, FAQ, Kontakt. Das ist genug, solange Google nicht zehn verschiedene Suchanfragen bedienen soll.",
            "Freelancer, consulting, local service: hero, services, process, trust, FAQ, contact. That is enough as long as Google does not need to serve ten different queries.",
          ),
        ],
      },
      {
        title: c("Mehrseitig, wenn Leistungen getrennt leben", "Multi-page when services live separately"),
        paragraphs: [
          c(
            "Sobald Steuer und Lohn, Sanierung und Neubau oder Shop und Beratung eigene Geschichten brauchen, braucht jede Geschichte eine URL. Das ist die Business Website.",
            "As soon as tax and payroll, renovation and new build or shop and consulting need their own stories, each story needs a URL. That is the business website.",
          ),
        ],
      },
    ],
    faq: [
      {
        question: c("Kann ich von Onepage umsteigen?", "Can I move on from a one-pager?"),
        answer: c("Ja. Deshalb planen wir Onepages so, dass Unterseiten später dazukommen können.", "Yes. That is why we plan one-pagers so subpages can be added later."),
      },
    ],
  },
  {
    slug: "landing-page-fuer-google-ads",
    category: "SEO",
    datePublished: "2026-05-05",
    dateModified: "2026-08-15",
    author: c("ClearPoint Redaktion", "ClearPoint editorial"),
    title: c(
      "Landing Page für Google Ads erstellen lassen",
      "Have a landing page built for Google Ads",
    ),
    seoTitle: c(
      "Landing Page erstellen lassen Wien für Google Ads",
      "Landing page in Vienna for Google Ads",
    ),
    description: c(
      "Landing Page für Google Ads in Wien: Angebot, Headline, Formular, Trust und Mobile-Speed. Warum die Startseite die teuerste Zielseite ist.",
      "Landing page for Google Ads in Vienna: offer, headline, form, trust and mobile speed. Why the homepage is the most expensive destination.",
    ),
    excerpt: c(
      "Anzeigen versprechen eines. Die Startseite erzählt alles. Die Lücke dazwischen bezahlen Sie pro Klick.",
      "Ads promise one thing. The homepage tells everything. You pay for the gap per click.",
    ),
    targetHref: "/services/landing-page/",
    sections: [
      {
        title: c("Eine Anzeige, eine Seite, eine Handlung", "One ad, one page, one action"),
        paragraphs: [
          c(
            "Die Headline muss zur Anzeige passen, das Formular muss kurz sein, Einwände müssen auf der Seite stehen. Menüs und Bloglinks sind für Kampagnen oft schädlich.",
            "The headline must match the ad, the form must be short, objections must sit on the page. Menus and blog links often hurt campaigns.",
          ),
        ],
      },
      {
        title: c("Nach dem Launch testen", "Test after launch"),
        paragraphs: [
          c(
            "Headline, CTA, Formularlänge, Sozialbeweis. Ohne Messung bleibt jede Meinung gleich laut. Tracking nur mit Einwilligung.",
            "Headline, CTA, form length, social proof. Without measurement every opinion is equally loud. Tracking only with consent.",
          ),
        ],
      },
    ],
    faq: [
      {
        question: c("Kann ich sofort schalten?", "Can I run ads immediately?"),
        answer: c("Sobald Formular, Rechtstexte und optionales Conversion-Setup stehen.", "As soon as the form, legal pages and optional conversion setup are in place."),
      },
    ],
  },
  {
    slug: "online-shop-erstellen-lassen-in-wien",
    category: "Online Shop",
    datePublished: "2026-05-20",
    dateModified: "2026-09-01",
    author: c("ClearPoint Redaktion", "ClearPoint editorial"),
    title: c("Online Shop erstellen lassen in Wien", "Have an online shop built in Vienna"),
    seoTitle: c("Online Shop erstellen lassen Wien: Ablauf & Preis", "Online shop in Vienna: process and price"),
    description: c(
      "Online Shop in Wien erstellen lassen: Katalog, Checkout, Zahlung, Versand und Rechtstexte. Unterschied zwischen 10–50 Produkten und wachsendem Shop.",
      "Have an online shop built in Vienna: catalogue, checkout, payment, shipping and legal pages. The difference between 10–50 products and a growing shop.",
    ),
    excerpt: c(
      "Ein Shop ist ein Prozess: Produkt, Warenkorb, Zahlung, Recht. Wer nur Kacheln liefert, liefert keinen Shop.",
      "A shop is a process: product, cart, payment, legal. Whoever only delivers tiles does not deliver a shop.",
    ),
    targetHref: "/services/online-shop/",
    sections: [
      {
        title: c("Klein starten, ehrlich skalieren", "Start small, scale honestly"),
        paragraphs: [
          c(
            "10–50 Produkte mit einer Versandzone sind ein anderes Projekt als 100+ Artikel, B2B-Preise, Lager und zwei Sprachen. Beides ist machbar – nicht zum selben Startpreis.",
            "10–50 products with one shipping zone is a different project from 100+ items, B2B prices, inventory and two languages. Both are doable – not at the same starting price.",
          ),
        ],
      },
      {
        title: c("Österreichische Pflichtangaben", "Austrian mandatory information"),
        paragraphs: [
          c(
            "Impressum, Datenschutz, AGB, Widerruf, Versand und Zahlungsarten gehören vor den Kauf, nicht in den Footer als Dekoration.",
            "Imprint, privacy, terms, withdrawal, shipping and payment methods belong before the purchase, not in the footer as decoration.",
          ),
        ],
      },
    ],
    faq: [
      {
        question: c("Shopify oder WooCommerce?", "Shopify or WooCommerce?"),
        answer: c("Abhängig von Pflege und Integrationen. Die Plattform folgt dem Betrieb, nicht umgekehrt.", "Depends on care and integrations. The platform follows the business, not the other way around."),
      },
    ],
  },
  {
    slug: "dsgvo-konforme-website-oesterreich",
    category: "SEO",
    datePublished: "2026-06-08",
    dateModified: "2026-08-22",
    author: c("ClearPoint Redaktion", "ClearPoint editorial"),
    title: c(
      "Was gehört zu einer DSGVO-konformen Website?",
      "What belongs on a GDPR-compliant website?",
    ),
    seoTitle: c("DSGVO Website Österreich: die Pflichtliste", "GDPR website Austria: the required list"),
    description: c(
      "DSGVO-Website in Österreich: Impressum, Datenschutz, Formular-Einwilligung, Cookies nur mit Consent, keine versteckten Tracker. Was ClearPoint standardmäßig mitliefert.",
      "GDPR website in Austria: imprint, privacy, form consent, cookies only with consent, no hidden trackers. What ClearPoint ships by default.",
    ),
    excerpt: c(
      "DSGVO ist keine Textwüste im Footer. Sie steckt in Formularen, Cookies und der Frage, welche Daten wirklich nötig sind.",
      "GDPR is not a wall of footer text. It sits in forms, cookies and the question of which data is actually needed.",
    ),
    targetHref: "/datenschutz/",
    sections: [
      {
        title: c("Pflichtseiten und erreichbare Angaben", "Mandatory pages and reachable details"),
        paragraphs: [
          c(
            "Impressum und Datenschutzerklärung müssen auffindbar sein. Name, Kontakt und – je nach Rechtsform – weitere Angaben. Ein Servicegebiet statt eines erfundenen Büros ist ehrlicher als eine Musterstraße.",
            "Imprint and privacy policy must be findable. Name, contact and – depending on legal form – further details. A service area instead of an invented office is more honest than a sample street.",
          ),
        ],
      },
      {
        title: c("Formulare und Tracking", "Forms and tracking"),
        paragraphs: [
          c(
            "Wer absendet, muss wissen, wofür die Daten da sind, und zustimmen können. Analytics und Ads-Pixel gehören hinter eine Einwilligung, nicht in jede Seite als Default.",
            "Anyone who submits must know what the data is for and be able to consent. Analytics and ad pixels belong behind consent, not on every page by default.",
          ),
        ],
      },
    ],
    faq: [
      {
        question: c("Reicht ein Generator-Text?", "Is a generator text enough?"),
        answer: c("Er ist ein Start, kein Freibrief. Er muss zu Ihren echten Tools und Formularen passen.", "It is a start, not a blank cheque. It must match your real tools and forms."),
      },
    ],
  },
  {
    slug: "wie-wichtig-ist-ladezeit",
    category: "Local SEO",
    datePublished: "2026-06-24",
    dateModified: "2026-09-03",
    author: c("ClearPoint Redaktion", "ClearPoint editorial"),
    title: c("Wie wichtig ist die Ladezeit für Websites?", "How important is loading time for websites?"),
    seoTitle: c("Website Performance Check Wien: Ladezeit", "Website performance check Vienna: load time"),
    description: c(
      "Ladezeit entscheidet über Absprung, Anfragen und Bewertungen in der Suche. So prüfen Sie Performance in Wien – und wann ein Relaunch oder Website Check hilft.",
      "Load time decides bounce, enquiries and how search evaluates you. How to check performance in Vienna – and when a relaunch or website check helps.",
    ),
    excerpt: c(
      "Drei Sekunden auf dem Handy sind für viele Besucher das Limit. Performance ist kein Extra, sondern Teil der Leistung.",
      "Three seconds on a phone is the limit for many visitors. Performance is not an extra, it is part of the service.",
    ),
    targetHref: "/website-check/",
    sections: [
      {
        title: c("Warum Tempo Anfragen beeinflusst", "Why speed affects enquiries"),
        paragraphs: [
          c(
            "Langsame Seiten wirken unzuverlässig. Formulare werden nicht abgeschickt, Anzeigen werden teurer, mobile Nutzer gehen zurück zu Google.",
            "Slow pages feel unreliable. Forms are not sent, ads get more expensive, mobile users go back to Google.",
          ),
        ],
      },
      {
        title: c("Was Sie selbst prüfen können", "What you can check yourself"),
        paragraphs: [
          c(
            "PageSpeed Insights für Mobil, eine echte Smartphone-Probe, Formular-Test. Wenn LCP, Layout-Sprünge oder ein überladenes Theme auffallen, lohnt ein strukturierter Website Check oder ein Relaunch.",
            "PageSpeed Insights for mobile, a real phone test, a form test. If LCP, layout shifts or a heavy theme show up, a structured website check or relaunch is worth it.",
          ),
        ],
      },
    ],
    faq: [
      {
        question: c("Reicht ein gutes Theme?", "Is a good theme enough?"),
        answer: c("Nein, wenn es mit Plugins, schweren Slidern und unkomprimierten Bildern gefüllt wird.", "No if it is filled with plugins, heavy sliders and uncompressed images."),
      },
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

import type { ServiceSlug } from "@/lib/services";
import { c, type Copy } from "./copy";

export type FaqItem = { question: Copy; answer: Copy };
export type CaseItem = {
  industry: Copy;
  task: Copy;
  solution: Copy;
  result: Copy;
};
export type ExtraBlock = {
  title: Copy;
  intro?: Copy;
  items: { title: Copy; text: Copy }[];
};

export type ServicePageContent = {
  slug: ServiceSlug;
  menuName: Copy;
  seoTitle: Copy;
  seoDescription: Copy;
  h1: Copy;
  positioning: Copy;
  summary: Copy;
  priceFrom: Copy;
  timeline: Copy;
  imageAlt: Copy;
  trust: Copy[];
  problem: { title: Copy; intro: Copy; items: { title: Copy; text: Copy }[] };
  included: { title: Copy; items: Copy[] };
  audience: { title: Copy; fits: Copy[]; notFits: Copy[] };
  technical: { title: Copy; items: { title: Copy; text: Copy }[] };
  business: { title: Copy; items: { title: Copy; text: Copy }[] };
  process: { title: Copy; steps: { title: Copy; text: Copy }[] };
  pricing: {
    title: Copy;
    intro: Copy;
    included: Copy[];
    excluded: Copy[];
    addons: { label: Copy; price: Copy }[];
    factors: Copy[];
  };
  cases: { title: Copy; items: CaseItem[] };
  comparison: {
    title: Copy;
    intro: Copy;
    rows: { point: Copy; diy: Copy; pro: Copy }[];
  };
  local: { title: Copy; text: Copy };
  faq: FaqItem[];
  related: Array<ServiceSlug | "website-check">;
  extras: ExtraBlock[];
};

const trustDefault: Copy[] = [
  c("Fixpreis vor dem Start", "Fixed price before we start"),
  c("SEO-Basis inklusive", "SEO basics included"),
  c("Mobile First", "Mobile first"),
  c("DSGVO-konform", "GDPR compliant"),
  c("Für Wien & Umgebung", "For Vienna and around"),
  c("Antwort in 24 Stunden", "Reply within 24 hours"),
];

const demoCases: CaseItem[] = [
  {
    industry: c("Steuerberatung, 1010 Wien", "Tax firm, Vienna 1010"),
    task: c(
      "Mehrere Leistungen, unklare Startseite, kaum Anfragen über das Formular.",
      "Several services, unclear homepage, almost no form enquiries.",
    ),
    solution: c(
      "Neue Struktur mit Leistungsseiten, Vertrauensblock und kurzem Anfrageformular.",
      "New structure with service pages, a trust block and a short enquiry form.",
    ),
    result: c(
      "Demo-Ziel: Besucher finden die passende Leistung in unter 30 Sekunden.",
      "Demo goal: visitors find the right service in under 30 seconds.",
    ),
  },
  {
    industry: c("Innenarchitektur-Studio, Wien", "Interior studio, Vienna"),
    task: c(
      "Starke Arbeit offline, online nur ein veraltetes Onepager-Template.",
      "Strong offline work, online only an outdated one-page template.",
    ),
    solution: c(
      "Onepage mit klaren Sektionen, Referenzen und direktem Kontaktweg.",
      "One-pager with clear sections, references and a direct contact path.",
    ),
    result: c(
      "Demo-Ziel: professioneller Eindruck noch vor dem ersten Gespräch.",
      "Demo goal: a professional impression before the first call.",
    ),
  },
  {
    industry: c("Lokaler Fachhandel, Wien", "Local specialist shop, Vienna"),
    task: c(
      "Alte Website, langsame Ladezeit, unbrauchbar am Smartphone.",
      "Old website, slow loading, unusable on smartphones.",
    ),
    solution: c(
      "Relaunch mit neuer Technik, klaren CTAs und SEO-Migration der wichtigen URLs.",
      "Relaunch with new tech, clear CTAs and SEO migration of important URLs.",
    ),
    result: c(
      "Demo-Ziel: schnellere Seite, sichtbare Buttons, erhaltene Google-URLs.",
      "Demo goal: faster site, visible buttons, preserved Google URLs.",
    ),
  },
];

const comparisonDefault = {
  title: c(
    "Warum keine Baukasten-Lösung oder ein Billig-Template?",
    "Why not a website builder or a cheap template?",
  ),
  intro: c(
    "Baukasten, Wix oder ein fertiges Theme sind schnell. Für ein Wiener Unternehmen, das Anfragen will, fehlen oft Struktur, Texte, Technik und Verantwortung nach dem Launch.",
    "Builders, Wix or a ready-made theme are fast. For a Vienna business that wants enquiries, structure, copy, tech and post-launch ownership are often missing.",
  ),
  rows: [
    {
      point: c("Struktur & Angebot", "Structure and offer"),
      diy: c("Standard-Sektionen, die zu jeder Branche passen – und zu keiner richtig.", "Generic sections that fit every industry – and none properly."),
      pro: c("Seitenaufbau um Ihr Angebot, Ihre Kunden und eine klare Handlung.", "Page structure around your offer, your customers and one clear action."),
    },
    {
      point: c("Technik & Speed", "Tech and speed"),
      diy: c("Überladene Plugins, schwache Ladezeit, schwierige Pflege.", "Overloaded plugins, weak loading time, hard to maintain."),
      pro: c("Schlanker Code, Mobile First, messbare Performance.", "Lean code, mobile first, measurable performance."),
    },
    {
      point: c("SEO & Wien", "SEO and Vienna"),
      diy: c("Zufällige Texte, keine lokale Ausrichtung, schwache Snippets.", "Random copy, no local focus, weak snippets."),
      pro: c("Eigene URLs, klare H1/H2, lokale Signale und sinnvolle interne Links.", "Own URLs, clear H1/H2, local signals and useful internal links."),
    },
    {
      point: c("Recht & DSGVO", "Legal and GDPR"),
      diy: c("Lückenhafte Rechtstexte oder fremde Generator-Bausteine.", "Incomplete legal pages or generic generator blocks."),
      pro: c("Impressum, Datenschutz, Formular mit Einwilligung, nachvollziehbare Cookies.", "Imprint, privacy, form with consent, traceable cookies."),
    },
  ],
};

function processSteps(
  extras: { title: Copy; text: Copy }[] = [],
): { title: Copy; text: Copy }[] {
  const base = [
    {
      title: c("1. Erstgespräch", "1. Discovery call"),
      text: c(
        "Ziele, Zielgruppe, bestehende Website und Zeitrahmen. Sie erhalten danach eine klare Empfehlung.",
        "Goals, audience, current site and timeline. You then get a clear recommendation.",
      ),
    },
    {
      title: c("2. Konzept", "2. Concept"),
      text: c(
        "Struktur, Inhalte, Seitenumfang und Fixpreis. Erst wenn der Rahmen steht, beginnt die Gestaltung.",
        "Structure, content, page scope and fixed price. Design starts only after the frame is set.",
      ),
    },
    {
      title: c("3. Design", "3. Design"),
      text: c(
        "Visuelles Konzept, das zu Ihrer Marke passt – nicht zu einem beliebigen Template.",
        "A visual concept that fits your brand – not a random template.",
      ),
    },
    {
      title: c("4. Entwicklung", "4. Development"),
      text: c(
        "Umsetzung, Formulare, CMS-Grundlage, Performance und SEO-Basis.",
        "Build, forms, CMS basics, performance and SEO foundation.",
      ),
    },
    {
      title: c("5. Test & Launch", "5. Test and launch"),
      text: c(
        "Mobile, Formulare, Redirects, Rechtstexte. Go-Live erst nach Ihrer Freigabe.",
        "Mobile, forms, redirects, legal pages. Go-live only after your approval.",
      ),
    },
  ];
  return extras.length ? [...base.slice(0, 4), ...extras, base[4]] : base;
}

export const servicePages: Record<ServiceSlug, ServicePageContent> = {
  "website-erstellen-lassen": {
    slug: "website-erstellen-lassen",
    menuName: c("Website erstellen lassen", "Have a website built"),
    seoTitle: c(
      "Website erstellen lassen Wien | ClearPoint",
      "Have a website built in Vienna | ClearPoint",
    ),
    seoDescription: c(
      "Website erstellen lassen in Wien: Fixpreis, SEO-Basis, Mobile First und DSGVO. Von der Onepage bis zur Business Website – klare Struktur, echte Formulare, Start ab 699 €.",
      "Have a website built in Vienna: fixed price, SEO basics, mobile first and GDPR. From a one-pager to a business site – clear structure, real forms, from €699.",
    ),
    h1: c(
      "Website erstellen lassen in Wien",
      "Have a website built in Vienna",
    ),
    positioning: c(
      "Die zentrale Anlaufstelle, wenn Sie in Wien eine professionelle Website brauchen – nicht nur ein Template.",
      "The main starting point if you need a professional website in Vienna – not just a template.",
    ),
    summary: c(
      "ClearPoint plant, gestaltet und entwickelt Websites für Wiener Unternehmen, Selbstständige und lokale Betriebe. Sie bekommen eine klare Struktur, nachvollziehbare Preise und eine Seite, die Anfragen erzeugen kann – von der ersten Beratung bis zum Launch.",
      "ClearPoint plans, designs and builds websites for Vienna companies, independents and local businesses. You get a clear structure, transparent prices and a site that can generate enquiries – from the first call to launch.",
    ),
    priceFrom: c("ab 699 €", "from €699"),
    timeline: c("1–8 Wochen je nach Paket", "1–8 weeks depending on package"),
    imageAlt: c(
      "Besprechung einer neuen Website für ein Wiener Unternehmen am Laptop",
      "Planning a new website for a Vienna business on a laptop",
    ),
    trust: trustDefault,
    problem: {
      title: c(
        "Viele Wiener Unternehmen sind online unsichtbar",
        "Many Vienna businesses are invisible online",
      ),
      intro: c(
        "Ein Logo auf einer veralteten Seite reicht nicht. Kundinnen und Kunden prüfen Sie, bevor sie anrufen – oft am Smartphone, oft nach einem Google-Suche.",
        "A logo on an outdated page is not enough. Customers check you before they call – often on a phone, often after a Google search.",
      ),
      items: [
        {
          title: c("Unklare Leistung", "Unclear offer"),
          text: c(
            "Besucher verstehen in fünf Sekunden nicht, wen Sie bedienen und was der nächste Schritt ist.",
            "Visitors do not understand in five seconds who you serve and what the next step is.",
          ),
        },
        {
          title: c("Schwache Technik", "Weak technology"),
          text: c(
            "Lange Ladezeit, fehlende Mobile-Ansicht und Formulare, die nicht ankommen.",
            "Slow loading, missing mobile view and forms that never arrive.",
          ),
        },
        {
          title: c("Kein lokales SEO", "No local SEO"),
          text: c(
            "Die Seite spricht nicht von Wien, hat keine sinnvollen Texte und keine eigene URL pro Leistung.",
            "The site never mentions Vienna, has no useful copy and no dedicated URL per service.",
          ),
        },
      ],
    },
    included: {
      title: c("Was Sie bei ClearPoint konkret erhalten", "What you actually get with ClearPoint"),
      items: [
        c("Erstgespräch, Zielklärung und Seitenkonzept", "Discovery call, goal definition and page concept"),
        c("Individuelles Design statt Baukasten-Look", "Custom design instead of a builder look"),
        c("Umsetzung, responsive Layout und Basis-SEO", "Build, responsive layout and SEO basics"),
        c("Anfrageformular mit Erfolgsmeldung und Datenschutz-Hinweis", "Enquiry form with success state and privacy notice"),
        c("Impressum, Datenschutz und klare Kontaktwege", "Imprint, privacy policy and clear contact paths"),
        c("Launch, kurze Einweisung und Fixpreis vor dem Start", "Launch, a short handover and a fixed price before we start"),
      ],
    },
    audience: {
      title: c("Für wen wir Websites in Wien bauen", "Who we build websites for in Vienna"),
      fits: [
        c("Lokale Betriebe, die in Google gefunden werden wollen", "Local firms that want to be found on Google"),
        c("Selbstständige und Beratungen mit klarer Leistung", "Independents and consultants with a clear offer"),
        c("Unternehmen mit mehreren Leistungen, Team und Referenzen", "Companies with several services, a team and references"),
        c("Betriebe mit alter Website, die ein Relaunch brauchen", "Businesses with an old site that need a relaunch"),
        c("Shops, die Produkte online verkaufen wollen", "Shops that want to sell products online"),
      ],
      notFits: [
        c("Reine Template-Anpassung ohne Konzept und Texte", "Pure template tweaks without concept and copy"),
        c("Same-day-Websites ohne Inhalt, SEO und Tests", "Same-day websites without content, SEO and testing"),
        c("Projekte ohne Ansprechperson auf Kundenseite", "Projects without a counterpart on the client side"),
      ],
    },
    technical: {
      title: c("Technische Grundlage, die eine Website tragfähig macht", "Technical foundations that make a website last"),
      items: [
        {
          title: c("Performance", "Performance"),
          text: c("Kurze Ladezeiten, schlanke Assets, klare Priorität für Mobile.", "Short load times, lean assets, mobile as the priority."),
        },
        {
          title: c("SEO-Basis", "SEO basics"),
          text: c("Eigene Title, Description, H-Struktur, Canonical, Sitemap und interne Links.", "Own titles, descriptions, heading structure, canonical, sitemap and internal links."),
        },
        {
          title: c("Formulare & CMS", "Forms and CMS"),
          text: c("Echte Zustellung, Erfolgsstatus und – je nach Paket – editierbare Inhalte.", "Real delivery, success state and – depending on the package – editable content."),
        },
        {
          title: c("DSGVO & Sicherheit", "GDPR and security"),
          text: c("Rechtstexte, Einwilligung, HTTPS und kein unnötiges Tracking.", "Legal pages, consent, HTTPS and no unnecessary tracking."),
        },
      ],
    },
    business: {
      title: c("Was die Website für Ihr Geschäft tun soll", "What the website should do for your business"),
      items: [
        {
          title: c("Vertrauen", "Trust"),
          text: c("Sie wirken wie ein Unternehmen, dem man ein Projekt geben kann.", "You look like a company people can hand a project to."),
        },
        {
          title: c("Anfragen", "Enquiries"),
          text: c("Klare CTAs, Formular, Telefon und WhatsApp statt nur einer Mailto-Adresse.", "Clear CTAs, form, phone and WhatsApp instead of mailto only."),
        },
        {
          title: c("Sichtbarkeit", "Visibility"),
          text: c("Texte und Seiten, die zu Suchanfragen aus Wien passen.", "Copy and pages that match search intent from Vienna."),
        },
        {
          title: c("Klarer Auftritt", "A clear offer"),
          text: c("Leistungen, Preise als Orientierung und nächster Schritt auf jeder wichtigen Seite.", "Services, prices as orientation and a next step on every key page."),
        },
      ],
    },
    process: {
      title: c("So entsteht Ihre Website", "How your website is built"),
      steps: processSteps(),
    },
    pricing: {
      title: c("Transparente Startpreise, kein Überraschungspaket", "Transparent starting prices, no surprise package"),
      intro: c(
        "Der Startpreis gilt für einen klaren Umfang. Zusätzliche Seiten, Texte, Sprachen oder Integrationen rechnen wir vorher – nicht hinterher.",
        "The starting price covers a defined scope. Extra pages, copy, languages or integrations are quoted before – not after.",
      ),
      included: [
        c("Konzept, Design, Umsetzung und Launch im vereinbarten Umfang", "Concept, design, build and launch in the agreed scope"),
        c("Responsive Darstellung und SEO-Basis", "Responsive layout and SEO basics"),
        c("Kontaktformular und rechtliche Seiten", "Contact form and legal pages"),
      ],
      excluded: [
        c("Laufende Werbekampagnen und Media-Budget", "Ongoing ad campaigns and media spend"),
        c("Umfangreiche Texterstellung ganzer Kataloge ohne Auftrag", "Writing entire catalogues without a brief"),
        c("Fremdsoftware-Lizenzen, die Sie selbst abschließen", "Third-party licences you take out yourself"),
      ],
      addons: [
        { label: c("Zusätzliche Unterseite", "Extra page"), price: c("ab 149 €", "from €149") },
        { label: c("Texterstellung", "Copywriting"), price: c("ab 199 €", "from €199") },
        { label: c("Zweite Sprache", "Second language"), price: c("ab 299 €", "from €299") },
        { label: c("Wartung & Support", "Maintenance and support"), price: c("ab 39 €/Monat", "from €39/month") },
      ],
      factors: [
        c("Anzahl der Seiten und Sprachen", "Number of pages and languages"),
        c("Ob Texte und Fotos vorliegen", "Whether copy and photos already exist"),
        c("Buchung, Blog, Shop oder mehrsprachige Inhalte", "Booking, blog, shop or multilingual content"),
      ],
    },
    cases: { title: c("Beispielprojekte – so kann ein Auftritt wirken", "Sample projects – how a presence can work"), items: demoCases },
    comparison: comparisonDefault,
    local: {
      title: c("Website erstellen lassen in Wien – lokal gedacht", "Have a website built in Vienna – with a local focus"),
      text: c(
        "ClearPoint arbeitet für Wiener Unternehmen und Betriebe in der Umgebung. Wir kennen die Erwartung: klare Leistung, erreichbare Ansprechperson, Impressum und eine Seite, die am Smartphone in der U-Bahn lesbar ist. Deshalb sprechen unsere Leistungsseiten Wien, lokale Betriebe und konkrete Angebote an – nicht allgemeines Webdesign irgendwo.",
        "ClearPoint works for Vienna companies and businesses nearby. The expectation is clear: a defined offer, a reachable contact, an imprint and a site that is readable on a phone on the subway. That is why our service pages talk about Vienna, local firms and concrete offers – not generic web design anywhere.",
      ),
    },
    faq: [
      {
        question: c("Was kostet es, in Wien eine Website erstellen zu lassen?", "What does it cost to have a website built in Vienna?"),
        answer: c("Startpreise liegen zwischen 699 € für einen Relaunch und 4.999 € für einen Online-Shop. Den genauen Fixpreis erhalten Sie nach dem Erstgespräch.", "Starting prices range from €699 for a relaunch to €4,999 for an online shop. You get the exact fixed price after the discovery call."),
      },
      {
        question: c("Wie lange dauert die Umsetzung?", "How long does it take?"),
        answer: c("Onepage und Landing Pages oft 1–2 Wochen, Business Websites 3–5 Wochen, Shops 5–8 Wochen – abhängig von Feedback und Inhalten.", "One-pagers and landing pages often take 1–2 weeks, business sites 3–5 weeks, shops 5–8 weeks – depending on feedback and content."),
      },
      {
        question: c("Brauche ich Texte und Fotos vorher?", "Do I need copy and photos first?"),
        answer: c("Hilfreich ja, zwingend nicht. Wir strukturieren mit Ihnen. Professionelle Texte können Sie zuliefern oder als Option beauftragen.", "Helpful yes, mandatory no. We structure the content with you. Professional copy can be supplied or added as an option."),
      },
      {
        question: c("Ist SEO enthalten?", "Is SEO included?"),
        answer: c("Ja, als Basis: sinnvolle URLs, Title, Description, Überschriften, Sitemap, Canonical und interne Verlinkung. Laufende SEO-Kampagnen sind ein eigener Auftrag.", "Yes, as a foundation: useful URLs, title, description, headings, sitemap, canonical and internal links. Ongoing SEO campaigns are a separate brief."),
      },
      {
        question: c("Kann ich Inhalte später selbst ändern?", "Can I edit content later myself?"),
        answer: c("Bei Business Website und Shop richten wir auf Wunsch ein einfaches CMS ein. Onepage und Landing Pages können später erweitert werden.", "For business sites and shops we can set up a simple CMS. One-pagers and landing pages can be extended later."),
      },
      {
        question: c("Kümmern Sie sich um Domain und Hosting?", "Do you handle domain and hosting?"),
        answer: c("Ja, auf Wunsch. Domain, DNS, Hosting-Empfehlung und Launch gehören zu den möglichen Zusatzleistungen.", "Yes, on request. Domain, DNS, hosting advice and launch are available as extras."),
      },
      {
        question: c("Welche Website passt zu mir?", "Which website fits me?"),
        answer: c("Eine Leistung oder ein persönlicher Auftritt: Onepage. Werbung: Landing Page. Mehrere Leistungen: Business Website. Verkauf: Online-Shop. Alte Seite: Relaunch.", "One offer or a personal brand: one-pager. Ads: landing page. Several services: business website. Selling products: shop. Old site: relaunch."),
      },
      {
        question: c("Wie starte ich?", "How do I start?"),
        answer: c("Formular, E-Mail oder Telefon. Sie erhalten innerhalb von 24 Stunden eine Rückmeldung und ein unverbindliches Erstgespräch.", "Form, email or phone. You get a reply within 24 hours and a no-obligation discovery call."),
      },
    ],
    related: ["business-website", "onepage-website", "website-relaunch", "online-shop"],
    extras: [
      {
        title: c("Welche Website wir für Sie gestalten", "Which websites we build"),
        intro: c(
          "Nicht jedes Unternehmen braucht denselben Auftritt. Deshalb trennen wir die Leistungen – mit eigenen Seiten, eigenen Preisen und eigenen FAQ.",
          "Not every company needs the same presence. That is why we split the services – with their own pages, prices and FAQs.",
        ),
        items: [
          {
            title: c("Business Website", "Business website"),
            text: c("Mehrere Seiten, Leistungen, Vertrauen, CMS und lokales SEO – die Hauptlösung für die meisten Wiener Betriebe.", "Several pages, services, trust, CMS and local SEO – the main solution for most Vienna firms."),
          },
          {
            title: c("Onepage Website", "One-page website"),
            text: c("Für Freelancer, Beratungen und neue Marken, die schnell und klar online gehen wollen.", "For freelancers, consultants and new brands that want to go online quickly and clearly."),
          },
          {
            title: c("Landing Page", "Landing page"),
            text: c("Eine Seite für eine Kampagne, ein Angebot, Google Ads oder Meta Ads.", "One page for a campaign, an offer, Google Ads or Meta Ads."),
          },
          {
            title: c("Relaunch & Shop", "Relaunch and shop"),
            text: c("Bestehende Seiten modernisieren oder Produkte verkaufen – mit Checklisten statt Bauchgefühl.", "Modernise an existing site or sell products – with checklists instead of guesswork."),
          },
        ],
      },
    ],
  },
  "business-website": {
    slug: "business-website",
    menuName: c("Business Website", "Business website"),
    seoTitle: c(
      "Business Website erstellen lassen Wien ab 2999€",
      "Business website in Vienna from €2999",
    ),
    seoDescription: c(
      "Business Website erstellen lassen in Wien ab 2.999 €. Startseite, Leistungen, Referenzen, Kontakt, CMS, SEO-Basis und DSGVO – Fixpreis, Mobile First, klare Anfragen.",
      "Have a business website built in Vienna from €2,999. Home, services, references, contact, CMS, SEO basics and GDPR – fixed price, mobile first, clear enquiries.",
    ),
    h1: c(
      "Business Website erstellen lassen in Wien",
      "Have a business website built in Vienna",
    ),
    positioning: c(
      "Der vollständige Auftritt für Unternehmen mit mehreren Leistungen.",
      "The full presence for companies with several services.",
    ),
    summary: c(
      "Eine Business Website ist mehr als eine Visitenkarte: Startseite, Über uns, Leistungen, Referenzen, Kontakt und Rechtstexte. Sie erklärt Ihr Angebot, baut Vertrauen auf und führt zu einer Anfrage – auf Desktop und Smartphone.",
      "A business website is more than a calling card: home, about, services, references, contact and legal pages. It explains your offer, builds trust and leads to an enquiry – on desktop and phone.",
    ),
    priceFrom: c("ab 2.999 €", "from €2,999"),
    timeline: c("ca. 3–5 Wochen", "about 3–5 weeks"),
    imageAlt: c(
      "Moderne Büro-Website für ein Wiener Unternehmen mit klarer Leistungsübersicht",
      "Modern office website for a Vienna company with a clear services overview",
    ),
    trust: trustDefault,
    problem: {
      title: c(
        "Eine Unterseite für alles überzeugt selten",
        "One page for everything rarely convinces",
      ),
      intro: c(
        "Wenn Steuerberatung, Sanierung, Coaching oder Handel mehrere Leistungen haben, reicht eine Scroll-Seite oft nicht. Google und Kundschaft brauchen eigene Einstiege.",
        "If tax, renovation, coaching or trade cover several services, one scrolling page is often not enough. Google and customers need their own entry points.",
      ),
      items: [
        {
          title: c("Leistungen verschwinden", "Services disappear"),
          text: c("Drei Angebote in einem Absatz – niemand merkt, wofür Sie die richtige Wahl sind.", "Three offers in one paragraph – nobody sees why you are the right choice."),
        },
        {
          title: c("Kein Vertrauen", "No trust"),
          text: c("Fehlendes Team, fehlende Referenzen, mailto statt Formular.", "No team, no references, mailto instead of a form."),
        },
        {
          title: c("Schwaches lokales SEO", "Weak local SEO"),
          text: c("Keine Seiten zu Ihren Leistungen, keine internen Links, keine FAQ.", "No pages for your services, no internal links, no FAQ."),
        },
      ],
    },
    included: {
      title: c("Zusammensetzung einer Business Website", "What a business website contains"),
      items: [
        c("Startseite mit Angebot, Nutzen und klarem CTA", "Home page with offer, benefits and a clear CTA"),
        c("Über uns / Vertrauen", "About / trust"),
        c("Leistungsseiten oder Leistungsübersicht", "Service pages or service overview"),
        c("Referenzen oder Projekte", "References or projects"),
        c("Kontakt mit Formular, Telefon und NAP", "Contact with form, phone and NAP"),
        c("Impressum, Datenschutz, optional Blog oder News", "Imprint, privacy, optional blog or news"),
        c("CMS-Grundlage zum selbstständigen Pflegen von Texten", "CMS basics so you can edit texts yourself"),
        c("SEO-Basis, Mobile First, Tracking nur mit Einwilligung", "SEO basics, mobile first, tracking only with consent"),
      ],
    },
    audience: {
      title: c("Für wen eine Business Website sinnvoll ist", "Who a business website is for"),
      fits: [
        c("Unternehmen mit mehreren Leistungen oder Standorten in Wien", "Companies with several services or locations in Vienna"),
        c("Betriebe, die Referenzen, Team und Prozess zeigen wollen", "Firms that want to show references, team and process"),
        c("Marken, die über Monate in Google wachsen sollen", "Brands that should grow in Google over months"),
      ],
      notFits: [
        c("Nur eine Kampagne oder ein einzelnes Angebot – dafür die Landing Page", "Only a campaign or a single offer – use a landing page"),
        c("Rein persönlicher Auftritt ohne Unterseiten – dafür die Onepage", "A purely personal presence without subpages – use a one-pager"),
      ],
    },
    technical: {
      title: c("Technik, CMS und Pflege", "Technology, CMS and maintenance"),
      items: [
        {
          title: c("CMS", "CMS"),
          text: c("Sie ändern nach dem Launch Texte, Bilder und News, ohne den Code anfassen zu müssen.", "After launch you change texts, images and news without touching code."),
        },
        {
          title: c("Formulare", "Forms"),
          text: c("Anfragen kommen an, mit Erfolgsmeldung und Datenschutz-Checkbox.", "Enquiries arrive, with a success state and a privacy checkbox."),
        },
        {
          title: c("Schema & SEO", "Schema and SEO"),
          text: c("LocalBusiness, Service, FAQ und Breadcrumbs, wo sie der Seite helfen.", "LocalBusiness, Service, FAQ and breadcrumbs where they help the page."),
        },
        {
          title: c("Mehrsprachigkeit", "Multilingual"),
          text: c("Deutsch als Hauptsprache, Englisch mit eigenen URLs und hreflang – wenn Sie es brauchen.", "German as the main language, English with its own URLs and hreflang – if you need it."),
        },
      ],
    },
    business: {
      title: c("Geschäftlicher Nutzen", "Business benefits"),
      items: [
        {
          title: c("Verkaufshilfe", "Sales support"),
          text: c("Die Website erklärt das Angebot, bevor das Erstgespräch beginnt.", "The site explains the offer before the first call starts."),
        },
        {
          title: c("Mehr Einstiege aus Google", "More entry points from Google"),
          text: c("Eigene URLs für Leistungen statt einer einzigen Homepage.", "Own URLs for services instead of a single homepage."),
        },
        {
          title: c("Weniger Rückfragen", "Fewer follow-up questions"),
          text: c("Prozess, Preise als Orientierung und FAQ nehmen Unsicherheit.", "Process, prices as orientation and FAQ remove uncertainty."),
        },
      ],
    },
    process: {
      title: c("Prozess für Ihre Business Website", "Process for your business website"),
      steps: processSteps(),
    },
    pricing: {
      title: c("Preis und Grenzen des Pakets", "Price and package boundaries"),
      intro: c(
        "Ab 2.999 € für bis zu acht Seiten inklusive Kontakt und Rechtstexten. Weitere Seiten, Sprachen und Funktionen werden vorher angeboten.",
        "From €2,999 for up to eight pages including contact and legal pages. Extra pages, languages and features are quoted first.",
      ),
      included: [
        c("Bis zu 8 Seiten inkl. Start, Leistungen, Kontakt, Rechtliches", "Up to 8 pages including home, services, contact, legal"),
        c("Individuelles Design und Entwicklung", "Custom design and development"),
        c("CMS-Grundlage, Formular, SEO-Basis", "CMS basics, form, SEO foundation"),
      ],
      excluded: [
        c("Online-Shop, Buchungssysteme ohne Auftrag", "Online shop or booking systems without a brief"),
        c("Laufende Anzeigenbetreuung", "Ongoing ads management"),
        c("Unbegrenzte Designschleifen", "Unlimited design rounds"),
      ],
      addons: [
        { label: c("Zusätzliche Unterseite", "Extra page"), price: c("+199 €", "+€199") },
        { label: c("Mehrsprachigkeit", "Multilingual"), price: c("ab 499 €", "from €499") },
        { label: c("Blog / News", "Blog / news"), price: c("+399 €", "+€399") },
        { label: c("Terminbuchung", "Appointment booking"), price: c("+349 €", "+€349") },
        { label: c("Wartung", "Maintenance"), price: c("ab 59 €/Monat", "from €59/month") },
      ],
      factors: [
        c("Anzahl der Leistungsseiten", "Number of service pages"),
        c("Texte, Fotos, mehrsprachige Inhalte", "Copy, photos, multilingual content"),
        c("Buchung, Newsletter, Integrationen", "Booking, newsletter, integrations"),
      ],
    },
    cases: { title: c("Beispiel: so kann eine Business Website wirken", "Example: how a business website can work"), items: [demoCases[0], demoCases[2]] },
    comparison: comparisonDefault,
    local: {
      title: c("Business Website für Wiener Unternehmen", "Business websites for Vienna companies"),
      text: c(
        "Lokale Betriebe in Wien werden oft über Google, Maps und Empfehlungen gefunden. Eine Business Website verbindet NAP-Daten, Leistungsseiten und ein Formular, das auch ohne Mailprogramm funktioniert. Genau das brauchen Wiener Kundinnen und Kunden, bevor sie anrufen.",
        "Local firms in Vienna are often found via Google, Maps and referrals. A business website connects NAP data, service pages and a form that works without a mail app. That is what Vienna customers need before they call.",
      ),
    },
    faq: [
      { question: c("Wie viele Seiten sind enthalten?", "How many pages are included?"), answer: c("Bis zu acht Seiten im Startpaket. Weitere Seiten rechnen wir transparent dazu.", "Up to eight pages in the starting package. Extra pages are added transparently.") },
      { question: c("Wie lange dauert eine Business Website?", "How long does a business website take?"), answer: c("Typisch 3–5 Wochen, wenn Feedback und Inhalte zeitnah kommen.", "Typically 3–5 weeks if feedback and content arrive on time.") },
      { question: c("Ist SEO enthalten?", "Is SEO included?"), answer: c("Ja, die technische und inhaltliche Basis. Keine laufende Ranking-Kampagne ohne eigenen Auftrag.", "Yes, the technical and content foundation. No ongoing ranking campaign without its own brief.") },
      { question: c("Wer schreibt die Texte?", "Who writes the copy?"), answer: c("Sie liefern Rohmaterial, wir strukturieren. Vollständige Texterstellung ist optional.", "You supply raw material, we structure it. Full copywriting is optional.") },
      { question: c("Brauche ich eigene Fotos?", "Do I need my own photos?"), answer: c("Eigene Fotos wirken glaubwürdiger. Wir können Platzhalter setzen oder Bildauswahl beraten.", "Your own photos look more credible. We can use placeholders or advise on image choice.") },
      { question: c("Gibt es Support nach dem Launch?", "Is there support after launch?"), answer: c("Ja, als optionale Wartung: Updates, Backups, kleine Textänderungen.", "Yes, as optional maintenance: updates, backups, small text changes.") },
      { question: c("Was ist mit Hosting und Domain?", "What about hosting and domain?"), answer: c("Wir unterstützen Setup und Launch. Laufende Gebühren des Hosters bleiben beim Hoster.", "We support setup and launch. Recurring host fees stay with the host.") },
      { question: c("Kann später ein Blog dazu?", "Can a blog be added later?"), answer: c("Ja. Blog oder News sind als Erweiterung vorgesehen und intern mit den Leistungen verknüpfbar.", "Yes. Blog or news is planned as an add-on and can link internally to services.") },
    ],
    related: ["website-erstellen-lassen", "onepage-website", "website-relaunch", "support-wartung"],
    extras: [
      {
        title: c("Was Sie nach dem Launch selbst ändern können", "What you can change yourself after launch"),
        items: [
          { title: c("Texte & News", "Texts and news"), text: c("Überschriften, Absätze, Teamtexte und Beiträge – ohne Entwickler für jede Korrektur.", "Headlines, paragraphs, team copy and posts – without a developer for every fix.") },
          { title: c("Bilder", "Images"), text: c("Austausch von Fotos in vereinbarten Bereichen, mit Vorgaben für Größe und Alt-Text.", "Replacing photos in agreed areas, with rules for size and alt text.") },
          { title: c("Nicht ohne uns", "Not without us"), text: c("Struktur, Designsystem und technische SEO bleiben bewusst stabil, damit die Seite nicht zerbricht.", "Structure, design system and technical SEO stay stable on purpose so the site does not break.") },
        ],
      },
    ],
  },
  "onepage-website": {
    slug: "onepage-website",
    menuName: c("Onepage Website", "One-page website"),
    seoTitle: c(
      "One Page Website erstellen lassen Wien ab 1499€",
      "One-page website in Vienna from €1499",
    ),
    seoDescription: c(
      "One Page Website erstellen lassen in Wien ab 1.499 €. Für Freelancer, Beratungen und lokale Dienste: eine klare Seite, Fixpreis, Formular, SEO-Limits ehrlich erklärt.",
      "Have a one-page website built in Vienna from €1,499. For freelancers, consultants and local services: one clear page, fixed price, form, SEO limits explained honestly.",
    ),
    h1: c(
      "One Page Website erstellen lassen in Wien",
      "Have a one-page website built in Vienna",
    ),
    positioning: c(
      "Digitale Visitenkarte mit Status – schnell, klar, ernst genommen.",
      "A digital calling card with status – fast, clear, taken seriously.",
    ),
    summary: c(
      "Eine Onepage Website sammelt Angebot, Nutzen, Ablauf, Vertrauen und Kontakt auf einer Seite. Sie passt, wenn Sie eine klare Leistung haben – nicht wenn Sie fünf Geschäftsfelder in Google abdecken wollen.",
      "A one-page website gathers offer, benefits, process, trust and contact on one page. It fits if you have one clear service – not if you want to cover five business lines in Google.",
    ),
    priceFrom: c("ab 1.499 €", "from €1,499"),
    timeline: c("ca. 1–2 Wochen", "about 1–2 weeks"),
    imageAlt: c(
      "Klare Onepage Website am Smartphone für Selbstständige in Wien",
      "Clear one-page website on a smartphone for independents in Vienna",
    ),
    trust: trustDefault,
    problem: {
      title: c(
        "Ohne Seite wirken Sie kleiner als Ihre Arbeit",
        "Without a site you look smaller than your work",
      ),
      intro: c(
        "Instagram oder eine Visitenkarte reichen, bis jemand den Namen googelt. Dann zählt, ob eine ruhige, schnelle Seite Ihre Leistung erklärt.",
        "Instagram or a business card work until someone googles your name. Then it matters whether a calm, fast page explains your work.",
      ),
      items: [
        { title: c("Kein zentraler Ort", "No central place"), text: c("Informationen liegen in Bios, PDFs und alten Profilen verteilt.", "Information is scattered across bios, PDFs and old profiles.") },
        { title: c("Unprofessioneller erster Eindruck", "Unprofessional first impression"), text: c("Baukasten-Look oder fehlende Mobile-Ansicht kostet Gespräche.", "A builder look or missing mobile view costs conversations.") },
        { title: c("Unklarer nächster Schritt", "Unclear next step"), text: c("Besucher wissen nicht, ob sie schreiben, anrufen oder einen Termin buchen sollen.", "Visitors do not know whether to write, call or book.") },
      ],
    },
    included: {
      title: c("Struktur einer Onepage, die verkauft", "Structure of a one-pager that sells"),
      items: [
        c("Hero mit Angebot und CTA", "Hero with offer and CTA"),
        c("Leistungen in verständlichen Blöcken", "Services in understandable blocks"),
        c("Vorteile und Arbeitsweise", "Benefits and way of working"),
        c("Prozess in wenigen Schritten", "Process in a few steps"),
        c("Referenzen oder Beispielprojekte", "References or sample projects"),
        c("FAQ und Kontakt mit Formular", "FAQ and contact with form"),
        c("Rechtstexte, Mobile First, SEO-Basis für eine URL", "Legal pages, mobile first, SEO basics for one URL"),
      ],
    },
    audience: {
      title: c("Für wen eine Onepage passt", "Who a one-pager fits"),
      fits: [
        c("Freelancer und Beraterinnen mit einem klaren Angebot", "Freelancers and consultants with one clear offer"),
        c("Lokale Dienstleistungen und neue Geschäftsmodelle", "Local services and new businesses"),
        c("Persönliche Marken, die Vertrauen vor Menge brauchen", "Personal brands that need trust before volume"),
      ],
      notFits: [
        c("Mehrere Geschäftsfelder, die einzeln gefunden werden sollen – dann Business Website", "Several lines of business that should be found separately – then a business website"),
        c("Produktkatalog und Checkout – dann Online-Shop", "Product catalogue and checkout – then an online shop"),
      ],
    },
    technical: {
      title: c("Technik einer schnellen Onepage", "Technology of a fast one-pager"),
      items: [
        { title: c("Eine URL, klarer Fokus", "One URL, clear focus"), text: c("Alle Inhalte auf einer Adresse, mit Ankern statt versteckter Unterseiten.", "All content on one address, with anchors instead of hidden subpages.") },
        { title: c("Performance", "Performance"), text: c("Wenig Ballast, schnelle Mobile-Ansicht, sichtbare Buttons.", "Little bulk, fast mobile view, visible buttons.") },
        { title: c("SEO-Limits", "SEO limits"), text: c("Eine Onepage kann eine Hauptanfrage gut bedienen, nicht zehn Leistungs-Keywords gleichzeitig.", "A one-pager can serve one main query well, not ten service keywords at once.") },
        { title: c("Erweiterbar", "Extendable"), text: c("Später können Unterseiten ergänzt werden, ohne bei null zu starten.", "Subpages can be added later without starting from zero.") },
      ],
    },
    business: {
      title: c("Was Sie damit gewinnen", "What you gain"),
      items: [
        { title: c("Ernsthaftigkeit", "Seriousness"), text: c("Ein Link, den Sie in der Signatur und auf LinkedIn teilen können.", "A link you can share in your signature and on LinkedIn.") },
        { title: c("Anfragen", "Enquiries"), text: c("Formular und Telefon auf der gleichen Seite wie das Angebot.", "Form and phone on the same page as the offer.") },
        { title: c("Klarheit", "Clarity"), text: c("Besucher scrollen eine Geschichte, statt sich zu verirren.", "Visitors scroll one story instead of getting lost.") },
      ],
    },
    process: {
      title: c("Ablauf für Ihre Onepage", "Process for your one-pager"),
      steps: processSteps(),
    },
    pricing: {
      title: c("Preis der Onepage Website", "One-page website price"),
      intro: c(
        "Ab 1.499 € für eine Seite mit bis zu sechs Sektionen, Formular und Rechtstexten.",
        "From €1,499 for one page with up to six sections, form and legal pages.",
      ),
      included: [
        c("Individuelles Design, bis zu 6 Sektionen", "Custom design, up to 6 sections"),
        c("Kontaktformular, Mobile First, SEO-Basis", "Contact form, mobile first, SEO basics"),
        c("Launch und kurze Übergabe", "Launch and a short handover"),
      ],
      excluded: [
        c("Unbegrenzte Extra-Sektionen ohne Auftrag", "Unlimited extra sections without a brief"),
        c("Mehrere Leistungs-URLs wie bei einer Business Website", "Several service URLs like a business website"),
      ],
      addons: [
        { label: c("Zusätzliche Sektion", "Extra section"), price: c("+149 €", "+€149") },
        { label: c("Texterstellung", "Copywriting"), price: c("+249 €", "+€249") },
        { label: c("Zweite Sprache", "Second language"), price: c("+299 €", "+€299") },
        { label: c("Ausbau zur Business Website", "Upgrade to a business website"), price: c("individuell", "custom") },
        { label: c("Wartung", "Maintenance"), price: c("ab 39 €/Monat", "from €39/month") },
      ],
      factors: [
        c("Anzahl der Sektionen und Sprachen", "Number of sections and languages"),
        c("Texte, Fotos, Buchungsbutton", "Copy, photos, booking button"),
      ],
    },
    cases: { title: c("Beispiel Onepage", "One-pager example"), items: [demoCases[1]] },
    comparison: comparisonDefault,
    local: {
      title: c("One Page Website in Wien für lokale Anbieter", "One-page websites in Vienna for local providers"),
      text: c(
        "Für Coachings, Studios, Handwerk und Beratungen in Wien ist eine starke Onepage oft der schnellste Weg: gefunden werden, verstanden werden, schreiben. Wenn später weitere Leistungen dazukommen, bauen wir Unterseiten – ehrlich statt alles in eine Scroll-Seite zu pressen.",
        "For coaching, studios, trades and consulting in Vienna, a strong one-pager is often the fastest path: be found, be understood, get a message. If more services come later, we add subpages – honestly, instead of cramming everything into one scroll.",
      ),
    },
    faq: [
      { question: c("Kann ich später auf mehrere Seiten erweitern?", "Can I expand to multiple pages later?"), answer: c("Ja. Die Onepage ist ein Start, kein Gefängnis. Der Ausbau zur Business Website ist vorgesehen.", "Yes. The one-pager is a start, not a trap. An upgrade to a business website is planned for.") },
      { question: c("Wie viele Sektionen sind enthalten?", "How many sections are included?"), answer: c("Bis zu sechs im Startpreis. Weitere Sektionen als Option.", "Up to six in the starting price. Extra sections as an option.") },
      { question: c("Wer schreibt die Texte?", "Who writes the copy?"), answer: c("Gemeinsam. Rohfassung von Ihnen, Feinschliff oder volle Texterstellung optional.", "Together. A draft from you, polish or full copywriting optional.") },
      { question: c("Reicht eine Onepage für SEO?", "Is a one-pager enough for SEO?"), answer: c("Für einen klaren Auftritt ja. Für viele Leistungs-Keywords ist eine Business Website besser.", "For a clear presence yes. For many service keywords a business website is better.") },
      { question: c("Wie lange dauert es?", "How long does it take?"), answer: c("Oft 1–2 Wochen nach Freigabe von Konzept und Inhalten.", "Often 1–2 weeks after concept and content are approved.") },
      { question: c("Ist ein Formular enthalten?", "Is a form included?"), answer: c("Ja, mit Erfolgsmeldung und Datenschutz-Checkbox – nicht nur mailto.", "Yes, with success state and privacy checkbox – not mailto only.") },
      { question: c("Brauche ich Hosting?", "Do I need hosting?"), answer: c("Ja. Wir helfen bei der Einrichtung. Monatliche Hostingkosten sind separat.", "Yes. We help with setup. Monthly hosting fees are separate.") },
      { question: c("Für wen ist es nicht geeignet?", "Who is it not for?"), answer: c("Für Shops, große Leistungsportfolios und starke SEO-Pläne mit vielen URLs.", "For shops, large service portfolios and SEO plans with many URLs.") },
    ],
    related: ["business-website", "landing-page", "website-erstellen-lassen"],
    extras: [
      {
        title: c("SEO-Grenze der Onepage – klar gesagt", "The SEO limit of a one-pager – said clearly"),
        items: [
          { title: c("Eine Hauptintention", "One main intent"), text: c("Die Seite kann „Ihre Marke + Wien“ oder eine Kernleistung tragen.", "The page can carry “your brand + Vienna” or one core service.") },
          { title: c("Viele Leistungen", "Many services"), text: c("Dann braucht jedes Angebot eine eigene URL – das ist die Business Website.", "Then each offer needs its own URL – that is the business website.") },
        ],
      },
    ],
  },
  "landing-page": {
    slug: "landing-page",
    menuName: c("Landing Page", "Landing page"),
    seoTitle: c(
      "Landing Page erstellen lassen Wien für Leads",
      "Landing page in Vienna for campaigns and leads",
    ),
    seoDescription: c(
      "Landing Page erstellen lassen in Wien für Google Ads, Meta Ads und Angebote. Klare Headline, Formular, Trust, Mobile-Speed. Start ab 1.799 €, Fixpreis vor dem Launch.",
      "Have a landing page built in Vienna for Google Ads, Meta Ads and offers. Clear headline, form, trust, mobile speed. From €1,799, fixed price before launch.",
    ),
    h1: c(
      "Landing Page erstellen lassen in Wien",
      "Have a landing page built in Vienna",
    ),
    positioning: c(
      "Eine Seite, eine Handlung: aus Klicks werden Anfragen.",
      "One page, one action: clicks become enquiries.",
    ),
    summary: c(
      "Landing Pages sind für Kampagnen, nicht für die gesamte Firmengeschichte. Wir bauen Angebot, Einwandbehandlung, Vertrauen und Formular so, dass Werbebudget nicht auf einer unklaren Seite verpufft.",
      "Landing pages are for campaigns, not the whole company story. We build offer, objections, trust and form so ad budget does not vanish on an unclear page.",
    ),
    priceFrom: c("ab 1.799 €", "from €1,799"),
    timeline: c("ca. 1–2 Wochen", "about 1–2 weeks"),
    imageAlt: c(
      "Conversion-starke Landing Page mit Formular für Werbekampagnen",
      "High-conversion landing page with a form for ad campaigns",
    ),
    trust: trustDefault,
    problem: {
      title: c(
        "Werbung auf der Startseite zu landen ist teuer",
        "Sending ads to the homepage is expensive",
      ),
      intro: c(
        "Die Startseite erzählt alles. Eine Anzeige verspricht eines. Wenn beides nicht zusammenpasst, zahlt Sie Klicks ohne Anfragen.",
        "The homepage tells everything. An ad promises one thing. If they do not match, you pay for clicks without enquiries.",
      ),
      items: [
        { title: c("Zu viele Auswege", "Too many exits"), text: c("Menüs und Bloglinks ziehen Kampagnenbesucher weg vom Formular.", "Menus and blog links pull campaign visitors away from the form.") },
        { title: c("Schwaches Angebot", "Weak offer"), text: c("Keine klare Headline, kein Nutzen, keine nächste Handlung.", "No clear headline, no benefit, no next action.") },
        { title: c("Langsames Mobile", "Slow mobile"), text: c("Die meisten Ads werden am Handy gesehen. Drei Sekunden Wartezeit reichen zum Absprung.", "Most ads are seen on phones. Three seconds of waiting is enough to leave.") },
      ],
    },
    included: {
      title: c("Elemente, die eine Landing Page braucht", "Elements a landing page needs"),
      items: [
        c("Angebot und Headline, die zur Anzeige passen", "Offer and headline that match the ad"),
        c("Nutzen, Sozialbeweis oder Beispielprojekte", "Benefits, social proof or sample projects"),
        c("Einwandbehandlung", "Objection handling"),
        c("Formular über dem Falz und am Ende", "Form above the fold and at the end"),
        c("Trust: Fixpreis, Ablauf, Datenschutz", "Trust: fixed price, process, privacy"),
        c("Mobile Speed und Tracking-Vorbereitung", "Mobile speed and tracking preparation"),
      ],
    },
    audience: {
      title: c("Für wen die Landing Page gedacht ist", "Who the landing page is for"),
      fits: [
        c("Google Ads und Meta Ads zu einer Leistung", "Google Ads and Meta Ads for one service"),
        c("Ein Produkt, ein Workshop, ein saisonales Angebot", "One product, one workshop, one seasonal offer"),
        c("Teams, die Leads messen wollen", "Teams that want to measure leads"),
      ],
      notFits: [
        c("Ersatz für die gesamte Unternehmenswebsite", "A replacement for the whole company website"),
        c("SEO für zehn verschiedene Suchanfragen", "SEO for ten different queries"),
      ],
    },
    technical: {
      title: c("Technik für bezahlten Traffic", "Technology for paid traffic"),
      items: [
        { title: c("Geschwindigkeit", "Speed"), text: c("Schlanke Seite, priorisierte LCP-Inhalte, wenig Drittanbieter vor Consent.", "Lean page, prioritized LCP content, few third parties before consent.") },
        { title: c("Tracking", "Tracking"), text: c("Conversion-Setup als Option: Sie sehen, welche Anzeige Anfragen bringt.", "Conversion setup as an option: you see which ad brings enquiries.") },
        { title: c("A/B-fähig", "A/B ready"), text: c("Zweite Variante für Headline, CTA oder Formularlänge möglich.", "A second variant for headline, CTA or form length is possible.") },
        { title: c("Danke-Status", "Thank-you state"), text: c("Nach dem Absenden eine klare Bestätigung, kein totes Formular.", "After submit, a clear confirmation – not a dead form.") },
      ],
    },
    business: {
      title: c("Warum sich die eigene Landing Page rechnet", "Why a dedicated landing page pays off"),
      items: [
        { title: c("Günstigere Leads", "Cheaper leads"), text: c("Die Seite spricht dieselbe Sprache wie die Anzeige.", "The page speaks the same language as the ad.") },
        { title: c("Messbarkeit", "Measurability"), text: c("Eine Handlung, ein Formular, auswertbare Kampagnen.", "One action, one form, campaigns you can evaluate.") },
        { title: c("Fokus", "Focus"), text: c("Kein Blog, kein Shop-Menü, keine Ablenkung.", "No blog, no shop menu, no distraction.") },
      ],
    },
    process: {
      title: c("Von Briefing bis schaltbereit", "From briefing to ready-to-run"),
      steps: processSteps(),
    },
    pricing: {
      title: c("Preis der Landing Page", "Landing page price"),
      intro: c(
        "Ab 1.799 € inklusive Formular, Danke-Status und Rechtstexten. Tracking und A/B-Varianten optional.",
        "From €1,799 including form, thank-you state and legal pages. Tracking and A/B variants optional.",
      ),
      included: [
        c("Eine Kampagnenseite, ein Angebot, ein Formular", "One campaign page, one offer, one form"),
        c("Mobile Optimierung und Conversion-Struktur", "Mobile optimisation and conversion structure"),
        c("Rechtstexte und Erfolgsstatus", "Legal pages and success state"),
      ],
      excluded: [
        c("Media-Budget und laufende Ads-Betreuung", "Media budget and ongoing ads management"),
        c("Unbegrenzte Varianten ohne Auftrag", "Unlimited variants without a brief"),
      ],
      addons: [
        { label: c("Zweite Variante für A/B-Tests", "Second variant for A/B tests"), price: c("+349 €", "+€349") },
        { label: c("Tracking-Setup", "Tracking setup"), price: c("+199 €", "+€199") },
        { label: c("Texterstellung", "Copywriting"), price: c("+249 €", "+€249") },
        { label: c("Wartung", "Maintenance"), price: c("ab 39 €/Monat", "from €39/month") },
      ],
      factors: [
        c("Länge des Formulars und Integrationen", "Form length and integrations"),
        c("Anzahl der Varianten", "Number of variants"),
        c("Ob Anzeigentexte schon stehen", "Whether ad copy already exists"),
      ],
    },
    cases: { title: c("Beispiel Kampagnenseite", "Campaign page example"), items: [demoCases[0]] },
    comparison: comparisonDefault,
    local: {
      title: c("Landing Pages für Kampagnen aus Wien", "Landing pages for campaigns from Vienna"),
      text: c(
        "Wer in Wien Anzeigen schaltet, konkurriert um Aufmerksamkeit, nicht um lange Broschüren. Eine Landing Page mit lokalem Bezug, klarer Leistung und erreichbarem Kontakt holt mehr aus jedem Klick – unabhängig davon, ob die Kampagne auf die Innere Stadt oder auf ganz Österreich zielt.",
        "If you run ads in Vienna, you compete for attention, not for long brochures. A landing page with local context, a clear offer and a reachable contact gets more from every click – whether the campaign targets the inner city or all of Austria.",
      ),
    },
    faq: [
      { question: c("Worin unterscheidet sich eine Landing Page von der Website?", "How is a landing page different from a website?"), answer: c("Die Website erklärt das Unternehmen. Die Landing Page hat eine Kampagne und eine Handlung.", "The website explains the company. The landing page has one campaign and one action.") },
      { question: c("Was kostet sie?", "What does it cost?"), answer: c("Startpreis 1.799 €. Tracking, Texte und Varianten sind optionale Posten.", "Starting price €1,799. Tracking, copy and variants are optional lines.") },
      { question: c("Brauche ich Analytics?", "Do I need analytics?"), answer: c("Für bezahlten Traffic ja. Wir richten auf Wunsch Conversion-Messung ein, mit Einwilligung.", "For paid traffic yes. We can set up conversion measurement, with consent.") },
      { question: c("Kann ich nach dem Launch sofort werben?", "Can I advertise right after launch?"), answer: c("Ja, sobald Formular, Rechtstexte und – falls gewünscht – Tracking stehen.", "Yes, once the form, legal pages and – if requested – tracking are in place.") },
      { question: c("Testen wir nach dem Start?", "Do we test after launch?"), answer: c("Empfohlen: Headline, CTA, Formularlänge und Sozialbeweis. Eine zweite Variante ist als Add-on buchbar.", "Recommended: headline, CTA, form length and social proof. A second variant is available as an add-on.") },
      { question: c("Geht das auch ohne laufende Ads?", "Does it work without ongoing ads?"), answer: c("Ja, als Angebotsseite. Der größte Hebel entsteht aber mit Kampagnen.", "Yes, as an offer page. The biggest leverage still comes with campaigns.") },
      { question: c("Wie schnell ist sie fertig?", "How fast is it ready?"), answer: c("Oft 1–2 Wochen, wenn Angebot und Zielgruppe klar sind.", "Often 1–2 weeks if offer and audience are clear.") },
      { question: c("Ist DSGVO berücksichtigt?", "Is GDPR covered?"), answer: c("Ja: Einwilligung im Formular, Datenschutzseite, kein Tracking vor Consent.", "Yes: consent in the form, privacy page, no tracking before consent.") },
    ],
    related: ["business-website", "website-erstellen-lassen", "online-shop"],
    extras: [
      {
        title: c("Was Sie nach dem Launch testen sollten", "What you should test after launch"),
        items: [
          { title: c("Headline", "Headline"), text: c("Verspricht sie dasselbe wie die Anzeige?", "Does it promise the same as the ad?") },
          { title: c("CTA", "CTA"), text: c("Erstgespräch, Angebot oder Download – eine Handlung.", "Discovery call, quote or download – one action.") },
          { title: c("Formular", "Form"), text: c("Weniger Felder gegen mehr Absendungen abwägen.", "Weigh fewer fields against more submits.") },
          { title: c("Sozialbeweis", "Social proof"), text: c("Nur echte Nachweise. Keine erfundenen Sterne.", "Only real proof. No invented stars.") },
        ],
      },
    ],
  },
  "website-relaunch": {
    slug: "website-relaunch",
    menuName: c("Website Relaunch", "Website relaunch"),
    seoTitle: c(
      "Website Relaunch Wien: moderne Website ab 699€",
      "Website relaunch Vienna: modern site from €699",
    ),
    seoDescription: c(
      "Website Relaunch in Wien ab 699 €: neues Design, Mobile, Tempo, SEO-Migration mit Redirects. Alte URLs behalten, Vertrauen stärken, Formulare reparieren. Fixpreis.",
      "Website relaunch in Vienna from €699: new design, mobile, speed, SEO migration with redirects. Keep old URLs, rebuild trust, fix forms. Fixed price.",
    ),
    h1: c("Website Relaunch Wien", "Website relaunch in Vienna"),
    positioning: c(
      "Frischer Auftritt, ohne Ihre Google-Sichtbarkeit zu verschenken.",
      "A fresh presence without giving away your Google visibility.",
    ),
    summary: c(
      "Ein Relaunch ist mehr als ein neues Theme. Wir modernisieren Design und Technik, machen die Seite am Smartphone brauchbar und planen die SEO-Migration: wichtige URLs, Redirects, Metadaten, Indexierung und Analytics.",
      "A relaunch is more than a new theme. We modernise design and technology, make the site usable on phones and plan the SEO migration: important URLs, redirects, metadata, indexing and analytics.",
    ),
    priceFrom: c("ab 699 €", "from €699"),
    timeline: c("ca. 1–2 Wochen", "about 1–2 weeks"),
    imageAlt: c(
      "Vorher-Nachher-Vergleich eines Website-Relaunchs am Desktop",
      "Before-and-after comparison of a website relaunch on desktop",
    ),
    trust: trustDefault,
    problem: {
      title: c("Warum ein Website Relaunch jetzt nötig wird", "Why a website relaunch is needed now"),
      intro: c(
        "Alte Seiten verlieren nicht nur an Optik. Sie verlieren Tempo, Sicherheit, Mobile-Nutzung und damit Anfragen.",
        "Old sites do not only look dated. They lose speed, security, mobile use and therefore enquiries.",
      ),
      items: [
        { title: c("Altes Design", "Old design"), text: c("Wirkt unbeabsichtigt günstig – unabhängig von der Qualität Ihrer Arbeit.", "Looks unintentionally cheap – regardless of the quality of your work.") },
        { title: c("Langsame Ladezeit", "Slow loading"), text: c("Besucher warten nicht. Google auch nicht.", "Visitors will not wait. Neither will Google.") },
        { title: c("Schwache Mobile-Version", "Weak mobile version"), text: c("Texte zu klein, Menü unbrauchbar, Formular abgeschnitten.", "Text too small, menu unusable, form cut off.") },
        { title: c("Schwache Conversion", "Weak conversion"), text: c("Kein sichtbarer CTA, nur eine Mailto-Adresse, tote Buttons.", "No visible CTA, only a mailto address, dead buttons.") },
        { title: c("Veraltete Technik", "Outdated technology"), text: c("Unsichere Plugins, kein HTTPS-Zwang, keine Pflege.", "Insecure plugins, no forced HTTPS, no maintenance.") },
      ],
    },
    included: {
      title: c("Was der Relaunch umfasst", "What the relaunch includes"),
      items: [
        c("Analyse der bestehenden Seiten, Inhalte und URLs", "Review of existing pages, content and URLs"),
        c("Neues Design auf Basis Ihrer Inhalte", "New design based on your content"),
        c("Technisches Refresh: Tempo, Mobile, Formulare", "Technical refresh: speed, mobile, forms"),
        c("SEO-Migrationsplan für wichtige Adressen", "SEO migration plan for important addresses"),
        c("Go-Live inklusive Übergabe", "Go-live including handover"),
      ],
    },
    audience: {
      title: c("Für wen der Relaunch gedacht ist", "Who the relaunch is for"),
      fits: [
        c("Unternehmen mit einer Seite, die mehrere Jahre alt wirkt", "Companies with a site that looks several years old"),
        c("Betriebe, deren Seite am Handy kaum nutzbar ist", "Businesses whose site is barely usable on phones"),
        c("Marken, die Inhalte behalten, aber den Auftritt erneuern wollen", "Brands that want to keep content but renew the presence"),
      ],
      notFits: [
        c("Komplett neues Geschäftsmodell ohne bestehende Seite – dann eher Business Website oder Onepage", "A brand-new business with no site – then a business website or one-pager"),
      ],
    },
    technical: {
      title: c("SEO-Migration, nicht nur Optik", "SEO migration, not just looks"),
      items: [
        { title: c("URLs behalten", "Keep URLs"), text: c("Wichtige Adressen bleiben, wo es sinnvoll ist.", "Important addresses stay where it makes sense.") },
        { title: c("Redirects", "Redirects"), text: c("Alte Pfade zeigen auf die neuen Ziele, statt 404 zu werden.", "Old paths point to the new targets instead of becoming 404s.") },
        { title: c("Metadaten", "Metadata"), text: c("Title, Description und Canonical werden neu gesetzt, nicht vergessen.", "Title, description and canonical are reset, not forgotten.") },
        { title: c("Index & Analytics", "Index and analytics"), text: c("Sitemap, robots, Search Console und Messung bleiben Teil des Plans.", "Sitemap, robots, Search Console and measurement stay part of the plan.") },
      ],
    },
    business: {
      title: c("Was sich nach dem Relaunch ändern soll", "What should change after the relaunch"),
      items: [
        { title: c("Vertrauen", "Trust"), text: c("Die Seite passt wieder zur Qualität Ihrer Arbeit.", "The site matches the quality of your work again.") },
        { title: c("Anfragen", "Enquiries"), text: c("CTA und Formular sind sichtbar – auch auf dem Handy.", "CTA and form are visible – including on phones.") },
        { title: c("Ruhe in Google", "Calm in Google"), text: c("Sichtbarkeit wird umgezogen, nicht leichtfertig gelöscht.", "Visibility is moved, not casually deleted.") },
      ],
    },
    process: {
      title: c("Ablauf inkl. Migration", "Process including migration"),
      steps: processSteps([
        {
          title: c("SEO-Check vor dem Launch", "SEO check before launch"),
          text: c(
            "URL-Liste, Redirects, Metas, Formulare und Mobile-Test gegen die Live-Seite.",
            "URL list, redirects, metas, forms and a mobile test against the live site.",
          ),
        },
      ]),
    },
    pricing: {
      title: c("Relaunch-Preis und Grenzen", "Relaunch price and boundaries"),
      intro: c(
        "Ab 699 € für die Modernisierung Ihrer bestehenden Website mit bis zu fünf Seiten. Größerer Umfang wird vorher angeboten.",
        "From €699 for modernising your existing site with up to five pages. Larger scope is quoted first.",
      ),
      included: [
        c("Design-Update, Technik-Refresh, klarere CTAs", "Design update, tech refresh, clearer CTAs"),
        c("Bis zu 5 Seiten, Mobile, Basis-SEO", "Up to 5 pages, mobile, SEO basics"),
        c("Launch und Übergabe der Zugänge", "Launch and handover of access"),
      ],
      excluded: [
        c("Komplett neue Informationsarchitektur mit vielen neuen URLs ohne Auftrag", "A completely new IA with many new URLs without a brief"),
        c("Shop-Funktionen", "Shop features"),
      ],
      addons: [
        { label: c("Zusätzliche Unterseite", "Extra page"), price: c("+149 €", "+€149") },
        { label: c("Texte überarbeiten", "Copy rewrite"), price: c("+199 €", "+€199") },
        { label: c("Domain-/Hosting-Umzug", "Domain/hosting move"), price: c("+99 €", "+€99") },
        { label: c("Wartung", "Maintenance"), price: c("ab 39 €/Monat", "from €39/month") },
      ],
      factors: [
        c("Anzahl der URLs und Sprachen", "Number of URLs and languages"),
        c("Wie stark Inhalte neu geschrieben werden", "How heavily content is rewritten"),
        c("CMS-Wechsel ja/nein", "CMS change yes/no"),
      ],
    },
    cases: { title: c("Beispiel Relaunch", "Relaunch example"), items: [demoCases[2]] },
    comparison: comparisonDefault,
    local: {
      title: c("Website Relaunch für Wiener Betriebe", "Website relaunch for Vienna businesses"),
      text: c(
        "Viele Wiener Unternehmen haben seit Jahren dieselbe Seite. Kundschaft erwartet heute Tempo, Mobile und ein Formular. Ein Relaunch in Wien heißt: modern wirken, erreichbar sein und die Adressen behalten, die Google bereits kennt.",
        "Many Vienna companies have had the same site for years. Customers now expect speed, mobile and a form. A relaunch in Vienna means: look current, be reachable and keep the addresses Google already knows.",
      ),
    },
    faq: [
      { question: c("Wie lange dauert ein Relaunch?", "How long does a relaunch take?"), answer: c("Oft 1–2 Wochen für den Startumfang, länger bei vielen URLs oder neuem CMS.", "Often 1–2 weeks for the starting scope, longer with many URLs or a new CMS.") },
      { question: c("Verliere ich meine Google-Positionen?", "Will I lose my Google rankings?"), answer: c("Nicht, wenn wir URLs, Redirects und Metas planen. Ein Relaunch ohne Migration ist das eigentliche Risiko.", "Not if we plan URLs, redirects and metas. A relaunch without migration is the real risk.") },
      { question: c("Kann ich Inhalte behalten?", "Can I keep my content?"), answer: c("Ja. Wir übernehmen, was trägt, und schärfen Struktur und Ansprache.", "Yes. We keep what works and sharpen structure and wording.") },
      { question: c("Was kostet der Umzug?", "What does the move cost?"), answer: c("Der Relaunch startet bei 699 €. Domain- und Hosting-Umzug ist optional zuzüglich 99 €.", "The relaunch starts at €699. Domain and hosting move is optional plus €99.") },
      { question: c("Brauche ich neue Texte?", "Do I need new copy?"), answer: c("Nicht zwingend. Eine Überarbeitung ist als Option buchbar.", "Not necessarily. A rewrite is available as an option.") },
      { question: c("Was passiert mit alten Links?", "What happens to old links?"), answer: c("Wichtige Links bekommen Redirects. 404-Seiten werden vor dem Launch geprüft.", "Important links get redirects. 404s are checked before launch.") },
      { question: c("Ist Mobile inklusive?", "Is mobile included?"), answer: c("Ja. Ein Relaunch ohne brauchbare Smartphone-Ansicht ist keiner.", "Yes. A relaunch without a usable phone view is not a relaunch.") },
      { question: c("Gibt es danach Wartung?", "Is there maintenance afterwards?"), answer: c("Optional ab 39 € im Monat: Updates, Backups, kleine Änderungen.", "Optional from €39 per month: updates, backups, small changes.") },
    ],
    related: ["business-website", "website-check", "support-wartung"],
    extras: [
      {
        title: c("SEO-Migrations-Checkliste", "SEO migration checklist"),
        items: [
          { title: c("Wichtige URLs", "Important URLs"), text: c("Liste der Seiten, die Traffic oder Backlinks haben.", "List of pages that have traffic or backlinks.") },
          { title: c("Redirects", "Redirects"), text: c("Alte Pfade → neue Ziele, 1:1 wo möglich.", "Old paths → new targets, 1:1 where possible.") },
          { title: c("Metas", "Metas"), text: c("Title und Description nicht leer lassen oder duplizieren.", "Do not leave titles and descriptions empty or duplicated.") },
          { title: c("Indexierung", "Indexing"), text: c("robots.txt, Sitemap, Canonical, Search Console.", "robots.txt, sitemap, canonical, Search Console.") },
          { title: c("Analytics", "Analytics"), text: c("Messung vor und nach dem Launch vergleichbar halten.", "Keep measurement comparable before and after launch.") },
        ],
      },
      {
        title: c("Vorher und nachher", "Before and after"),
        items: [
          { title: c("Design", "Design"), text: c("Von überladen oder veraltet zu ruhig und markenpassend.", "From cluttered or dated to calm and on-brand.") },
          { title: c("Struktur", "Structure"), text: c("Von versteckten Leistungen zu sichtbaren Blöcken und CTAs.", "From hidden services to visible blocks and CTAs.") },
          { title: c("Tempo", "Speed"), text: c("Von schweren Themes zu schlanker Auslieferung.", "From heavy themes to lean delivery.") },
          { title: c("Trust", "Trust"), text: c("Von mailto und Lücken zu Formular, NAP und Rechtstexten.", "From mailto and gaps to form, NAP and legal pages.") },
        ],
      },
    ],
  },
  "online-shop": {
    slug: "online-shop",
    menuName: c("Online Shop", "Online shop"),
    seoTitle: c(
      "Online Shop erstellen lassen Wien ab 4999€",
      "Online shop in Vienna from €4999",
    ),
    seoDescription: c(
      "Online Shop erstellen lassen in Wien ab 4.999 €. Katalog, Warenkorb, Zahlung, Versand, Rechtstexte und CMS. Kleinshop oder Wachstum – Fixpreis vor dem Start.",
      "Have an online shop built in Vienna from €4,999. Catalogue, cart, payment, shipping, legal pages and CMS. Small shop or growth – fixed price before start.",
    ),
    h1: c(
      "Online Shop erstellen lassen in Wien",
      "Have an online shop built in Vienna",
    ),
    positioning: c(
      "Verkaufen, nicht nur Produkte listen.",
      "Sell, do not just list products.",
    ),
    summary: c(
      "Ein Shop braucht mehr als schöne Kacheln: Katalog, Filter, Produktseite, Warenkorb, Checkout, Zahlung, Versand, E-Mails und rechtliche Seiten. Wir trennen bewusst kleinen Shop und wachsenden Shop, damit der Umfang ehrlich bleibt.",
      "A shop needs more than pretty tiles: catalogue, filters, product page, cart, checkout, payment, shipping, emails and legal pages. We deliberately split small shop and growing shop so the scope stays honest.",
    ),
    priceFrom: c("ab 4.999 €", "from €4,999"),
    timeline: c("ca. 5–8 Wochen", "about 5–8 weeks"),
    imageAlt: c(
      "Produktkatalog und Checkout eines Online-Shops für ein Wiener Unternehmen",
      "Product catalogue and checkout of an online shop for a Vienna business",
    ),
    trust: trustDefault,
    problem: {
      title: c(
        "Ohne sauberen Kaufprozess bleiben Warenkörbe stehen",
        "Without a clean purchase path, carts stall",
      ),
      intro: c(
        "Kundschaft vergleicht Preis, Versand, Widerruf und Vertrauen in Minuten. Ein Shop, der am Handy hakelt, verliert den Verkauf – oft still.",
        "Customers compare price, shipping, withdrawal and trust in minutes. A shop that stumbles on phones loses the sale – often silently.",
      ),
      items: [
        { title: c("Unklare Produkte", "Unclear products"), text: c("Fehlende Angaben, schwache Fotos, kein Filter.", "Missing facts, weak photos, no filters.") },
        { title: c("Schwerer Checkout", "Heavy checkout"), text: c("Zu viele Schritte, überraschende Kosten, unsichere Zahlung.", "Too many steps, surprise costs, insecure payment.") },
        { title: c("Rechtliche Lücken", "Legal gaps"), text: c("Fehlende AGB, Widerruf oder Zahlungsarten-Transparenz.", "Missing terms, withdrawal or payment transparency.") },
      ],
    },
    included: {
      title: c("E-Commerce-Checkliste im Paket", "Ecommerce checklist in the package"),
      items: [
        c("Katalog und Kategorien", "Catalogue and categories"),
        c("Filter, wo sie dem Sortiment helfen", "Filters where they help the range"),
        c("Produktseite mit Preis, Varianten, Versandhinweis", "Product page with price, variants, shipping note"),
        c("Warenkorb und Checkout", "Cart and checkout"),
        c("Zahlung und Versandkonfiguration", "Payment and shipping setup"),
        c("Transaktions-E-Mails", "Transactional emails"),
        c("Rechtstexte: Datenschutz, Impressum, AGB, Widerruf, Versand, Zahlungsarten", "Legal: privacy, imprint, terms, withdrawal, shipping, payment methods"),
        c("CMS zur Produktpflege", "CMS for product care"),
      ],
    },
    audience: {
      title: c("Kleiner Shop oder wachsender Shop", "Small shop or growing shop"),
      fits: [
        c("10–50 Produkte, lokaler Versand aus Wien", "10–50 products, local shipping from Vienna"),
        c("100+ Produkte, B2B, Lager oder Mehrsprachigkeit – mit erweitertem Umfang", "100+ products, B2B, inventory or multilingual – with extended scope"),
      ],
      notFits: [
        c("Nur eine Broschüre ohne Kaufprozess – dann Business Website", "Only a brochure without checkout – then a business website"),
        c("Reine Marktplatz-Betreuung ohne eigenen Shop", "Pure marketplace operations without your own shop"),
      ],
    },
    technical: {
      title: c("Technik hinter dem Checkout", "Technology behind checkout"),
      items: [
        { title: c("WooCommerce oder Shopify", "WooCommerce or Shopify"), text: c("Wir empfehlen nach Sortiment, Budget und Pflege – nicht nach Mode.", "We recommend based on range, budget and care – not fashion.") },
        { title: c("Mobile Kaufstrecke", "Mobile purchase path"), text: c("Wenige Schritte, große Buttons, sichtbare Kosten.", "Few steps, large buttons, visible costs.") },
        { title: c("Sicherheit", "Security"), text: c("HTTPS, aktuelle Plattform, keine überflüssigen Plugins.", "HTTPS, current platform, no spare plugins.") },
        { title: c("Skalierung", "Scale"), text: c("Mehr Produkte, Sprachen und Zahlarten als Ausbau, nicht als Überraschung.", "More products, languages and payments as expansion, not a surprise.") },
      ],
    },
    business: {
      title: c("Umsatz, nicht nur ein Katalog", "Revenue, not just a catalogue"),
      items: [
        { title: c("Verkauf außerhalb der Öffnungszeiten", "Sales outside opening hours"), text: c("Bestellungen, während der Laden zu ist.", "Orders while the store is closed.") },
        { title: c("Reichweite über Wien hinaus", "Reach beyond Vienna"), text: c("Versandregeln machen den Radius planbar.", "Shipping rules make the radius predictable.") },
        { title: c("Weniger manuelle Bestellungen", "Fewer manual orders"), text: c("Warenkorb statt WhatsApp-Zettel.", "Cart instead of WhatsApp notes.") },
      ],
    },
    process: {
      title: c("Vom Sortiment zum Launch", "From assortment to launch"),
      steps: processSteps(),
    },
    pricing: {
      title: c("Shop-Preis und was extra ist", "Shop price and what is extra"),
      intro: c(
        "Ab 4.999 € inklusive bis zu 50 Produkten, Zahlung und Versand.setup. Weitere 50 Produkte, Extra-Zahlarten und Mehrsprachigkeit sind Add-ons.",
        "From €4,999 including up to 50 products, payment and shipping setup. Another 50 products, extra payments and multilingual are add-ons.",
      ),
      included: [
        c("Shop-Design, Katalog, Warenkorb, Checkout", "Shop design, catalogue, cart, checkout"),
        c("Bis zu 50 Produkte, eine Zahlungs- und Versandkonfiguration", "Up to 50 products, one payment and shipping setup"),
        c("Rechtliche Seiten und Launch-Begleitung", "Legal pages and launch support"),
      ],
      excluded: [
        c("Produktfotografie ganzer Sortimente ohne Auftrag", "Product photography of whole ranges without a brief"),
        c("Laufende Marktplatz-Anbindung ohne Scope", "Ongoing marketplace connection without scope"),
        c("Payment-Gebühren der Anbieter", "Payment provider fees"),
      ],
      addons: [
        { label: c("Weitere 50 Produkte", "Another 50 products"), price: c("+399 €", "+€399") },
        { label: c("Zusätzliche Zahlungsart", "Extra payment method"), price: c("+199 €", "+€199") },
        { label: c("Versanddienstleister", "Shipping provider"), price: c("+299 €", "+€299") },
        { label: c("Mehrsprachiger Shop", "Multilingual shop"), price: c("ab 699 €", "from €699") },
        { label: c("Wartung", "Maintenance"), price: c("ab 99 €/Monat", "from €99/month") },
      ],
      factors: [
        c("Produktanzahl, Varianten, Lager", "Product count, variants, inventory"),
        c("B2B-Preise, Sprachen, Marktplätze", "B2B prices, languages, marketplaces"),
        c("Zahlungs- und Versandregeln", "Payment and shipping rules"),
      ],
    },
    cases: { title: c("Beispiel Fachhandel", "Specialist shop example"), items: [demoCases[2]] },
    comparison: comparisonDefault,
    local: {
      title: c("Online Shop für Wiener Händler und Marken", "Online shops for Vienna retailers and brands"),
      text: c(
        "Wer in Wien produziert oder verkauft, braucht Versandregeln, klare Steuersätze und Rechtstexte, die in Österreich halten. Der Shop ist Teil des Betriebs, nicht ein Extra-Theme. Deshalb gehören Impressum, AGB, Widerruf und Zahlungsarten zur Lieferung – nicht in eine spätere Schublade.",
        "If you produce or sell in Vienna, you need shipping rules, clear tax rates and legal pages that hold in Austria. The shop is part of the business, not an extra theme. That is why imprint, terms, withdrawal and payment methods are in the delivery – not in a later drawer.",
      ),
    },
    faq: [
      { question: c("WooCommerce oder Shopify?", "WooCommerce or Shopify?"), answer: c("Kommt auf Pflege, Budget und Integrationen an. Wir beraten im Erstgespräch und bauen nicht aus Prinzip auf einer Plattform.", "It depends on care, budget and integrations. We advise in the discovery call and do not pick a platform out of habit.") },
      { question: c("Können bestehende Produkte importiert werden?", "Can existing products be imported?"), answer: c("Ja, wenn Daten sauber vorliegen (CSV, vorhandener Shop). Aufräumen ist oft der eigentliche Aufwand.", "Yes if data is clean (CSV, existing shop). Cleaning is often the real work.") },
      { question: c("Wie lange dauert ein Shop?", "How long does a shop take?"), answer: c("Typisch 5–8 Wochen inklusive Zahlungen, Versand und Tests.", "Typically 5–8 weeks including payments, shipping and tests.") },
      { question: c("Welche Zahlungen sind möglich?", "Which payments are possible?"), answer: c("Gängige Anbieter in Österreich. Jede zusätzliche Zahlart nach Aufwand.", "Common providers in Austria. Each extra method according to effort.") },
      { question: c("Wer zahlt die Gebühren?", "Who pays the fees?"), answer: c("Transaktionsgebühren zahlt der Shop-Betreiber an den Zahlungsanbieter. Sie sind nicht in unserem Fixpreis.", "Transaction fees are paid by the shop owner to the provider. They are not in our fixed price.") },
      { question: c("Gibt es Support nach dem Start?", "Is there support after launch?"), answer: c("Ja, Wartung ab 99 € im Monat für Updates, Backups und technische Hilfe.", "Yes, maintenance from €99 per month for updates, backups and technical help.") },
      { question: c("Sind AGB und Widerruf enthalten?", "Are terms and withdrawal included?"), answer: c("Struktur und Platzhalter-Logik ja. Rechtstexte sollten zur Ihrer Ware passen; juristische Prüfung bleibt beim Fachanwalt, wenn nötig.", "Structure and placeholder logic yes. Legal copy should match your goods; a lawyer review stays with a specialist if needed.") },
      { question: c("Geht Mehrsprachigkeit?", "Is multilingual possible?"), answer: c("Ja, als Erweiterung – mit eigenen URLs, nicht als versteckter Schalter.", "Yes, as an add-on – with its own URLs, not a hidden toggle.") },
    ],
    related: ["landing-page", "business-website", "support-wartung"],
    extras: [
      {
        title: c("Rechtliche Bereitschaft vor dem ersten Verkauf", "Legal readiness before the first sale"),
        items: [
          { title: c("Datenschutz & Impressum", "Privacy and imprint"), text: c("Pflichtangaben, erreichbare Adresse oder Servicegebiet, Kontakt.", "Mandatory info, reachable address or service area, contact.") },
          { title: c("AGB, Widerruf, Versand, Zahlungsarten", "Terms, withdrawal, shipping, payments"), text: c("Vor Checkout sichtbar, nicht erst nach der Bestellung.", "Visible before checkout, not only after the order.") },
        ],
      },
    ],
  },
  "support-wartung": {
    slug: "support-wartung",
    menuName: c("Support und Wartung", "Support and maintenance"),
    seoTitle: c(
      "Website Wartung Wien | Support nach dem Launch",
      "Website maintenance Vienna | Support after launch",
    ),
    seoDescription: c(
      "Website-Support und Wartung in Wien: Updates, Backups, kleine Änderungen, Monitoring. Damit die Seite nach dem Launch schnell, sicher und erreichbar bleibt. Ab 39 €/Monat.",
      "Website support and maintenance in Vienna: updates, backups, small changes, monitoring. So the site stays fast, safe and reachable after launch. From €39/month.",
    ),
    h1: c(
      "Support und Wartung für Ihre Website in Wien",
      "Support and maintenance for your website in Vienna",
    ),
    positioning: c(
      "Nach dem Launch beginnt der Alltag – nicht das Vergessen.",
      "After launch, everyday use starts – not forgetting the site.",
    ),
    summary: c(
      "Updates, Backups, Sicherheitslücken, abgelaufene Zertifikate und kleine Textänderungen gehören zum Betrieb. Wir übernehmen die technische Betreuung, damit Ihre Seite nicht nach sechs Monaten wieder alt wirkt.",
      "Updates, backups, security holes, expired certificates and small copy changes are part of running a site. We take on the technical care so your site does not look old again after six months.",
    ),
    priceFrom: c("ab 39 €/Monat", "from €39/month"),
    timeline: c("laufend, monatlich kündbar", "ongoing, monthly cancellation"),
    imageAlt: c(
      "Technische Wartung einer Website mit Updates und Monitoring",
      "Technical maintenance of a website with updates and monitoring",
    ),
    trust: trustDefault,
    problem: {
      title: c(
        "Ungepflegte Websites werden langsam unsicher",
        "Unmaintained websites slowly become unsafe",
      ),
      intro: c(
        "Ein Launch ohne Betreuung ist wie ein Auto ohne Service. Irgendwann hapert das Formular, das Plugin oder das Zertifikat – meist an einem Freitag.",
        "A launch without care is like a car without service. Eventually the form, the plugin or the certificate fails – usually on a Friday.",
      ),
      items: [
        { title: c("Veraltete Systeme", "Outdated systems"), text: c("CMS und Plugins ohne Updates sind das häufigste Einfallstor.", "CMS and plugins without updates are the most common way in.") },
        { title: c("Niemand ist zuständig", "Nobody is responsible"), text: c("Kleine Textänderungen bleiben wochenlang liegen.", "Small copy changes sit for weeks.") },
        { title: c("Kein Backup", "No backup"), text: c("Ein Fehler wird zum Ausfall.", "One mistake becomes downtime.") },
      ],
    },
    included: {
      title: c("Was Wartung bei ClearPoint enthält", "What maintenance at ClearPoint includes"),
      items: [
        c("Regelmäßige Updates der technischen Grundlage", "Regular updates of the technical stack"),
        c("Backups und Wiederanlauf-Hilfe", "Backups and restore help"),
        c("Erreichbarkeits-Check und SSL", "Uptime check and SSL"),
        c("Kleine Text- und Bildänderungen im vereinbarten Kontingent", "Small text and image changes in the agreed quota"),
        c("Ansprechperson statt Ticket-Niemandsland", "A named contact instead of a ticket void"),
      ],
    },
    audience: {
      title: c("Für wen Support sinnvoll ist", "Who support is for"),
      fits: [
        c("Jede Seite, die Anfragen oder Bestellungen trägt", "Any site that carries enquiries or orders"),
        c("Shops und Business Websites mit CMS", "Shops and business sites with a CMS"),
        c("Teams ohne interne Entwicklung", "Teams without in-house development"),
      ],
      notFits: [
        c("Einmalige Broschüren-Seiten, die nie geändert werden und offline gehen dürfen", "One-off brochure pages that never change and may go offline"),
      ],
    },
    technical: {
      title: c("Was wir technisch im Blick behalten", "What we keep an eye on technically"),
      items: [
        { title: c("Updates", "Updates"), text: c("Sicherheitspatches vor Feature-Spielerei.", "Security patches before feature play.") },
        { title: c("Performance", "Performance"), text: c("Neue Plugins oder schwere Bilder fangen wir ab, bevor die Seite kippt.", "We catch new plugins or heavy images before the site tips over.") },
        { title: c("Formulare", "Forms"), text: c("Zustellung testen, nicht annehmen.", "Test delivery, do not assume it.") },
        { title: c("Monitoring", "Monitoring"), text: c("Mitbekommen, wenn die Seite nicht antwortet.", "Notice when the site does not answer.") },
      ],
    },
    business: {
      title: c("Warum sich monatliche Betreuung rechnet", "Why monthly care pays off"),
      items: [
        { title: c("Weniger Ausfälle", "Fewer outages"), text: c("Anfragen und Bestellungen laufen weiter.", "Enquiries and orders keep running.") },
        { title: c("Planbare Kosten", "Predictable cost"), text: c("Statt Notfall-Stundenlohn ein klares Monatspaket.", "A clear monthly package instead of emergency hourly rates.") },
        { title: c("Eine Stimme", "One voice"), text: c("Dieselbe Studio-Logik wie beim Bau der Seite.", "The same studio logic as when the site was built.") },
      ],
    },
    process: {
      title: c("So startet die Betreuung", "How care starts"),
      steps: [
        { title: c("1. Ist-Aufnahme", "1. Current-state review"), text: c("Zugang, Hosting, Updates, Formulare, Backups.", "Access, hosting, updates, forms, backups.") },
        { title: c("2. Paketwahl", "2. Package choice"), text: c("Onepage, Business oder Shop – unterschiedlicher Aufwand.", "One-pager, business or shop – different effort.") },
        { title: c("3. Rhythmus", "3. Cadence"), text: c("Updates und Reporting im vereinbarten Takt.", "Updates and reporting in the agreed rhythm.") },
        { title: c("4. Änderungen", "4. Changes"), text: c("Kleine Wünsche im Kontingent, Größeres als kurzes Angebot.", "Small requests in quota, larger work as a short quote.") },
        { title: c("5. Weiterentwicklung", "5. Further development"), text: c("Landing Pages, neue Leistungsseiten, Relaunch-Module bei Bedarf.", "Landing pages, new service pages, relaunch modules when needed.") },
      ],
    },
    pricing: {
      title: c("Monatliche Pakete", "Monthly packages"),
      intro: c(
        "Start ab 39 € für schlanke Seiten. Business-Websites ab 59 €, Shops ab 99 €. Größere Weiterentwicklungen bleiben Fixpreis-Projekte.",
        "From €39 for lean sites. Business websites from €59, shops from €99. Larger developments stay fixed-price projects.",
      ),
      included: [
        c("Updates, Backup-Aufsicht, Ansprechperson", "Updates, backup oversight, named contact"),
        c("Kleine Content-Änderungen im Kontingent", "Small content changes in quota"),
      ],
      excluded: [
        c("Neue Leistungsseiten, Shops oder Relaunches", "New service pages, shops or relaunches"),
        c("Werbekampagnen", "Ad campaigns"),
      ],
      addons: [
        { label: c("Zusätzliche Änderungsstunde", "Extra change hour"), price: c("nach Aufwand", "by effort") },
        { label: c("Performance- oder SEO-Check", "Performance or SEO check"), price: c("siehe Website Check", "see Website Check") },
      ],
      factors: [
        c("CMS, Shop, Sprachen, Plugin-Menge", "CMS, shop, languages, plugin load"),
        c("Wie oft Inhalte wechseln", "How often content changes"),
      ],
    },
    cases: { title: c("Betreuung im Alltag", "Care in everyday use"), items: [demoCases[0]] },
    comparison: comparisonDefault,
    local: {
      title: c("Wartung aus Wien, für Seiten die lokal arbeiten", "Maintenance from Vienna, for sites that work locally"),
      text: c(
        "Wenn Ihre Kundschaft in Wien anruft oder bestellt, darf die Seite nicht am Wochenende stillstehen. Wir betreuen den technischen Alltag und bleiben für österreichische Anforderungen erreichbar – in derselben Sprache wie beim Projekt.",
        "If your customers in Vienna call or order, the site must not go quiet at the weekend. We run the technical everyday and stay reachable for Austrian requirements – in the same language as the project.",
      ),
    },
    faq: [
      { question: c("Was ist der Unterschied zu Hosting?", "How is this different from hosting?"), answer: c("Hosting ist der Server. Wartung ist Pflege, Updates und Änderungen. Beides braucht es.", "Hosting is the server. Maintenance is care, updates and changes. You need both.") },
      { question: c("Kann ich monatlich kündigen?", "Can I cancel monthly?"), answer: c("Ja. Betreuung soll helfen, nicht binden.", "Yes. Care should help, not lock you in.") },
      { question: c("Sind größere Features enthalten?", "Are larger features included?"), answer: c("Nein. Neue Module bleiben eigene Fixpreis-Aufgaben.", "No. New modules stay separate fixed-price tasks.") },
      { question: c("Betreuen Sie auch fremde Websites?", "Do you also maintain sites you did not build?"), answer: c("Nach kurzem Check ja – wenn die technische Basis tragfähig ist.", "After a short check yes – if the technical base is sound.") },
      { question: c("Wie schnell reagieren Sie?", "How fast do you reply?"), answer: c("In der Regel innerhalb eines Werktags, bei Ausfällen mit Vorrang.", "Usually within one working day, with priority for outages.") },
      { question: c("Brauche ich Wartung für eine Onepage?", "Do I need maintenance for a one-pager?"), answer: c("Wenn Formular, TLS und Inhalte leben: ja, oft im kleinsten Paket.", "If the form, TLS and content are live: yes, often in the smallest package.") },
    ],
    related: ["website-relaunch", "business-website", "online-shop"],
    extras: [],
  },
};

export function getService(slug: ServiceSlug) {
  return servicePages[slug];
}

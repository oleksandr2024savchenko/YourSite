export type Locale = "en" | "de";

export const dictionaries = {
  en: {
    meta: {
      title: "YourSite — Modern Websites That Grow Your Business",
      description:
        "Vienna-based B2B software engineering agency. Premium quality, transparent delivery, and trusted partnership for European businesses.",
    },
    nav: {
      services: "Services",
      process: "Process",
      about: "About",
      benefits: "Benefits",
      pricing: "Pricing",
      cta: "Get a Quote",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      brand: "YourSite",
      headline: "Premium Software Engineering for European Businesses",
      subheadline:
        "A Vienna-based engineering partner delivering exceptional quality, seamless collaboration, and cost-efficient execution — without compromise.",
      primaryCta: "Start a Project",
      secondaryCta: "View Services",
      imageCaption: "Vienna, Austria",
      imageTitle: "Crafted for clarity, quality, and lasting business impact.",
    },
    benefits: {
      title: "Your business can reach more customers.",
      description:
        "Many companies have great products and services — but online they don't show their full potential. A professional website can change exactly that.",
      items: [
        {
          title: "More Visibility",
          description: "Reach potential customers online as well.",
        },
        {
          title: "More Trust",
          description:
            "Show at first glance why customers should choose you.",
        },
        {
          title: "More Enquiries",
          description: "Turn website visitors into real prospects.",
        },
      ],
      closing:
        "Your website is not just a business card. It can be an important part of your sales.",
    },
    about: {
      eyebrow: "Why YourSite",
      title: "Built for companies that expect more",
      description:
        "We are a premium Austrian web engineering agency — combining rigorous local standards with senior talent, clear communication, and reliable delivery.",
      imageAlt: "Modern minimalist office workspace",
      features: [
        {
          title: "Modern Design",
          description:
            "Websites that look professional and fit your business.",
        },
        {
          title: "Clear & Simple",
          description:
            "Clear structures, understandable content, and simple user guidance.",
        },
        {
          title: "Focus on Results",
          description:
            "We build websites that not only look good, but guide customers to the right action.",
        },
        {
          title: "Transparent Pricing",
          description:
            "Clear scopes, predictable rates, and no hidden fees — premium outcomes with full commercial clarity.",
        },
      ],
      closing:
        "A website should not just look good. It should work for your business.",
    },
    services: {
      eyebrow: "Services",
      title: "The right website for your business",
      description:
        "From a compact onepager to a full online shop — we build the solution that fits your goals.",
      discuss: "Discuss this service",
      gainLabel: "What you gain:",
      items: [
        {
          title: "Onepage Website",
          description:
            "Your most important information on one modern page.",
          gain: ["More trust", "more enquiries", "more customers"],
        },
        {
          title: "Landing Page",
          description:
            "A website focused entirely on one specific action.",
          gain: ["More enquiries", "more leads", "more sales"],
        },
        {
          title: "Corporate Website",
          description:
            "A professional website for your entire company.",
          gain: ["More trust", "more customers", "more revenue"],
        },
        {
          title: "Online Shop",
          description:
            "Sell your products directly online — around the clock.",
          gain: ["More buyers", "more orders", "more revenue"],
        },
      ],
    },
    process: {
      eyebrow: "How It Works",
      title: "A clear path from idea to production",
      description:
        "Four clear stages with transparent payment terms — 50% to start, 50% on approval.",
      stepLabel: "Step",
      milestone: "Milestone",
      steps: [
        {
          title: "Discovery & Scope",
          description:
            "We analyze your goals, agree on features, and provide a fixed-price proposal with no hidden costs.",
        },
        {
          title: "Agreement & 50% Kickoff Deposit",
          description:
            "Once the scope and timeline are approved and the agreement is signed, a 50% deposit secures your dedicated development team and immediately initiates the project.",
        },
        {
          title: "Development & Staging",
          description:
            "We build your project using modern standards with rigorous QA. You receive access to a staging link to review live progress.",
        },
        {
          title: "Final Review & Launch",
          description:
            "Test the finished product. Once everything is approved, the remaining 50% is settled, and we deploy your site with full source code handover.",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Transparent packages for every stage of your business",
      description:
        "Clear starting prices in EUR. Every project is scoped precisely — so you always know what you are investing in.",
      popular: "Most Popular",
      included: "You receive:",
      gainLabel: "Your benefit:",
      tiers: [
        {
          name: "Onepage Website",
          price: "from €1,499",
          description:
            "For freelancers and small businesses that want a professional online presence.",
          features: [
            "Modern, custom design",
            "All key information on one page",
            "Clear presentation of your services",
            "Contact options and call-to-action",
            "Optimised for smartphone, tablet and desktop",
          ],
          gain: ["More trust", "more enquiries", "more customers"],
          cta: "Request a Quote",
        },
        {
          name: "Landing Page",
          price: "from €1,799",
          description:
            "For companies that want to win new customers through targeted advertising.",
          features: [
            "High-converting page design",
            "Clear presentation of a single offer",
            "Structure built around one customer action",
            "Strong calls-to-action",
            "Optimised for ad campaigns and mobile devices",
          ],
          gain: ["More visitors", "more enquiries", "more sales"],
          cta: "Start a Landing Page",
        },
        {
          name: "Business Website",
          price: "from €2,999",
          description:
            "For companies that want to present their entire business professionally.",
          features: [
            "Custom web design",
            "Multiple pages for your company",
            "Professional presentation of your services",
            "Contact and enquiry forms",
            "References / projects",
            "Optimised for all devices",
          ],
          gain: ["More trust", "stronger brand", "more customers"],
          cta: "Start a Business Website",
        },
        {
          name: "Online Shop",
          price: "from €4,999",
          description:
            "For companies that want to sell their products professionally online.",
          features: [
            "Custom shop design",
            "Product catalogue",
            "Cart and checkout",
            "Online payments",
            "Mobile optimisation",
            "User-friendly purchase process",
          ],
          gain: ["More reach", "more orders", "more revenue"],
          cta: "Start an Online Shop",
        },
      ],
      helper: {
        title: "Not sure which solution fits your business?",
        description:
          "We advise you free of charge and find the right website for your goals together.",
        cta: "Book a Free Consultation",
      },
      note: "All prices are starting prices. The final price depends on scope, design and the features you need.",
    },
    cta: {
      title: "Ready to build with confidence?",
      description:
        "Book a free consultation with our Vienna team. We’ll assess your needs and outline a clear path to accelerate your roadmap.",
      primary: "Book a Consultation",
    },
    footer: {
      tagline:
        "A premium Austrian software engineering agency — delivering clarity, quality, and lasting business impact from Vienna.",
      address: "Musterstraße 12/3\n1010 Vienna, Austria",
      copyright: "All rights reserved.",
      location: "Vienna, Austria · FN 000000a",
      groups: {
        company: "Company",
        services: "Services",
        legal: "Legal",
      },
      links: {
        about: "About",
        benefits: "Benefits",
        services: "Services",
        process: "Process",
        pricing: "Pricing",
        contact: "Contact",
        privacy: "Privacy Policy",
        impressum: "Impressum",
        terms: "Terms of Service",
      },
    },
  },
  de: {
    meta: {
      title: "YourSite — Moderne Websites, die Ihr Unternehmen voranbringen",
      description:
        "Wir entwickeln professionelle Websites für Unternehmen, Selbstständige und lokale Betriebe – von der ersten Idee bis zum erfolgreichen Launch.",
    },
    nav: {
      services: "Leistungen",
      process: "Prozess",
      about: "Über uns",
      benefits: "Vorteile",
      pricing: "Preise",
      cta: "Angebot anfordern",
      openMenu: "Menü öffnen",
      closeMenu: "Menü schließen",
    },
    hero: {
      brand: "YourSite",
      headline: "Moderne Websites, die mehr Kunden für Ihr Unternehmen gewinnen.",
      subheadline:
        "Wir entwickeln professionelle Websites für Unternehmen, Selbstständige und lokale Betriebe - von der ersten Idee bis zum erfolgreichen Launch.",
      primaryCta: "Kostenlose Erstberatung",
      secondaryCta: "Leistungen ansehen",
      imageCaption: "Wien, Österreich",
      imageTitle: "Gestaltet für Klarheit, Qualität und nachhaltigen Geschäftserfolg.",
    },
    benefits: {
      title: "Ihr Unternehmen kann mehr Kunden erreichen.",
      description:
        "Viele Unternehmen haben großartige Produkte und Dienstleistungen – aber online zeigen sie nicht ihr volles Potenzial. Eine professionelle Website kann genau das ändern.",
      items: [
        {
          title: "Mehr Sichtbarkeit",
          description: "Erreichen Sie potenzielle Kunden auch online.",
        },
        {
          title: "Mehr Vertrauen",
          description:
            "Zeigen Sie auf den ersten Blick, warum Kunden sich für Sie entscheiden sollten.",
        },
        {
          title: "Mehr Anfragen",
          description: "Machen Sie aus Website-Besuchern echte Interessenten.",
        },
      ],
      closing:
        "Ihre Website ist nicht nur eine Visitenkarte. Sie kann ein wichtiger Teil Ihres Vertriebs sein.",
    },
    about: {
      eyebrow: "Warum YourSite",
      title: "Warum Unternehmen mit uns zusammenarbeiten",
      description:
        "Wir verbinden modernes Design, klare Kommunikation und Websites, die Ihr Unternehmen professionell präsentieren und neue Kunden erreichen.",
      imageAlt: "Modernes, minimalistisches Büro",
      features: [
        {
          title: "Modernes Design",
          description:
            "Websites, die professionell aussehen und zu Ihrem Unternehmen passen.",
        },
        {
          title: "Klar & einfach",
          description:
            "Klare Strukturen, verständliche Inhalte und eine einfache Nutzerführung.",
        },
        {
          title: "Fokus auf Ergebnisse",
          description:
            "Wir entwickeln Websites, die nicht nur gut aussehen, sondern Kunden zur richtigen Handlung führen.",
        },
        {
          title: "Transparente Preise",
          description:
            "Klare Scopes, planbare Konditionen und keine versteckten Kosten — Premium-Ergebnisse mit voller kommerzieller Transparenz.",
        },
      ],
      closing:
        "Eine Website sollte nicht nur gut aussehen. Sie sollte für Ihr Unternehmen arbeiten.",
    },
    services: {
      eyebrow: "Leistungen",
      title: "Die passende Website für Ihr Unternehmen",
      description:
        "Von der kompakten Onepage bis zum Online-Shop – wir entwickeln die Lösung, die zu Ihren Zielen passt.",
      discuss: "Leistung besprechen",
      gainLabel: "Damit gewinnen Sie:",
      items: [
        {
          title: "Onepage Website",
          description:
            "Ihre wichtigsten Informationen auf einer modernen Seite.",
          gain: ["Mehr Vertrauen", "mehr Anfragen", "mehr Kunden"],
        },
        {
          title: "Landing Page",
          description:
            "Eine Website, die gezielt auf eine Aktion ausgerichtet ist.",
          gain: ["Mehr Anfragen", "mehr Leads", "mehr Verkäufe"],
        },
        {
          title: "Corporate Website",
          description:
            "Eine professionelle Website für Ihr gesamtes Unternehmen.",
          gain: ["Mehr Vertrauen", "mehr Kunden", "mehr Umsatz"],
        },
        {
          title: "Online-Shop",
          description:
            "Verkaufen Sie Ihre Produkte direkt online – rund um die Uhr.",
          gain: ["Mehr Käufer", "mehr Bestellungen", "mehr Umsatz"],
        },
      ],
    },
    process: {
      eyebrow: "So arbeiten wir",
      title: "Ein klarer Weg von der Idee bis zur Produktion",
      description:
        "Vier klare Phasen mit transparenten Zahlungsbedingungen — 50% zum Start, 50% nach Abnahme.",
      stepLabel: "Schritt",
      milestone: "Meilenstein",
      steps: [
        {
          title: "Erstgespräch & Planung",
          description:
            "Wir analysieren Ihre Ziele, definieren den Projektumfang und erstellen ein Festpreisangebot ohne versteckte Kosten.",
        },
        {
          title: "Vereinbarung & 50% Anzahlung",
          description:
            "Nach Freigabe des Konzepts und Vertragsunterzeichnung sichert eine Anzahlung von 50% Ihr dediziertes Entwicklerteam und startet das Projekt sofort.",
        },
        {
          title: "Entwicklung & Staging",
          description:
            "Wir entwickeln Ihr Projekt nach modernen Standards inklusive strengem QA. Sie erhalten Zugriff auf einen Staging-Link zur Echtzeit-Prüfung.",
        },
        {
          title: "Abnahme & Go-Live",
          description:
            "Sie testen das fertige Produkt. Nach Ihrer finalen Freigabe wird der Restbetrag von 50% fällig, und wir übertragen das Projekt live inklusive aller Rechte.",
        },
      ],
    },
    pricing: {
      eyebrow: "Preise",
      title: "Transparente Pakete für jedes Unternehmen",
      description:
        "Klare Startpreise in EUR. Jedes Projekt wird präzise definiert — so wissen Sie immer, worin Sie investieren.",
      popular: "Beliebteste Wahl",
      included: "Sie erhalten:",
      gainLabel: "Ihr Vorteil:",
      tiers: [
        {
          name: "Onepage Website",
          price: "ab €1.499",
          description:
            "Für Selbstständige und kleine Unternehmen, die professionell online auftreten möchten.",
          features: [
            "Modernes, individuelles Design",
            "Alle wichtigen Informationen auf einer Seite",
            "Klare Präsentation Ihrer Leistungen",
            "Kontaktmöglichkeiten und Call-to-Action",
            "Optimierung für Smartphone, Tablet und Desktop",
          ],
          gain: ["Mehr Vertrauen", "mehr Anfragen", "mehr Kunden"],
          cta: "Angebot anfordern",
        },
        {
          name: "Landing Page",
          price: "ab €1.799",
          description:
            "Für Unternehmen, die mit Werbung gezielt neue Kunden gewinnen möchten.",
          features: [
            "Verkaufsstarkes Seitendesign",
            "Klare Präsentation eines Angebots",
            "Struktur für eine gezielte Kundenaktion",
            "Starke Call-to-Actions",
            "Optimierung für Werbekampagnen und mobile Geräte",
          ],
          gain: ["Mehr Besucher", "mehr Anfragen", "mehr Verkäufe"],
          cta: "Landing Page starten",
        },
        {
          name: "Business Website",
          price: "ab €2.999",
          description:
            "Für Unternehmen, die ihren gesamten Betrieb professionell präsentieren möchten.",
          features: [
            "Individuelles Webdesign",
            "Mehrere Seiten für Ihr Unternehmen",
            "Professionelle Präsentation Ihrer Leistungen",
            "Kontakt- und Anfrageformulare",
            "Referenzen / Projekte",
            "Optimierung für alle Geräte",
          ],
          gain: ["Mehr Vertrauen", "stärkere Marke", "mehr Kunden"],
          cta: "Business Website starten",
        },
        {
          name: "Online Shop",
          price: "ab €4.999",
          description:
            "Für Unternehmen, die ihre Produkte professionell online verkaufen möchten.",
          features: [
            "Individuelles Shop-Design",
            "Produktkatalog",
            "Warenkorb und Checkout",
            "Online-Zahlungen",
            "Mobile Optimierung",
            "Benutzerfreundlicher Kaufprozess",
          ],
          gain: ["Mehr Reichweite", "mehr Bestellungen", "mehr Umsatz"],
          cta: "Online-Shop starten",
        },
      ],
      helper: {
        title: "Nicht sicher, welche Lösung zu Ihrem Unternehmen passt?",
        description:
          "Wir beraten Sie kostenlos und finden gemeinsam die passende Website für Ihre Ziele.",
        cta: "Kostenloses Erstgespräch vereinbaren",
      },
      note: "Alle Preise verstehen sich als Startpreise. Der finale Preis hängt vom Umfang, Design und den gewünschten Funktionen ab.",
    },
    cta: {
      title: "Bereit, mit Vertrauen zu bauen?",
      description:
        "Vereinbaren Sie eine kostenlose Beratung mit unserem Wiener Team. Wir analysieren Ihren Bedarf und skizzieren einen klaren Weg zur Beschleunigung Ihrer Roadmap.",
      primary: "Beratung buchen",
    },
    footer: {
      tagline:
        "Eine Premium-Softwareengineering-Agentur aus Österreich — für Klarheit, Qualität und nachhaltigen Geschäftserfolg aus Wien.",
      address: "Musterstraße 12/3\n1010 Wien, Österreich",
      copyright: "Alle Rechte vorbehalten.",
      location: "Wien, Österreich · FN 000000a",
      groups: {
        company: "Unternehmen",
        services: "Leistungen",
        legal: "Rechtliches",
      },
      links: {
        about: "Über uns",
        benefits: "Vorteile",
        services: "Leistungen",
        process: "Prozess",
        pricing: "Preise",
        contact: "Kontakt",
        privacy: "Datenschutz",
        impressum: "Impressum",
        terms: "AGB",
      },
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)["en"];

export type Locale = "en" | "de";

export const dictionaries = {
  en: {
    meta: {
      title: "YourSite — Modern Websites That Grow Your Business",
      description:
        "We build professional websites for companies, freelancers and local businesses – from the first idea to a successful launch.",
    },
    nav: {
      services: "Services",
      process: "Process",
      about: "About",
      benefits: "Benefits",
      pricing: "Pricing",
      faq: "FAQ",
      cta: "Get a Quote",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      brand: "YourSite",
      headline: "Modern websites that win more customers for your business.",
      subheadline:
        "We build professional websites for companies, freelancers and local businesses – from the first idea to a successful launch.",
      primaryCta: "Free Initial Consultation",
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
      title: "Why companies work with us",
      description:
        "We combine modern design, clear communication and websites that present your company professionally and reach new customers.",
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
            "Clear scope, predictable conditions and no hidden costs — premium results with full transparency.",
        },
      ],
      closing:
        "A website should not just look good. It should work for your business.",
    },
    services: {
      eyebrow: "Services",
      title: "The right website for your business",
      description:
        "From a relaunch of your current site to a full online shop — we build the solution that fits your goals.",
      discuss: "Discuss this service",
      gainLabel: "What you gain:",
      items: [
        {
          title: "Relaunch",
          positioning: "",
          description: "Modernize your existing website.",
          gain: ["A fresh presence", "more trust", "more enquiries"],
        },
        {
          title: "Onepage Website",
          positioning: "Digital business card and status",
          description:
            "For companies and independent professionals who need a stylish, fast online presence without extra pages.",
          gain: ["More trust", "more enquiries", "more customers"],
        },
        {
          title: "Landing Page",
          positioning: "Lead-generation tool for advertising",
          description:
            "A focused page for one specific service, product or offer — built to generate as many enquiries as possible.",
          gain: ["More enquiries", "more leads", "more sales"],
        },
        {
          title: "Business Website",
          positioning: "",
          description:
            "A professional website for your entire company.",
          gain: ["More trust", "more customers", "more revenue"],
        },
        {
          title: "Online Shop",
          positioning: "",
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
          title: "Discovery & Planning",
          description:
            "We analyse your goals, define the project scope and provide a fixed-price proposal with no hidden costs.",
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
          title: "Final Review & Go-Live",
          description:
            "You test the finished product. After your final approval the remaining 50% is due, and we take the project live including all rights.",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Transparent packages for every business",
      description:
        "Clear starting prices in EUR. Every project is scoped precisely — so you always know what you are investing in.",
      popular: "Most Popular",
      included: "You receive:",
      gainLabel: "Your benefit:",
      tiers: [
        {
          name: "Relaunch",
          price: "from €800",
          description:
            "For companies with an existing website that should look current and convincing.",
          features: [
            "Review of your existing website",
            "Modern design update",
            "Technical refresh and performance",
            "Clearer structure and call-to-action",
            "Optimised for smartphone, tablet and desktop",
          ],
          gain: ["A fresh presence", "more trust", "more enquiries"],
          cta: "Start a Relaunch",
        },
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
          cta: "Start a Onepage Website",
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
    faq: {
      eyebrow: "FAQ",
      title: "Frequently Asked Questions",
      description:
        "Everything you need to know before we start working together.",
      items: [
        {
          question: "How long does it take to build a website?",
          answer:
            "How long the project takes depends on its scope. After the initial consultation you receive a clear estimate of the time required.",
        },
        {
          question: "What does a website cost?",
          answer:
            "Our projects start from €800. The final price depends on scope, design and the features you need.",
        },
        {
          question: "Is the website optimised for smartphones?",
          answer:
            "Yes. All our websites are optimised for smartphone, tablet and desktop.",
        },
        {
          question: "Do you take care of domain and hosting?",
          answer:
            "Yes. On request we support you with domain, hosting and the technical launch of your website.",
        },
        {
          question: "Can I make changes to my website later?",
          answer:
            "Yes. Depending on the project, we can provide you with a simple system to manage your content.",
        },
        {
          question: "What happens after my enquiry?",
          answer:
            "We discuss your project, your goals and your requirements. You then receive an individual proposal.",
        },
        {
          question: "Can I talk to you first before deciding?",
          answer:
            "Of course. The initial consultation is free and without obligation.",
        },
      ],
    },
    cta: {
      title: "Ready for a website that works for your business?",
      description:
        "Tell us briefly about your project. We discuss your goals and show you which solution fits your business best.",
      primary: "Book a Free Consultation",
      reassurance: "Free · No obligation · Personal",
      form: {
        name: "Your Name",
        email: "Email",
        company: "Company",
        projectType: "Which website do you need?",
        projectTypePlaceholder: "Please select",
        projectTypeOptions: [
          "Relaunch",
          "Onepage",
          "Landing Page",
          "Business Website",
          "Online Shop",
          "I'm not sure yet",
        ],
        message: "Tell us briefly about your project",
        submit: "Send Enquiry",
      },
    },
    footer: {
      tagline:
        "Professional websites for companies, freelancers and local businesses — designed and built in Vienna.",
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
        faq: "FAQ",
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
      faq: "FAQ",
      cta: "Angebot anfordern",
      openMenu: "Menü öffnen",
      closeMenu: "Menü schließen",
    },
    hero: {
      brand: "YourSite",
      headline: "Moderne Websites, die mehr Kunden für Ihr Unternehmen gewinnen.",
      subheadline:
        "Wir entwickeln professionelle Websites für Unternehmen, Selbstständige und lokale Betriebe – von der ersten Idee bis zum erfolgreichen Launch.",
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
            "Klarer Leistungsumfang, planbare Konditionen und keine versteckten Kosten — Premium-Ergebnisse mit voller Transparenz.",
        },
      ],
      closing:
        "Eine Website sollte nicht nur gut aussehen. Sie sollte für Ihr Unternehmen arbeiten.",
    },
    services: {
      eyebrow: "Leistungen",
      title: "Die passende Website für Ihr Unternehmen",
      description:
        "Vom Relaunch Ihrer bestehenden Seite bis zum Online-Shop – wir entwickeln die Lösung, die zu Ihren Zielen passt.",
      discuss: "Leistung besprechen",
      gainLabel: "Damit gewinnen Sie:",
      items: [
        {
          title: "Relaunch",
          positioning: "",
          description: "Bestehende Seite modernisieren.",
          gain: ["Frischer Auftritt", "mehr Vertrauen", "mehr Anfragen"],
        },
        {
          title: "Onepage Website",
          positioning: "Digitale Visitenkarte und Status",
          description:
            "Für Unternehmen und selbstständige Fachkräfte, die eine stilvolle, schnelle Online-Präsenz ohne überflüssige Seiten brauchen.",
          gain: ["Mehr Vertrauen", "mehr Anfragen", "mehr Kunden"],
        },
        {
          title: "Landing Page",
          positioning: "Leadgenerierung für Ihre Werbung",
          description:
            "Eine fokussierte Seite für eine konkrete Leistung, ein Produkt oder Angebot — ausgelegt auf möglichst viele Anfragen.",
          gain: ["Mehr Anfragen", "mehr Leads", "mehr Verkäufe"],
        },
        {
          title: "Business Website",
          positioning: "",
          description:
            "Eine professionelle Website für Ihr gesamtes Unternehmen.",
          gain: ["Mehr Vertrauen", "mehr Kunden", "mehr Umsatz"],
        },
        {
          title: "Online-Shop",
          positioning: "",
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
          name: "Relaunch",
          price: "ab €800",
          description:
            "Für Unternehmen mit einer bestehenden Website, die zeitgemäß und überzeugend wirken soll.",
          features: [
            "Analyse Ihrer bestehenden Website",
            "Modernes Design-Update",
            "Technisches Refresh und Performance",
            "Klarere Struktur und Call-to-Action",
            "Optimierung für Smartphone, Tablet und Desktop",
          ],
          gain: ["Frischer Auftritt", "mehr Vertrauen", "mehr Anfragen"],
          cta: "Relaunch starten",
        },
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
          cta: "Onepage Website starten",
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
    faq: {
      eyebrow: "FAQ",
      title: "Häufig gestellte Fragen",
      description:
        "Alles, was Sie wissen sollten, bevor wir zusammenarbeiten.",
      items: [
        {
          question: "Wie lange dauert die Erstellung einer Website?",
          answer:
            "Wie lange die Umsetzung dauert, hängt vom Umfang des Projekts ab. Nach dem Erstgespräch erhalten Sie eine klare Einschätzung der benötigten Zeit.",
        },
        {
          question: "Was kostet eine Website?",
          answer:
            "Unsere Projekte starten ab €800. Der finale Preis hängt vom Umfang, Design und den gewünschten Funktionen ab.",
        },
        {
          question: "Ist die Website für Smartphones optimiert?",
          answer:
            "Ja. Alle unsere Websites werden für Smartphone, Tablet und Desktop optimiert.",
        },
        {
          question: "Kümmern Sie sich um Domain und Hosting?",
          answer:
            "Ja. Auf Wunsch unterstützen wir Sie bei Domain, Hosting und dem technischen Start Ihrer Website.",
        },
        {
          question: "Kann ich später Änderungen an meiner Website vornehmen?",
          answer:
            "Ja. Je nach Projekt können wir Ihnen ein einfaches System zur Verwaltung Ihrer Inhalte bereitstellen.",
        },
        {
          question: "Was passiert nach der Anfrage?",
          answer:
            "Wir besprechen Ihr Projekt, Ihre Ziele und Ihre Anforderungen. Anschließend erhalten Sie ein individuelles Angebot.",
        },
        {
          question:
            "Kann ich zuerst mit Ihnen sprechen, bevor ich mich entscheide?",
          answer:
            "Natürlich. Das Erstgespräch ist kostenlos und unverbindlich.",
        },
      ],
    },
    cta: {
      title: "Bereit für eine Website, die für Ihr Unternehmen arbeitet?",
      description:
        "Erzählen Sie uns kurz von Ihrem Projekt. Wir besprechen Ihre Ziele und zeigen Ihnen, welche Lösung am besten zu Ihrem Unternehmen passt.",
      primary: "Kostenloses Erstgespräch vereinbaren",
      reassurance: "Kostenlos · Unverbindlich · Persönlich",
      form: {
        name: "Ihr Name",
        email: "E-Mail",
        company: "Unternehmen",
        projectType: "Welche Website benötigen Sie?",
        projectTypePlaceholder: "Bitte auswählen",
        projectTypeOptions: [
          "Relaunch",
          "Onepage",
          "Landing Page",
          "Business Website",
          "Online Shop",
          "Ich bin mir noch nicht sicher",
        ],
        message: "Erzählen Sie uns kurz von Ihrem Projekt",
        submit: "Anfrage senden",
      },
    },
    footer: {
      tagline:
        "Professionelle Websites für Unternehmen, Selbstständige und lokale Betriebe — entwickelt in Wien.",
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
        faq: "FAQ",
        contact: "Kontakt",
        privacy: "Datenschutz",
        impressum: "Impressum",
        terms: "AGB",
      },
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)["en"];

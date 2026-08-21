export type Locale = "en" | "de";

export const dictionaries = {
  en: {
    meta: {
      title: "ClearPoint — Modern Websites That Grow Your Business",
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
      brand: "ClearPoint",
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
      eyebrow: "Why ClearPoint",
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
      details: "View details",
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
          price: "from €699",
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
      details: "View details",
      note: "All prices are starting prices. The final price depends on scope, design and the features you need.",
    },
    serviceDetail: {
      eyebrow: "Service",
      back: "All services",
      backHome: "Back to homepage",
      startingPrice: "Starting price",
      timelineLabel: "Typical timeline",
      paymentLabel: "Payment",
      payment: "50% to start · 50% on approval",
      idealForTitle: "Who this is for",
      includedTitle: "What is included",
      deliverablesTitle: "In detail",
      conditionsTitle: "Terms and conditions",
      pricingTitle: "Prices and options",
      pricingDescription:
        "The starting price covers the full package below. Options are added only if you need them.",
      addonsTitle: "Optional extras",
      basePriceLabel: "Package price",
      noteTitle: "Good to know",
      note: "All prices are net starting prices. You receive a fixed-price proposal before we begin, so there are no surprises.",
      requestCta: "Order by email",
      questionsCta: "Ask a question by email",
      consultationCta: "Request a free consultation",
      midCtaTitle: "Ready to start this package?",
      midCtaDescription:
        "Send us a short email and you will receive a fixed-price proposal for exactly this scope.",
      finalCtaTitle: "Order this package now",
      finalCtaDescription:
        "One click opens a prefilled email. Add a sentence about your company and send it — we reply with the next steps.",
      contactHint: "Or write to us directly:",
      mailSubject: "Enquiry",
      mailIntro:
        "Hello ClearPoint team,\n\nI would like to order the following package:",
      mailQuestionIntro:
        "Hello ClearPoint team,\n\nI have a question about the following package:",
      mailFields:
        "\n\nMy company:\nMy website (if any):\nMy goal:\n\nBest regards,",
      items: {
        relaunch: {
          positioning: "A fresh presence without starting over",
          summary:
            "Your website already exists — it simply no longer matches the quality of your work. We keep what works, modernise design and technology, and turn the page into a presence that convinces again.",
          timeline: "approx. 1–2 weeks",
          idealFor: [
            "Companies whose website looks several years old",
            "Pages that are slow or awkward on smartphones",
            "Businesses that want a fresh look without a full rebuild",
          ],
          deliverables: [
            "Review of your current pages, structure and texts",
            "New, modern design based on your existing content",
            "Technical refresh: speed, mobile view, contact paths",
            "Clearer structure with a visible call-to-action",
            "Go-live including transfer of all files and access",
          ],
          conditions: [
            {
              title: "Scope",
              description:
                "Modernising your existing website with up to five pages. Additional pages can be added as an option.",
            },
            {
              title: "What we need from you",
              description:
                "Access to your current website and hosting, plus your logo and existing texts or images.",
            },
            {
              title: "Payment",
              description:
                "50% on signing the agreement, the remaining 50% after your final approval — before go-live.",
            },
            {
              title: "After go-live",
              description:
                "You own all files and access. Ongoing maintenance is available on request as a monthly option.",
            },
          ],
          addons: [
            { label: "Additional page", price: "+€149" },
            { label: "Rewriting your texts", price: "+€199" },
            { label: "Logo refresh", price: "+€249" },
            { label: "Domain and hosting migration", price: "+€99" },
            { label: "Maintenance", price: "from €39/month" },
          ],
        },
        onepage: {
          positioning: "Digital business card and status",
          summary:
            "One modern page that carries everything a potential customer needs: who you are, what you offer and how to reach you. Fast, clear and built to be taken seriously.",
          timeline: "approx. 1–2 weeks",
          idealFor: [
            "Independent professionals and small teams",
            "Companies that need a presence, not a large site",
            "Anyone who wants to go online quickly and cleanly",
          ],
          deliverables: [
            "Custom design in your colours and style",
            "All key information on one page, in a clear order",
            "Presentation of your services with a focus on trust",
            "Contact section with a form and direct call-to-action",
            "Optimised for smartphone, tablet and desktop",
          ],
          conditions: [
            {
              title: "Scope",
              description:
                "One page with up to six sections, including contact form and legal pages.",
            },
            {
              title: "What we need from you",
              description:
                "Your logo, images and a rough idea of your content — we structure the rest with you.",
            },
            {
              title: "Payment",
              description:
                "50% on signing the agreement, the remaining 50% after your final approval — before go-live.",
            },
            {
              title: "After go-live",
              description:
                "You receive all files and access. Later extensions are always possible.",
            },
          ],
          addons: [
            { label: "Additional section", price: "+€149" },
            { label: "Copywriting for your texts", price: "+€249" },
            { label: "Second language", price: "+€299" },
            { label: "Blog or news area", price: "+€399" },
            { label: "Maintenance", price: "from €39/month" },
          ],
        },
        "landing-page": {
          positioning: "Lead-generation tool for advertising",
          summary:
            "A page with exactly one job: turning visitors from your ads into enquiries. Every element — headline, proof, form — is built around that single action.",
          timeline: "approx. 1–2 weeks",
          idealFor: [
            "Companies running Google or social media ads",
            "One specific service, product or offer",
            "Teams that want measurable enquiries, not just traffic",
          ],
          deliverables: [
            "Page structure built around one customer action",
            "Persuasive design with strong calls-to-action",
            "Clear presentation of a single offer, without distraction",
            "Enquiry form optimised for mobile devices",
            "Ready for your ad campaigns from day one",
          ],
          conditions: [
            {
              title: "Scope",
              description:
                "One campaign page including form, thank-you state and legal pages.",
            },
            {
              title: "What we need from you",
              description:
                "Your offer, your target group and any existing ad material or images.",
            },
            {
              title: "Payment",
              description:
                "50% on signing the agreement, the remaining 50% after your final approval — before go-live.",
            },
            {
              title: "After go-live",
              description:
                "You can keep running the page for new campaigns. Further variants are available as an option.",
            },
          ],
          addons: [
            { label: "Second variant for A/B testing", price: "+€349" },
            { label: "Tracking and conversion setup", price: "+€199" },
            { label: "Copywriting for your texts", price: "+€249" },
            { label: "Second language", price: "+€299" },
            { label: "Maintenance", price: "from €39/month" },
          ],
        },
        "business-website": {
          positioning: "The full presence for your company",
          summary:
            "Several pages that present your company in the way it deserves: services, team, references and clear contact paths — a website that supports your sales work every day.",
          timeline: "approx. 3–5 weeks",
          idealFor: [
            "Established companies with several services",
            "Businesses that want to show references and their team",
            "Anyone whose website should be more than a business card",
          ],
          deliverables: [
            "Custom web design across multiple pages",
            "Individual pages for your services",
            "References or project showcase",
            "Contact and enquiry forms",
            "Structure built for search engines and clear navigation",
          ],
          conditions: [
            {
              title: "Scope",
              description:
                "Up to eight pages including contact forms and legal pages. Additional pages as an option.",
            },
            {
              title: "What we need from you",
              description:
                "Your logo, images and content for the individual pages — we advise you on structure and wording.",
            },
            {
              title: "Payment",
              description:
                "50% on signing the agreement, the remaining 50% after your final approval — before go-live.",
            },
            {
              title: "After go-live",
              description:
                "On request you receive a simple system to manage your own content.",
            },
          ],
          addons: [
            { label: "Additional page", price: "+€199" },
            { label: "Multiple languages", price: "from €499" },
            { label: "Blog or news area", price: "+€399" },
            { label: "Online appointment booking", price: "+€349" },
            { label: "Maintenance", price: "from €59/month" },
          ],
        },
        "online-shop": {
          positioning: "Sell around the clock",
          summary:
            "Your own shop with a purchase process that customers actually complete: clear products, simple checkout, reliable payments. Built to sell while you sleep.",
          timeline: "approx. 5–8 weeks",
          idealFor: [
            "Companies that want to sell products online",
            "Local businesses expanding beyond their region",
            "Anyone who needs a professional purchase process",
          ],
          deliverables: [
            "Custom shop design in your brand style",
            "Product catalogue with categories and search",
            "Cart and a checkout with as few steps as possible",
            "Online payments and shipping settings",
            "Mobile-optimised purchase process",
          ],
          conditions: [
            {
              title: "Scope",
              description:
                "Shop setup including up to 50 products, payment and shipping configuration.",
            },
            {
              title: "What we need from you",
              description:
                "Product data, images and prices, plus your payment and shipping conditions.",
            },
            {
              title: "Payment",
              description:
                "50% on signing the agreement, the remaining 50% after your final approval — before go-live.",
            },
            {
              title: "After go-live",
              description:
                "You manage products and orders yourself. We hand over a short walkthrough of the system.",
            },
          ],
          addons: [
            { label: "Another 50 products", price: "+€399" },
            { label: "Additional payment method", price: "+€199" },
            { label: "Shipping provider integration", price: "+€299" },
            { label: "Multilingual shop", price: "from €699" },
            { label: "Maintenance", price: "from €99/month" },
          ],
        },
      },
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
            "Our projects start from €699. The final price depends on scope, design and the features you need.",
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
      title: "ClearPoint — Moderne Websites, die Ihr Unternehmen voranbringen",
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
      brand: "ClearPoint",
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
      eyebrow: "Warum ClearPoint",
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
      details: "Details ansehen",
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
          price: "ab €699",
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
      details: "Details ansehen",
      note: "Alle Preise verstehen sich als Startpreise. Der finale Preis hängt vom Umfang, Design und den gewünschten Funktionen ab.",
    },
    serviceDetail: {
      eyebrow: "Leistung",
      back: "Alle Leistungen",
      backHome: "Zurück zur Startseite",
      startingPrice: "Startpreis",
      timelineLabel: "Üblicher Zeitrahmen",
      paymentLabel: "Zahlung",
      payment: "50% zum Start · 50% nach Abnahme",
      idealForTitle: "Für wen das passt",
      includedTitle: "Das ist enthalten",
      deliverablesTitle: "Im Detail",
      conditionsTitle: "Konditionen",
      pricingTitle: "Preise und Optionen",
      pricingDescription:
        "Der Startpreis umfasst das komplette Paket unten. Optionen kommen nur dazu, wenn Sie sie brauchen.",
      addonsTitle: "Optionale Erweiterungen",
      basePriceLabel: "Paketpreis",
      noteTitle: "Gut zu wissen",
      note: "Alle Preise sind Netto-Startpreise. Vor Projektstart erhalten Sie ein Festpreisangebot — damit es keine Überraschungen gibt.",
      requestCta: "Per E-Mail beauftragen",
      questionsCta: "Frage per E-Mail stellen",
      consultationCta: "Kostenloses Erstgespräch anfragen",
      midCtaTitle: "Bereit für dieses Paket?",
      midCtaDescription:
        "Senden Sie uns eine kurze E-Mail und Sie erhalten ein Festpreisangebot für genau diesen Umfang.",
      finalCtaTitle: "Dieses Paket jetzt beauftragen",
      finalCtaDescription:
        "Ein Klick öffnet eine vorbereitete E-Mail. Ergänzen Sie einen Satz zu Ihrem Unternehmen und senden Sie sie ab — wir antworten mit den nächsten Schritten.",
      contactHint: "Oder schreiben Sie uns direkt:",
      mailSubject: "Anfrage",
      mailIntro:
        "Guten Tag ClearPoint Team,\n\nich möchte folgendes Paket beauftragen:",
      mailQuestionIntro:
        "Guten Tag ClearPoint Team,\n\nich habe eine Frage zu folgendem Paket:",
      mailFields:
        "\n\nMein Unternehmen:\nMeine Website (falls vorhanden):\nMein Ziel:\n\nBeste Grüße,",
      items: {
        relaunch: {
          positioning: "Frischer Auftritt ohne Neustart",
          summary:
            "Ihre Website existiert bereits — sie passt nur nicht mehr zur Qualität Ihrer Arbeit. Wir behalten, was funktioniert, modernisieren Design und Technik und machen aus der Seite einen Auftritt, der wieder überzeugt.",
          timeline: "ca. 1–2 Wochen",
          idealFor: [
            "Unternehmen, deren Website mehrere Jahre alt wirkt",
            "Seiten, die langsam oder am Smartphone unpraktisch sind",
            "Betriebe, die einen frischen Auftritt ohne kompletten Neubau wollen",
          ],
          deliverables: [
            "Analyse Ihrer bestehenden Seiten, Struktur und Texte",
            "Neues, modernes Design auf Basis Ihrer Inhalte",
            "Technisches Refresh: Ladezeit, mobile Ansicht, Kontaktwege",
            "Klarere Struktur mit sichtbarem Call-to-Action",
            "Go-Live inklusive Übergabe aller Dateien und Zugänge",
          ],
          conditions: [
            {
              title: "Umfang",
              description:
                "Modernisierung Ihrer bestehenden Website mit bis zu fünf Seiten. Weitere Seiten sind als Option möglich.",
            },
            {
              title: "Das brauchen wir von Ihnen",
              description:
                "Zugang zu Ihrer aktuellen Website und zum Hosting sowie Ihr Logo und vorhandene Texte oder Bilder.",
            },
            {
              title: "Zahlung",
              description:
                "50% bei Vertragsunterzeichnung, die restlichen 50% nach Ihrer finalen Freigabe — vor dem Go-Live.",
            },
            {
              title: "Nach dem Go-Live",
              description:
                "Alle Dateien und Zugänge gehören Ihnen. Laufende Wartung ist auf Wunsch als monatliche Option verfügbar.",
            },
          ],
          addons: [
            { label: "Zusätzliche Unterseite", price: "+€149" },
            { label: "Überarbeitung Ihrer Texte", price: "+€199" },
            { label: "Logo-Refresh", price: "+€249" },
            { label: "Domain- und Hosting-Umzug", price: "+€99" },
            { label: "Wartung", price: "ab €39/Monat" },
          ],
        },
        onepage: {
          positioning: "Digitale Visitenkarte und Status",
          summary:
            "Eine moderne Seite, die alles trägt, was ein möglicher Kunde braucht: wer Sie sind, was Sie anbieten und wie man Sie erreicht. Schnell, klar und so gebaut, dass man Sie ernst nimmt.",
          timeline: "ca. 1–2 Wochen",
          idealFor: [
            "Selbstständige Fachkräfte und kleine Teams",
            "Unternehmen, die einen Auftritt brauchen, keine große Website",
            "Alle, die schnell und sauber online gehen möchten",
          ],
          deliverables: [
            "Individuelles Design in Ihren Farben und Ihrem Stil",
            "Alle wichtigen Informationen auf einer Seite, klar sortiert",
            "Präsentation Ihrer Leistungen mit Fokus auf Vertrauen",
            "Kontaktbereich mit Formular und direktem Call-to-Action",
            "Optimierung für Smartphone, Tablet und Desktop",
          ],
          conditions: [
            {
              title: "Umfang",
              description:
                "Eine Seite mit bis zu sechs Abschnitten, inklusive Kontaktformular und Rechtstexten.",
            },
            {
              title: "Das brauchen wir von Ihnen",
              description:
                "Ihr Logo, Bilder und eine grobe Vorstellung Ihrer Inhalte — die Struktur erarbeiten wir mit Ihnen.",
            },
            {
              title: "Zahlung",
              description:
                "50% bei Vertragsunterzeichnung, die restlichen 50% nach Ihrer finalen Freigabe — vor dem Go-Live.",
            },
            {
              title: "Nach dem Go-Live",
              description:
                "Sie erhalten alle Dateien und Zugänge. Spätere Erweiterungen sind jederzeit möglich.",
            },
          ],
          addons: [
            { label: "Zusätzlicher Abschnitt", price: "+€149" },
            { label: "Texterstellung für Ihre Inhalte", price: "+€249" },
            { label: "Zweite Sprache", price: "+€299" },
            { label: "Blog- oder News-Bereich", price: "+€399" },
            { label: "Wartung", price: "ab €39/Monat" },
          ],
        },
        "landing-page": {
          positioning: "Leadgenerierung für Ihre Werbung",
          summary:
            "Eine Seite mit genau einer Aufgabe: Besucher aus Ihrer Werbung in Anfragen zu verwandeln. Jedes Element — Headline, Nachweis, Formular — ist auf diese eine Aktion ausgerichtet.",
          timeline: "ca. 1–2 Wochen",
          idealFor: [
            "Unternehmen mit Google- oder Social-Media-Werbung",
            "Eine konkrete Leistung, ein Produkt oder ein Angebot",
            "Teams, die messbare Anfragen wollen, nicht nur Besucher",
          ],
          deliverables: [
            "Seitenstruktur, ausgerichtet auf eine Kundenaktion",
            "Verkaufsstarkes Design mit klaren Call-to-Actions",
            "Klare Präsentation eines Angebots, ohne Ablenkung",
            "Anfrageformular, optimiert für mobile Geräte",
            "Ab dem ersten Tag bereit für Ihre Werbekampagnen",
          ],
          conditions: [
            {
              title: "Umfang",
              description:
                "Eine Kampagnenseite inklusive Formular, Danke-Ansicht und Rechtstexten.",
            },
            {
              title: "Das brauchen wir von Ihnen",
              description:
                "Ihr Angebot, Ihre Zielgruppe und vorhandenes Werbematerial oder Bilder.",
            },
            {
              title: "Zahlung",
              description:
                "50% bei Vertragsunterzeichnung, die restlichen 50% nach Ihrer finalen Freigabe — vor dem Go-Live.",
            },
            {
              title: "Nach dem Go-Live",
              description:
                "Sie können die Seite für neue Kampagnen weiterverwenden. Weitere Varianten sind als Option möglich.",
            },
          ],
          addons: [
            { label: "Zweite Variante für A/B-Tests", price: "+€349" },
            { label: "Tracking- und Conversion-Setup", price: "+€199" },
            { label: "Texterstellung für Ihre Inhalte", price: "+€249" },
            { label: "Zweite Sprache", price: "+€299" },
            { label: "Wartung", price: "ab €39/Monat" },
          ],
        },
        "business-website": {
          positioning: "Der vollständige Auftritt für Ihr Unternehmen",
          summary:
            "Mehrere Seiten, die Ihr Unternehmen so präsentieren, wie es es verdient: Leistungen, Team, Referenzen und klare Kontaktwege — eine Website, die Ihren Vertrieb jeden Tag unterstützt.",
          timeline: "ca. 3–5 Wochen",
          idealFor: [
            "Etablierte Unternehmen mit mehreren Leistungen",
            "Betriebe, die Referenzen und Team zeigen möchten",
            "Alle, deren Website mehr sein soll als eine Visitenkarte",
          ],
          deliverables: [
            "Individuelles Webdesign über mehrere Seiten",
            "Eigene Seiten für Ihre Leistungen",
            "Referenzen oder Projektübersicht",
            "Kontakt- und Anfrageformulare",
            "Struktur für Suchmaschinen und klare Navigation",
          ],
          conditions: [
            {
              title: "Umfang",
              description:
                "Bis zu acht Seiten inklusive Kontaktformularen und Rechtstexten. Weitere Seiten als Option.",
            },
            {
              title: "Das brauchen wir von Ihnen",
              description:
                "Ihr Logo, Bilder und Inhalte für die einzelnen Seiten — bei Struktur und Formulierung beraten wir Sie.",
            },
            {
              title: "Zahlung",
              description:
                "50% bei Vertragsunterzeichnung, die restlichen 50% nach Ihrer finalen Freigabe — vor dem Go-Live.",
            },
            {
              title: "Nach dem Go-Live",
              description:
                "Auf Wunsch erhalten Sie ein einfaches System, um Ihre Inhalte selbst zu verwalten.",
            },
          ],
          addons: [
            { label: "Zusätzliche Unterseite", price: "+€199" },
            { label: "Mehrsprachigkeit", price: "ab €499" },
            { label: "Blog- oder News-Bereich", price: "+€399" },
            { label: "Online-Terminbuchung", price: "+€349" },
            { label: "Wartung", price: "ab €59/Monat" },
          ],
        },
        "online-shop": {
          positioning: "Verkaufen rund um die Uhr",
          summary:
            "Ihr eigener Shop mit einem Kaufprozess, den Kunden wirklich abschließen: klare Produkte, einfacher Checkout, zuverlässige Zahlungen. Gebaut, um zu verkaufen, während Sie schlafen.",
          timeline: "ca. 5–8 Wochen",
          idealFor: [
            "Unternehmen, die Produkte online verkaufen möchten",
            "Lokale Betriebe, die über ihre Region hinaus wachsen",
            "Alle, die einen professionellen Kaufprozess brauchen",
          ],
          deliverables: [
            "Individuelles Shop-Design in Ihrem Markenstil",
            "Produktkatalog mit Kategorien und Suche",
            "Warenkorb und Checkout mit möglichst wenigen Schritten",
            "Online-Zahlungen und Versandeinstellungen",
            "Mobil optimierter Kaufprozess",
          ],
          conditions: [
            {
              title: "Umfang",
              description:
                "Shop-Einrichtung inklusive bis zu 50 Produkten, Zahlungs- und Versandkonfiguration.",
            },
            {
              title: "Das brauchen wir von Ihnen",
              description:
                "Produktdaten, Bilder und Preise sowie Ihre Zahlungs- und Versandbedingungen.",
            },
            {
              title: "Zahlung",
              description:
                "50% bei Vertragsunterzeichnung, die restlichen 50% nach Ihrer finalen Freigabe — vor dem Go-Live.",
            },
            {
              title: "Nach dem Go-Live",
              description:
                "Produkte und Bestellungen verwalten Sie selbst. Wir übergeben eine kurze Einführung in das System.",
            },
          ],
          addons: [
            { label: "Weitere 50 Produkte", price: "+€399" },
            { label: "Zusätzliche Zahlungsart", price: "+€199" },
            { label: "Anbindung Versanddienstleister", price: "+€299" },
            { label: "Mehrsprachiger Shop", price: "ab €699" },
            { label: "Wartung", price: "ab €99/Monat" },
          ],
        },
      },
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
            "Unsere Projekte starten ab €699. Der finale Preis hängt vom Umfang, Design und den gewünschten Funktionen ab.",
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

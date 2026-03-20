export type Lang = 'fr' | 'en'

export const t = {
  nav: {
    overview:     { fr: 'Accueil',      en: 'Overview' },
    profile:      { fr: 'Profil',       en: 'Profile' },
    industries:   { fr: 'Secteurs',     en: 'Industries' },
    caseStudies:  { fr: 'Cas clients',  en: 'Case Studies' },
    contact:      { fr: 'Contact',      en: 'Contact' },
  },
  hero: {
    badge:       { fr: 'IA · Transport · Logistique · 🇨🇭 🇦🇪 🇫🇷 🇬🇧', en: 'AI · Transport · Logistics · 🇨🇭 🇦🇪 🇫🇷 🇬🇧' },
    headline1:   { fr: 'Transformez votre', en: 'Transform your' },
    headline2:   { fr: 'chaîne logistique', en: 'logistics chain' },
    headline3:   { fr: 'avec l\'intelligence artificielle', en: 'with artificial intelligence' },
    sub:         {
      fr: 'Conseil en IA spécialisé pour les secteurs du transport, de la logistique et du fret. Des solutions concrètes, déployées par des experts du terrain.',
      en: 'AI consulting specialized in transport, logistics, and freight. Concrete solutions, deployed by industry experts.'
    },
    cta1:        { fr: 'Voir les cas clients', en: 'View case studies' },
    cta2:        { fr: 'Prendre contact',      en: 'Get in touch' },
    stat1Label:  { fr: 'années d\'expérience', en: 'years of experience' },
    stat2Label:  { fr: 'P&L géré (M€)',        en: 'P&L managed (M€)' },
    stat3Label:  { fr: 'équipes managées',      en: 'team members managed' },
  },
  profile: {
    sectionTag:  { fr: 'Fondateur', en: 'Founder' },
    headline:    { fr: 'Une expertise terrain\nau service de l\'IA', en: 'Field expertise\npowering AI' },
    bio1: {
      fr: 'Après 12 ans à construire et diriger des opérations logistiques complexes en Europe et au Moyen-Orient — de Strategy& à Convelio en passant par GEP — j\'ai fondé VecteurAI pour appliquer l\'intelligence artificielle aux problèmes réels du terrain.',
      en: 'After 12 years building and leading complex logistics operations across Europe and the Middle East — from Strategy& to Convelio and GEP — I founded VecteurAI to apply artificial intelligence to real operational challenges.'
    },
    bio2: {
      fr: 'Mon avantage : je comprends aussi bien les modèles financiers que les flux de quai. VecteurAI ne livre pas des rapports — nous déployons des solutions.',
      en: 'My edge: I understand financial models as well as dock operations. VecteurAI doesn\'t deliver reports — we deploy solutions.'
    },
    credentials: {
      fr: ['General Manager Europe, Convelio (€15M P&L)', 'Senior Manager, Strategy& / PwC — Dubaï', 'MSc Ingénierie Civile, Imperial College London & UCL', 'BSc Génie Civil, EPFL Lausanne', 'Formation IA & Développement, Le Wagon 2026'],
      en: ['General Manager Europe, Convelio (€15M P&L)', 'Senior Manager, Strategy& / PwC — Dubai', 'MSc Civil Engineering, Imperial College London & UCL', 'BSc Civil Engineering, EPFL Lausanne', 'AI & Development Bootcamp, Le Wagon 2026']
    },
    langs:       { fr: 'Langues : Français · Anglais · Arabe · Allemand (notions)', en: 'Languages: French · English · Arabic · German (basic)' },
    nationality: { fr: 'Nationalité : Suisse', en: 'Nationality: Swiss' },
  },
  industries: {
    sectionTag:  { fr: 'Secteurs d\'activité', en: 'Industries covered' },
    headline:    { fr: 'Des secteurs que\nnous connaissons de l\'intérieur', en: 'Industries we know\nfrom the inside' },
    sub: {
      fr: 'VecteurAI intervient exclusivement dans les secteurs où nous avons une expertise opérationnelle directe.',
      en: 'VecteurAI works exclusively in sectors where we have direct operational expertise.'
    },
    items: [
      {
        icon: 'Truck',
        title: { fr: 'Transport routier', en: 'Road Transport' },
        desc: {
          fr: 'Optimisation des tournées, gestion de flotte, réduction des coûts de carburant par l\'IA prédictive.',
          en: 'Route optimization, fleet management, fuel cost reduction via predictive AI.'
        }
      },
      {
        icon: 'Package',
        title: { fr: 'Logistique & Entreposage', en: 'Logistics & Warehousing' },
        desc: {
          fr: 'Automatisation des WMS, prévision de la demande, optimisation des espaces de stockage.',
          en: 'WMS automation, demand forecasting, warehouse space optimization.'
        }
      },
      {
        icon: 'Anchor',
        title: { fr: 'Fret & Transit international', en: 'Freight & International Transit' },
        desc: {
          fr: 'Automatisation documentaire, conformité douanière, optimisation des liaisons multimodales.',
          en: 'Document automation, customs compliance, multimodal routing optimization.'
        }
      },
      {
        icon: 'Zap',
        title: { fr: 'Last Mile & E-commerce', en: 'Last Mile & E-commerce' },
        desc: {
          fr: 'IA de planification des livraisons, réduction des échecs de livraison, optimisation des créneaux.',
          en: 'AI delivery planning, failed delivery reduction, time-slot optimization.'
        }
      },
      {
        icon: 'TrendingUp',
        title: { fr: 'Trésorerie & Finance', en: 'Treasury & Finance' },
        desc: {
          fr: 'Prévision de trésorerie par IA, optimisation du BFR, réduction des coûts de financement court terme.',
          en: 'AI cash flow forecasting, working capital optimization, short-term financing cost reduction.'
        }
      },
      {
        icon: 'Settings',
        title: { fr: 'Industriels & Manufacturiers', en: 'Industrials & Manufacturers' },
        desc: {
          fr: 'Optimisation des achats transport, appels d\'offres assistés par IA, consolidation de flux.',
          en: 'Transport procurement optimization, AI-assisted tenders, flow consolidation.'
        }
      },
    ]
  },
  caseStudies: {
    sectionTag:   { fr: 'Cas clients', en: 'Case Studies' },
    headline:     { fr: 'L\'IA appliquée\naux défis réels', en: 'AI applied to\nreal challenges' },
    readMore:     { fr: 'Voir le détail', en: 'Read more' },
    impact:       { fr: 'Impact', en: 'Impact' },
    challenge:    { fr: 'Problématique', en: 'Challenge' },
    solution:     { fr: 'Solution IA', en: 'AI Solution' },
  },
  contact: {
    sectionTag:   { fr: 'Contact', en: 'Contact' },
    headline:     { fr: 'Parlons de\nvotre projet', en: 'Let\'s talk about\nyour project' },
    sub: {
      fr: 'Première consultation gratuite. Réponse sous 24h.',
      en: 'First consultation free. Response within 24 hours.'
    },
    namePlaceholder:    { fr: 'Votre nom', en: 'Your name' },
    emailPlaceholder:   { fr: 'Votre email', en: 'Your email' },
    companyPlaceholder: { fr: 'Votre entreprise', en: 'Your company' },
    messagePlaceholder: { fr: 'Décrivez votre problématique...', en: 'Describe your challenge...' },
    submit:             { fr: 'Envoyer', en: 'Send message' },
    success:            { fr: 'Message envoyé ! Je vous réponds sous 24h.', en: 'Message sent! I\'ll reply within 24h.' },
    whatsapp:           { fr: 'Écrire sur WhatsApp', en: 'Message on WhatsApp' },
    linkedin:           { fr: 'LinkedIn', en: 'LinkedIn' },
    orContact:          { fr: 'Ou contactez directement :', en: 'Or contact directly:' },
  },
  footer: {
    tagline: {
      fr: 'L\'intelligence artificielle au service de la chaîne logistique.',
      en: 'Artificial intelligence powering the logistics chain.'
    },
    rights: { fr: 'Tous droits réservés.', en: 'All rights reserved.' }
  }
}

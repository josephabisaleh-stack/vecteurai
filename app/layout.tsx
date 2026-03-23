import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import LanguageProvider from '@/components/LanguageProvider'
import { Analytics } from "@vercel/analytics/next"

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'LogiMind — Agence IA Transport & Logistique | France · Suisse · Europe',
    template: '%s | LogiMind',
  },
  description:
    'LogiMind est une agence spécialisée en intelligence artificielle pour le transport, la logistique et le fret. Conseil IA concret par des experts terrain. France, Suisse, Europe. — AI consulting agency for transport & logistics across Europe.',
  keywords: [
    // French — géographique
    'agence IA France', 'agence IA Suisse', 'agence IA Genève', 'agence IA Lausanne',
    'agence IA Paris', 'agence IA Lyon', 'agence IA Belgique', 'agence IA Europe',
    'agence intelligence artificielle France', 'agence intelligence artificielle Suisse',
    // French — transport & logistique
    'agence IA transport', 'agence IA logistique', 'agence IA fret',
    'agence IA transport France', 'agence IA transport Suisse',
    'agence IA logistique France', 'agence IA logistique Suisse',
    'conseil intelligence artificielle transport', 'conseil IA logistique',
    'intelligence artificielle logistique', 'IA transport routier',
    'IA fret international', 'IA last mile', 'IA supply chain',
    'optimisation tournées IA', 'automatisation douane IA',
    'prévision demande logistique IA', 'maintenance prédictive transport',
    'consultant IA transport France', 'consultant IA logistique',
    'intelligence artificielle supply chain France',
    // English — geographic
    'AI agency France', 'AI agency Switzerland', 'AI consulting Europe',
    'AI agency Paris', 'AI agency Geneva',
    // English — transport & logistics
    'AI logistics consulting', 'AI transport consulting',
    'logistics AI agency Europe', 'freight AI automation',
    'AI supply chain optimization', 'AI route optimization France',
    'predictive maintenance transport AI', 'last mile AI optimization',
    'AI demand forecasting logistics', 'AI freight Europe',
    'transport AI consultant', 'logistics AI Switzerland',
  ],
  authors: [{ name: 'Joseph Abisaleh', url: 'https://www.logimind.io/profil' }],
  creator: 'LogiMind',
  publisher: 'LogiMind',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.logimind.io',
    languages: {
      'fr': 'https://www.logimind.io',
      'en': 'https://www.logimind.io',
    },
  },
  openGraph: {
    title: 'LogiMind — Agence IA Transport & Logistique',
    description:
      'Conseil en intelligence artificielle pour le transport, la logistique et le fret. France, Suisse, Europe. AI consulting for transport & logistics.',
    url: 'https://www.logimind.io',
    siteName: 'LogiMind',
    locale: 'fr_FR',
    alternateLocale: ['en_US', 'fr_CH', 'fr_BE'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LogiMind — Agence IA Transport & Logistique',
    description: 'Conseil IA spécialisé transport & logistique. France, Suisse, Europe. AI consulting for transport & logistics.',
  },
  category: 'technology',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.logimind.io/#organization',
      name: 'LogiMind',
      url: 'https://www.logimind.io',
      description:
        'Agence spécialisée en intelligence artificielle pour le transport, la logistique et le fret. Conseil IA pour entreprises en France, Suisse et Europe. AI consulting agency for transport & logistics.',
      foundingDate: '2024',
      areaServed: ['FR', 'CH', 'BE', 'LU', 'DE', 'GB', 'AE'],
      knowsLanguage: ['fr', 'en', 'ar', 'de'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services IA LogiMind',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Optimisation des tournées par IA', description: 'Réduction de 18% du kilométrage grâce à la planification IA' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Prévision de la demande', description: 'Modèles de prévision multi-variés avec 89% de précision' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automatisation documentaire fret', description: 'OCR + LLM pour déclarations douanières — 78% automatisées' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Maintenance prédictive', description: 'Réduction de 67% des pannes imprévues' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tarification dynamique fret', description: 'Optimisation des marges fret par IA' } },
        ],
      },
      founder: { '@id': 'https://www.logimind.io/profil#person' },
    },
    {
      '@type': 'Person',
      '@id': 'https://www.logimind.io/profil#person',
      name: 'Joseph Abisaleh',
      jobTitle: 'Fondateur & Expert IA Logistique',
      description: '12 ans d\'expertise en logistique et transport. Ancien General Manager Europe chez Convelio, Senior Manager chez Strategy& PwC Dubai.',
      worksFor: { '@id': 'https://www.logimind.io/#organization' },
      alumniOf: [
        { '@type': 'EducationalOrganization', name: 'Imperial College London' },
        { '@type': 'EducationalOrganization', name: 'UCL' },
        { '@type': 'EducationalOrganization', name: 'EPFL Lausanne' },
      ],
      knowsAbout: ['Transport', 'Logistique', 'Intelligence Artificielle', 'Supply Chain', 'Fret international'],
      url: 'https://www.logimind.io/profil',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.logimind.io/#website',
      url: 'https://www.logimind.io',
      name: 'LogiMind',
      description: 'Agence IA spécialisée transport et logistique — France, Suisse, Europe',
      publisher: { '@id': 'https://www.logimind.io/#organization' },
      inLanguage: ['fr', 'en'],
    },
  ],
}

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import ContactPage from '@/components/pages/ContactPage'

export const metadata: Metadata = {
  title: 'Contact — Consultation IA Logistique & Transport gratuite',
  description:
    'Première consultation gratuite avec LogiMind. Parlons de votre projet IA transport, logistique ou fret en France, Suisse ou Europe. — Free first consultation for your AI transport & logistics project in France, Switzerland or Europe.',
  keywords: [
    'contact agence IA logistique', 'consultation IA transport gratuite',
    'devis IA logistique France', 'devis IA transport Suisse',
    'contacter expert IA supply chain', 'consultation IA fret',
    'contact AI logistics France', 'free AI transport consulting',
  ],
  alternates: { canonical: 'https://www.logimind.io/contact' },
  openGraph: {
    title: 'Contact LogiMind — Consultation IA Transport & Logistique',
    description: 'Première consultation gratuite. Discutons de votre projet IA logistique en France, Suisse ou Europe.',
    url: 'https://www.logimind.io/contact',
  },
}

export default function Page() {
  return <ContactPage />
}

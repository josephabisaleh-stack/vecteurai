import type { Metadata } from 'next'
import SectorsPage from '@/components/pages/SectorsPage'

export const metadata: Metadata = {
  title: 'Secteurs & Industries — IA Transport, Logistique, Fret, Last Mile',
  description:
    'LogiMind intervient dans le transport routier, la logistique, le fret international, le last mile et les industriels en France, Suisse et Europe. Découvrez nos solutions IA par secteur. — AI solutions for road transport, warehousing, freight, last mile & manufacturing across Europe.',
  keywords: [
    'secteurs IA transport', 'IA transport routier France', 'IA transport routier Suisse',
    'IA logistique entreposage', 'IA fret international', 'IA last mile e-commerce',
    'IA industriels manufacturiers', 'IA trésorerie logistique',
    'AI road transport France', 'AI warehousing Europe', 'AI last mile optimization',
    'AI freight international', 'transport logistics AI sectors',
  ],
  alternates: { canonical: 'https://www.logimind.io/secteurs' },
  openGraph: {
    title: 'Secteurs — LogiMind | IA Transport, Logistique & Fret',
    description: 'Solutions IA par secteur : transport routier, logistique, fret, last mile, industriels. France, Suisse, Europe.',
    url: 'https://www.logimind.io/secteurs',
  },
}

export default function Page() {
  return <SectorsPage />
}

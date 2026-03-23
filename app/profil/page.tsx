import type { Metadata } from 'next'
import ProfilePage from '@/components/pages/ProfilePage'

export const metadata: Metadata = {
  title: 'Joseph Abisaleh — Fondateur LogiMind | Expert IA Logistique & Transport',
  description:
    'Joseph Abisaleh, fondateur de LogiMind. 12 ans d\'expertise en logistique et transport. Ancien General Manager Europe chez Convelio, Senior Manager chez Strategy& PwC Dubai. EPFL, Imperial College London, UCL. — Founder of LogiMind, AI & logistics expert with 12 years operational experience across Europe and Middle East.',
  keywords: [
    'Joseph Abisaleh', 'fondateur LogiMind', 'expert IA logistique', 'consultant IA transport',
    'expert intelligence artificielle transport France', 'consultant IA supply chain Europe',
    'General Manager logistique', 'Strategy& PwC logistique', 'Convelio',
    'EPFL logistique', 'Imperial College logistics AI',
    'AI logistics expert France', 'AI transport consultant Europe', 'logistics AI founder',
  ],
  alternates: { canonical: 'https://www.logimind.io/profil' },
  openGraph: {
    title: 'Joseph Abisaleh — Expert IA Logistique | LogiMind',
    description: 'Fondateur de LogiMind. 12 ans d\'expertise logistique & transport. Ex-Convelio, Strategy& PwC. Expert IA en France et Europe.',
    url: 'https://www.logimind.io/profil',
  },
}

export default function Page() {
  return <ProfilePage />
}

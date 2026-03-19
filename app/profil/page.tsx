import type { Metadata } from 'next'
import ProfilePage from '@/components/pages/ProfilePage'

export const metadata: Metadata = {
  title: 'Profil — VecteurAI',
  description: 'Joseph Abisaleh — Fondateur de VecteurAI. 12 ans d\'expertise logistique, General Manager Europe chez Convelio, Senior Manager chez Strategy& PwC.',
}

export default function Page() {
  return <ProfilePage />
}

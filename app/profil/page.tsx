import type { Metadata } from 'next'
import ProfilePage from '@/components/pages/ProfilePage'

export const metadata: Metadata = {
  title: 'Profil — LogiMind',
  description: 'Joseph Abisaleh — Fondateur de LogiMind. 12 ans d\'expertise logistique, General Manager Europe chez Convelio, Senior Manager chez Strategy& PwC.',
}

export default function Page() {
  return <ProfilePage />
}

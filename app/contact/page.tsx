import type { Metadata } from 'next'
import ContactPage from '@/components/pages/ContactPage'

export const metadata: Metadata = {
  title: 'Contact — LogiMind',
  description: 'Première consultation gratuite. Parlons de votre projet IA logistique.',
}

export default function Page() {
  return <ContactPage />
}

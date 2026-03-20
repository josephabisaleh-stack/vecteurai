import type { Metadata } from 'next'
import CaseStudiesPage from '@/components/pages/CaseStudiesPage'

export const metadata: Metadata = {
  title: 'Cas clients — LogiMind',
  description: '6 études de cas réelles : optimisation de tournées, prévision demande, automatisation douanière, maintenance prédictive et plus.',
}

export default function Page() {
  return <CaseStudiesPage />
}

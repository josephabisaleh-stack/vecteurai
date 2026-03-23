import type { Metadata } from 'next'
import CaseStudiesPage from '@/components/pages/CaseStudiesPage'

export const metadata: Metadata = {
  title: 'Cas Clients — Résultats IA Logistique & Transport concrets',
  description:
    '7 études de cas réelles : optimisation de tournées (-18% km), prévision demande (89% précision), automatisation douanière (78%), maintenance prédictive (-67% pannes). Résultats prouvés en France et Europe. — 7 real AI case studies: route optimization, demand forecasting, customs automation, predictive maintenance.',
  keywords: [
    'cas clients IA logistique', 'études de cas IA transport', 'résultats IA supply chain',
    'optimisation tournées résultats', 'prévision demande logistique résultats',
    'automatisation douane IA résultats', 'maintenance prédictive transport résultats',
    'ROI IA logistique', 'ROI IA transport France',
    'AI logistics case studies', 'AI transport ROI Europe', 'AI freight results',
    'logistics AI success stories France', 'transport AI case study',
  ],
  alternates: { canonical: 'https://www.logimind.io/cas-clients' },
  openGraph: {
    title: 'Cas Clients — LogiMind | Résultats IA Transport & Logistique',
    description: '7 études de cas IA réelles : optimisation tournées, prévision demande, automatisation douanière. Résultats prouvés en France et Europe.',
    url: 'https://www.logimind.io/cas-clients',
  },
}

export default function Page() {
  return <CaseStudiesPage />
}

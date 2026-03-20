import type { Metadata } from 'next'
import SectorsPage from '@/components/pages/SectorsPage'

export const metadata: Metadata = {
  title: 'Secteurs — LogiMind',
  description: 'LogiMind intervient dans le transport routier, la logistique, le fret international, le last mile et les industriels.',
}

export default function Page() {
  return <SectorsPage />
}

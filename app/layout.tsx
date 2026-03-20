import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import LanguageProvider from '@/components/LanguageProvider'

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
  title: 'LogiMind — IA pour la logistique et le transport',
  description:
    'Conseil en intelligence artificielle spécialisé pour les secteurs du transport, de la logistique et du fret. Solutions concrètes par des experts terrain.',
  keywords: 'IA logistique, intelligence artificielle transport, optimisation itinéraires, automatisation fret, AI freight',
  openGraph: {
    title: 'LogiMind',
    description: 'AI consulting for transport & logistics',
    url: 'https://www.logimind.io',
    siteName: 'LogiMind',
  },
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
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}

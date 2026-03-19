'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'

const services = [
  {
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=700&q=80&auto=format&fit=crop',
    tagFr: 'Transport routier',
    tagEn: 'Road Transport',
    titleFr: 'Optimisation des tournées',
    titleEn: 'Route Optimization',
    descFr: 'Réduisez le kilométrage à vide et améliorez le respect des fenêtres horaires grâce à l\'IA.',
    descEn: 'Reduce empty mileage and improve time-window compliance with AI.',
    href: '/secteurs',
    color: 'blue',
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80&auto=format&fit=crop',
    tagFr: 'Prévision',
    tagEn: 'Forecasting',
    titleFr: 'Prévision de la demande',
    titleEn: 'Demand Forecasting',
    descFr: 'Anticipez les pics d\'activité et optimisez vos ressources humaines et matérielles.',
    descEn: 'Anticipate activity peaks and optimize human and material resources.',
    href: '/cas-clients',
    color: 'blue',
  },
  {
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=700&q=80&auto=format&fit=crop',
    tagFr: 'Fret international',
    tagEn: 'International Freight',
    titleFr: 'Automatisation documentaire',
    titleEn: 'Document Automation',
    descFr: 'OCR + LLM pour traiter déclarations douanières et documents de transport automatiquement.',
    descEn: 'OCR + LLM to process customs declarations and transport documents automatically.',
    href: '/secteurs',
    color: 'blue',
  },
]

export default function HomeServices() {
  const { lang } = useLanguage()

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p
              className="text-xs font-bold text-blue-600 uppercase tracking-[0.18em] mb-3"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              {lang === 'fr' ? 'Nos expertises' : 'Our expertise'}
            </p>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              {lang === 'fr' ? 'Des solutions IA concrètes' : 'Concrete AI solutions'}
            </h2>
          </div>
          <Link
            href="/secteurs"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors shrink-0"
          >
            {lang === 'fr' ? 'Voir tous les secteurs' : 'See all industries'}
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <Link
                href={svc.href}
                className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <Image
                    src={svc.image}
                    alt={lang === 'fr' ? svc.titleFr : svc.titleEn}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold">
                    {lang === 'fr' ? svc.tagFr : svc.tagEn}
                  </span>
                </div>

                <div className="p-6">
                  <h3
                    className="text-gray-900 font-bold text-lg mb-2"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    {lang === 'fr' ? svc.titleFr : svc.titleEn}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {lang === 'fr' ? svc.descFr : svc.descEn}
                  </p>
                  <span className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold group-hover:gap-2 transition-all">
                    {lang === 'fr' ? 'En savoir plus' : 'Learn more'}
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

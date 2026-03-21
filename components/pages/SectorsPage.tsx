'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { t } from '@/lib/translations'

const sectorImages: Record<string, string> = {
  Truck:      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80&auto=format&fit=crop',
  Package:    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80&auto=format&fit=crop',
  Anchor:     'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80&auto=format&fit=crop',
  Zap:        'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&q=80&auto=format&fit=crop',
  TrendingUp: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80&auto=format&fit=crop',
  Settings:   'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80&auto=format&fit=crop',
  Globe:      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80&auto=format&fit=crop',
  BarChart2:  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop',
}

export default function SectorsPage() {
  const { lang } = useLanguage()
  const items = t.industries.items

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Page title */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12">

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4" style={{ fontFamily: 'var(--font-syne)' }}>
            {t.industries.headline[lang]}
          </h1>
          <p className="text-gray-500">{t.industries.sub[lang]}</p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all duration-300"
            >
              <div className="relative h-44 overflow-hidden bg-gray-100">
                <Image
                  src={sectorImages[item.icon]}
                  alt={item.title[lang]}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <div className="w-8 h-0.5 bg-blue-600 mb-4 rounded-full" />
                <h3 className="text-gray-900 font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-syne)' }}>
                  {item.title[lang]}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{item.desc[lang]}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {lang === 'fr' ? 'En discuter' : 'Discuss this'}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}

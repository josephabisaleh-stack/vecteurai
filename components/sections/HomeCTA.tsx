'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'

export default function HomeCTA() {
  const { lang } = useLanguage()

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-blue-600 rounded-2xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-2" style={{ fontFamily: 'var(--font-syne)' }}>
              {lang === 'fr' ? 'Première consultation gratuite' : 'First consultation free'}
            </p>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-white leading-tight"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              {lang === 'fr' ? 'Prêt à transformer\nvos opérations ?' : 'Ready to transform\nyour operations?'}
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-colors text-sm shadow-sm"
            >
              {lang === 'fr' ? 'Prendre contact' : 'Get in touch'}
              <ArrowRight size={15} />
            </Link>

          </div>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { t } from '@/lib/translations'

export default function HomeHero() {
  const { lang } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      {/* Background logistics image — fades in from right */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1800&q=85&auto=format&fit=crop"
          alt="Logistics warehouse operations"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        {/* White gradient overlay: fully white on left, fading to transparent right */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.97) 30%, rgba(255,255,255,0.82) 50%, rgba(255,255,255,0.35) 70%, rgba(255,255,255,0) 100%)',
          }}
        />
        {/* Also fade top slightly */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 20%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-2xl">
          {/* Badge pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-widest uppercase mb-8"
          >
            {t.hero.badge[lang]}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-extrabold text-gray-900 leading-[1.07] mb-6"
            style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(2.6rem, 5vw, 4rem)' }}
          >
            {t.hero.headline1[lang]}{' '}
            <span className="text-blue-600">{t.hero.headline2[lang]}</span>
            <br />
            {t.hero.headline3[lang]}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-gray-500 text-base leading-relaxed mb-10 max-w-lg"
          >
            {t.hero.sub[lang]}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.38 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/cas-clients"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold text-sm rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              {t.hero.cta1[lang]}
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-semibold text-sm rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all"
            >
              {t.hero.cta2[lang]}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow z-10">
        <ChevronDown size={22} className="text-gray-400" />
      </div>
    </section>
  )
}

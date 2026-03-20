'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Globe } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { t } from '@/lib/translations'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ProfilePage() {
  const { lang } = useLanguage()
  const creds = t.profile.credentials[lang]
  const [photoError, setPhotoError] = useState(false)

  return (
    <div className="pt-16 min-h-screen bg-page">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Left: Profile card — matches screenshot exactly */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="rounded-2xl p-8 flex flex-col items-center text-center border border-gray-200 shadow-sm"
              style={{
                background: 'linear-gradient(145deg, #ffffff 0%, #f0f4ff 100%)',
              }}
            >
              {/* Avatar */}
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-200 mb-5 bg-blue-100 flex items-center justify-center shrink-0">
                {photoError ? (
                  <span className="text-2xl font-bold text-blue-600" style={{ fontFamily: 'var(--font-syne)' }}>JA</span>
                ) : (
                  <Image
                    src="/joseph.jpg"
                    alt="Joseph Abisaleh"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                    onError={() => setPhotoError(true)}
                  />
                )}
              </div>

              <h2
                className="text-xl font-extrabold text-gray-900 mb-1"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Joseph Abisaleh
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                {lang === 'fr' ? 'Fondateur, LogiMind' : 'Founder, LogiMind'}
              </p>

              <div className="w-full h-px bg-gray-200 mb-6" />

              {/* Quick facts */}
              <div className="w-full space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <Globe size={15} className="text-blue-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-0.5">
                      {lang === 'fr' ? 'Langues' : 'Languages'}
                    </p>
                    <p className="text-gray-700 text-sm">FR · EN · AR · DE</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Section tag */}
            <p
              className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-4"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              {t.profile.sectionTag[lang]}
            </p>

            {/* Headline */}
            <h1
              className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6 whitespace-pre-line"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              {t.profile.headline[lang]}
            </h1>

            <p className="text-gray-600 leading-relaxed mb-4 text-base">
              {t.profile.bio1[lang]}
            </p>
            <p className="text-gray-700 leading-relaxed mb-8 text-base font-medium">
              {t.profile.bio2[lang]}
            </p>

            {/* Credentials */}
            <div className="space-y-4 mb-8">
              {creds.map((cred, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={18} className="text-blue-500 mt-0.5 shrink-0" strokeWidth={1.5} />
                  <span className="text-gray-700 text-sm leading-snug">{cred}</span>
                </motion.div>
              ))}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-600 text-xs shadow-sm">
                🌐 {t.profile.langs[lang]}
              </span>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold text-sm rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              {lang === 'fr' ? 'Travailler ensemble' : 'Work together'}
              <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

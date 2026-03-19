'use client'

import { motion, type Variants, type Easing } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { t } from '@/lib/translations'

const easeOut: Easing = 'easeOut'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut, delay: i * 0.09 },
  }),
}

export default function Profile() {
  const { lang } = useLanguage()
  const creds = t.profile.credentials[lang]

  return (
    <section id="profile" className="relative py-32 overflow-hidden bg-light-50">
      {/* Subtle top gradient from dark to light */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(7,12,24,0.08) 0%, transparent 100%)',
        }}
      />

      {/* Right-side decorative lines */}
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-light-200 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">

          {/* Left: Photo (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-2 flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Main image */}
              <div
                className="relative w-72 h-72 lg:w-80 lg:h-80 overflow-hidden"
                style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  boxShadow: '0 32px 80px rgba(0, 60, 120, 0.18), 0 8px 24px rgba(0,0,0,0.10)',
                }}
              >
                <Image
                  src="/joseph-profile.jpg"
                  alt="Joseph Abisaleh"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Hex border overlay */}
              <div
                className="absolute inset-0 w-72 h-72 lg:w-80 lg:h-80"
                style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  border: '2px solid rgba(0, 100, 180, 0.20)',
                  pointerEvents: 'none',
                }}
              />

              {/* Floating credential chips */}
              <div className="absolute -right-6 top-8 bg-white border border-light-200 rounded-lg px-4 py-2 shadow-lg shadow-slate-200/60">
                <p
                  className="text-dark-900 text-xs font-bold tracking-wide"
                  style={{ fontFamily: 'var(--font-jetbrains)' }}
                >
                  EPFL · Imperial · UCL
                </p>
              </div>
              <div className="absolute -left-6 bottom-12 bg-white border border-light-200 rounded-lg px-4 py-2 shadow-lg shadow-slate-200/60">
                <p
                  className="text-cyan-600 text-xs font-bold tracking-wide"
                  style={{ fontFamily: 'var(--font-jetbrains)' }}
                >
                  €15M P&L · 60+ teams
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Content (3 cols) */}
          <div className="lg:col-span-3">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="text-xs font-semibold text-cyan-600 uppercase tracking-[0.2em] mb-4"
              style={{ fontFamily: 'var(--font-jetbrains)' }}
            >
              {t.profile.sectionTag[lang]}
            </motion.p>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="text-4xl lg:text-5xl font-bold text-dark-900 mb-6 whitespace-pre-line leading-tight"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              {t.profile.headline[lang]}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="text-slate-600 leading-relaxed mb-4 text-base"
            >
              {t.profile.bio1[lang]}
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              className="text-dark-800 leading-relaxed mb-8 font-semibold text-base border-l-4 border-cyan-400 pl-4 py-1 bg-light-100 rounded-r-lg"
            >
              {t.profile.bio2[lang]}
            </motion.p>

            {/* Credentials */}
            <div className="space-y-3 mb-8">
              {creds.map((cred, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i + 4}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={16} className="text-cyan-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700 text-sm">{cred}</span>
                </motion.div>
              ))}
            </div>

            {/* Info badges */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={9}
              className="flex flex-wrap gap-3"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-light-200 text-slate-600 text-xs shadow-sm">
                {t.profile.langs[lang]}
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-light-200 text-slate-600 text-xs shadow-sm">
                {t.profile.nationality[lang]}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

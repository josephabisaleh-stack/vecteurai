'use client'

import { motion, type Variants, type Easing } from 'framer-motion'
import { ArrowDown, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { t } from '@/lib/translations'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import LogisticsNetwork from '@/components/ui/LogisticsNetwork'

const easeOut: Easing = 'easeOut'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut, delay: i * 0.14 },
  }),
}

export default function Hero() {
  const { lang } = useLanguage()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="overview"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0A1020 0%, #070C18 50%, #0B1428 100%)' }}
    >
      {/* Logistics route network */}
      <LogisticsNetwork />

      {/* Primary radial glow — top center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,180,230,0.12) 0%, transparent 65%)',
        }}
      />
      {/* Secondary glow — bottom right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 85% 85%, rgba(245,166,35,0.07) 0%, transparent 60%)',
        }}
      />

      {/* Horizontal divider line at bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-36 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-3 mb-10"
          >
            <div className="w-6 h-px bg-cyan-400/60" />
            <span
              className="text-xs text-cyan-400 font-semibold tracking-[0.2em] uppercase"
              style={{ fontFamily: 'var(--font-jetbrains)' }}
            >
              {t.hero.badge[lang]}
            </span>
            <div className="w-6 h-px bg-cyan-400/60" />
          </motion.div>

          {/* Headline */}
          <div className="mb-8">
            {[t.hero.headline1[lang], t.hero.headline2[lang], t.hero.headline3[lang]].map(
              (line, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={i + 1}
                >
                  <span
                    className={`block leading-[1.1] ${
                      i === 1
                        ? 'text-cyan-400 text-6xl lg:text-7xl xl:text-8xl font-extrabold'
                        : 'text-white text-5xl lg:text-6xl xl:text-7xl font-bold'
                    }`}
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    {line}
                  </span>
                </motion.div>
              )
            )}
          </div>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="text-slate-400 text-lg leading-relaxed mb-12 max-w-2xl"
          >
            {t.hero.sub[lang]}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            className="flex flex-wrap gap-4 mb-20"
          >
            <button
              onClick={() => scrollTo('caseStudies')}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-cyan-400 text-dark-950 rounded-lg font-bold text-sm tracking-wide hover:bg-cyan-500 transition-all duration-200 shadow-lg shadow-cyan-400/20"
            >
              {t.hero.cta1[lang]}
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/25 text-white rounded-lg font-semibold text-sm tracking-wide hover:border-white/50 hover:bg-white/5 transition-all duration-200"
            >
              {t.hero.cta2[lang]}
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={6}
            className="grid grid-cols-3 gap-6 max-w-xl"
          >
            {[
              { target: 12, suffix: '', label: t.hero.stat1Label[lang] },
              { target: 15, suffix: 'M+', prefix: '€', label: t.hero.stat2Label[lang] },
              { target: 60, suffix: '+', label: t.hero.stat3Label[lang] },
            ].map((stat, i) => (
              <div key={i} className="border-l-2 border-cyan-400/40 pl-4">
                <div
                  className="text-3xl font-bold text-white mb-1"
                  style={{ fontFamily: 'var(--font-jetbrains)' }}
                >
                  <AnimatedCounter
                    target={stat.target}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </div>
                <p className="text-slate-500 text-xs leading-snug">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <button
          onClick={() => scrollTo('profile')}
          className="text-slate-500 hover:text-cyan-400 transition-colors"
        >
          <ArrowDown size={22} />
        </button>
      </div>
    </section>
  )
}

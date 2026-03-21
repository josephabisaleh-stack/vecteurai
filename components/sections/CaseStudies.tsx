'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Route,
  TrendingUp,
  FileCheck,
  Users,
  BarChart3,
  Wrench,
  ChevronDown,
  CheckCircle2,
} from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { t } from '@/lib/translations'
import { caseStudies } from '@/lib/caseStudies'

const iconMap: Record<string, React.ElementType> = {
  Route,
  TrendingUp,
  FileCheck,
  Users,
  BarChart3,
  Wrench,
}

type FilterKey = 'all' | 'transport' | 'logistique' | 'fret' | 'rh'

const filters: { key: FilterKey; fr: string; en: string }[] = [
  { key: 'all',        fr: 'Tous',      en: 'All' },
  { key: 'transport',  fr: 'Transport', en: 'Transport' },
  { key: 'logistique', fr: 'Logistique',en: 'Logistics' },
  { key: 'fret',       fr: 'Fret',      en: 'Freight' },
  { key: 'rh',         fr: 'RH',        en: 'HR' },
]

function matchesFilter(cs: typeof caseStudies[0], filter: FilterKey): boolean {
  if (filter === 'all') return true
  const tag = cs.tag.fr.toLowerCase()
  if (filter === 'transport')  return tag.includes('transport')
  if (filter === 'logistique') return tag.includes('logistique')
  if (filter === 'fret')       return tag.includes('fret')
  if (filter === 'rh')         return tag.includes('rh')
  return true
}

export default function CaseStudies() {
  const { lang } = useLanguage()
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const visible = caseStudies.filter((cs) => matchesFilter(cs, activeFilter))

  return (
    <section
      id="caseStudies"
      className="relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #14181E 0%, #222831 100%)' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(148,137,121,0.25), transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold text-amber-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-3"
            style={{ fontFamily: 'var(--font-jetbrains)' }}
          >
            <span className="w-6 h-px bg-amber-400/60" />
            {t.caseStudies.sectionTag[lang]}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-white whitespace-pre-line leading-tight"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            {t.caseStudies.headline[lang]}
          </motion.h2>
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                activeFilter === f.key
                  ? 'bg-amber-400 text-dark-950'
                  : 'bg-white/4 border border-white/8 text-slate-400 hover:text-white hover:border-white/20'
              }`}
              style={{ fontFamily: 'var(--font-jetbrains)' }}
            >
              {f[lang]}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((cs, i) => {
              const Icon = iconMap[cs.icon]
              const isExpanded = expandedId === cs.id
              const accentColor = cs.color === 'cyan' ? '#948979' : '#DFD0B8'
              const accentBg   = cs.color === 'cyan' ? 'rgba(148,137,121,0.07)' : 'rgba(223,208,184,0.07)'

              return (
                <motion.div
                  key={cs.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="rounded-xl overflow-hidden border border-white/6 flex flex-col group"
                  style={{
                    background: 'linear-gradient(150deg, #393E46 0%, #2D333B 100%)',
                    ...(isExpanded
                      ? { borderColor: accentColor + '35', boxShadow: `0 0 40px ${accentColor}10` }
                      : {}),
                  }}
                >
                  {/* Card header */}
                  <div className="p-6">
                    {/* Top row: icon + KPI */}
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className="w-11 h-11 rounded-lg flex items-center justify-center"
                        style={{ background: accentBg, border: `1px solid ${accentColor}20` }}
                      >
                        <Icon size={20} style={{ color: accentColor }} />
                      </div>
                      <div className="text-right">
                        <span
                          className="block text-lg font-extrabold leading-none mb-1"
                          style={{ color: accentColor, fontFamily: 'var(--font-jetbrains)' }}
                        >
                          {cs.kpi}
                        </span>
                        <span
                          className="text-[10px] px-2 py-0.5 rounded-full border font-medium"
                          style={{
                            color: accentColor,
                            borderColor: accentColor + '30',
                            backgroundColor: accentColor + '08',
                            fontFamily: 'var(--font-jetbrains)',
                          }}
                        >
                          {cs.tag[lang]}
                        </span>
                      </div>
                    </div>

                    <h3
                      className="text-white font-semibold text-base leading-snug mb-5"
                      style={{ fontFamily: 'var(--font-syne)' }}
                    >
                      {cs.title[lang]}
                    </h3>

                    {/* Expand button */}
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : cs.id)}
                      className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-white transition-colors"
                      style={{ fontFamily: 'var(--font-jetbrains)' }}
                    >
                      <span>{t.caseStudies.readMore[lang].toUpperCase()}</span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>

                  {/* Expandable content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div
                          className="px-6 pb-6 space-y-5 pt-4"
                          style={{ borderTop: `1px solid ${accentColor}15` }}
                        >
                          {/* Challenge */}
                          <div>
                            <p
                              className="text-[10px] font-bold uppercase tracking-[0.15em] mb-2"
                              style={{ color: accentColor, fontFamily: 'var(--font-jetbrains)' }}
                            >
                              {t.caseStudies.challenge[lang]}
                            </p>
                            <p className="text-slate-400 text-sm leading-relaxed">{cs.challenge[lang]}</p>
                          </div>

                          {/* Solution */}
                          <div>
                            <p
                              className="text-[10px] font-bold uppercase tracking-[0.15em] mb-2"
                              style={{ color: accentColor, fontFamily: 'var(--font-jetbrains)' }}
                            >
                              {t.caseStudies.solution[lang]}
                            </p>
                            <p className="text-slate-400 text-sm leading-relaxed">{cs.solution[lang]}</p>
                          </div>

                          {/* Impact */}
                          <div>
                            <p
                              className="text-[10px] font-bold uppercase tracking-[0.15em] mb-3"
                              style={{ color: accentColor, fontFamily: 'var(--font-jetbrains)' }}
                            >
                              {t.caseStudies.impact[lang]}
                            </p>
                            <ul className="space-y-2">
                              {cs.impact.map((point, j) => (
                                <li key={j} className="flex items-start gap-2 text-sm text-white/85">
                                  <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-emerald-400" />
                                  {point[lang]}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

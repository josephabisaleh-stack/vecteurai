'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Route, TrendingUp, FileCheck, Users, BarChart3, Wrench, DollarSign, ChevronDown, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { t } from '@/lib/translations'
import { caseStudies } from '@/lib/caseStudies'

const iconMap: Record<string, React.ElementType> = { Route, TrendingUp, FileCheck, Users, BarChart3, Wrench, DollarSign }

const caseImages: Record<string, string> = {
  'route-optimization': 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80&auto=format&fit=crop',
  'demand-forecasting': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop',
  'customs-automation': 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80&auto=format&fit=crop',
  'hr-recruitment':     'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=600&q=80&auto=format&fit=crop',
  'dynamic-pricing':        'https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=600&q=80&auto=format&fit=crop',
  'cash-flow-optimization': 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80&auto=format&fit=crop',
  'fleet-maintenance':      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop',
}

type FilterKey = 'all' | 'transport' | 'logistique' | 'fret' | 'rh'
const filters: { key: FilterKey; fr: string; en: string }[] = [
  { key: 'all',        fr: 'Tous',       en: 'All' },
  { key: 'transport',  fr: 'Transport',  en: 'Transport' },
  { key: 'logistique', fr: 'Logistique', en: 'Logistics' },
  { key: 'fret',       fr: 'Fret',       en: 'Freight' },
  { key: 'rh',         fr: 'RH',         en: 'HR' },
]

function matchesFilter(cs: typeof caseStudies[0], f: FilterKey) {
  if (f === 'all') return true
  const tag = cs.tag.fr.toLowerCase()
  return (
    (f === 'transport'  && tag.includes('transport')) ||
    (f === 'logistique' && tag.includes('logistique')) ||
    (f === 'fret'       && tag.includes('fret')) ||
    (f === 'rh'         && tag.includes('rh'))
  )
}

export default function CaseStudiesPage() {
  const { lang } = useLanguage()
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const visible = caseStudies.filter((cs) => matchesFilter(cs, activeFilter))

  return (
    <div className="pt-16 min-h-screen bg-page">
      {/* Page title */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-3" style={{ fontFamily: 'var(--font-syne)' }}>
            {t.caseStudies.sectionTag[lang]}
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight whitespace-pre-line" style={{ fontFamily: 'var(--font-syne)' }}>
            {t.caseStudies.headline[lang]}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-150 border ${
                activeFilter === f.key
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              {f[lang]}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((cs, i) => {
              const Icon = iconMap[cs.icon]
              const isExpanded = expandedId === cs.id
              const isCyan = cs.color === 'cyan'

              return (
                <motion.div
                  key={cs.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className={`bg-white rounded-2xl overflow-hidden border transition-all duration-200 ${
                    isExpanded ? 'border-blue-300 shadow-md' : 'border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200'
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden bg-gray-100">
                    <Image
                      src={caseImages[cs.id]}
                      alt={cs.title[lang]}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    {/* KPI badge */}
                    <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-white text-xs font-extrabold shadow ${isCyan ? 'bg-blue-600' : 'bg-amber-500'}`}
                      style={{ fontFamily: 'var(--font-syne)' }}>
                      {cs.kpi}
                    </div>
                    <span className="absolute bottom-3 left-3 bg-white/90 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {cs.tag[lang]}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isCyan ? 'bg-blue-50' : 'bg-amber-50'}`}>
                        <Icon size={20} className={isCyan ? 'text-blue-600' : 'text-amber-600'} />
                      </div>
                      <h3 className="text-gray-900 font-bold text-base leading-snug pt-1" style={{ fontFamily: 'var(--font-syne)' }}>
                        {cs.title[lang]}
                      </h3>
                    </div>

                    <button
                      onClick={() => setExpandedId(isExpanded ? null : cs.id)}
                      className={`flex items-center gap-2 text-sm font-semibold transition-colors ${isCyan ? 'text-blue-600 hover:text-blue-700' : 'text-amber-600 hover:text-amber-700'}`}
                    >
                      {t.caseStudies.readMore[lang]}
                      <ChevronDown size={15} className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28 }}
                        className="overflow-hidden"
                      >
                        <div className={`px-6 pb-6 pt-4 border-t space-y-5 ${isCyan ? 'border-blue-100' : 'border-amber-100'}`}>
                          {[
                            { label: t.caseStudies.challenge[lang], text: cs.challenge[lang] },
                            { label: t.caseStudies.solution[lang],  text: cs.solution[lang] },
                          ].map((block) => (
                            <div key={block.label}>
                              <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${isCyan ? 'text-blue-600' : 'text-amber-600'}`}
                                style={{ fontFamily: 'var(--font-syne)' }}>
                                {block.label}
                              </p>
                              <p className="text-gray-600 text-sm leading-relaxed">{block.text}</p>
                            </div>
                          ))}
                          <div>
                            <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${isCyan ? 'text-blue-600' : 'text-amber-600'}`}
                              style={{ fontFamily: 'var(--font-syne)' }}>
                              {t.caseStudies.impact[lang]}
                            </p>
                            <ul className="space-y-2">
                              {cs.impact.map((point, j) => (
                                <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                                  <CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" strokeWidth={1.8} />
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
    </div>
  )
}

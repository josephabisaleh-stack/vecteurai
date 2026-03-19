'use client'

import { motion } from 'framer-motion'
import {
  Truck,
  Package,
  Anchor,
  Zap,
  Paintbrush,
  Settings,
} from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { t } from '@/lib/translations'
import GlowCard from '@/components/ui/GlowCard'

const iconMap: Record<string, React.ElementType> = {
  Truck,
  Package,
  Anchor,
  Zap,
  Paintbrush,
  Settings,
}

const iconColors = ['cyan', 'amber', 'cyan', 'amber', 'cyan', 'amber'] as const

export default function Industries() {
  const { lang } = useLanguage()
  const items = t.industries.items

  return (
    <section
      id="industries"
      className="relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0C1422 0%, #0A1120 100%)' }}
    >
      {/* Top edge — transition from light Profile section */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(0,217,255,0.25), transparent)' }}
      />

      {/* Subtle background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="fine-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(0,217,255,0.04)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#fine-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold text-cyan-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-3"
            style={{ fontFamily: 'var(--font-jetbrains)' }}
          >
            <span className="w-6 h-px bg-cyan-400/60" />
            {t.industries.sectionTag[lang]}
          </motion.p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-end">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-white whitespace-pre-line leading-tight"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              {t.industries.headline[lang]}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-400 lg:text-right lg:max-w-sm lg:ml-auto"
            >
              {t.industries.sub[lang]}
            </motion.p>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 h-px origin-left"
            style={{ background: 'linear-gradient(to right, rgba(0,217,255,0.4), transparent)' }}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon]
            const color = iconColors[i]
            const iconColor = color === 'cyan' ? '#00D9FF' : '#F5A623'
            const iconBg = color === 'cyan' ? 'rgba(0,217,255,0.08)' : 'rgba(245,166,35,0.08)'
            return (
              <GlowCard key={i} color={color} delay={i * 0.07}>
                <div>
                  {/* Icon in rounded square */}
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                    style={{ background: iconBg, border: `1px solid ${iconColor}20` }}
                  >
                    <Icon size={22} style={{ color: iconColor }} />
                  </div>
                  <h3
                    className="text-white font-semibold text-lg mb-3 leading-snug"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    {item.title[lang]}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc[lang]}</p>
                </div>
              </GlowCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'

interface GlowCardProps {
  children: React.ReactNode
  color?: 'cyan' | 'amber'
  className?: string
  delay?: number
}

export default function GlowCard({ children, color = 'cyan', className = '', delay = 0 }: GlowCardProps) {
  const accentColor = color === 'cyan' ? '#00D9FF' : '#F5A623'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
      className={`relative bg-dark-900 border border-white/6 rounded-xl p-6 overflow-hidden group cursor-default ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(17,29,48,0.95) 0%, rgba(11,20,40,1) 100%)',
      }}
    >
      {/* Left accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-200"
        style={{ background: accentColor }}
      />

      {/* Top edge glow on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(to right, transparent, ${accentColor}50, transparent)` }}
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

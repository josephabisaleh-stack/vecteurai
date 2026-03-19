'use client'

import Link from 'next/link'
import { Linkedin, MessageCircle, Mail } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { t } from '@/lib/translations'

export default function Footer() {
  const { lang } = useLanguage()

  return (
    <footer className="bg-navy-900 text-white">
      {/* Top accent */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-amber-500" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center mb-4">
              <span className="text-2xl font-extrabold text-white tracking-[0.1em]" style={{ fontFamily: 'var(--font-syne)' }}>
                VECTEUR
              </span>
              <span className="text-2xl font-extrabold text-blue-400 tracking-[0.1em]" style={{ fontFamily: 'var(--font-syne)' }}>
                AI
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {t.footer.tagline[lang]}
            </p>
            <div className="flex gap-3 mt-6">
              <a href="https://www.linkedin.com/in/joseph-abisaleh" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center text-white/50 hover:text-blue-400 hover:bg-white/12 transition-all">
                <Linkedin size={16} />
              </a>
              <a href="https://wa.me/33XXXXXXXXX" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center text-white/50 hover:text-green-400 hover:bg-white/12 transition-all">
                <MessageCircle size={16} />
              </a>
              <a href="mailto:joseph.abisaleh@gmail.com"
                className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center text-white/50 hover:text-blue-400 hover:bg-white/12 transition-all">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-[0.18em] mb-4" style={{ fontFamily: 'var(--font-jetbrains)' }}>
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/',            label: t.nav.overview[lang] },
                { href: '/profil',      label: t.nav.profile[lang] },
                { href: '/secteurs',    label: t.nav.industries[lang] },
                { href: '/cas-clients', label: t.nav.caseStudies[lang] },
                { href: '/contact',     label: t.nav.contact[lang] },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-[0.18em] mb-4" style={{ fontFamily: 'var(--font-jetbrains)' }}>
              Contact
            </h4>
            <a href="mailto:joseph.abisaleh@gmail.com" className="text-white/50 hover:text-white text-sm transition-colors block mb-2">
              joseph.abisaleh@gmail.com
            </a>
            <p className="text-white/30 text-xs mt-4">Paris · Dubai · Remote</p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs">© 2025 VecteurAI. {t.footer.rights[lang]}</p>
          <p className="text-white/20 text-xs" style={{ fontFamily: 'var(--font-jetbrains)' }}>vecteurai.com</p>
        </div>
      </div>
    </footer>
  )
}

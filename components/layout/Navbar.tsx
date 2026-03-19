'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { t } from '@/lib/translations'
import LanguageToggle from '@/components/ui/LanguageToggle'

export default function Navbar() {
  const { lang } = useLanguage()
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '/',            label: t.nav.overview[lang] },
    { href: '/profil',      label: t.nav.profile[lang] },
    { href: '/secteurs',    label: t.nav.industries[lang] },
    { href: '/cas-clients', label: t.nav.caseStudies[lang] },
    { href: '/contact',     label: t.nav.contact[lang] },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${scrolled ? 'shadow-sm' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <div className="flex items-center">
              <span className="text-lg font-bold text-gray-900 tracking-tight" style={{ fontFamily: 'var(--font-syne)' }}>
                VECTEUR
              </span>
              <span className="text-lg font-bold text-blue-600 tracking-tight" style={{ fontFamily: 'var(--font-syne)' }}>
                AI
              </span>
            </div>
            <span className="text-[10px] text-gray-400 tracking-wide leading-none mt-0.5">
              {lang === 'fr' ? 'Commissionnaire de transport' : 'Freight Forwarding'}
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors duration-150 ${
                  pathname === link.href
                    ? 'text-gray-900 font-semibold'
                    : 'text-gray-500 hover:text-gray-900 font-medium'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <LanguageToggle />
            <button
              className="md:hidden text-gray-500 hover:text-gray-900"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-2xl font-bold transition-colors ${
                pathname === link.href ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
              }`}
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              {link.label}
            </Link>
          ))}
          <LanguageToggle />
        </div>
      )}
    </>
  )
}

'use client'

import { useLanguage } from '@/hooks/useLanguage'

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="inline-flex items-center border border-gray-300 rounded-full px-1 py-0.5 bg-white text-xs gap-0.5">
      <button
        onClick={() => setLang('fr')}
        className={`px-2.5 py-1 rounded-full font-semibold transition-all duration-150 ${
          lang === 'fr' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
        }`}
      >
        FR
      </button>
      <span className="text-gray-300 text-xs">|</span>
      <button
        onClick={() => setLang('en')}
        className={`px-2.5 py-1 rounded-full font-semibold transition-all duration-150 ${
          lang === 'en' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
        }`}
      >
        EN
      </button>
    </div>
  )
}

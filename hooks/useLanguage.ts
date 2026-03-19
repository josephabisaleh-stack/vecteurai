'use client'

import { createContext, useContext } from 'react'
import type { Lang } from '@/lib/translations'

export interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: 'fr',
  setLang: () => {},
})

export function useLanguage() {
  return useContext(LanguageContext)
}

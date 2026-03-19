'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Linkedin, MessageCircle, Mail, CheckCircle2, Loader2 } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { t } from '@/lib/translations'

interface FormData {
  name: string
  email: string
  company: string
  message: string
}

export default function ContactPage() {
  const { lang } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed')
      setSubmitted(true)
    } catch {
      setError(lang === 'fr' ? "Erreur lors de l'envoi. Réessayez." : 'Error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = 'w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-150'

  return (
    <div className="pt-16 min-h-screen bg-page">
      {/* Page title */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-3" style={{ fontFamily: 'var(--font-syne)' }}>
            {t.contact.sectionTag[lang]}
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight whitespace-pre-line" style={{ fontFamily: 'var(--font-syne)' }}>
            {t.contact.headline[lang]}
          </h1>
          <p className="text-gray-500 mt-3">{t.contact.sub[lang]}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Left info */}
          <motion.div className="lg:col-span-2" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            {/* Profile card */}
            <div
              className="rounded-2xl p-8 border border-gray-200 shadow-sm mb-6"
              style={{ background: 'linear-gradient(145deg, #ffffff 0%, #f0f4ff 100%)' }}
            >
              <div className="w-14 h-14 rounded-full bg-blue-100 border-2 border-blue-200 flex items-center justify-center mb-4">
                <span className="text-lg font-extrabold text-blue-600" style={{ fontFamily: 'var(--font-syne)' }}>JA</span>
              </div>
              <h3 className="text-lg font-extrabold text-gray-900 mb-0.5" style={{ fontFamily: 'var(--font-syne)' }}>
                Joseph Abisaleh
              </h3>
              <p className="text-gray-500 text-sm mb-5">
                {lang === 'fr' ? 'Fondateur, VecteurAI' : 'Founder, VecteurAI'}
              </p>
              <a href="mailto:joseph.abisaleh@gmail.com"
                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors text-sm group">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Mail size={14} className="text-blue-600" />
                </div>
                joseph.abisaleh@gmail.com
              </a>
            </div>

            {/* Social */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4" style={{ fontFamily: 'var(--font-syne)' }}>
                {t.contact.orContact[lang]}
              </p>
              <div className="flex flex-col gap-3">
                <a href="https://wa.me/41762036203" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 text-gray-700 hover:border-green-300 hover:bg-green-50 transition-all text-sm font-medium">
                  <MessageCircle size={17} className="text-green-600" />
                  {t.contact.whatsapp[lang]}
                </a>
                <a href="https://www.linkedin.com/in/joseph-abisaleh-03335632/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50 transition-all text-sm font-medium">
                  <Linkedin size={17} className="text-blue-600" />
                  {t.contact.linkedin[lang]}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div className="lg:col-span-3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            {submitted ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center bg-white rounded-2xl border border-gray-200 shadow-sm p-12">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 220 }}>
                  <CheckCircle2 size={56} className="text-green-500 mb-5 mx-auto" strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-syne)' }}>
                  {t.contact.success[lang]}
                </h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2" style={{ fontFamily: 'var(--font-syne)' }}>
                      {lang === 'fr' ? 'Nom' : 'Name'} *
                    </label>
                    <input {...register('name', { required: true })} placeholder={t.contact.namePlaceholder[lang]}
                      className={`${inputClass} ${errors.name ? 'border-red-300' : ''}`} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2" style={{ fontFamily: 'var(--font-syne)' }}>
                      Email *
                    </label>
                    <input {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })} type="email"
                      placeholder={t.contact.emailPlaceholder[lang]}
                      className={`${inputClass} ${errors.email ? 'border-red-300' : ''}`} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2" style={{ fontFamily: 'var(--font-syne)' }}>
                    {lang === 'fr' ? 'Entreprise' : 'Company'}
                  </label>
                  <input {...register('company')} placeholder={t.contact.companyPlaceholder[lang]} className={inputClass} />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2" style={{ fontFamily: 'var(--font-syne)' }}>
                    {lang === 'fr' ? 'Message' : 'Message'} *
                  </label>
                  <textarea {...register('message', { required: true })} placeholder={t.contact.messagePlaceholder[lang]}
                    rows={5} className={`${inputClass} resize-none ${errors.message ? 'border-red-300' : ''}`} />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button type="submit" disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 disabled:opacity-60 transition-colors text-sm shadow-sm">
                  {loading && <Loader2 size={16} className="animate-spin" />}
                  {t.contact.submit[lang]}
                </button>
                <p className="text-center text-xs text-gray-400">
                  {lang === 'fr' ? 'Réponse sous 24h · Aucun engagement' : 'Reply within 24h · No commitment'}
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

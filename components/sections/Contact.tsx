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

export default function Contact() {
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
      if (!res.ok) throw new Error('Failed to send')
      setSubmitted(true)
    } catch {
      setError(lang === 'fr' ? "Erreur lors de l'envoi. Réessayez." : 'Error sending. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full bg-dark-800/60 border border-white/8 rounded-lg px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/15 transition-all duration-200'

  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0C1422 0%, #070C18 100%)' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(0,217,255,0.25), transparent)' }}
      />

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
            {t.contact.sectionTag[lang]}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-white whitespace-pre-line leading-tight mb-4"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            {t.contact.headline[lang]}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-slate-400"
          >
            {t.contact.sub[lang]}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Contact info (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div
              className="rounded-xl p-8 h-full flex flex-col gap-8 border border-cyan-400/15"
              style={{ background: 'linear-gradient(135deg, #111D30 0%, #0C1422 100%)' }}
            >
              {/* Free consultation badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/8 text-cyan-400 text-xs font-semibold self-start"
                style={{ fontFamily: 'var(--font-jetbrains)' }}
              >
                ✦ {lang === 'fr' ? 'Première consultation gratuite' : 'First consultation free'}
              </div>

              {/* Identity */}
              <div>
                <h3
                  className="text-xl font-bold text-white mb-1"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  Joseph Abisaleh
                </h3>
                <p className="text-slate-500 text-sm mb-5">
                  {lang === 'fr' ? 'Fondateur, VecteurAI' : 'Founder, VecteurAI'}
                </p>
                <a
                  href="mailto:joseph.abisaleh@gmail.com"
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-400/10 flex items-center justify-center">
                    <Mail size={14} className="text-cyan-400" />
                  </div>
                  joseph.abisaleh@gmail.com
                </a>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/6" />

              {/* Social links */}
              <div>
                <p
                  className="text-[10px] text-slate-600 uppercase tracking-[0.18em] mb-4"
                  style={{ fontFamily: 'var(--font-jetbrains)' }}
                >
                  {t.contact.orContact[lang]}
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://wa.me/33XXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg border border-emerald-500/20 bg-emerald-500/6 text-emerald-400 hover:bg-emerald-500/12 transition-colors text-sm font-medium"
                  >
                    <MessageCircle size={16} />
                    {t.contact.whatsapp[lang]}
                  </a>
                  <a
                    href="https://www.linkedin.com/in/joseph-abisaleh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg border border-blue-500/20 bg-blue-500/6 text-blue-400 hover:bg-blue-500/12 transition-colors text-sm font-medium"
                  >
                    <Linkedin size={16} />
                    {t.contact.linkedin[lang]}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 rounded-xl border border-white/6"
                style={{ background: 'linear-gradient(135deg, #111D30 0%, #0C1422 100%)' }}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <CheckCircle2 size={56} className="text-cyan-400 mb-5 mx-auto" />
                </motion.div>
                <h3
                  className="text-2xl font-bold text-white mb-2"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  {t.contact.success[lang]}
                </h3>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 rounded-xl border border-white/6 p-8"
                style={{ background: 'linear-gradient(135deg, #111D30 0%, #0C1422 100%)' }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    {...register('name', { required: true })}
                    placeholder={t.contact.namePlaceholder[lang]}
                    className={`${inputClass} ${errors.name ? 'border-red-500/40' : ''}`}
                  />
                  <input
                    {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                    type="email"
                    placeholder={t.contact.emailPlaceholder[lang]}
                    className={`${inputClass} ${errors.email ? 'border-red-500/40' : ''}`}
                  />
                </div>
                <input
                  {...register('company')}
                  placeholder={t.contact.companyPlaceholder[lang]}
                  className={inputClass}
                />
                <textarea
                  {...register('message', { required: true })}
                  placeholder={t.contact.messagePlaceholder[lang]}
                  rows={5}
                  className={`${inputClass} resize-none ${errors.message ? 'border-red-500/40' : ''}`}
                />

                {error && <p className="text-red-400 text-sm">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-cyan-400 text-dark-950 rounded-lg font-bold text-sm tracking-wide hover:bg-cyan-500 disabled:opacity-60 transition-colors duration-200 shadow-lg shadow-cyan-400/15"
                >
                  {loading && <Loader2 size={16} className="animate-spin" />}
                  {t.contact.submit[lang]}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

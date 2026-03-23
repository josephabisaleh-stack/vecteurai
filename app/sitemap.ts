import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.logimind.io'
  const lastModified = new Date()

  return [
    {
      url: base,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: { languages: { fr: base, en: base } },
    },
    {
      url: `${base}/secteurs`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: { languages: { fr: `${base}/secteurs`, en: `${base}/secteurs` } },
    },
    {
      url: `${base}/cas-clients`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: { languages: { fr: `${base}/cas-clients`, en: `${base}/cas-clients` } },
    },
    {
      url: `${base}/profil`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
      alternates: { languages: { fr: `${base}/profil`, en: `${base}/profil` } },
    },
    {
      url: `${base}/contact`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
      alternates: { languages: { fr: `${base}/contact`, en: `${base}/contact` } },
    },
  ]
}

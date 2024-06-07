import {Pathnames} from 'next-intl/navigation';

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;

export const defaultLocale = 'en' as const;
export const locales = ['en', 'fr'] as const;

export const pathnames = {
  '/': '/',
  '/estimation-immobiliere-en-ligne': {
    en: '/property-appraisal-online',
    fr: '/estimation-immobiliere-en-ligne'
  },
  '/temoignages': {
    en: '/testimonials',
    fr: '/temoignages'
  },
  '/specialistes': {
    en: '/specialists',
    fr: '/specialistes'
  },
  '/a-propos-de-moi': {
    en: '/about-me',
    fr: '/a-propos-de-moi'
  },
  '/devenir-proprietaire': {
    en: '/becoming-a-property-owner',
    fr: '/devenir-proprietaire'
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
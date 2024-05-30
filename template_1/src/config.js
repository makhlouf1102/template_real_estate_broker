export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;

export const defaultLocale = 'en';
export const locales = ['en', 'fr'];

export const pathnames = {
    '/': '/',
    '/pathnames': {
      en: '/pathnames',
      fr: '/pfadnamen'
    },
    '/about': {
      en: '/about',
      fr: '/a-propos'
    },
    '/specialities': {
      en: '/specialities',
      fr: '/specialites'
    },
    '/testimonials': {
      en: '/testimonials',
      fr: '/temoignages'
    },
    '/properties': {
      en: '/properties',
      fr: '/proprietes'
    },
    '/look-for-a-property': {
      en: '/look-for-a-property',
      fr: '/rechercher-de-propriete'
    },
    '/neighborhoods': {
      en: '/neighborhoods',
      fr: '/quartiers'
    },
    '/buy': {
      en: '/buy',
      fr: '/acheter'
    },
    '/real-estate-alert': {
      en: '/real-estate-alert',
      fr: '/alerte-immobiliere'
    },
    '/buy-a-property': {
      en: '/buy-a-property',
      fr: '/acheter-une-propriete'
    },
    '/sell': {
      en: '/sell',
      fr: '/vendre'
    },
    '/property-assessment': {
      en: '/property-assessment',
      fr: '/evaluation-de-la-propriete'
    },
    '/sell-your-property': {
      en: '/sell-your-property',
      fr: '/vendre-sa-propriete'
    },
    '/blog': {
      en: '/blog',
      fr: '/blogue'
    },
    '/contact': {
      en: '/contact',
      fr: '/me-contacter'
    },
};

// Use the default: `always`
export const localePrefix = undefined;
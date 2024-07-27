import { Pathnames } from "next-intl/navigation";

// Removed the import statement as it is causing an error
export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;

export const defaultLocale = 'en' as const;
export const locales = ['en', 'fr'] as const;

export const pathnames = {
  '/': '/',
  '/about': '/a-propos',
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;

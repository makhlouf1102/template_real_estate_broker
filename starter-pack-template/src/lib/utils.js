import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import i18n from 'i18next'
import { locales } from '../config'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Function to get the current language with i18next
export function getCurrentLanguage() {
  const currentLanguage = i18n.language;
  return locales.includes(currentLanguage) ? currentLanguage : 'en'; // 'en' as default language
}


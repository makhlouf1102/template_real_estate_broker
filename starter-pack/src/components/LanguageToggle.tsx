'use client';

import { useTranslations } from 'next-intl';
import { FaLanguage } from "react-icons/fa6";
import { useRouter, usePathname } from '@/navigation';

interface LanguageToggleProps {
  locale: string;
}

export default function LanguageToggle({ locale }: LanguageToggleProps) {
  const t = useTranslations('Navigation');
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'fr' : 'en';
    router.push(pathname, { locale: newLocale });
  };

  return (
    <button
      className="hover:opacity-70 text-text-50 font-bold flex items-center gap-2 p-2 rounded transition-opacity"
      aria-label={t('toggleLanguage')}
      onClick={toggleLanguage}
    >
      <FaLanguage aria-hidden="true" />
      <span>{locale === 'en' ? 'FR' : 'EN'}</span>
    </button>
  );
}
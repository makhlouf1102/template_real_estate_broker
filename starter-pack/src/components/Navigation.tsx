import { LocaleProps } from '@props/Locale.props';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { MobileNav } from './MobileNav';
import { AGENT_INFO } from '@/constantes/agent.const';
import { FaPhone } from "react-icons/fa6";

export default function Navigation({ locale }: LocaleProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Navigation');

  return (
    <header className="border-b border-gray-100 bg-white" role="banner">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="logo">
          <Link href="/" aria-label={t('homeLink')}>
            <Image
              alt={t('logoAlt')}
              height={100}
              src="/logo.png"
              width={200}
              priority
            />
          </Link>
        </div>
        <div className="md:hidden">
          <MobileNav locale={locale} />
        </div>
        <nav className="hidden md:block" aria-label={t('mainNavigation')}>
          <ul className="flex gap-4">
            <li>
              <Link
                className="hover:opacity-50 text-text-50 font-bold flex items-center gap-2 p-2 rounded transition-colors"
                href={`tel:${AGENT_INFO.phone}`}
                aria-label={t('callAgent')}
              >
                <FaPhone aria-hidden="true" />
                <span>{AGENT_INFO.phone}</span>
              </Link>
            </li>
            {/* Add more navigation items here */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
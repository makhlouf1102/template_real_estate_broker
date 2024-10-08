'use client';

import { LocaleProps } from '@props/Locale.props';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { MobileNav } from './MobileNav';
import { AGENT_INFO } from '@/constantes/agent.const';
import { FaPhone } from "react-icons/fa6";
import { useRouter, usePathname } from '@/navigation';
import LanguageToggle from './LanguageToggle';
import { useState } from 'react';
import logo from '../../public/logo.svg';

export default function Navigation({ locale }: LocaleProps) {
  const t = useTranslations('Navigation');
  const tLegal = useTranslations('LegalAndPrivacy');
  const router = useRouter();
  const pathname = usePathname();
  const [isLegalDropdownOpen, setIsLegalDropdownOpen] = useState(false);
  const [isPrivacyDropdownOpen, setIsPrivacyDropdownOpen] = useState(false);

  return (
    <header className="border-b border-gray-100 bg-white" role="banner">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" aria-label={t('homeLink')} className="logo">
          <Image
            alt={t('logoAlt')}
            height={10}
            src={logo}
            width={150}
            priority
            loading="eager"
          />
        </Link>
        <div className="md:hidden">
          <MobileNav locale={locale} />
        </div>
        <nav className="hidden md:block" aria-label={t('mainNavigation')}>
          <ul className="flex gap-4 items-center">
            <li>
              <Link
                className="hover:opacity-70 text-text-50 font-bold flex items-center gap-2 p-2 rounded transition-opacity"
                href={`tel:${AGENT_INFO.phone}`}
                aria-label={t('callAgent')}
              >
                <FaPhone aria-hidden="true" />
                <span>{AGENT_INFO.phone}</span>
              </Link>
            </li>
            <li>
              <LanguageToggle locale={locale} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
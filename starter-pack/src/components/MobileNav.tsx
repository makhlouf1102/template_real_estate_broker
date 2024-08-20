'use client';

/* eslint-disable jsx-a11y/label-has-associated-control */
import { LocaleProps } from '@props/Locale.props';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
  FaBars,
  FaXmark,
  FaFacebook,
  FaRegEnvelope,
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaPhone
} from 'react-icons/fa6';
import { AGENT_INFO } from '@/constantes/agent.const';
import { useState, useEffect } from 'react';
import LanguageToggle from './LanguageToggle';

export function MobileNav({ locale }: LocaleProps) {
  const t = useTranslations('Navigation');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const closeNav = () => setIsOpen(false);

  return (
    <>
      <button
        className="relative z-40 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? t('closeMenu') : t('openMenu')}
      >
        {isOpen ? (
          <FaXmark className="cursor-pointer hover:opacity-70" size={28} />
        ) : (
          <FaBars className="cursor-pointer hover:opacity-70" size={28} />
        )}
      </button>

      <nav
        className={`fixed right-0 top-0 z-40 h-full w-full overflow-y-auto overscroll-y-none transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="float-right min-h-full w-full max-w-sm bg-white p-6 shadow-2xl">
          <button
            className="absolute top-4 right-4 text-slate-700 hover:text-slate-900"
            onClick={closeNav}
            aria-label={t('closeMenu')}
          >
            <FaXmark size={28} />
          </button>
          <ul className="flex flex-col items-start justify-start gap-6 mt-12">
            <li className="w-full">
              <Link
                className="flex w-full items-center gap-2 border-b border-slate-100 p-4 text-left font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                href={`tel:${AGENT_INFO.phone}`}
                onClick={closeNav}
              >
                <FaPhone aria-hidden="true" />
                <span>{AGENT_INFO.phone}</span>
              </Link>
            </li>
            <li className="w-full">
              <Link
                className="flex w-full items-center gap-2 border-b border-slate-100 p-4 text-left font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                href={`mailto:${AGENT_INFO.email}`}
                onClick={closeNav}
              >
                <FaRegEnvelope aria-hidden="true" />
                <span>{AGENT_INFO.email}</span>
              </Link>
            </li>
            <li className="w-full">
              <div className="flex items-center justify-start space-x-6 p-4">
                {[
                  { icon: FaFacebook, href: AGENT_INFO.facebook, label: 'Facebook' },
                  { icon: FaXTwitter, href: AGENT_INFO.twitter, label: 'Twitter' },
                  { icon: FaInstagram, href: AGENT_INFO.instagram, label: 'Instagram' },
                  { icon: FaLinkedin, href: AGENT_INFO.linkedin, label: 'LinkedIn' },
                ].map(({ icon: Icon, href, label }) => (
                  <Link
                    key={label}
                    className="text-slate-700 hover:text-slate-900 transition-colors"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    onClick={closeNav}
                  >
                    <Icon size={24} aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </li>
            
            {/* Add LanguageToggle component */}
            <li className="w-full">
              <div className="p-4">
                <LanguageToggle locale={locale} />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
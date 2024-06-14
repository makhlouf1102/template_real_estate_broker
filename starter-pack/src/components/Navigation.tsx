import {LocaleProps} from '@props/Locale.props';
import Image from 'next/image';
import Link from 'next/link';
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import {MobileNav} from './MobileNav'; // Importez le composant MobileNav

export default function Navigation({locale}: LocaleProps) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('Navigation');

  const link_style = 'font-medium px-2 py-6 text-text-50 hover:opacity-50';

  return (
    <>
      <header className="border-b border-gray-100 bg-white">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="logo">
            <Image
              alt="Logo de l'agent immobilier"
              height={150}
              src="/logo.png"
              width={150}
            />
          </div>
          <div className="md:hidden">
            <MobileNav locale={locale} />{' '}
            {/* Utilisez le composant MobileNav */}
          </div>
          <nav className="hidden md:flex">
            <ul className="flex gap-4">
              <li>
                <Link className={link_style} href="#about">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link className={link_style} href="#services">
                  {t('services')}
                </Link>
              </li>
              <li>
                <Link className={link_style} href="#properties">
                  {t('properties')}
                </Link>
              </li>
              <li>
                <Link className={link_style} href="#testimonials">
                  {t('testimonials')}
                </Link>
              </li>
              <li>
                <Link className={link_style} href="#contact">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

import { LocaleProps } from '@props/Locale.props';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { MobileNav } from './MobileNav'; // Importez le composant MobileNav
import { AGENT_INFO } from '@/constantes/agent.const';
import { FaPhone } from "react-icons/fa6";

export default function Navigation({ locale }: LocaleProps) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('Navigation');

  const link_style = 'font-medium px-2 py-6 text-text-50 hover:opacity-50';

  return (
    <>
      <header className="border-b border-gray-100 bg-white">
        <div className="flex items-center justify-between py-4 px-40">
          <div className="logo">
            <Image
              alt="Logo de l'agent immobilier"
              src="/logo.png"
              height={200}
              width={200}
            />
          </div>
          <div className="md:hidden">
            <MobileNav locale={locale} />{' '}
            {/* Utilisez le composant MobileNav */}
          </div>
          <nav className="hidden md:flex">
            <ul className="flex gap-4">
              <li><Link className={link_style} href="/">Page</Link></li>
              <li><Link className={link_style} href="/">Page</Link></li>
              <li><Link className={link_style} href="/">Page</Link></li>
              <li><Link className={link_style} href="/">Page</Link></li>
              <li>
                <Link
                  className="hover:opacity-50 text-text-50 font-bold flex items-center gap-2"
                  href={`tel:${AGENT_INFO.phone}`}
                >
                  <FaPhone />
                  {AGENT_INFO.phone}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

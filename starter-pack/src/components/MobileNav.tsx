/* eslint-disable jsx-a11y/label-has-associated-control */
import { LocaleProps } from '@props/Locale.props';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
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

export function MobileNav({ locale }: LocaleProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Navigation');

  return (
    <label className="relative z-40 cursor-pointer" htmlFor="mobile-menu">
      <input className="peer hidden" id="mobile-menu" type="checkbox" />
      <FaBars className="cursor-pointer hover:opacity-70" size={28} />

      <div className="fixed right-0 top-0 z-40 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0">
        <div className="float-right min-h-full w-[75%] bg-white p-4 px-6 shadow-2xl">
          <span className="flex h-10 w-full items-center justify-end">
            <FaXmark className="cursor-pointer hover:opacity-70" size={28} />
          </span>
          <menu className="flex flex-col items-center justify-start gap-4">
          <li className="w-full">
              <input
                className="peer hidden"
                id="accordion-contact"
                type="checkbox"
              />
              <label className="block w-full" htmlFor="accordion-contact">
                <div className="group relative flex w-full cursor-pointer items-center border-b border-solid border-slate-100 p-4 text-left font-semibold text-slate-700 transition-all ease-in">
                  <Link
                    className="w-full flex items-center gap-2"
                    href={`tel:${AGENT_INFO.phone}`}
                    locale={locale}
                  >
                    <FaPhone />
                    {AGENT_INFO.phone}
                  </Link>
                </div>
              </label>
            </li>
            <li className="w-full">
              <input
                className="peer hidden"
                id="accordion-contact"
                type="checkbox"
              />
              <label className="block w-full" htmlFor="accordion-contact">
                <div className="group relative flex w-full cursor-pointer items-center border-b border-solid border-slate-100 p-4 text-left font-semibold text-slate-700 transition-all ease-in">
                  <Link
                    className="w-full flex items-center gap-2"
                    href={`mailto:${AGENT_INFO.email}`}
                    locale={locale}
                  >
                    <FaRegEnvelope />
                    {AGENT_INFO.email}
                  </Link>
                </div>
              </label>
            </li>
            <div className="ml-8 flex w-full items-center justify-start">
              <span className="flex space-x-4">
                <Link className="hover:opacity-50" href="#">
                  <FaFacebook size={24} />
                </Link>
                <Link className="hover:opacity-50" href="#">
                  <FaXTwitter size={24} />
                </Link>
                <Link className="hover:opacity-50" href="#">
                  <FaInstagram size={24} />
                </Link>
                <Link className="hover:opacity-50" href="#">
                  <FaLinkedin size={24} />
                </Link>
              </span>
            </div>
          </menu>
        </div>
      </div>
    </label>
  );
}

import Link from 'next/link';
import {useTranslations, useLocale} from 'next-intl';
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import {
  FaBars,
  FaXmark,
  FaFacebook,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa6';

export function MobileNav({params: {locale}}: {params: {locale: string}}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Navigation');
  const localActive = useLocale();

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
              <label className="block w-full">
                <input
                  className="peer hidden"
                  id="accordion-about"
                  type="checkbox"
                />
                <div className="group relative flex w-full cursor-pointer items-center border-b border-solid border-slate-100 p-4 text-left font-semibold text-slate-700 transition-all ease-in">
                  <Link
                    className="block w-full"
                    href="#about"
                    locale={localActive}
                  >
                    <span>{t('about')}</span>
                  </Link>
                </div>
              </label>
            </li>
            <li className="w-full">
              <label className="block w-full">
                <input
                  className="peer hidden"
                  id="accordion-services"
                  type="checkbox"
                />
                <div className="group relative flex w-full cursor-pointer items-center border-b border-solid border-slate-100 p-4 text-left font-semibold text-slate-700 transition-all ease-in">
                  <Link
                    className="block w-full"
                    href="#services"
                    locale={localActive}
                  >
                    <span>{t('services')}</span>
                  </Link>
                </div>
              </label>
            </li>
            <li className="w-full">
              <label className="block w-full">
                <input
                  className="peer hidden"
                  id="accordion-properties"
                  type="checkbox"
                />
                <div className="group relative flex w-full cursor-pointer items-center border-b border-solid border-slate-100 p-4 text-left font-semibold text-slate-700 transition-all ease-in">
                  <Link
                    className="block w-full"
                    href="#properties"
                    locale={localActive}
                  >
                    <span>{t('properties')}</span>
                  </Link>
                </div>
              </label>
            </li>
            <li className="w-full">
              <label className="block w-full">
                <input
                  className="peer hidden"
                  id="accordion-testimonials"
                  type="checkbox"
                />
                <div className="group relative flex w-full cursor-pointer items-center border-b border-solid border-slate-100 p-4 text-left font-semibold text-slate-700 transition-all ease-in">
                  <Link
                    className="block w-full"
                    href="#testimonials"
                    locale={localActive}
                  >
                    <span>{t('testimonials')}</span>
                  </Link>
                </div>
              </label>
            </li>
            <li className="w-full">
              <label className="block w-full">
                <input
                  className="peer hidden"
                  id="accordion-contact"
                  type="checkbox"
                />
                <div className="group relative flex w-full cursor-pointer items-center border-b border-solid border-slate-100 p-4 text-left font-semibold text-slate-700 transition-all ease-in">
                  <Link
                    className="block w-full"
                    href="#contact"
                    locale={localActive}
                  >
                    <span>{t('contact')}</span>
                  </Link>
                </div>
              </label>
            </li>
            <br />
            {/* <div className="flex items-center justify-start w-full text-lg">
                            <LanguageSwitch />
                        </div> */}
            <br />
            <div className="ml-8 flex w-full items-center justify-start">
              <span className="flex space-x-4">
                <Link href="https://facebook.com" target="_blank">
                  <FaFacebook
                    className="text-gray-800 hover:opacity-70"
                    size={24}
                  />
                </Link>
                <Link href="https://twitter.com" target="_blank">
                  <FaTwitter
                    className="text-gray-800 hover:opacity-70"
                    size={24}
                  />
                </Link>
                <Link href="https://linkedin.com" target="_blank">
                  <FaLinkedin
                    className="text-gray-800 hover:opacity-70"
                    size={24}
                  />
                </Link>
                {/* Ajoutez d'autres icônes de réseaux sociaux ici */}
              </span>
            </div>
          </menu>
        </div>
      </div>
    </label>
  );
}

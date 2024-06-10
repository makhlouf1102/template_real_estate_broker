import { FaBars, FaXmark, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export const MobileNav = ({ params: { locale } }: { params: { locale: string } }) => {
    
    unstable_setRequestLocale(locale);
    const t = useTranslations('Navigation');
    const localActive = useLocale();

    return (
        <label className="relative z-40 cursor-pointer" htmlFor="mobile-menu">
            <input className="peer hidden" type="checkbox" id="mobile-menu" />
            <FaBars size={28} className="cursor-pointer hover:opacity-70" />

            <div
                className="fixed top-0 right-0 z-40 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0"
            >
                <div className="float-right min-h-full w-[75%] bg-white px-6 p-4 shadow-2xl">
                    <span className="w-full h-10 flex items-center justify-end">
                        <FaXmark size={28} className="cursor-pointer hover:opacity-70" />
                    </span>
                    <menu className="flex flex-col items-center justify-start gap-4">
                        <li className="w-full">
                            <label className="block w-full">
                                <input type="checkbox" className="peer hidden" id="accordion-about" />
                                <div className="relative flex items-center w-full p-4 font-semibold text-left cursor-pointer transition-all ease-in border-b border-solid border-slate-100 text-slate-700 group">
                                    <Link href="#about" locale={localActive} className="block w-full">
                                        <span>{t('about')}</span>
                                    </Link>
                                </div>
                            </label>
                        </li>
                        <li className="w-full">
                            <label className="block w-full">
                                <input type="checkbox" className="peer hidden" id="accordion-services" />
                                <div className="relative flex items-center w-full p-4 font-semibold text-left cursor-pointer transition-all ease-in border-b border-solid border-slate-100 text-slate-700 group">
                                    <Link href="#services" locale={localActive} className="block w-full">
                                        <span>{t('services')}</span>
                                    </Link>
                                </div>
                            </label>
                        </li>
                        <li className="w-full">
                            <label className="block w-full">
                                <input type="checkbox" className="peer hidden" id="accordion-properties" />
                                <div className="relative flex items-center w-full p-4 font-semibold text-left cursor-pointer transition-all ease-in border-b border-solid border-slate-100 text-slate-700 group">
                                    <Link href="#properties" locale={localActive} className="block w-full">
                                        <span>{t('properties')}</span>
                                    </Link>
                                </div>
                            </label>
                        </li>
                        <li className="w-full">
                            <label className="block w-full">
                                <input type="checkbox" className="peer hidden" id="accordion-testimonials" />
                                <div className="relative flex items-center w-full p-4 font-semibold text-left cursor-pointer transition-all ease-in border-b border-solid border-slate-100 text-slate-700 group">
                                    <Link href="#testimonials" locale={localActive} className="block w-full">
                                        <span>{t('testimonials')}</span>
                                    </Link>
                                </div>
                            </label>
                        </li>
                        <li className="w-full">
                            <label className="block w-full">
                                <input type="checkbox" className="peer hidden" id="accordion-contact" />
                                <div className="relative flex items-center w-full p-4 font-semibold text-left cursor-pointer transition-all ease-in border-b border-solid border-slate-100 text-slate-700 group">
                                    <Link href="#contact" locale={localActive} className="block w-full">
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
                        <div className="flex items-center justify-start w-full ml-8">
                            <span className="flex space-x-4">
                                <Link href="https://facebook.com" target='_blank'>
                                    <FaFacebook size={24} className="text-gray-800 hover:opacity-70" />
                                </Link>
                                <Link href="https://twitter.com" target='_blank'>
                                    <FaTwitter size={24} className="text-gray-800 hover:opacity-70" />
                                </Link>
                                <Link href="https://linkedin.com" target='_blank'>
                                    <FaLinkedin size={24} className="text-gray-800 hover:opacity-70" />
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

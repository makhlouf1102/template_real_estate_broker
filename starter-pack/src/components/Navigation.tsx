import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { AGENT_INFO } from '../constantes/agent.const';
import { FaPhone } from "react-icons/fa6";
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { MobileNav } from './MobileNav'; // Importez le composant MobileNav

export default function Navigation({ params: { locale } }: { params: { locale: string } }) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('Navigation');

    const link_style = "font-medium px-2 py-6 text-text-50 hover:opacity-50";

    return (
        <>
            <header className="bg-white border-b border-gray-100">
                <div className="container mx-auto flex justify-between items-center p-4">
                    <div className="logo">
                        <Image src="/logo.png" alt="Logo de l'agent immobilier" width={150} height={150} />
                    </div>
                    <div className="md:hidden">
                        <MobileNav params={{ locale }} /> {/* Utilisez le composant MobileNav */}
                    </div>
                    <nav className="hidden md:flex">
                        <ul className="flex gap-4">
                            <li><Link href="#about" className={link_style}>{t('about')}</Link></li>
                            <li><Link href="#services" className={link_style}>{t('services')}</Link></li>
                            <li><Link href="#properties" className={link_style}>{t('properties')}</Link></li>
                            <li><Link href="#testimonials" className={link_style}>{t('testimonials')}</Link></li>
                            <li><Link href="#contact" className={link_style}>{t('contact')}</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

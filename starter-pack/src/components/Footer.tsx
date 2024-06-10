import { AGENT_INFO } from '@/constantes/agent.const';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@nextui-org/react";
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';


export default function Footer({ params: { locale } }: { params: { locale: string } }) {

    // enable to render static
    unstable_setRequestLocale(locale);

    const t = useTranslations('Footer');
    return (
        <>
            <footer className="bg-white border-y border-gray-100 py-4">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="contact-info text-center md:text-left">
                        <p>Adresse: Rue de l'Immobilier, Ville, Code Postal</p>
                        <p>Téléphone: +33 1 23 45 67 89</p>
                        <p>Email: contact@agentimmobilier.com</p>
                    </div>
                    <div className="social-media flex space-x-4 mt-4 md:mt-0">
                        <Link href="#" className="text-text-50 hover:underline">Facebook</Link>
                        <Link href="#" className="text-text-50 hover:underline">Twitter</Link>
                        <Link href="#" className="text-text-50 hover:underline">LinkedIn</Link>
                    </div>
                    <div className="legal text-center md:text-right mt-4 md:mt-0">
                        <p><Link href="#" className="text-accent-500 hover:underline">Mentions légales</Link> | <Link href="#" className="text-accent-500 hover:underline">Politique de confidentialité</Link></p>
                    </div>
                </div>
            </footer>
        </>
    );
}


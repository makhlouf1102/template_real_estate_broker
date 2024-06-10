import { AGENT_INFO } from '@/constantes/agent.const';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { unstable_setRequestLocale } from 'next-intl/server';
import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";



export default function Footer({ params: { locale } }: { params: { locale: string } }) {

    // enable to render static
    unstable_setRequestLocale(locale);

    const t = useTranslations('Footer');

    const section_style = "flex items-center gap-2"
    return (
        <>
            <footer className="bg-white border-y border-gray-100 py-4">
                <div className="container mx-auto flex flex-col justify-between items-center gap-4">
                    <div className="flex flex-col items-center">

                        <div className={`${section_style}`}>
                            <span className="font-bold">{t("office")} : </span>
                            <Link href={`https://www.google.com/maps/search/?api=1&query=${AGENT_INFO.address}`} target="_blank" className="hover:opacity-50">
                                {AGENT_INFO.address}
                            </Link>

                        </div>
                        <div className={`${section_style}`}>
                            <span className="font-bold">{t("phone")} : </span>
                            <Link href={`tel:${AGENT_INFO.phone}`} className="hover:opacity-50">
                                {AGENT_INFO.phone}
                            </Link>
                        </div>

                        <div className={`${section_style}`}>
                            <span className="font-bold">{t("email")} :</span>
                            <Link href={`mailto:${AGENT_INFO.email}`} className="hover:opacity-50">
                                {AGENT_INFO.email}
                            </Link>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-4 md:mt-0 text-text-50">
                        <Link href="#" className="hover:opacity-50">
                            <FaFacebook />
                        </Link>
                        <Link href="#" className="hover:opacity-50">
                            <FaXTwitter />
                        </Link>
                        <Link href="#" className="hover:opacity-50">
                            <FaInstagram />
                        </Link>
                        <Link href="#" className="hover:opacity-50">
                            <FaLinkedin />
                        </Link>
                    </div>
                    <div className="legal text-center md:text-right mt-4 md:mt-0">
                        <p><Link href="#" className="text-accent-500 hover:opacity-50">{t("legal")}</Link> | <Link href="#" className="text-accent-500 hover:opacity-50">{t("privacy")}</Link></p>
                    </div>
                </div>
            </footer>
        </>
    );
}


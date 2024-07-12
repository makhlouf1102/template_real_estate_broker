
import { LocaleProps } from '@props/Locale.props';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin, FaRegEnvelope, FaPhone } from 'react-icons/fa6';
import { AGENT_INFO } from '@/constantes/agent.const';

export default function Footer({ locale }: LocaleProps) {
  // enable to render static
  unstable_setRequestLocale(locale);

  const t = useTranslations('Footer');

  return (
    <footer className="bg-primary-100 text-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4">
        <div className="w-full flex justify-between items-center py-2 gap-4">
          <hr className="w-full h-0.5 bg-gray-600 border-0 rounded " />
          <div className="flex justify-center gap-4">
            <Link className="hover:opacity-50" href="#">
              <FaFacebook />
            </Link>
            <Link className="hover:opacity-50" href="#">
              <FaXTwitter />
            </Link>
            <Link className="hover:opacity-50" href="#">
              <FaInstagram />
            </Link>
            <Link className="hover:opacity-50" href="#">
              <FaLinkedin />
            </Link>
            <Link className="hover:opacity-50" href={`mailto:${AGENT_INFO.email}`}>
              <FaRegEnvelope />
            </Link>
            <Link className="hover:opacity-50" href={`tel:${AGENT_INFO.phone}`}>
              <FaPhone />
            </Link>
          </div>
          <hr className="w-full h-0.5 bg-gray-600 border-0 rounded " />
        </div>

        <div className="text-center my-4">
          <span className="text-lg font-bold">{AGENT_INFO.name}</span>
          <p>© 2023 {AGENT_INFO.name}, Inc.</p>
        </div>

        <div className="flex justify-center space-x-4 text-sm">
          <Link className="hover:opacity-75" href="#">
            {t('legal')}
          </Link>
          <Link className="hover:opacity-75" href="#">
            {t('privacy')}
          </Link>
        </div>
      </div>
    </footer>
  );
}


import { LocaleProps } from '@props/Locale.props';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPinterest, FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa';
import { AGENT_INFO } from '@/constantes/agent.const';
import Image from 'next/image';

export default function Footer({ locale }: LocaleProps) {
  // enable to render static
  unstable_setRequestLocale(locale);

  const t = useTranslations('Footer');

  return (
    <footer className="bg-primary-100 text-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 pb-8">
        <div className="flex justify-center gap-4 py-4">
          <Link className="hover:opacity-50" href="#" target="_blank">
            <FaLinkedin size={36} />
          </Link>
          <Link className="hover:opacity-50" href="#" target="_blank">
            <FaYoutube size={36} />
          </Link>
          <Link className="hover:opacity-50" href="#" target="_blank">
            <FaFacebook size={36} />
          </Link>
          <Link className="hover:opacity-50" href="#" target="_blank">
            <FaPinterest size={36} />
          </Link>
          <Link className="hover:opacity-50" href="#" target="_blank">
            <FaTwitter size={36} />
          </Link>
          <Link className="hover:opacity-50" href="#" target="_blank">
            <FaInstagram size={36} />
          </Link>
        </div>
        
        <div className="flex flex-col items-center gap-2 text-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={500}
            height={50}
            className='p-4'
          />
          <Link className="hover:opacity-75 flex items-center gap-2" href={`mailto:${AGENT_INFO.email}`} target="_blank">
            <FaEnvelope /> {AGENT_INFO.email}
          </Link>
          <Link className="hover:opacity-75 flex items-center gap-2" href={`tel:${AGENT_INFO.phone}`} target="_blank">
            <FaPhone /> {AGENT_INFO.phone}
          </Link>
          <Link className="hover:opacity-75 flex items-center gap-2" href={`https://maps.app.goo.gl/${AGENT_INFO.address}`} target="_blank">
            <FaMapMarkedAlt /> {AGENT_INFO.address}
          </Link>
        </div>

        <div className="flex justify-center space-x-4 text-sm">
          <Link className="hover:opacity-75" href="#">
            {t('legal')}
          </Link>
          <span>|</span>
          <Link className="hover:opacity-75" href="#">
            {t('privacy')}
          </Link>
        </div>
      </div>
      {/* show who made this website */}
      <div className="text-center text-sm border-t border-gray-600 py-4">
        <p>© 2024 OTOW SOLUTION. {t('allRights')} | example.com {t('by')} OTOW SOLUTION</p>
      </div>
    </footer>
  );
}

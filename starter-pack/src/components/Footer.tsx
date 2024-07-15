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
          <Link className="hover:opacity-50" href="https://www.linkedin.com/company/your-company" target="_blank" aria-label="Follow us on LinkedIn">
            <FaLinkedin size={36} />
          </Link>
          <Link className="hover:opacity-50" href="https://www.youtube.com/channel/your-channel" target="_blank" aria-label="Subscribe to our YouTube channel">
            <FaYoutube size={36} />
          </Link>
          <Link className="hover:opacity-50" href="https://www.facebook.com/your-page" target="_blank" aria-label="Like us on Facebook">
            <FaFacebook size={36} />
          </Link>
          <Link className="hover:opacity-50" href="https://www.pinterest.com/your-profile" target="_blank" aria-label="Follow us on Pinterest">
            <FaPinterest size={36} />
          </Link>
          <Link className="hover:opacity-50" href="https://twitter.com/your-profile" target="_blank" aria-label="Follow us on Twitter">
            <FaTwitter size={36} />
          </Link>
          <Link className="hover:opacity-50" href="https://www.instagram.com/your-profile" target="_blank" aria-label="Follow us on Instagram">
            <FaInstagram size={36} />
          </Link>
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={500}
            height={50}
            className='p-4'
          />
          <Link className="hover:opacity-75 flex items-center gap-2" href={`mailto:${AGENT_INFO.email}`} target="_blank" aria-label={`Email us at ${AGENT_INFO.email}`}>
            <FaEnvelope /> {AGENT_INFO.email}
          </Link>
          <Link className="hover:opacity-75 flex items-center gap-2" href={`tel:${AGENT_INFO.phone}`} target="_blank" aria-label={`Call us at ${AGENT_INFO.phone}`}>
            <FaPhone /> {AGENT_INFO.phone}
          </Link>
          <Link className="hover:opacity-75 flex items-center gap-2" href={`https://maps.app.goo.gl/${AGENT_INFO.address}`} target="_blank" aria-label={`Find us at ${AGENT_INFO.address}`}>
            <FaMapMarkedAlt /> {AGENT_INFO.address}
          </Link>
        </div>

        <div className="flex justify-center space-x-4 text-sm">
          <Link className="hover:opacity-75" href="/legal" aria-label="Read our legal information">
            {t('legal')}
          </Link>
          <span>|</span>
          <Link className="hover:opacity-75" href="/privacy" aria-label="Read our privacy policy">
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

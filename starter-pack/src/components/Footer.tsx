import { LocaleProps } from '@props/Locale.props';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { AGENT_INFO } from '@/constantes/agent.const';

export default function Footer({ locale }: LocaleProps) {
  // enable to render static
  unstable_setRequestLocale(locale);

  const t = useTranslations('Footer');

  const section_style = 'flex items-center gap-2';
  return (
    <>
      <footer className="border-y border-gray-100 bg-white py-4">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4">
          <div className="flex flex-col items-center">
            <div className="mt-4 flex gap-4 text-text-50 md:mt-0 items-center my-4">
              <hr className="w-96 h-0.5 mx-auto bg-gray-300 border-0 rounded" />
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
              <hr className="w-96 h-0.5 mx-auto bg-gray-300 border-0 rounded" />
            </div>
            <div className={`${section_style}`}>
              <span className="font-bold">{t('office')} : </span>
              <Link
                className="hover:opacity-50"
                href={`https://www.google.com/maps/search/?api=1&query=${AGENT_INFO.address}`}
                target="_blank"
              >
                {AGENT_INFO.address}
              </Link>
            </div>
            <div className={`${section_style}`}>
              <span className="font-bold">{t('phone')} : </span>
              <Link
                className="hover:opacity-50"
                href={`tel:${AGENT_INFO.phone}`}
              >
                {AGENT_INFO.phone}
              </Link>
            </div>

            <div className={`${section_style}`}>
              <span className="font-bold">{t('email')} :</span>
              <Link
                className="hover:opacity-50"
                href={`mailto:${AGENT_INFO.email}`}
              >
                {AGENT_INFO.email}
              </Link>
            </div>
          </div>

          <div className="legal mt-4 text-center md:mt-0 md:text-right">
            <p>
              <Link className="text-accent-500 hover:opacity-50" href="#">
                {t('legal')}
              </Link>{' '}
              |{' '}
              <Link className="text-accent-500 hover:opacity-50" href="#">
                {t('privacy')}
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

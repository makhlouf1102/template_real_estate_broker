import { LocaleProps } from '@props/Locale.props';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPinterest, FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa';
import { AGENT_INFO } from '@/constantes/agent.const';
import Image from 'next/image';
import { IconType } from 'react-icons';

interface SocialLinkProps {
  href: string;
  icon: IconType;
  label: string;
}

const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => (
  <Link className="hover:opacity-50" href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
    <Icon size={24} />
  </Link>
);

interface ContactLinkProps {
  href: string;
  icon: IconType;
  children: React.ReactNode;
}

const ContactLink = ({ href, icon: Icon, children }: ContactLinkProps) => (
  <Link className="hover:underline flex items-center gap-2 mb-2" href={href}>
    <Icon size={16} aria-hidden="true" /> <span>{children}</span>
  </Link>
);

export default function Footer({ locale }: LocaleProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Footer');

  const socialLinks = [
    { href: "https://www.linkedin.com/company/your-company", icon: FaLinkedin, label: "Follow us on LinkedIn" },
    { href: "https://www.youtube.com/channel/your-channel", icon: FaYoutube, label: "Subscribe to our YouTube channel" },
    { href: "https://www.facebook.com/your-page", icon: FaFacebook, label: "Like us on Facebook" },
    { href: "https://www.pinterest.com/your-profile", icon: FaPinterest, label: "Follow us on Pinterest" },
    { href: "https://twitter.com/your-profile", icon: FaTwitter, label: "Follow us on Twitter" },
    { href: "https://www.instagram.com/your-profile", icon: FaInstagram, label: "Follow us on Instagram" },
  ];

  const quickLinks = [
    { href: "/legal-and-privacy", label: t('legalAndPrivacy') },
  ];

  return (
    <footer className="bg-gradient-to-r from-primary-100 to-primary-200 text-primary-900 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/logo.png"
              alt={t('companyName')}
              width={180}
              height={50}
              className="mb-6"
            />
            <address className="not-italic text-center md:text-left">
              <ContactLink href={`mailto:${AGENT_INFO.email}`} icon={FaEnvelope}>{AGENT_INFO.email}</ContactLink>
              <ContactLink href={`tel:${AGENT_INFO.phone}`} icon={FaPhone}>{AGENT_INFO.phone}</ContactLink>
              <ContactLink href={`https://maps.app.goo.gl/${AGENT_INFO.address}`} icon={FaMapMarkedAlt}>{AGENT_INFO.address}</ContactLink>
            </address>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-col items-center md:items-start">
            <h2 className="text-xl font-semibold mb-4 text-primary-800">{t('quickLinks')}</h2>
            {quickLinks.map((link, index) => (
              <Link key={index} className="hover:underline mb-2 transition-colors duration-200 text-primary-700" href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Media Links */}
          <div className="flex flex-col items-center md:items-end">
            <h2 className="text-xl font-semibold mb-4 text-primary-800">{t('followUs')}</h2>
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              {socialLinks.map((link, index) => (
                <SocialLink key={index} {...link} />
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm border-t border-primary-300 pt-8">
          <p>© {new Date().getFullYear()} {t('companyName')}. {t('allRights')}</p>
          <p className="mt-2">
            {t('websiteBy')} <a href="https://www.otowsolution.com" target="_blank" rel="noopener noreferrer" className="hover:underline transition-colors duration-200 text-primary-700">OTOW SOLUTION</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
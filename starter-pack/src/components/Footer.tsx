import { LocaleProps } from '@props/Locale.props';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPinterest, FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa';
import { AGENT_INFO } from '@/constantes/agent.const';
import Image from 'next/image';
import { IconType } from 'react-icons';
import { FaXTwitter } from 'react-icons/fa6';

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
    { href: "https://twitter.com/your-profile", icon: FaXTwitter, label: "Follow us on Twitter" },
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
          <p>© {new Date().getFullYear()} {AGENT_INFO.name} {t('allRights')}</p>
          <p className=" flex items-center justify-center">
            {t('websiteBy')}
              <a href="https://www.otowsolution.com" target="_blank" rel="noopener noreferrer" className="flex items-center ml-1 hover:opacity-80 transition-opacity duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="200" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="200" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><g /><clipPath id="6f7eeb8fc5"><path d="M 52.550781 140.203125 L 147.050781 140.203125 L 147.050781 234.703125 L 52.550781 234.703125 Z M 52.550781 140.203125 " clip-rule="nonzero" /></clipPath><clipPath id="acc4d0e8ca"><path d="M 52.550781 149.375 L 129 149.375 L 129 225.875 L 52.550781 225.875 Z M 52.550781 149.375 " clip-rule="nonzero" /></clipPath></defs><g clip-path="url(#6f7eeb8fc5)"><path fill="#ffffff" d="M 99.84375 140.203125 C 73.714844 140.203125 52.550781 161.367188 52.550781 187.496094 C 52.550781 213.621094 73.714844 234.785156 99.84375 234.785156 C 125.96875 234.785156 147.132812 213.621094 147.132812 187.496094 C 147.132812 161.367188 125.96875 140.203125 99.84375 140.203125 Z M 99.84375 225.328125 C 78.9375 225.328125 62.007812 208.398438 62.007812 187.496094 C 62.007812 166.589844 78.9375 149.660156 99.84375 149.660156 C 120.746094 149.660156 137.675781 166.589844 137.675781 187.496094 C 137.675781 208.398438 120.746094 225.328125 99.84375 225.328125 Z M 99.84375 225.328125 " fill-opacity="1" fill-rule="nonzero" /></g><g clip-path="url(#acc4d0e8ca)"><path fill="#ffffff" d="M 90.671875 149.375 C 69.609375 149.375 52.550781 166.433594 52.550781 187.496094 C 52.550781 208.554688 69.609375 225.617188 90.671875 225.617188 C 111.734375 225.617188 128.792969 208.554688 128.792969 187.496094 C 128.792969 166.433594 111.734375 149.375 90.671875 149.375 Z M 90.671875 217.992188 C 73.824219 217.992188 60.175781 204.34375 60.175781 187.496094 C 60.175781 170.644531 73.824219 156.996094 90.671875 156.996094 C 107.523438 156.996094 121.167969 170.644531 121.167969 187.496094 C 121.167969 204.34375 107.523438 217.992188 90.671875 217.992188 Z M 90.671875 217.992188 " fill-opacity="1" fill-rule="nonzero" /></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(158.873944, 184.593151)"><g><path d="M 19.265625 -7.5 C 20.492188 -8.84375 21.109375 -10.628906 21.109375 -12.859375 C 21.109375 -15.097656 20.492188 -16.882812 19.265625 -18.21875 C 18.035156 -19.5625 16.394531 -20.234375 14.34375 -20.234375 C 12.289062 -20.234375 10.648438 -19.5625 9.421875 -18.21875 C 8.191406 -16.882812 7.578125 -15.097656 7.578125 -12.859375 C 7.578125 -10.628906 8.191406 -8.84375 9.421875 -7.5 C 10.648438 -6.164062 12.289062 -5.5 14.34375 -5.5 C 16.394531 -5.5 18.035156 -6.164062 19.265625 -7.5 Z M 5.046875 -3.46875 C 2.503906 -5.945312 1.234375 -9.078125 1.234375 -12.859375 C 1.234375 -16.648438 2.503906 -19.78125 5.046875 -22.25 C 7.585938 -24.71875 10.695312 -25.953125 14.375 -25.953125 C 18.0625 -25.953125 21.160156 -24.71875 23.671875 -22.25 C 26.191406 -19.78125 27.453125 -16.648438 27.453125 -12.859375 C 27.453125 -9.078125 26.1875 -5.945312 23.65625 -3.46875 C 21.125 -0.988281 18.023438 0.25 14.359375 0.25 C 10.691406 0.25 7.585938 -0.988281 5.046875 -3.46875 Z M 5.046875 -3.46875 " /></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(186.681549, 184.593151)"><g><path d="M 2.546875 -10.203125 L 2.546875 -15.390625 L 18.59375 -15.390625 L 18.59375 -10.203125 Z M 2.546875 -10.203125 " /></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(206.908531, 184.593151)"><g><path d="M 0.984375 -20.84375 L 0.984375 -25.59375 L 21.171875 -25.59375 L 21.171875 -20.84375 L 14.1875 -20.84375 L 14.1875 0 L 7.953125 0 L 7.953125 -20.84375 Z M 0.984375 -20.84375 " /></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(228.155985, 184.593151)"><g><path d="M 31.125 -25.59375 L 37.84375 -25.59375 L 30.6875 0 L 23.546875 0 L 19.0625 -16.21875 L 14.625 0 L 7.46875 0 L 0.21875 -25.59375 L 6.890625 -25.59375 L 11.34375 -7.1875 L 15.890625 -25.59375 L 22.96875 -25.59375 L 27.34375 -7.46875 Z M 31.125 -25.59375 " /></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(265.330026, 184.593151)"><g><path d="M 19.265625 -7.5 C 20.492188 -8.84375 21.109375 -10.628906 21.109375 -12.859375 C 21.109375 -15.097656 20.492188 -16.882812 19.265625 -18.21875 C 18.035156 -19.5625 16.394531 -20.234375 14.34375 -20.234375 C 12.289062 -20.234375 10.648438 -19.5625 9.421875 -18.21875 C 8.191406 -16.882812 7.578125 -15.097656 7.578125 -12.859375 C 7.578125 -10.628906 8.191406 -8.84375 9.421875 -7.5 C 10.648438 -6.164062 12.289062 -5.5 14.34375 -5.5 C 16.394531 -5.5 18.035156 -6.164062 19.265625 -7.5 Z M 5.046875 -3.46875 C 2.503906 -5.945312 1.234375 -9.078125 1.234375 -12.859375 C 1.234375 -16.648438 2.503906 -19.78125 5.046875 -22.25 C 7.585938 -24.71875 10.695312 -25.953125 14.375 -25.953125 C 18.0625 -25.953125 21.160156 -24.71875 23.671875 -22.25 C 26.191406 -19.78125 27.453125 -16.648438 27.453125 -12.859375 C 27.453125 -9.078125 26.1875 -5.945312 23.65625 -3.46875 C 21.125 -0.988281 18.023438 0.25 14.359375 0.25 C 10.691406 0.25 7.585938 -0.988281 5.046875 -3.46875 Z M 5.046875 -3.46875 " /></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(158.873944, 222.843149)"><g><path d="M 11.40625 -21.03125 C 10.632812 -21.03125 10 -20.820312 9.5 -20.40625 C 9 -20 8.75 -19.40625 8.75 -18.625 C 8.75 -17.851562 8.976562 -17.226562 9.4375 -16.75 C 9.90625 -16.28125 10.507812 -15.914062 11.25 -15.65625 C 11.988281 -15.40625 12.8125 -15.160156 13.71875 -14.921875 C 14.632812 -14.691406 15.539062 -14.410156 16.4375 -14.078125 C 17.34375 -13.753906 18.164062 -13.347656 18.90625 -12.859375 C 19.644531 -12.378906 20.242188 -11.695312 20.703125 -10.8125 C 21.160156 -9.925781 21.390625 -8.863281 21.390625 -7.625 C 21.390625 -5.457031 20.507812 -3.601562 18.75 -2.0625 C 16.988281 -0.519531 14.664062 0.25 11.78125 0.25 C 8.90625 0.25 6.585938 -0.441406 4.828125 -1.828125 C 3.066406 -3.210938 2.1875 -5.179688 2.1875 -7.734375 L 8.828125 -7.734375 C 8.992188 -5.691406 10.035156 -4.671875 11.953125 -4.671875 C 12.859375 -4.671875 13.566406 -4.90625 14.078125 -5.375 C 14.585938 -5.851562 14.84375 -6.457031 14.84375 -7.1875 C 14.84375 -7.914062 14.609375 -8.507812 14.140625 -8.96875 C 13.679688 -9.425781 13.082031 -9.789062 12.34375 -10.0625 C 11.601562 -10.332031 10.773438 -10.582031 9.859375 -10.8125 C 8.953125 -11.039062 8.046875 -11.320312 7.140625 -11.65625 C 6.242188 -12 5.425781 -12.40625 4.6875 -12.875 C 3.945312 -13.351562 3.34375 -14.035156 2.875 -14.921875 C 2.414062 -15.816406 2.1875 -16.867188 2.1875 -18.078125 C 2.1875 -20.460938 3.070312 -22.367188 4.84375 -23.796875 C 6.625 -25.234375 8.890625 -25.953125 11.640625 -25.953125 C 14.398438 -25.953125 16.628906 -25.328125 18.328125 -24.078125 C 20.035156 -22.828125 20.925781 -20.851562 21 -18.15625 L 14.21875 -18.15625 C 14.125 -19.070312 13.828125 -19.78125 13.328125 -20.28125 C 12.828125 -20.78125 12.1875 -21.03125 11.40625 -21.03125 Z M 11.40625 -21.03125 " /></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(181.542752, 222.843149)"><g><path d="M 19.265625 -7.5 C 20.492188 -8.84375 21.109375 -10.628906 21.109375 -12.859375 C 21.109375 -15.097656 20.492188 -16.882812 19.265625 -18.21875 C 18.035156 -19.5625 16.394531 -20.234375 14.34375 -20.234375 C 12.289062 -20.234375 10.648438 -19.5625 9.421875 -18.21875 C 8.191406 -16.882812 7.578125 -15.097656 7.578125 -12.859375 C 7.578125 -10.628906 8.191406 -8.84375 9.421875 -7.5 C 10.648438 -6.164062 12.289062 -5.5 14.34375 -5.5 C 16.394531 -5.5 18.035156 -6.164062 19.265625 -7.5 Z M 5.046875 -3.46875 C 2.503906 -5.945312 1.234375 -9.078125 1.234375 -12.859375 C 1.234375 -16.648438 2.503906 -19.78125 5.046875 -22.25 C 7.585938 -24.71875 10.695312 -25.953125 14.375 -25.953125 C 18.0625 -25.953125 21.160156 -24.71875 23.671875 -22.25 C 26.191406 -19.78125 27.453125 -16.648438 27.453125 -12.859375 C 27.453125 -9.078125 26.1875 -5.945312 23.65625 -3.46875 C 21.125 -0.988281 18.023438 0.25 14.359375 0.25 C 10.691406 0.25 7.585938 -0.988281 5.046875 -3.46875 Z M 5.046875 -3.46875 " /></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(209.350354, 222.843149)"><g><path d="M 2.734375 -25.59375 L 8.96875 -25.59375 L 8.96875 -4.734375 L 16.734375 -4.734375 L 16.734375 0 L 2.734375 0 Z M 2.734375 -25.59375 " /></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(225.896358, 222.843149)"><g><path d="M 2.625 -10.3125 L 2.625 -25.59375 L 8.859375 -25.59375 L 8.859375 -10.3125 C 8.859375 -8.78125 9.234375 -7.601562 9.984375 -6.78125 C 10.742188 -5.957031 11.851562 -5.546875 13.3125 -5.546875 C 14.769531 -5.546875 15.882812 -5.957031 16.65625 -6.78125 C 17.4375 -7.601562 17.828125 -8.78125 17.828125 -10.3125 L 17.828125 -25.59375 L 24.0625 -25.59375 L 24.0625 -10.3125 C 24.0625 -8.050781 23.53125 -6.097656 22.46875 -4.453125 C 21.414062 -2.816406 20.082031 -1.625 18.46875 -0.875 C 16.851562 -0.125 15.097656 0.25 13.203125 0.25 C 10.234375 0.25 7.726562 -0.671875 5.6875 -2.515625 C 3.644531 -4.359375 2.625 -6.957031 2.625 -10.3125 Z M 2.625 -10.3125 " /></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(251.626571, 222.843149)"><g><path d="M 0.984375 -20.84375 L 0.984375 -25.59375 L 21.171875 -25.59375 L 21.171875 -20.84375 L 14.1875 -20.84375 L 14.1875 0 L 7.953125 0 L 7.953125 -20.84375 Z M 0.984375 -20.84375 " /></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(272.874025, 222.843149)"><g><path d="M 2.734375 0 L 2.734375 -25.59375 L 8.96875 -25.59375 L 8.96875 0 Z M 2.734375 0 " /></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(283.661672, 222.843149)"><g><path d="M 19.265625 -7.5 C 20.492188 -8.84375 21.109375 -10.628906 21.109375 -12.859375 C 21.109375 -15.097656 20.492188 -16.882812 19.265625 -18.21875 C 18.035156 -19.5625 16.394531 -20.234375 14.34375 -20.234375 C 12.289062 -20.234375 10.648438 -19.5625 9.421875 -18.21875 C 8.191406 -16.882812 7.578125 -15.097656 7.578125 -12.859375 C 7.578125 -10.628906 8.191406 -8.84375 9.421875 -7.5 C 10.648438 -6.164062 12.289062 -5.5 14.34375 -5.5 C 16.394531 -5.5 18.035156 -6.164062 19.265625 -7.5 Z M 5.046875 -3.46875 C 2.503906 -5.945312 1.234375 -9.078125 1.234375 -12.859375 C 1.234375 -16.648438 2.503906 -19.78125 5.046875 -22.25 C 7.585938 -24.71875 10.695312 -25.953125 14.375 -25.953125 C 18.0625 -25.953125 21.160156 -24.71875 23.671875 -22.25 C 26.191406 -19.78125 27.453125 -16.648438 27.453125 -12.859375 C 27.453125 -9.078125 26.1875 -5.945312 23.65625 -3.46875 C 21.125 -0.988281 18.023438 0.25 14.359375 0.25 C 10.691406 0.25 7.585938 -0.988281 5.046875 -3.46875 Z M 5.046875 -3.46875 " /></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(311.46928, 222.843149)"><g><path d="M 19.390625 -25.65625 L 25.625 -25.65625 L 25.625 0 L 19.390625 0 L 8.96875 -16.15625 L 8.96875 0 L 2.734375 0 L 2.734375 -25.65625 L 8.96875 -25.65625 L 19.390625 -9.515625 Z M 19.390625 -25.65625 " /></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(79.077271, 201.44565)"><g><path d="M 1.578125 -0.40625 L 1.578125 -5.5625 C 2.304688 -6.207031 3.332031 -7.097656 4.65625 -8.234375 C 5.988281 -9.378906 7.019531 -10.269531 7.75 -10.90625 C 8.476562 -11.539062 9.328125 -12.335938 10.296875 -13.296875 C 11.273438 -14.253906 12.007812 -15.070312 12.5 -15.75 C 13.769531 -17.507812 14.40625 -19.039062 14.40625 -20.34375 C 14.40625 -22.632812 13.390625 -23.78125 11.359375 -23.78125 C 10.390625 -23.78125 9.617188 -23.4375 9.046875 -22.75 C 8.484375 -22.0625 8.203125 -21.066406 8.203125 -19.765625 L 1.5 -19.765625 C 1.5 -23.015625 2.4375 -25.472656 4.3125 -27.140625 C 6.195312 -28.804688 8.664062 -29.640625 11.71875 -29.640625 C 14.78125 -29.640625 17.164062 -28.765625 18.875 -27.015625 C 20.582031 -25.265625 21.4375 -23.160156 21.4375 -20.703125 C 21.4375 -18.835938 21.03125 -17.203125 20.21875 -15.796875 C 19.726562 -14.984375 19.304688 -14.289062 18.953125 -13.71875 C 18.597656 -13.15625 18.015625 -12.453125 17.203125 -11.609375 C 16.398438 -10.765625 15.804688 -10.15625 15.421875 -9.78125 C 15.046875 -9.40625 14.347656 -8.753906 13.328125 -7.828125 C 12.316406 -6.910156 11.675781 -6.316406 11.40625 -6.046875 L 21.96875 -6.046875 L 21.96875 -0.40625 Z M 1.578125 -0.40625 " /></g></g></g></svg>
              </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
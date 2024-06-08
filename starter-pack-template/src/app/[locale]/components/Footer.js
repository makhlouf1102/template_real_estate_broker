import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { SOCIAL_MEDIA, FULL_NAME, ADDRESS, MAIN_PHONE, EMAIL, LICENSE_NUMBER, COMPANY_NAME } from '../constants/Info.const';
import { FaInstagram, FaFacebook, FaLinkedin, FaX } from "react-icons/fa6";

const icons = {
  instagram: <FaInstagram />,
  facebook: <FaFacebook />,
  x: <FaX />,
  linkedin: <FaLinkedin />,
}

const socialMedia = SOCIAL_MEDIA.map((media) => {
  return (
    <li key={media.name}><Link href={media.link} target="_blank" rel="noopener noreferrer">{icons[media.name.toLowerCase()]}</Link></li>
  )
})

const Footer = () => {
  const t = useTranslations('Main.Footer');

  return (
    <footer>
      <div>
        <div>
          <h4>{t('contact-information')}</h4>
          <p>{FULL_NAME}</p>
          <p>{MAIN_PHONE}</p>
          <p>{EMAIL}</p>
          <p>{ADDRESS}</p>
        </div>
        <div>
          <h4>{t('quick-links')}</h4>
          <ul>
            <li><Link href="/">{t('home')}</Link></li>
            <li><Link href="#about">{t('about')}</Link></li>
            <li><Link href="#services">{t('services')}</Link></li>
            <li><Link href="#contact">{t('contact')}</Link></li>
            <li><Link href="/privacy-policy">{t('privacy-policy')}</Link></li>
            <li><Link href="/terms-of-service">{t('terms-of-service')}</Link></li>
          </ul>
        </div>
        <div>
          <h4>{t('follow-us')}</h4>
          <ul>
            {socialMedia}
          </ul>
        </div>
        <div>
          <h4>{t('subscribe-to-newsletter')}</h4>
          <form>
            <input type="email" placeholder={t('your-email')} />
            <button type="submit">{t('subscribe')}</button>
          </form>
        </div>
      </div>
      <div>
        <p>{'© 2024 '}{COMPANY_NAME}{t('all-rights-reserved')}</p>
        <p>{t('real-estate-license')} #{LICENSE_NUMBER}</p>
      </div>
    </footer>
  );
};



export default Footer;

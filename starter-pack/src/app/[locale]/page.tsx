import { unstable_setRequestLocale } from 'next-intl/server';
import About from './components/About';
import BookCallBanner from './components/BookCallBanner';
import Questions from './components/Questions';
import Testimonials from './components/Testimonials';
import SellPropriety from './components/SellPropriety';
import BuyPropriety from './components/BuyPropriety';
import Alerts from './components/Alerts';
import ContactForm from './components/ContactForm';
import Head from 'next/head';
import { useTranslations } from 'next-intl';

interface LocaleProps {
  params: {
    locale: string;
  };
}

export default function IndexPage({ params }: LocaleProps) {
  const { locale } = params;
  unstable_setRequestLocale(locale);
  const t = useTranslations('Home');

  return (
    <>
      <>
        <Head>
          <title>{t('Meta.title')}</title>
          <meta name="description" content={t('Meta.description')} />
        </Head>
      </>
      <About locale={locale} />
      <Testimonials locale={locale} />
      <Questions locale={locale} />
      <BookCallBanner />
      <SellPropriety />
      <BuyPropriety />
      <Alerts />
      <ContactForm/>
    </>
  );
}

// Generate static paths for locales
export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'fr' },
  ];
}

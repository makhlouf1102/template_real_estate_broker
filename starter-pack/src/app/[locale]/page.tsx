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
import { Metadata } from 'next';
import Myproprieties from './components/Myproprieties';

interface LocaleProps {
  params: {
    locale: string;
  };
}

export const metadata: Metadata = {
  title: 'Home',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

export default function IndexPage({ params }: LocaleProps) {
  const { locale } = params;
  unstable_setRequestLocale(locale);

  return (
    <>
      <About locale={locale} />
      <SellPropriety />
      <BuyPropriety />
      <Testimonials locale={locale} />
      <Questions locale={locale} />
      <Alerts />
      <BookCallBanner />
      <ContactForm />
      <Myproprieties />
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

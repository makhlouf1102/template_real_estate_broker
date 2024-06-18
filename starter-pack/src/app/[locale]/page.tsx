import { unstable_setRequestLocale } from 'next-intl/server';
import About from './components/About';
import BookCallBanner from './components/BookCallBanner';
import Questions from './components/Questions';
import Testimonials from './components/Testimonials';
import SellPropriety from './components/SellPropriety';
import BuyPropriety from './components/BuyPropriety';

interface LocaleProps {
  params: {
    locale: string;
  };
}

export default function IndexPage({ params }: LocaleProps) {
  const { locale } = params;
  unstable_setRequestLocale(locale);

  return (
    <>
      <About locale={locale} />
      <Testimonials locale={locale} />
      <Questions locale={locale} />
      <BookCallBanner />
      <SellPropriety />
      <BuyPropriety />
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

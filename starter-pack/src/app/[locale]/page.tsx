import { unstable_setRequestLocale } from 'next-intl/server';
import About from './components/About';
import BookCallBanner from './components/BookCallBanner';
import Questions from './components/Questions';
import Testimonials from './components/Testimonials';
import SellPropriety from './components/SellPropriety';
import BuyPropriety from './components/BuyPropriety';
import Alerts from './components/Alerts';
import ContactForm from './components/ContactForm';
import Myproprieties from './components/MyProprieties';
import BackToTopButton from '../../components/BackToTopButton'; // Import the BackToTopButton component
import { Metadata } from 'next';

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
      <div id="top"></div> {/* Add this element to ensure smooth scrolling */}
      <About locale={locale} />
      <SellPropriety />
      <BuyPropriety />
      <Testimonials locale={locale} />
      <Questions locale={locale} />
      <Alerts />
      <BookCallBanner />
      <ContactForm />
      <Myproprieties />
      <BackToTopButton /> {/* Add the BackToTopButton component */}
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

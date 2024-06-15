import {unstable_setRequestLocale} from 'next-intl/server';
import About from './components/About';
import Questions from './components/Questions';
import Testimonials from './components/Testimonials';
import BookCallBanner from './components/BookCallBanner';

interface LocaleProps {
  locale: string;
}

export default function IndexPage({locale}: LocaleProps) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <>
      <About locale={locale} />
      <Testimonials locale={locale} />
      <Questions locale={locale} />
      <BookCallBanner />
    </>
  );
}

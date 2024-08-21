import {NextUIProvider} from '@nextui-org/react';
import clsx from 'clsx';
import {Inter, Poppins} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale
} from 'next-intl/server';
import {ReactNode} from 'react';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import {locales} from '@/config';

const inter = Inter({subsets: ['latin']});
const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
});

type Props = {
  children: ReactNode;
  params: {locale: string};
};

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params: {locale}
}: Omit<Props, 'children'>) {
  await getTranslations({locale, namespace: 'LocaleLayout'});

  return {
    title: {
      default: 'mak',
      template: '%s | mak'
    }
  };
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html className="h-full" lang={locale}>
      <body className={clsx(poppins.className, 'flex h-full flex-col')}>
        <NextUIProvider>
          <NextIntlClientProvider messages={messages}>
            <Navigation locale={locale} />
            {children}
            <Footer locale={locale} />
          </NextIntlClientProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}

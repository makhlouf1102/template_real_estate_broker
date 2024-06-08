import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blablabla",
  description: "Blablabla",
};

export default async function RootLayout({ children, params: { locale } }) {

  const messages = await getMessages(locale);
  return (
    <html lang={locale}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <NextIntlClientProvider messages={messages}>
        <Header />
          {children}
        <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
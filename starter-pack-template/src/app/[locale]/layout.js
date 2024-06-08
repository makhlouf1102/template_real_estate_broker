import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from './common/Header';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blablabla",
  description: "Blablabla",
};

export default async function RootLayout({ children, params: { locale } }) {

  const messages = await getMessages(locale);
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Header />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
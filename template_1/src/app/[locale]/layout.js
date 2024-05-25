import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@App/common/Header";
import Footer from "@App/common/Footer";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, params : {locale}}) {
  return (
    <html lang={locale}>
      <Head>
        <title>COMPANY NAME</title>
        <meta name="description" content="DESCRIPTION" />
        <meta name="theme-color" content="#000000" />
        {/* <link rel="icon" href="/logo.png" /> */}
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import { NextUIProvider } from "@nextui-org/react"
import clsx from "clsx"
import { Poppins } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import {
  getMessages,
  unstable_setRequestLocale
} from "next-intl/server"
import { ReactNode } from "react"
import { locales } from "@/config"

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
})

type Props = {
  children: ReactNode
  params: { locale: string }
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}


export default async function AdminLayout({
  children,
  params: { locale }
}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale)

  // Providing all messages to the client side
  const messages = await getMessages()

  return (
    <html className="h-full" lang={locale}>
      <body className={clsx(poppins.className, "flex h-full flex-col")}>
        <NextUIProvider>
          <NextIntlClientProvider messages={messages}>
            <main className="min-h-screen">
              {children}
            </main>
          </NextIntlClientProvider>
        </NextUIProvider>
      </body>
    </html>
  )
}
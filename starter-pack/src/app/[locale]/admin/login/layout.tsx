import { Poppins } from "next/font/google"
import {getTranslations} from "next-intl/server"
import { ReactNode } from "react"
import { locales } from "@/config"

type Props = {
  children: ReactNode
  params: { locale: string }
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params: { locale }
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "LoginLayout" })

  return {
    title: {
      default: t('title'),
    }
  }
}

export default async function LoginLayout({
  children,
}: Props) {

  return (
    <main className="min-h-screen">
      {children}
    </main>
  )
}
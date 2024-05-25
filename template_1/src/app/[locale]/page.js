import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Home() {

  const t = useTranslations('index');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{t('title')}</h1>
    </main>
  );
}
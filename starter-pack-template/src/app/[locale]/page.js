"use client";
import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations("Index");
  return (
    <main className="flex min-h-screen flex-col items-center"> 
        <div className="w-full md:px-16  gap-12">
          <h1>{t("title")}</h1>
        </div>
    </main>
  );
}
 
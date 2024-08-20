'use client';
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';

const PopupButton = dynamic(
  () => import('react-calendly').then((mod) => mod.PopupButton),
  { ssr: false }
);

export default function BuyPropriety() {
  const t = useTranslations("BuyPropriety");
  const [mounted, setMounted] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="buy-propriety" className="bg-gradient-to-r from-secondary-100 to-secondary-200 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse items-center justify-center gap-8 md:flex-row">
          <div className="flex flex-col items-center justify-center w-full gap-6 text-center md:items-start md:text-left md:w-1/2" ref={rootRef}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">{t("title")}</h2>
            <p className="text-lg md:text-xl text-secondary-800 opacity-80 max-w-md">{t("description")}</p>
            {mounted && rootRef.current && (
              <PopupButton
                url="https://calendly.com/mak-hennine/30min"
                rootElement={rootRef.current}
                text={t("button")}
                className="bg-secondary-500 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-secondary-600 transition duration-300"
                prefill={{
                  email: t('emailPlaceholder'),
                  firstName: t('firstNamePlaceholder'),
                  lastName: t('lastNamePlaceholder'),
                }}
                utm={{
                  utmCampaign: 'BuyPropriety',
                  utmSource: 'website',
                  utmMedium: 'banner'
                }}
              />
            )}
          </div>
          <div className="w-full md:w-1/2">
            <Image 
              src="/Happy-Family-Receiving-Keys-From-Real-Estate-Agent-Outside-New-Home.png" 
              alt={t("imageAlt")} 
              width={500} 
              height={300} 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';

const PopupButton = dynamic(
  () => import('react-calendly').then((mod) => mod.PopupButton),
  { ssr: false }
);

function BookCallBanner() {
  const t = useTranslations('BookCallBanner');
  const [mounted, setMounted] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="bg-gradient-to-r from-secondary-100 to-secondary-200 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center" ref={rootRef}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-secondary-800 opacity-80 max-w-2xl mx-auto mb-8">
            {t('description')}
          </p>
          {mounted && rootRef.current && (
            <PopupButton
              url="https://calendly.com/mak-hennine/30min"
              rootElement={rootRef.current}
              text={t('button')}
              className="bg-secondary-500 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-secondary-600 transition duration-300"
              prefill={{
                email: t('emailPlaceholder'),
                firstName: t('firstNamePlaceholder'),
                lastName: t('lastNamePlaceholder'),
              }}
              utm={{
                utmCampaign: 'BookCallBanner',
                utmSource: 'website',
                utmMedium: 'banner'
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default BookCallBanner;
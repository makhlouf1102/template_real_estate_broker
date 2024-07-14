'use client';
import { useTranslations } from 'next-intl';
import React from 'react';
import { InlineWidget } from 'react-calendly';

function BookCallBanner() {
  const t = useTranslations('BookCallBanner');

  return (
    <section className="bg-background-50 p-4">
      <div className="text-center">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
          {t('title')}
        </h3>
        <div>
          <InlineWidget 
            url="https://calendly.com/mak-hennine/30min" 
            styles={{ height: '900px', minHeight: '500px', borderRadius: '8px', width: '100%' }} 
          />
        </div>
      </div>
    </section>
  );
}

export default BookCallBanner;

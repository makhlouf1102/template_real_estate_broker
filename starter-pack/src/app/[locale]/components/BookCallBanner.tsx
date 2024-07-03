'use client';
import { useTranslations } from 'next-intl';
import React from 'react';
import { InlineWidget } from 'react-calendly';

function BookCallBanner() {
  const t = useTranslations('BookCallBanner');

  return (
    <section className="bg-background-50 p-6 sm:p-8 md:p-10 lg:p-12">
      <div className="container mx-auto text-center">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
          {t('title')}
        </h3>
        <div>
          <InlineWidget 
            url="https://calendly.com/mak-hennine/30min" 
            styles={{ height: '900px', minHeight: '500px', borderRadius: '8px' }} 
          />
        </div>
      </div>
    </section>
  );
}

export default BookCallBanner;

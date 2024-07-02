import { Button } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import React from 'react';

function BookCallBanner() {
  const t = useTranslations('BookCallBanner');

  return (
    <section className="bg-background-50 text-center">
      <div className="container mx-auto px-5 py-5 sm:px-10 sm:py-6 md:px-20 md:py-8 lg:px-32 lg:py-10 flex flex-col sm:flex-row items-center justify-around gap-5 sm:gap-10">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-0">
          {t('title')}
        </h3>
        <Button
          className="bg-accent-500 font-bold text-white hover:bg-accent-600"
          color="secondary"
        >
          {t('button')}
        </Button>
      </div>
    </section>
  );
}

export default BookCallBanner;

import {Button} from '@nextui-org/react';
import {useTranslations} from 'next-intl';
import React from 'react';

function BookCallBanner() {
  const t = useTranslations('BookCallBanner');
  const handleBookCall = () => {
    window.location.href = 'https://your-calendar-link.com'; // Replace with your booking link
  };

  return (
    <section className="bg-background-50 p-10 text-center">
      <div className="container mx-auto flex items-center justify-around gap-10">
        <h3 className="text-2xl font-bold text-white">{t('title')}</h3>
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

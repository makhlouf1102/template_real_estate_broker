import React from 'react';
import { Button } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

const BookCallBanner = () => {
    const t = useTranslations('BookCallBanner');
    const handleBookCall = () => {
        window.location.href = 'https://your-calendar-link.com'; // Replace with your booking link
    };

    return (
        <section className="bg-background-50 p-10 text-center">

            <div className="container mx-auto flex justify-around items-center gap-10">
                <h3 className="text-2xl text-white font-bold">
                    {t('title')}
                </h3>
                <Button color="secondary" className="bg-accent-500 text-white hover:bg-accent-600 font-bold">
                    {t('button')}
                </Button>
            </div>
        </section>
    );
};

export default BookCallBanner;
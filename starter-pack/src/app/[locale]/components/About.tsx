import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import {LocaleProps} from '@/props/Locale.props';

export default function About({locale}: LocaleProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('About');

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <h2 id="about-title" className="text-3xl font-bold mb-6">{t('title')}</h2>
            <p className="text-lg mb-6">{t('description')}</p>
            <p className="text-lg">{t('additionalInfo')}</p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              alt={t('agentPhotoAlt')}
              src="/Smiling-Real-Estate-Agent-Outside-Modern-Home.png"
              height={400}
              width={600}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
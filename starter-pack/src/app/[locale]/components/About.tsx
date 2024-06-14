import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import {LocaleProps} from '@/props/Locale.props';

export default function About({locale}: LocaleProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('About');

  return (
    <section className="py-12 " id="about">
      <div className="container mx-auto flex flex-col items-center justify-center gap-10 px-10 md:flex-row md:justify-between">
        <Image
          alt="Photo de l'agent immobilier"
          height={500}
          src="/image.png"
          width={500}
        />
        <div className="about-text flex flex-col gap-2">
          <h2 className="text-3xl font-bold">{t('title')}</h2>
          <p>{t('description')}</p>
        </div>
      </div>
    </section>
  );
}

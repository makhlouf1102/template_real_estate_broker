import {useTranslations} from 'next-intl';
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';

export async function generateMetadata({
  params: {locale}
}: Omit<Props, 'children'>) {
  const t = await getTranslations({locale, namespace: 'AboutPage'});

  return {
    title: t('title')
  };
}

type Props = {
  params: {locale: string};
};

export default function AboutPage({params: {locale}}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('AboutPage');

  return <>{t('title')}</>;
}

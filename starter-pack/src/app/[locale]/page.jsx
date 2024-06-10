import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';


export default function IndexPage({locale}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('IndexPage');

  return (
    <>
      {t('title')}
    </>
  );
}

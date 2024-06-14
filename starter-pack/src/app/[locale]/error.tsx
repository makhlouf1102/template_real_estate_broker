'use client';

import {useTranslations} from 'next-intl';
import {useEffect} from 'react';

type Props = {
  error: Error;
  reset(): void;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Error({error, reset}: Props) {
  const t = useTranslations('Error');

  useEffect(() => {
    console.error(error);
  }, [error]);

  return <>{t('title')}</>;
}

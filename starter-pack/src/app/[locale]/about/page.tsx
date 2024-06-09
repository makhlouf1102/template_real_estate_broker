import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import PageLayout from '@/components/PageLayout';
import { Metadata } from 'next';

export async function generateMetadata({
    params: { locale }
}: Omit<Props, 'children'>) {
    const t = await getTranslations({ locale, namespace: 'AboutPage' });

    return {
        title: t('title')
    };
}

type Props = {
    params: { locale: string };
};

export default function AboutPage({ params: { locale } }: Props) {
    // Enable static rendering
    unstable_setRequestLocale(locale);

    const t = useTranslations('AboutPage');
    console.log(t('title'));

    return (
        <PageLayout title={t('title')}>
            <div className="max-w-[490px]">
                {t.rich('description', {
                    p: (chunks) => <p className="mt-4">{chunks}</p>,
                    code: (chunks) => (
                        <code className="font-mono text-white">{chunks}</code>
                    )
                })}
            </div>

            <div className="flex flex-col items-center">
                <h2 className="text-2xl font-bold">{t('title')}</h2>
                <p className="text-lg">{t('description')}</p>
            </div>
        </PageLayout>
    );
}

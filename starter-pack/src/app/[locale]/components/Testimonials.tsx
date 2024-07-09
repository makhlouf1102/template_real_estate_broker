import {Card, CardHeader, CardBody, Divider, Image} from '@nextui-org/react';
import {LocaleProps} from '@props/Locale.props';
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

export default function Testimonials({locale}: LocaleProps) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('Testimonials');

  return (
    <section className="py-12" id="testimonials">
      <div className="container mx-auto flex flex-col items-center gap-12">
        <h2 className="text-3xl font-bold">{t('title')}</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="w-full max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="/testimonials/1.png"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">Mark</p>
                <p className="text-small text-default-500">Via Google</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </p>
            </CardBody>
            <Divider />
          </Card>
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="/testimonials/2.png"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">David</p>
                <p className="text-small text-default-500">Via Facebook</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </p>
            </CardBody>
            <Divider />
          </Card>
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="/testimonials/3.png"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">Jennifer</p>
                <p className="text-small text-default-500">Via Instagram</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </p>
            </CardBody>
            <Divider />
          </Card>
        </div>
      </div>
    </section>
  );
}

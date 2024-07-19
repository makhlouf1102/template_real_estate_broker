import { Card, CardHeader, CardBody, Divider, Image } from '@nextui-org/react';
import { LocaleProps } from '@props/Locale.props';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { LocalIconFacebook } from "@LocalIcons/LocalIconFacebook";
import { LocalIconGoogle } from '@LocalIcons/LocalIconGoogle';
import { LocalIconInstagram } from '@LocalIcons/LocalIconInstagram';

export default function Testimonials({ locale }: LocaleProps) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('Testimonials');

  const testimonials = [
    {
      name: 'Mark',
      platform: 'Google',
      image: '/testimonials/1.png',
      icon: <LocalIconGoogle />,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    },
    {
      name: 'David',
      platform: 'Facebook',
      image: '/testimonials/2.png',
      icon: <LocalIconFacebook />,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    },
    {
      name: 'Jennifer',
      platform: 'Instagram',
      image: '/testimonials/3.png',
      icon: <LocalIconInstagram/>,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    },
  ];

  return (
    <section id="testimonials">
      <div className="container mx-auto flex flex-col items-center gap-12 py-5 px-10">
        <h2 className="text-3xl font-bold">{t('title')}</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ name, platform, image, icon, text }, index) => (
            <Card key={index} className="w-full max-w-[400px]">
              <CardHeader className="flex justify-between">
                <div className="flex gap-3 items-center">
                  <Image
                    alt={`${name} profile picture`}
                    height={40}
                    radius="sm"
                    src={image}
                    width={40}
                  />
                  <div className="flex flex-col">
                    <p className="text-md">{name}</p>
                    <p className="text-small text-default-500">Via {platform}</p>
                  </div>
                </div>
                {icon && <span>{icon}</span>}
              </CardHeader>
              <Divider />
              <CardBody>
                <p>{text}</p>
              </CardBody>
              <Divider />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

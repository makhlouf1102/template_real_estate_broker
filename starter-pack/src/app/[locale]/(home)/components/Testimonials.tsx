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
      name: t('testimonial1.name'),
      role: t('testimonial1.role'),
      platform: 'Google',
      image: '/testimonials/1.png',
      icon: <LocalIconGoogle aria-hidden="true"  />,
      text: t('testimonial1.text'),
      rating: 5,
    },
    {
      name: t('testimonial2.name'),
      role: t('testimonial2.role'),
      platform: 'Facebook',
      image: '/testimonials/2.png',
      icon: <LocalIconFacebook aria-hidden="true" />,
      text: t('testimonial2.text'),
      rating: 5,
    },
    {
      name: t('testimonial3.name'),
      role: t('testimonial3.role'),
      platform: 'Instagram',
      image: '/testimonials/3.png',
      icon: <LocalIconInstagram aria-hidden="true" />,
      text: t('testimonial3.text'),
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="bg-gray-50 py-16" aria-labelledby="testimonials-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="testimonials-title" className="text-4xl font-bold text-center mb-4">{t('title')}</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">{t('description')}</p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map(({ name, role, platform, image, icon, text, rating }, index) => (
            <Card key={index} className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex justify-between items-center p-6">
                <div className="flex gap-4 items-center">
                  <Image
                    alt={t('imageAlt', { name })}
                    height={60}
                    width={60}
                    src={image}
                    className="rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold">{name}</p>
                    <p className="text-sm text-gray-500">{role}</p>
                  </div>
                </div>
                {icon && (
                  <div className="text-2xl" role="img" aria-label={t('platformIcon', { platform })}>
                    {icon}
                  </div>
                )}
              </CardHeader>
              <Divider />
              <CardBody className="p-6">
                <div className="flex items-center mb-2">
                  {[...Array(rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="sr-only">{t('ratingLabel', { rating })}</span>
                </div>
                <blockquote>
                  <p className="text-gray-700 leading-relaxed">{text}</p>
                </blockquote>
                <p className="text-sm text-gray-500 mt-4">{t('via', { platform })}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
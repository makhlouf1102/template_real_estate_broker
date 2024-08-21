'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Button, Image } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

const properties = [
    {
        id: 1,
        image: '/interior-2.png',
        title: 'Beautiful Family House',
        description: 'A beautiful house located in a serene environment.',
        price: '$500,000',
    },
    {
        id: 2,
        image: '/interior-2.png',
        title: 'Modern Apartment',
        description: 'A modern apartment in the city center.',
        price: '$350,000',
    },
];

export default function MyProperties() {
    const t = useTranslations('MyProprieties');

    return (
        <section id="real-estate-properties" className="bg-transparent py-12 md:py-16" aria-labelledby="properties-heading">
            <div className="container mx-auto px-4 md:px-8">
                <h2 id="properties-heading" className="text-3xl font-extrabold text-primary-500 md:text-4xl text-center mb-8">
                    {t("title")}
                </h2>
                <Swiper
                    loop={true}
                    spaceBetween={20}
                    modules={[Pagination, A11y]}
                    className="w-full"
                    pagination={{
                        dynamicBullets: true,
                        clickable: true,
                    }}
                    a11y={{
                        prevSlideMessage: t("prevSlideMessage"),
                        nextSlideMessage: t("nextSlideMessage"),
                        paginationBulletMessage: t("paginationBulletMessage", { index: '{index}' }),
                    }}
                >
                    {properties.map((property) => (
                        <SwiperSlide key={property.id}>
                            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                                    <Image
                                        src={property.image}
                                        alt={t("imageAlt", { title: property.title })}
                                        width={500}
                                        height={500}
                                        className="object-cover w-full h-auto rounded-lg shadow-lg"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 md:pl-8">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-3 md:text-3xl">
                                        {property.title}
                                    </h3>
                                    <p className="text-gray-700 mb-4">{property.description}</p>
                                    <p className="text-xl font-bold text-text-300 mb-4" aria-label={t("priceLabel", { price: property.price })}>
                                        {property.price}
                                    </p>
                                    <Button 
                                        className="bg-primary-500 text-white font-bold"
                                        aria-label={t("buttonAriaLabel", { title: property.title })}
                                    >
                                        {t("button")}
                                    </Button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
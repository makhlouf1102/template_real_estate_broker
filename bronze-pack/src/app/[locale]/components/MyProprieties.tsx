'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
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
        <section id="real-estate-properties" className="bg-transparent">
            <div className="container mx-auto flex flex-col items-center justify-center px-4 py-5 md:px-10">
                <h1 className="text-3xl font-extrabold text-primary-500 md:text-4xl">{t("title")}</h1>
                <Swiper
                    loop={true}
                    spaceBetween={20}
                    modules={[Pagination]}
                    className="w-full"
                    pagination={{
                        dynamicBullets: true,
                    }}
                >
                    {properties.map((property) => (
                        <SwiperSlide key={property.id}>
                            <div className="w-full flex flex-col items-center justify-center md:flex-row">
                                <div className="w-full px-4 py-4 flex justify-center md:w-1/2 md:px-16 md:py-10">
                                    <Image
                                        src={property.image}
                                        alt={property.title}
                                        width={300}
                                        height={300}
                                        className="object-cover h-72 w-72"
                                    />
                                </div>
                                <div className="w-full p-5 flex flex-col items-center md:w-1/2 md:items-start">
                                    <h3 className="text-2xl font-semibold text-text-300 mb-2 md:text-3xl">{property.title}</h3>
                                    <p className="text-gray-700 mb-4 text-center md:text-left">{property.description}</p>
                                    <p className="text-lg font-bold text-text-300">{property.price}</p>
                                    <Button className="bg-primary-500 text-white font-bold mt-4">{t("button")}</Button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

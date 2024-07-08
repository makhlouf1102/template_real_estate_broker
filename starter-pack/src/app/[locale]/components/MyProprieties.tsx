'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
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
        <>
            <section id="real-estate-properties" className="bg-transparent">
                <div className="container mx-auto flex flex-col items-center justify-center px-10 py-5">
                    <h1 className="text-4xl font-extrabold text-primary-500">{t("title")}</h1>
                    <Swiper
                        loop={true}
                        spaceBetween={20}
                        modules={[FreeMode]}
                        className="w-full"
                    >
                        {properties.map((property) => (
                            <SwiperSlide key={property.id}>
                                <div className="w-full flex justify-center">
                                    <div className="w-full px-16 py-10 flex justify-between items-center">
                                        <div className="w-1/2 flex justify-center">
                                            <Image
                                                src={property.image}
                                                alt={property.title}
                                                width={300}
                                                height={300}
                                                className="object-cover h-72 w-72"
                                            />
                                        </div>
                                        <div className="w-1/2 p-5 flex flex-col">
                                            <h3 className="text-2xl font-semibold text-purple-700 mb-2">{property.title}</h3>
                                            <p className="text-gray-700 mb-4">{property.description}</p>
                                            <p className="text-lg font-bold text-purple-600">{property.price}</p>
                                            <Button className="bg-primary-500 text-white font-bold mt-4">{t("button")}</Button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
}

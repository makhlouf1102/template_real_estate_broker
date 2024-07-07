'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Card, Image } from '@nextui-org/react';

const properties = [
    {
        id: 1,
        image: '/iterior-2.jpg',
        title: 'Beautiful Family House',
        description: 'A beautiful house located in a serene environment.',
        price: '$500,000',
    },
    {
        id: 2,
        image: '/iterior-2.jpg',
        title: 'Modern Apartment',
        description: 'A modern apartment in the city center.',
        price: '$350,000',
    },
];

export default function MyProprieties() {
    return (
        <div>
            <h1>Real Estate Agent Properties</h1>
            <Swiper spaceBetween={50} slidesPerView={1}>
                {properties.map((property) => (
                    <SwiperSlide key={property.id}>
                            <Card>
                                <Image
                                    src={property.image}
                                    alt={property.title}
                                    width="100%"
                                    height={200}
                                />
                                <h3>{property.title}</h3>
                                <p>{property.description}</p>
                                <p>{property.price}</p>
                            </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { Card, Image } from '@nextui-org/react'

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
]

export default function MyProperties() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    return (
        <section className="container mx-auto flex flex-col items-center justify-center px-10 py-5">
            <h1 className="text-2xl font-bold">Real Estate Agent Properties</h1>
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className='h-96 w-full rounded-lg'
            >
                {properties.map((property) => (
                    <SwiperSlide key={property.id}>
                        <Card className="w-full bg-purple-500">
                            <Image
                                src={property.image}
                                alt={property.title}
                                width={100}
                                height={200}
                            />
                            <h3>{property.title}</h3>
                            <p>{property.description}</p>
                            <p>{property.price}</p>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Thumbnail */}
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={12}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className='thumbs mt-3 h-32 w-full rounded-lg'
            >
                {properties.map((property) => (
                    <SwiperSlide key={property.id}>
                        <button className='flex h-full w-full items-center justify-center'>
                            <Image
                                src={property.image}
                                alt={property.title}
                                width={100}
                                height={200}
                                className='block h-full w-full object-cover'
                            />
                        </button>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

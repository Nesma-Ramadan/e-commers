"use client"

import { Brand } from '@/Typs/AllProduct.model'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode, Autoplay } from 'swiper/modules';
import Image from 'next/image';


export default function MySwiper({ imagesList, slidesPerView, spaceBetween, className , delay }: { imagesList: string[], slidesPerView?: number, spaceBetween?: number, className: string , delay?:number }) {
    return (
        <>

            <div className="">
                <Swiper
                    slidesPerView={slidesPerView}
                    spaceBetween={spaceBetween}
                    freeMode={true}
                    loop
                    autoplay={{
                        delay:delay ?? 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[FreeMode, Autoplay]}
                    className={className}
                >



                    {imagesList.map((src) => (
                        <SwiperSlide key={src}>

                            <Image

                                src={src}
                                alt={src}
                                width={600}
                                height={60}
                                className='  object-contain h-full w-full  group-hover:scale-120 transition-all duration-300'

                            />
                        </SwiperSlide>

                    ))}



                </Swiper>


            </div>


        </>
    )
}



import Image from 'next/image'
import React from 'react'
import Button from '../Button/Button'
import { Product } from '@/Typs/AllProduct.model'

export default function OfferCard({ data }: { data: Product[]  }) {



    const offer = data.slice(1, 4);




    return (
        <>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-between items-center mx-auto my-5">

                {offer?.map((card) => (

                    <div key={card.id} className="w-full h-72 overflow-hidden rounded-lg relative shadow-lg group ">
                        <div className="img w-full h-72  transition-transform duration-300 group-hover:scale-105 ">
                            <Image

                                className='w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300'
                                src={card.imageCover || '/1680403397402-cover.jpeg'}
                                alt={card.title}
                                width={600}
                                height={50}
                            />
                        </div>

                        <div className="top-layer bg-linear-135 from-[#c96f01] from-50% to-transparent to-50% w-full h-full absolute top-0 left-0">

                            <div className="content w-1/2 absolute top-5 left-5">
                                <h2 className='text-white text-2xl font-bold line-clamp-2'> {card.title} </h2>
                                <h3 className=' text-white  text-lg font-semibold my-5 line-clamp-1'>
                                    {card.brand.name}
                                </h3>
                                <Button size='sm' type='secondary' tittel='Shop now' className='mt-4 text-[#f1eee9] border-2 border-[#FF8E00] hover:bg-transparent hover:border-[#f1eee9]' />
                            </div>

                        </div>

                    </div>



                ))}
            </div>


        </>
    )
}

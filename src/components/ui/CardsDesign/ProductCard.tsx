"use client"

import { Star, View } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Button from '../Button/Button'
import { Product } from '@/Typs/AllProduct.model';
import Link from 'next/link';
import { AddCartButton, AddCartIcone } from '../Button/AddCartButton'
import { AddWishlistIcone } from '../Button/AddWhishlistButton'



export default function ProductCard({ data }: { data: Product[] }) {

    const allProducts = data || [];


    return (
        <>
            <div className="ProductCard container mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {allProducts.map((product) => (
                    <div key={product._id} className="rounded-lg  shadow-lg  overflow-hidden border border-neutral-300 group/item hover:border-[#FF8E00] p-2">



                        {/* card image */}

                        <div className="img  w-full h-60 relative rounded-t-sm  rounded-lg border border-neutral-300 group-hover/item:border-[#FF8E00] group/layer">

                            <Image className='object-cover object-center rounded-sm h-full w-full' src={product.imageCover} alt={product.title} width={600} height={50} ></Image>


                            {/* layer */}

                            <div className="layer bg-black/30 rounded-sm w-full h-full flex justify-center items-center  gap-2 absolute -top-[110%] left-0 group-hover/layer:top-0 transition-all duration-300">


                                <AddWishlistIcone id={product?._id} />



                                <Link href={`/productDetails/${product.id}`}> <Button size='icone' type='primary' icone={<View stroke='#FFFF' className=' ' />} className='    ' /></Link>


                                <AddCartIcone id={product._id} />


                            </div>

                        </div>

                        {/* card Details */}

                        <div className="details py-2 px-4">
                            <div className=' flex justify-between items-center'>

                                <h2 className=' text-lg font-semibold mt-2 px-2 text-gray-700 line-clamp-1'>
                                    {product.title}
                                </h2>
                                <div className="flex ">
                                    <Star className='me-2' fill='#FF8E00' strokeWidth={0} />
                                    <span className='font-bold text-gray-800'>{product.ratingsAverage}</span>
                                </div>

                            </div>

                        </div>

                        {/* card Footer */}

                        <div className=' py-4 px-2 flex justify-between items-center'>
                            <div className="price">
                                <h2 className="text-lg font-semibold mt-2 px-2">
                                    {product.priceAfterDiscount == null ? (
                                        <span className="text-red-500">
                                            {product.price} $
                                        </span>
                                    ) : (
                                        <>
                                            <span className="text-red-500 font-bold mr-2">
                                                {product.priceAfterDiscount} $
                                            </span>
                                            <span className="text-gray-400 line-through ">
                                                {product.price} $
                                            </span>

                                        </>
                                    )}
                                </h2>

                            </div>
                            <div className="add-card  opacity-0 group-hover/item:opacity-100 transition-all duration-300 ">



                                <AddCartButton id={product._id} />

                            </div>

                        </div>

                    </div>
                ))}
            </div>


        </>
    )
}

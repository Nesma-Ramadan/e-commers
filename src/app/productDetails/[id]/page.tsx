import { getSpecificProducts } from '@/app/action/GetData.action'
import { ProductDetailsProps } from '@/Typs/AllProduct.model'
import Image from 'next/image'

import React from 'react'




export default async function ProductDetails({ params }: ProductDetailsProps) {

  const productData = await getSpecificProducts(params.id)

  console.log(productData, 'data');

  return (
    <>
      <div className="details mt-4">

        <div className="container mx-auto py-4 ">

          <div className="grid grid-cols-4">

            <div className=' col-span-1'>

              <div className=' border border-gray-400 rounded-lg shadow-lg'>
                <Image

                  src={productData?.imageCover}
                  alt={productData?._id}

                  width={600}
                  height={300}
                  className='w-full h-full rounded-lg'
                />
              </div>
            </div>

            <div className=' col-span-3'>
              <h1>{ }</h1>

            </div>

          </div>

        </div>
      </div>





    </>
  )
}

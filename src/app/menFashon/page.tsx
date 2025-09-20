import React from 'react'
import { getAllBrands, getMenFashonProducts } from '../action/GetData.action'
import OfferCard from '@/components/ui/CardsDesign/OfferCard'
import MySwiper from '@/components/ui/MySwiper/MySwiper'
import ProductCard from '@/components/ui/CardsDesign/ProductCard'
import CommingSoonPage from '@/components/CommingSoon/CommingSoon'

export default async function menFashonPage() {

  const allProducts = await getMenFashonProducts()
  const allBrands = await getAllBrands()

  if (!allProducts || allProducts.length === 0) {
    return <CommingSoonPage />;
  }

  return (
    <>
      <section>

        <div className="brand-slider">
          <MySwiper imagesList={allBrands?.map(src => src.image)} slidesPerView={8} spaceBetween={0} delay={5000} className="mySwiper  h-12 cursor-pointer" />
        </div>

        <div className="container mx-auto">
          <OfferCard data={allProducts} />

          <ProductCard data={allProducts} />

        </div>
      </section>


    </>
  )
}

import React from 'react'
import { getAllBrands, getMobilsProducts } from '../action/GetData.action';
import CommingSoonPage from '@/components/CommingSoon/CommingSoon';
import MySwiper from '@/components/ui/MySwiper/MySwiper';
import OfferCard from '@/components/ui/CardsDesign/OfferCard';
import ProductCard from '@/components/ui/CardsDesign/ProductCard';

export default async function MobilesPage() {

  const allProducts = await getMobilsProducts();
  const allBrands = await getAllBrands();

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

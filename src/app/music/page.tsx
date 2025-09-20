import React from 'react'
import { getAllBrands, getMusicProducts } from '../action/GetData.action';
import CommingSoonPage from '@/components/CommingSoon/CommingSoon';
import MySwiper from '@/components/ui/MySwiper/MySwiper';
import ProductCard from '@/components/ui/CardsDesign/ProductCard';
import OfferCard from '@/components/ui/CardsDesign/OfferCard';

export default async function MusicPage() {
 

    const allProducts = await getMusicProducts();
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

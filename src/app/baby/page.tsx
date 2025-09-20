import OfferCard from '@/components/ui/CardsDesign/OfferCard'
import React from 'react'
import { getAllBrands, getBabyProducts } from '../action/GetData.action'
import CommingSoonPage from '@/components/CommingSoon/CommingSoon';
import MySwiper from '@/components/ui/MySwiper/MySwiper';

export default async function BabyPage() {

  const allProducts = await getBabyProducts();

  const allBrands = await getAllBrands()

  console.log(allProducts,'babbbby');
  

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

      </div>
    </section>



    </>
  )
}

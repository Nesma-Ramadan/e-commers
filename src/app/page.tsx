
import ProductCard from "@/components/ui/CardsDesign/ProductCard";
import { getAllBrands, getAllCategory, getAllProducts } from "./action/GetData.action";
import MySwiper from "@/components/ui/MySwiper/MySwiper";
import OfferCard from "@/components/ui/CardsDesign/OfferCard";






export default async function Home() {

  const allProducts = await getAllProducts();
  const allBrands = await getAllBrands()
  const allCategory = await getAllCategory();



  return (
    <>

      <section>
        <div className="brand-slider">
          <MySwiper imagesList={allBrands?.map(src => src.image)} slidesPerView={8} spaceBetween={0} delay={5000} className="mySwiper  h-12 cursor-pointer" />
        </div>

        <div className="container mx-auto">



          <div className="  ">

            <OfferCard data={allProducts} />

          </div>

          <div className="slid mt-10">
            <MySwiper imagesList={allCategory?.map(src => src.image)} slidesPerView={4} spaceBetween={0}  className="mySwiper border border-neutral-300 rounded-lg h-80 hover:border-[#FF8E00]  " />
          </div>


          <div className="mt-20 ">
            <ProductCard data={allProducts} />
          </div>
        </div>



      </section>

    </>
  );
}

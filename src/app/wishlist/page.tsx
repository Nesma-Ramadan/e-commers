"use client"
import { Star, Trash } from 'lucide-react'
import Image from 'next/image'
import { useContext } from 'react'
import { AddCartButton } from '@/components/ui/Button/AddCartButton'
import toast from 'react-hot-toast'
import { RemoveAllWishlist, RemoveUserWishlist } from '../action/Wishlist.action'
import { WishlistContext } from '../context/WishlistContext'
import { WishlistContextType } from '@/Typs/AllProduct.model'

export default function WishlistPage() {


  const { productsWishlist, setProductsWishlist } = useContext<WishlistContextType>(WishlistContext )


  async function deleteProduct(id: string) {
   try{
     const res = await RemoveUserWishlist(id)
    if (res.statusMsg === "fail") {
      toast.error("you must login before to remove products")
    }
    else if (res.status === "success") {
      setProductsWishlist(res.data);
      toast.success("Product removed successfully from your wishlist");
    } else { toast.error("you can not remove this product from wishlist") }
   }catch(error){
    console.log(error);
    
   }
  }

  async function clearAllProductFromWishlist() {
    try {

      const res = await RemoveAllWishlist()
      console.log(res);

      if (res.statusMsg === "fail") {
        toast.error("you must login before to update products")
      }
      else if (res.status === "success") {
        toast.success("Product updated successfully ")
        setProductsWishlist(res.data)

      } else { toast.error("you can not update this product") }
    } catch (error) {

      console.log("update product", error);


    }
  }


  return (

    <>


      <div className='wishlist'>

        <div className="container mx-auto">


          <h1 className=" text-3xl font-bold text-[#FF8E00] mb-4 p-4 capitalize">wishlist</h1>



          {/* products */}

          <div className="poducts w-full border py-4 px-8 rounded-lg shadow-lg ">

            <div className=" header flex justify-between items-center w-full">
              <h2 className="font-semibold capitalize text-neutral-700">products</h2>
              <div className="del flex items-center gap-2">
                <h2 className="text-[#FF8E00] capitalize">clear all</h2>
                <Trash onClick={() => clearAllProductFromWishlist()} className="text-neutral-300 hover:text-red-500 cursor-pointer" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {productsWishlist?.map((product) =>
                <div key={product._id} className="product-details flex justify-between items-center border p-4 rounded-lg shadow-sm mt-4  col-span-1">

                  <div className="flex items-center gap-4">
                    <div className="img p-4 border rounded-md ">
                      <Image
                        src={product.imageCover}
                        alt={product.title}
                        width={40}
                        height={40}
                        className=" object-contain object-center w-auto h-full"
                      />
                    </div>
                    <div className="details">
                      <h1>{product?.title?.split(" ").slice(0, 2).join(" ") ?? "product name"}</h1>
                      <p className="text-neutral-500">quantity:{product.quantity}</p>
                      <p className="text-neutral-500 font-medium"> price:$ {product.price}</p>
                    </div>
                  </div>

                  <div className="star flex gap-2">
                    <Star fill='#FF8E00' className=' stroke-[#FF8E00]' />
                    <span>{product.ratingsAverage}</span>
                  </div>



                  <div className=" flex items-center gap-4">
                    <div className="price ">
                      <AddCartButton id={product._id} />
                    </div>
                    <div className="del " onClick={() => deleteProduct(product._id)}>

                      <Trash className="text-neutral-300 cursor-pointer hover:text-red-500" />
                    </div>
                  </div>

                </div>
              )}
            </div>
          </div>

        </div>
      </div>




    </>

  )
}

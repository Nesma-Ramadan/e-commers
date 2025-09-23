"use client"

import Button from "@/components/ui/Button/Button";
import { Minus, Plus, Star, Trash } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast/headless";
import { RemoveAllCart, RemoveUserCart, UpdatUserCart } from "../action/Cart.action";
import { useContext } from "react";
import { cartContext } from "../context/CartContext";
import { CartContextType } from "@/Typs/AllProduct.model";
import Link from "next/link";





export default function CartInformation() {


const {productsCart, setProductsCart , totalCartPrice ,setTotalCartPrice } = useContext<CartContextType>(cartContext);




// delete product from cart function

  async function deleteProduct(id: string) {
    try {
      const res = await RemoveUserCart(id)
      if (res.statusMsg === "fail") {
        toast.error("you must login before to remove products")
      }
      else if (res.status === "success") {
        toast.success("Product removed successfully from your cart")
        setProductsCart(res.data.products)
        setTotalCartPrice(res.data.totalCartPrice)
      } else { toast.error("you can not remove this product from cart") }
    } catch (error) {
      console.log("delete product", error)
    }
  }

  // updata function

  async function updateProduct(id: string, count: number) {
    try {
      const res = await UpdatUserCart(id, count)


      if (res.statusMsg === "fail") {
        toast.error("you must login before to update products")
      }
      else if (res.status === "success") {
        toast.success("Product updated successfully ")
        setProductsCart(res.data.products)
        setTotalCartPrice(res.data.totalCartPrice)

      } else { toast.error("you can not update this product") }
    } catch (error) {

      console.log("update product", error);


    }
  }

// clear cart function

  async function clearAllProductFromCart() {
    try {

      const res = await RemoveAllCart()
      console.log(res ,"rrrr");

      if (res.statusMsg === "fail") {
        toast.error("you must login before to update products")
      }
      else if (res.status === "success") {
        toast.success("Product updated successfully ")
        setProductsCart(res.data.products)
        setTotalCartPrice(res.data.totalCartPrice)

      } else { toast.error("you can not update this product") }
    } catch (error) {

      console.log("update product", error);


    }
  }



  return (
    <>

      <div className="cart">
        <div className="container mx-auto">

          <div className="header flex justify-between items-center">
          <h2 className=" text-3xl font-bold text-[#FF8E00] mb-4 p-4 capitalize">shopping cart</h2>
          <Link href='/allorders'><h2 className="text-lg underline cursor-pointer text-neutral-500 hover:text-[#FF8E00]">view all order</h2></Link>

          </div>


          <div className="cart-content  grid grid-cols-4 gap-4">

            {/* products */}

            <div className="poducts col-span-3 border p-4 rounded-lg shadow-lg">

              {/* header */}

              <div className=" header flex justify-between items-center w-full">
                <h2 className="font-semibold capitalize text-neutral-700">products</h2>

                <div className="del flex items-center gap-2">
                  <h2 className="text-[#FF8E00] capitalize">clear all</h2>
                  <Trash onClick={() => clearAllProductFromCart()} className="text-neutral-300 hover:text-red-500 cursor-pointer" />
                </div>
              </div>


              {productsCart.length>0?productsCart.map((product) =>

                <div key={product._id} className="product-details flex justify-between items-center border p-4 rounded-lg shadow-sm mt-4 ">

                  <div className="flex items-center gap-4 w-1/4">
                    <div className="img p-4 border rounded-md ">
                      <Image
                        src={product.product.imageCover}
                        alt={product.product.title}
                        width={40}
                        height={40}
                        className=" object-contain object-center w-auto h-full "
                      />
                    </div>
                    <div className="details text-start">
                      <h1 className="font-bold">{product.product?.title?.split(" ").slice(0, 2).join(" ")}</h1>
                      <p className="text-neutral-500">quantity:{product.product.quantity}</p>
                      <p className="text-neutral-500 font-medium">price:$ {product.price}</p>
                      <div className="star flex justify-center items-center gap-2  w-fit py-4">
                        <Star fill='#FF8E00' className=' stroke-[#FF8E00]' />
                        <span>{product.product.ratingsAverage}</span>
                      </div>
                    </div>
                  </div>

                  <div className="count flex items-center gap-2">
                     <Button type="secondary" size="icone" icone={<Minus />} click={() => updateProduct(product.product._id, product.count-1)} />
                    <div className="text-2xl font-bold text-neutral-600 border py-2 px-8 rounded-lg ">{product.count}</div>
                     <Button type="secondary" size="icone" icone={<Plus />} click={() => updateProduct(product.product._id, product.count + 1)} />
                  </div>

                  <div className="price">
                    <h2 className="font-bold text-2xl text-red-500">${product.count * product.price}</h2>
                  </div>
                  <div className="del cursor-pointer" onClick={() => deleteProduct(product.product._id)}>
                    <Trash className="text-neutral-300 hover:text-red-500 " />
                  </div>





                </div>
              ): toast.error('you should add product befor')}



            </div>


            {/* summar products */}


            <div className="order-summary col-span-1 h-fit border rounded-lg shadow-lg p-4" >
              <h1 className="font-semibold capitalize text-neutral-700">order summary</h1>
              <div className="promo-code border border-[#FF8E00] rounded-md flex items-center justify-between my-4">
                <input type="text" placeholder="type her..." className="p-2 focus:outline-0" />
                <Button type="primary" size="sm" tittel="Apply" className="" />
              </div>
              <hr className="my-4" />
              <div className="flex flex-col gap-4">
                <div className="subtotal flex justify-between items-center">
                  <p className="text-neutral-500 capitalize">subtotal :</p>
                  <h2 className="text-neutral-500"> ${totalCartPrice}</h2>
                </div>
                <div className="discount flex justify-between items-center">
                  <p className="text-neutral-500 capitalize">discount :</p>
                  <h2 className="text-neutral-500"> -$00.00 </h2>
                </div>
                <div className="total flex justify-between items-center">
                  <p className="text-neutral-800 capitalize font-semibold">total :</p>
                  <h2 className="text-neutral-800 font-semibold"> ${totalCartPrice} </h2>
                </div>
               <Link href='/payment' > <Button type="primary" size="md" tittel="proced to checkout" className="w-full mt-4" /></Link>
              </div>





            </div>

          </div>

        </div>
      </div>

    </>
  )
}

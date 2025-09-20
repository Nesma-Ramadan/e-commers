"use client"

import { createContext } from "react"
import { GetLggedUserCart } from "../action/Cart.action";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { CartContextType, Product,  } from "@/Typs/AllProduct.model";



export const cartContext = createContext<CartContextType>();

export default function CartContextProvider({ children }: { children: React.ReactNode }) {

  const [productsCart, setProductsCart] = useState<Product[]>([])

  const [totalCartPrice, setTotalCartPrice] = useState<number>(0)


  async function getUserCard() {

    const res = await GetLggedUserCart();

    if (res.statusMsg === "fail") {
      console.log(res.message);
      
    }
    else if (res.status === "success") {
      setProductsCart(res.data.products)
      setTotalCartPrice(res.data.totalCartPrice)
    } else { toast.error(res.message) }


  }
  
  useEffect(() => {
    getUserCard()
  
  }, [])

  return <cartContext.Provider value={{ productsCart, setProductsCart , totalCartPrice ,setTotalCartPrice }}>{children}</cartContext.Provider>

}
"use client"

import { createContext } from "react"
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { Product, WishlistContextType } from "@/Typs/AllProduct.model";
import { GetLggedUserWishlist } from "../action/Wishlist.action";


export const WishlistContext = createContext<WishlistContextType>({productsWishlist:[] , setProductsWishlist:()=>{}});

export default function WishlistContextProvider({ children }: { children: React.ReactNode }) {

    const [ productsWishlist, setProductsWishlist] = useState<Product[]>([])


    async function getUserWishlist() {

        try {
            const res = await GetLggedUserWishlist();


            if (res.statusMsg === "fail") {
                console.log(res.message);
            }
            else if (res.status === "success") {
                setProductsWishlist(res.data)
            } else { toast.error(res.message) }
        } catch (error) {

            console.log(error);
        }
    }

    useEffect(() => {

        getUserWishlist()

    }, [])

    return <WishlistContext.Provider value={{ productsWishlist, setProductsWishlist }}>{children}</WishlistContext.Provider>


}
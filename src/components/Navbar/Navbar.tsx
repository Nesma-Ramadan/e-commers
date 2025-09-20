
"use client"

import { Heart, ShoppingCart } from "lucide-react";
import NavList from "./NavList";
import Button from "../ui/Button/Button";
import { useContext, useState } from "react";
import AuthModal from "@/app/(Auth)/signUp/AuthModal";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { cartContext } from "@/app/context/CartContext";
import { CartContextType, WishlistContextType } from "@/Typs/AllProduct.model";
import { WishlistContext } from "@/app/context/WishlistContext";






export default function Navbar() {

    const [authMode, setAuthMode] = useState<"signup" | "login" | null>(null);

    const session = useSession();

    const cart= useContext<CartContextType>(cartContext)
    const wishlist = useContext<WishlistContextType>(WishlistContext)

    const productsCart= cart?.productsCart ?? [];
    const productsWishlist= wishlist?.productsWishlist ??[]
    

    function handlMiddleware() {
        if (!session?.data) {
            setAuthMode('login')
        }
    }



    return (
        <>
            <nav className=" border-b-2 border-b-[#FF8E00] ">
                <div className="container m-auto flex justify-between items-center ">

                    <div className="logo">
                        <img src='/11637212_4776040.png' alt="logo" className="w-30" />
                    </div>

                    {/* search */}

                    <div className="search  border border-[#FF8E00] w-1/2 flex rounded-2xl">

                        <input className="py-2 px-4 w-full focus:outline-0 " type="text" placeholder="search" />

                        <button className="bg-[#FF8E00] py-2 px-8 rounded-e-2xl cursor-pointer text-gray-700 font-semibold ">search</button>
                    </div>



                    <div className="icon flex gap-6  items-center">

                        {/* Icons (cart , wishlist) */}

                        <Link href='/wishlist' onClick={handlMiddleware}> <div className="favorite flex flex-col justify-center items-center gap-2  cursor-pointer ">

                            <div className="i  relative">
                                <Heart className=" inline-block " color="#228D85" />
                                <div className="padg flex justify-center items-center w-4 h-4 rounded-full text-center bg-[#FF8E00]  text-[10px] absolute -top-1 -right-2">{productsWishlist.length}</div>
                            </div>
                            <h5 className=" text-gray-500 capitalize text-[16px]">favorite</h5>

                        </div></Link>


                        <Link href='/cart' onClick={handlMiddleware}><div className="favorite flex flex-col justify-center items-center gap-2 cursor-pointer">

                            <div className="i  relative">
                                <ShoppingCart className=" inline-block" color="#228D85" />
                                <div className="padg flex justify-center items-center w-4 h-4 rounded-full text-center bg-[#FF8E00]  text-[10px] absolute -top-1 -right-2">{ productsCart.length}</div>
                            </div>
                            <h5 className=" text-gray-500 capitalize text-[16px]">cart</h5>

                        </div></Link>


                        {/* Buttons */}



                        {!session?.data ?
                            <div className="favorite flex justify-center items-center gap-2  cursor-pointer">

                                <Button size='sm' type='primary' tittel="Sign up" className=" " click={() => setAuthMode('signup')} />
                                <Button size='sm' type='secondary' tittel="Log in" className=" " click={() => setAuthMode('login')} />

                            </div> :
                            <span onClick={() => signOut({ callbackUrl: "/" })} className=" text-red-600 font-bold capitalize cursor-pointer px-4">Log out</span>
                        }




                    </div>

                </div>

            </nav>

            <AuthModal mode={authMode} onClose={() => setAuthMode(null)} onSwitch={(mode) => setAuthMode(mode)} />

            <NavList />


        </>
    )
}

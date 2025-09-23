
"use client"

import { Heart, LogOut, Menu, ShoppingBasket, ShoppingCart, X } from "lucide-react";
import NavList from "./NavList";
import Button from "../ui/Button/Button";
import { useContext, useState } from "react";
import AuthModal from "@/app/(Auth)/signUp/AuthModal";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { cartContext } from "@/app/context/CartContext";
import { CartContextType, WishlistContextType } from "@/Typs/AllProduct.model";
import { WishlistContext } from "@/app/context/WishlistContext";
import Image from "next/image";
import { usePathname } from "next/navigation";






export default function Navbar() {

    const [authMode, setAuthMode] = useState<"signup" | "login" | null>(null);

    const [openList,setOpenList]= useState(false)

    const pathname = usePathname()

    const session = useSession();

    const cart = useContext<CartContextType>(cartContext)
    const wishlist = useContext<WishlistContextType>(WishlistContext)

    const productsCart = cart?.productsCart ?? [];
    const productsWishlist = wishlist?.productsWishlist ?? []


    function handlMiddleware() {
        if (!session?.data) {
            setAuthMode('login')
        }
    }



    return (
        <>
            <nav className=" border-b-2 border-b-[#FF8E00] relative">
                <div className="container m-auto flex justify-between items-center ">

                    <div className="logo">
                        <Image src='/11637212_4776040.png' alt="logo" width={80} height={80} />
                    </div>

                    {/* search */}

                    <div className="search  border border-[#FF8E00] w-1/2 flex rounded-2xl">

                        <input className="py-2 px-4 w-full focus:outline-0 " type="text" placeholder="search" />

                        <button className="bg-[#FF8E00] py-2 px-8 rounded-e-2xl cursor-pointer text-gray-700 font-semibold ">search</button>
                    </div>



                    <div className="icon lg:flex gap-6  items-center hidden ">

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
                                <div className="padg flex justify-center items-center w-4 h-4 rounded-full text-center bg-[#FF8E00]  text-[10px] absolute -top-1 -right-2">{productsCart.length}</div>
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

                        {/* sm screen */}


                    <button onClick={()=>setOpenList(true)} className=" cursor-pointer lg:hidden">
                        <Menu color="#FF8E00" size={40} />
                    </button>
                    <div className={`lg:hidden list bg-linear-to-tl from-[#64605c] to-gray-200 p-12 absolute  top-full rounded-lg  shadow-lg transition-transform duration-700  ${openList  ? 'right-0':'left-full'}  `}>

                        <div onClick={()=>setOpenList(false)} className={`text-[#FF8E00]  font-bold text-2xl flex justify-center items-center absolute top-2 right-2 cursor-pointer  px-2  rounded-md border border-[#FF8E00] `}>x</div>

                        <ul className=" ">
                            <li className="py-2 font-bold capitalize text-neutral-700 border-b mb-4"  >category</li>
                            <li className=" indent-4 text-neutral-600 capitalize py-2"><Link href="/" className={`${pathname === "/" ? 'text-[#af6205] font-semibold' : ''}`}>home</Link></li>
                            <li className=" indent-4 text-neutral-600 capitalize py-2"><Link href="/menFashon" className={`${pathname === "/menFashon" ? 'text-[#af6205] font-semibold' : ''}`}>mens fashon</Link></li>
                            <li className=" indent-4 text-neutral-600 capitalize py-2"><Link href="/womenFashon" className={`${pathname === "/womenFashon" ? 'text-[#af6205] font-semibold' : ''}`}>womens fashon</Link></li>
                            <li className=" indent-4 text-neutral-600 capitalize py-2"><Link href="/superMarket" className={`${pathname === "/superMarket" ? 'text-[#af6205] font-semibold' : ''}`}>super market</Link></li>
                            <li className=" indent-4 text-neutral-600 capitalize py-2"><Link href="/baby" className={`${pathname === "/baby" ? 'text-[#af6205] font-semibold' : ''}`}>baby</Link></li>
                            <li className=" indent-4 text-neutral-600 capitalize py-2"><Link href="/books" className={`${pathname === "/books" ? 'text-[#af6205] font-semibold' : ''}`}>books</Link></li>
                            <li className=" indent-4 text-neutral-600 capitalize py-2"><Link href="/music" className={`${pathname === "/music" ? 'text-[#af6205] font-semibold' : ''}`}>music</Link></li>
                            <li className=" indent-4 text-neutral-600 capitalize py-2"><Link href="/beauty" className={`${pathname === "/beauty" ? 'text-[#af6205] font-semibold' : ''}`}>beauty & healthy</Link></li>
                            <li className=" indent-4 text-neutral-600 capitalize py-2"><Link href="/mobiles" className={`${pathname === "/mobiles" ? 'text-[#af6205] font-semibold' : ''}`}>mobiles</Link></li>
                            <li className=" indent-4 text-neutral-600 capitalize py-2"><Link href="/electronics" className={`${pathname === "/electronics" ? 'text-[#af6205] font-semibold' : ''}`}>electronics</Link></li>
                            <li className=" border-t mt-4  text-neutral-700 font-semibold capitalize py-2 cursor-pointer "><Link href='/wishlist' className={`${pathname === "/wishlist" ? 'text-[#FF8E00] font-semibold' : ""}  `} /> <Heart size={18} fill="#FF8E00" color="#FF8E00" className="inline me-2" />wish list </li>
                            <li className=" text-neutral-700 font-semibold capitalize p-2 border-b mb-2 cursor-pointer"><Link href='/cart' className={`${pathname === '/cart' ? 'text-[#FF8E00] font-semibold' : ''}`} />   <ShoppingBasket size={18} fill="#FF8E00" color="#FF8E00" className="inline me-2" /> cart </li>

                             {!session?.data ?
                            <div className="favorite flex flex-col justify-center items-center gap-2  cursor-pointer">

                                    <li onClick={() => setAuthMode('signup')} className="text-[#FF8E00] font-bold capitalize cursor-pointer">sign up  </li>
                                    <li onClick={() => setAuthMode('login')} className="text-neutral-600 font-bold capitalize cursor-pointer">log in  </li>

                            </div> :
                           
                            <li onClick={() => signOut({ callbackUrl: "/" })} className="text-red-500 font-bold capitalize cursor-pointer">log out <LogOut size={18} className="inline " /> </li>
                        }
                        </ul>

                    </div>

                </div>

            </nav>





            <AuthModal mode={authMode} onClose={() => setAuthMode(null)} onSwitch={(mode) => setAuthMode(mode)} />

            <NavList />


        </>
    )
}

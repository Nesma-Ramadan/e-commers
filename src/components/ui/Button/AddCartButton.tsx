"use client"

import { AddToCart } from "@/app/action/Cart.action";
import Button from "./Button"
import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { CartContextType } from "@/Typs/AllProduct.model";
import { cartContext } from "@/app/context/CartContext";

export function AddCartButton({ id }: { id: string }) {

    const {  setProductsCart } = useContext<CartContextType>(cartContext);

    async function HandelAddToCart() {

        const res = await AddToCart(id);

        if (res.statusMsg === "fail") {
            toast.error("you must login before to add products")
        }
        else if (res.status === "success") {
            setProductsCart(res.data.products)
            toast.success("Product added successfully to your cart 👌")
        } else { toast.error("you can not add this product to cart") }

    }


    return (
        <Button size='sm' type='primary' tittel='Add to card' className='  ' click={() => HandelAddToCart()} />
    )
}



export function AddCartIcone({ id }: { id: string }) {

    async function HandelAddToCart() {




        const res = await AddToCart(id);

        if (res.statusMsg === "fail") {
            toast.error("you must login before to add products")
        }
        else if (res.status === "success") {
            toast.success("Product added successfully to your cart 👌")
        } else { toast.error("you can not add this product to cart") }


    }


    return (
        <Button size='icone' type='primary' icone={<ShoppingCart stroke='#FFFF' className=' ' />} className='    ' click={() => HandelAddToCart()} />
    )
}

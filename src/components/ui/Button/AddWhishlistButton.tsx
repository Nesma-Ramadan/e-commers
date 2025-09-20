"use client"

import React, { useContext } from 'react'
import Button from './Button';
import { Heart } from 'lucide-react';
import toast from 'react-hot-toast';
import { AddProductToWishlist } from '@/app/action/Wishlist.action';
import { WishlistContext } from '@/app/context/WishlistContext';
import { WishlistContextType } from '@/Typs/AllProduct.model';

export function AddWishlistIcone({ id }: { id: string }) {

    const { setProductsWishlist } = useContext<WishlistContextType>(WishlistContext);

    async function HandelAddToWishlist() {

        try {
            const res = await AddProductToWishlist(id);

            console.log(res, "icon");


            if (res.statusMsg === "fail") {
                toast.error("you must login before to add products")
            }
            else if (res.status === "success") {
                toast.success("Product added successfully to your wishlist 👌")
                setProductsWishlist(res.data);
            } else { toast.error("you can not add this product to wishlist") }
        } catch (error) {

            console.log(error);

        }


    }


    return (
        <Button size='icone' type='primary' icone={<Heart stroke='#FFFF' className='  ' />} className='  ' click={() => HandelAddToWishlist()} />
    )
}


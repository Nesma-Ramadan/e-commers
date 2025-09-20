"use server"

import GetMyToken from "./GetToken";





export async function AddProductToWishlist(id: string) {


    const myToken = await GetMyToken();

    // if (!myToken) throw new Error('you must login before to add products')

    const res = await fetch('https://ecommerce.routemisr.com/api/v1/wishlist', {
        method: 'POST',
        headers: {
            token: myToken,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ productId: id })
    })

    const payload = await res.json()


    return payload

}



export async function GetLggedUserWishlist() {


    const myToken = await GetMyToken();

    if (!myToken) throw new Error('you must login before to add products')

    const res = await fetch("https://ecommerce.routemisr.com/api/v1/wishlist", {
        method: 'GET',
        headers: {
            token: myToken,
            "Content-Type": "application/json"
        },

    })

    const payload = await res.json()


    return payload

}






export async function RemoveUserWishlist(id: string) {


    const myToken = await GetMyToken();

    if (!myToken) throw new Error('you must login before to add products')

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
        method: 'DELETE',
        headers: {
            token: myToken,
            "Content-Type": "application/json"
        },

    })

    const payload = await res.json()


    return payload

}



export async function RemoveAllWishlist() {


    const myToken = await GetMyToken();

    if (!myToken) throw new Error('you must login before to add products')

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
        method: 'DELETE',
        headers: {
            token: myToken,
            "Content-Type": "application/json"
        },

    })

    const payload = await res.json()


    return payload

}
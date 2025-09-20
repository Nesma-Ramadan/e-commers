"use server"

import GetMyToken from "./GetToken"
export async function AddToCart(id: string) {


    const myToken = await GetMyToken();

    // if (!myToken) throw new Error('you must login before to add products')

    const res = await fetch('https://ecommerce.routemisr.com/api/v1/cart', {
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


export async function GetLggedUserCart() {


    const myToken = await GetMyToken();

    if (!myToken) throw new Error('you must login before to add products')

    const res = await fetch("https://ecommerce.routemisr.com/api/v1/cart", {
        method: 'GET',
        headers: {
            token: myToken,
            "Content-Type": "application/json"
        },

    })

    const payload = await res.json()


    return payload

}

export async function RemoveUserCart(id: string) {


    const myToken = await GetMyToken();

    if (!myToken) throw new Error('you must login before to add products')

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
        method: 'DELETE',
        headers: {
            token: myToken,
            "Content-Type": "application/json"
        },

    })

    const payload = await res.json()


    return payload

}

export async function RemoveAllCart() {


    const myToken = await GetMyToken();

    if (!myToken) throw new Error('you must login before to add products')

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
        method: 'DELETE',
        headers: {
            token: myToken,
            "Content-Type": "application/json"
        },

    })

    const payload = await res.json()


    return payload

}



export async function UpdatUserCart(id: string, count: number) {


    const myToken = await GetMyToken();

    if (!myToken) throw new Error('you must login before to add products')

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
        method: 'PUT',
        headers: {
            token: myToken,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({count})

    })

    const payload = await res.json()


    return payload

}


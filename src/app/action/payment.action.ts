"use server"

import { PaymentDataType, ResCashType, ResOnlineType } from "@/Typs/paymentDataType";
import GetMyToken from "./GetToken";

// Create Cash Order


export async function getCashOrder(cartId: string , shippingAddress:PaymentDataType): Promise<ResCashType> {


    const myToken = await GetMyToken();

    if (!myToken) throw new Error('you must login before to add products')

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`, {
        method: 'POST',
        headers: {
            token: myToken,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ shippingAddress })
    })

    const payload = await res.json()

    

    return payload

}







// getAllOrders









// getUserOrders






// Checkout session

export async function getOlineOrder(cartId: string , shippingAddress:PaymentDataType):Promise<ResOnlineType> {


    const myToken = await GetMyToken();

    if (!myToken) throw new Error('you must login before to add products')

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`, {
        method: 'POST',
        headers: {
            token: myToken,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ shippingAddress })
    })

    const payload = await res.json()
    

    return payload

}
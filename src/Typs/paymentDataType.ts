
export interface PaymentDataType {

        details: string,
        phone: string,
        city: string

}

export interface ResCashType {

        status: string,
        data: {

                cartItems: cartItems[],
                createdAt: string,
                id: number,
                isDelivered: boolean,
                isPaid: boolean;
                paymentMethodType: string,
                shippingAddress: PaymentDataType,
                shippingPrice: number,
                taxPrice: number,
                totalOrderPrice: number,
                updatedAt: string,
                user: string,
                __v: number,
                _id: string,

        }


}

export interface cartItems {
        count: number,
        price: number,
        product: string,
        _id: string,

}


export interface ResOnlineType {
        session: {
                cancel_url: string,
                success_url: string,
                url: string,
        }


        status: string
}
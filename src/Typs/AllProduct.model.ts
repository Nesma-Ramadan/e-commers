
export interface Brand {
    image: string;
    name: string;
    slug: string;
    _id: string;

}

export interface Category {
    image: string;
    name: string;
    slug: string;
    _id: string;

}
export interface Subcategory {
    category: string;
    name: string;
    slug: string;
    _id: string;

}
export interface Product {
    brand: Brand;
    category: Category;
    createAt: string;
    description: string;
    id: string;
    imageCover: string;
    images: string[];
    count:number;
    price: number;
    priceAfterDiscount?:number;
    quantity: number;
    ratingsAverage: number;
    reatingQuantity: number;
    slug: string;
    sold: number;
    subcategory: Subcategory[];
    title: string;
    updateAt: string;
    _id: string;



}


//////////////////////////////////////////////////////////////////////////////////

export interface ProductDetailsProps {
     
    params:{id:string}
}


export interface CartContextType {
  productsCart: Product[]
  setProductsCart:React.Dispatch<React.SetStateAction<Product[]>>
  totalCartPrice: number
   setTotalCartPrice:React.Dispatch<React.SetStateAction<number>>
}
export interface WishlistContextType {
  productsWishlist: Product[]
  setProductsWishlist:React.Dispatch<React.SetStateAction<Product[]>>
}

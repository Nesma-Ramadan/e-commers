"use server";


import { Brand, Category, Product } from '@/Typs/AllProduct.model';



export async function getAllProducts(): Promise<Product[]> {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/products')
    const data = await res.json()
    return data.data
}
export async function getSpecificProducts(id: string): Promise<Product | null> {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    const data = await res.json()
    return data.data
}
export async function getAllBrands(): Promise<Brand[]> {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/brands')
    const data = await res.json()
    return data.data
}
export async function getAllCategory(): Promise<Category[]> {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/categories')
    const data = await res.json()
    return data.data
}

///////////////////////////////////////////////////////////////////


export async function getBabyProducts():Promise<Product[] | []> {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/products?category[in]=6439d40367d9aa4ca97064cc')
    const data = await res.json()
    return data.data
}

export async function getBookProducts():Promise<Product[]> {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/products?category[in]=6439d3c867d9aa4ca97064ba')
    const data = await res.json()
    return data.data
}
export async function getSupermarketProducts():Promise<Product[]> {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/products?category[in]=6439d41c67d9aa4ca97064d5')
    const data = await res.json()
    return data.data
}
export async function getWomenFashonProducts():Promise<Product[]> {
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/products?category[in]=6439d58a0049ad0b52b9003f")
    const data = await res.json()
    return data.data
}
export async function getMenFashonProducts():Promise<Product[]> {
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/products?category[in]=6439d5b90049ad0b52b90048")
    const data = await res.json()
    return data.data
}
export async function getMusicProducts():Promise<Product[]> {
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/products?category[in]=6439d61c0049ad0b52b90051")
    const data = await res.json()
    return data.data
}
export async function getBeautyProducts():Promise<Product[]> {
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/products?category[in]=6439d30b67d9aa4ca97064b1")
    const data = await res.json()
    return data.data
}
export async function getMobilsProducts():Promise<Product[]> {
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/products?category[in]=6439d2f467d9aa4ca97064a8")
    const data = await res.json()
    return data.data
}
export async function getElectronicsProducts():Promise<Product[]> {
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/products?category[in]=6439d2d167d9aa4ca970649f")
    const data = await res.json()
    return data.data
}






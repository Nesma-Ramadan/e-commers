"use server"

import { RegesterFormeType } from "@/Typs/InputTyps";



export async function RegesterAction(data: RegesterFormeType) {

  try {

    const response = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signup', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data) // تحويل الـ data لـ JSON
    });

    const result = await response.json()
    console.log(result)
    if (!response.ok) {
      
      return { success: false, message: result.message || "Something went wrong" };
    }

    return { success: true, data: result };
  } catch (error) {
    return { success: false, message: error.message || "Unexpected error" };
  }


}




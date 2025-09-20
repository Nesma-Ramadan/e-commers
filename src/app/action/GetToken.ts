'use server'

import { decode } from "next-auth/jwt";
import { cookies } from "next/headers"


export default async function GetMyToken():Promise<string>  {

const rowToken =(await cookies()).get('next-auth.session-token')?.value;



const  decodedToken=await decode({token:rowToken,secret:process.env.AUTH_SECRET!})

const token = decodedToken?.token 

console.log(token);


  return token as string
    
  
}

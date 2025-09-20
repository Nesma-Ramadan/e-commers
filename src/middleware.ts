import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest){
   const token = await getToken({req : req ,secret:process.env.NEXTAUTH_SECRET! as string});
if(!token){
    // إعادة توجيه إلى الصفحة الرئيسية مع معامل للفتح موديل تسجيل الدخول
    return NextResponse.redirect(new URL('/?auth=login', req.url));
   }

   return NextResponse.next();

}


export const config = {
  matcher: ["/cart :path*" , "/wishlist"], // هنا بنحدد إن /cart بس هو اللي يتطبق عليه الـ middleware
};
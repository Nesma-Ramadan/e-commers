"use client"

import { SessionProvider } from 'next-auth/react'
import React from 'react'
import CartContextProvider from './CartContext'
import WishlistContextProvider from './WishlistContext'


export default function AuthProvider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>
    <CartContextProvider>
      <WishlistContextProvider>

      {children}
      </WishlistContextProvider>
    </CartContextProvider>
  </SessionProvider>

}

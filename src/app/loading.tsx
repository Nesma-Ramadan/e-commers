import React from 'react'
import { DotLoader } from 'react-spinners'

export default function LodingPage() {
  return (
    <>
    <div className="loading flex justify-center items-center">
      <div className="container flex justify-center items-center h-screen w-screen ">

        <DotLoader color='#FF8E00' size={100} />
        
      </div>
    </div>
    
    
    
    </>
  )
}

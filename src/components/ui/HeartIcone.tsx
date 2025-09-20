import React from 'react'
import { Heart } from 'lucide-react';


export default function HeartIcone() {
    return (
        <>
            <div className="icon absolute top-2 right-2 bg-gray-100 rounded-full p-1 cursor-pointer hover:bg-gray-200 hover:scale-110 transition-all">
                <Heart color='#6a7282'/>
            </div>


        </>
    )
}

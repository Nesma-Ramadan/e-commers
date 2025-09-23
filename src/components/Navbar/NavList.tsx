
"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'



export default function NavList() {

    const pathName = usePathname();

    interface list {
        id: number,
        text: string,
        link: string
    }

    const list: list[] = [
        {
            id: 1,
            text: 'home',
            link: '/'
        },
        {
            id: 2,
            text: "men's fashon",
            link: '/menFashon'
        },
        {
            id: 3,
            text: "women's fashon",
            link: '/womenFashon'
        },
        {
            id: 4,
            text: 'super market',
            link: '/superMarket'
        },
        {
            id: 5,
            text: 'baby',
            link: '/baby'
        },
        {
            id: 6,
            text: 'books',
            link: '/books'
        },
        {
            id: 7,
            text: 'music',
            link: '/music'
        },
        {
            id:8 ,
            text: 'beauty & healthy',
            link: '/beauty'
        },
        {
            id: 9,
            text: 'mobiles',
            link: '/mobiles'
        },
        {
            id: 10,
            text: 'electronics',
            link: '/electronics'
        },
    ]

    return (
        <>
            <nav className=' py-5 border-b-2  hidden lg:flex '>
                <div className="list container m-auto  ">
                    <ul className=' flex justify-center gap-12 lg:text-[16px] '>


                        {list.map((item) => <li key={item.id} className={`capitalize  text-gray-400  ${pathName === item.link ? 'active' : ''} hover:text-[#FF8E00] hover:font-semibold `}><Link href={item.link} className=''>{item.text}</Link></li>)}


                    </ul>
                </div>
            </nav>

        </>
    )
}

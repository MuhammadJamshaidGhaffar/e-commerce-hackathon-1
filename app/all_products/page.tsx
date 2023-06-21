import React from 'react'

import {products} from "@data/products"
import Image from 'next/image'
import Link from 'next/link'

// import {useSelector , useDispatch} from "react-redux"
// import { selectCart } from '../(store)/cartSlice'

export default function page() {

// const cart = useSelector(selectCart);
// console.log(cart);

  return (
    <section className='container flex flex-wrap'>
        {
            products.map((p) => <Link key={p.id} className='mt-20 ml-24 w-80'  href={`/product/${p.id}`}>
                <Image src={p.images[0]} alt="shalwar Qameez" width={300} height={200} className='bg-gray-200' style={{width:"20rem", height:"400px"}}/>
                <p className='text-xl font-semibold mt-5'>{p.name}</p>
                <p className='mt-5 text-gray-400 text-xl font-semibold'>{p.category}</p>
                <p className='mt-5 text-xl font-bold'>${p.price}</p>
            </Link>)
        }
    </section>
  )
}

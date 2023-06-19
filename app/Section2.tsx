import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

import dress_2_clipped from "@images/dress_2_clipped.png"
import dress_3 from "@images/dress_3.png"
import dress_4 from "@images/dress_4.png"

export default function Section2() {
  return (
    <section className='mt-36'>
        <p className='text-blue-600 font-semibold text-xl text-center'>Promotions</p>
        <h3 className='text-4xl text-center font-semibold mt-2 mb-5'>Our Promotions Events</h3>
        <div className='grid grid-cols-4 grid-rows-2 gap-10 w-5/6 mx-auto'>
            <div className='bg-gray-200 flex justify-around col-span-2 rounded-md hover:scale-105 transition ease-in-out duration-500'>
                <div className='pt-10 px-10 w-1/2'>
                <p className='text-5xl font-semibold'>Get Up To <span className='font-bold'>60%</span></p>
                <p className='text-2xl my-5'>For the Summer Season</p>
                </div>
                <Image src={dress_2_clipped} alt='dress-2'/>
            </div>
            <div className='row-span-2 pt-10 px-10 text-center bg-amber-100 hover:scale-105 transition ease-in-out duration-500 rounded-md'>
                <p className='text-3xl font-semibold'>Formal Shalwar Qameez</p>
                <p className='text-2xl mt-4 font-bold'><del className='font-normal'>$100.00</del> $75.00</p>
                <Image src={dress_3} alt="dress-3" className='mt-5' height={900}/>
            </div>
            <div className='row-span-2 pt-10 px-10 text-center bg-gray-200 hover:scale-105 transition ease-in-out duration-500 rounded-md'>
                <p className='text-3xl font-semibold'>Wait Coat</p>
                <p className='text-2xl mt-4 font-bold'><del className='font-normal'>$60.00</del> $50.00</p>
                <Image src={dress_4} alt="dress-3" className='mt-5' height={900}/>
            </div>
            
            <div className='col-span-2 bg-gray-900 text-white text-center py-16 hover:scale-105 transition ease-in-out duration-500 rounded-md'>
                <p className='text-5xl font-bold'>GET 30% Off</p>
                <p className='text-2xl mt-6'>Use Promo code</p>
                <Button className='mt-3 bg-gray-600 hover:bg-gray-600/60 text-3xl py-6'>JamStore Weekend Sale</Button>
            </div>
        </div>
    </section>
  )
}

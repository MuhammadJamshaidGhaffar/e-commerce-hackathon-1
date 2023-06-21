import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

import dress_7 from "@images/dress_7.png"
import Link from 'next/link'

export default function Section4() {
  return (
    <section className='mt-72 relative overflow-hidden'>
        <div className='container'>
            <div className='flex justify-end'>
                <h3 className='text-5xl font-bold w-2/4 leading-tight tracking-wider '>Unique and Authentic Vintage Designer Jewellery </h3>
            </div>
        <div className='absolute top-20 left-0 w-screen h-full bg-gray-200 opacity-10 -z-10'>
            <p className='text-9xl font-bold w-1/2 absolute top-52 left-20'>Different From others</p>
        </div>
            <div className='flex mt-10'>
                <div className='grid grid-cols-2 grid-rows-2 w-1/2 gap-10 mr-20 pt-10'>
                    <div className='w-3/4'>
                        <p className='text-2xl font-semibold'>Using Good Quality Materials</p>
                        <p className='mt-5 text-xl text-gray-600'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    <div className='w-3/4'>
                        <p className='text-2xl font-semibold'>100% Handmade Products</p>
                        <p className='mt-5 text-xl text-gray-600'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    <div className='w-3/4'>
                        <p className='text-2xl font-semibold'>Modern Fashion Design</p>
                        <p className='mt-5 text-xl text-gray-600'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    <div className='w-3/4'>
                        <p className='text-2xl font-semibold'>Discount for Bulk Orders</p>
                        <p className='mt-5 text-xl text-gray-600'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className='flex w-1/2'>
                    <Image src={dress_7} alt="dress-7" width={300} className='bg-gray-200'/>
                    <div className='w-1/2 ml-10 pt-10'>
                        <p className='text-xl text-gray-600'>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                        <Button className='mt-10 text-2xl py-7 px-5'>
                            <Link href="/all_products">See All Products</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

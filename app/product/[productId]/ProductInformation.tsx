import React from 'react'
import { Separator } from "@/components/ui/separator"
import { product } from '@/data/products'


export default function ProductInformation({product} : {product : product}) {
  return (
    <div className='w-2/3 mx-auto bg-white px-20 py-20 mt-20'>
        <div className='w-full h-36 relative flex items-center'>
          <h2 className='text-3xl font-semibold'>Product Information</h2>
          <div className='absolute top-0 left-0 text-9xl font-bold text-gray-600 opacity-5 '>Overview</div>
        </div>
        <Separator />
        <div className='mt-20 flex'>
            <p className='text-2xl text-gray-600 font-semibold w-1/3'>Product Details</p>
            <p className='w-2/3 text-xl text-gray-600 leading-loose tracking-widest'>{product.detail}</p>
        </div>

    </div>
  )
}

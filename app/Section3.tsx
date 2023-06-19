import Image from 'next/image'
import React from 'react'

import dress_1 from "@images/dress_1.png"
import dress_5 from "@images/dress_5.png"
import dress_6 from "@images/dress_6.png"

export default function Section3() {
  return (
    <section className='mt-36'> 
        <p className='text-blue-600 font-semibold text-xl text-center'>Products</p>
        <h3 className='text-4xl text-center font-semibold mt-2 mb-5'>Check What we have</h3>
        <div className='flex justify-center text-center '>
            <div className='hover:scale-105 transition ease-in-out duration-500 h-full'>
                <Image src={dress_5} alt='dress-5' className='bg-gray-200' style={{height:"600px"}}/>
                <p className='text-xl mt-5 font-semibold'>Waist Coat</p>
                <p className='text-xl font-semibold'>$50</p>
            </div>
            <div className='hover:scale-105 transition ease-in-out duration-500'>
                <Image src={dress_1} alt='dress-1' className='bg-gray-100' style={{height:"600px"}}/>
                <p className='text-xl mt-5 font-semibold'>Shalwar Qameez</p>
                <p className='text-xl font-semibold'>$80</p>
            </div>
            <div className='hover:scale-105 transition ease-in-out duration-500'>
                <Image src={dress_6} alt='dress-6' width={400} className='bg-gray-200' style={{height:"600px"}}/>
                <p className='text-xl mt-5 font-semibold'>Black Sharwar Qammez</p>
                <p className='text-xl font-semibold'>$100</p>
            </div>
            
            
        </div>
    </section>
  )
}

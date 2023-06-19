import React from 'react'
import Image from 'next/image';
import main_image from "@images/dress_1.png";
import Link from 'next/link';
import {BiCart} from "react-icons/bi"
import { Button } from "@/components/ui/button"

import featured_1 from "@images/Featured1.png"
import featured_2 from "@images/Featured2.png"
import featured_3 from "@images/Featured3.png"
import featured_4 from "@images/Featured4.png"


export default function Main_Section() {
  return (
    <div className='container flex mx-auto mt-32 justify-center'>
        <div className='w-5/12 pt-10'>
            <p className='inline-block w-25 bg-blue-100 font-semibold text-blue-800 text-2xl px-4 py-2 rounded-md'>Sale 70%</p>
            <h2 className='font-bold text-7xl my-5 leading-tight'>An Industrail Take on Streetwear</h2>
            <p className='text-gray-600 text-xl w-1/2'>Anyone can beat you but no one can beat your outfit as long as you wear Jam Store outfits.</p>
            <Button className='text-xl py-7 mt-8 hover:scale-105 transition ease-in-out duration-500' size="lg">
               <Link href="/all_products" className='flex items-center justify-between'>
                <BiCart size={30}/> <p className='ml-2'>Start Shopping</p>     
               </Link>
            </Button>
            <div className='flex justify-between my-10'>
                <Image src={featured_1} alt='Featred-1' className='' width={150}/>
                <Image src={featured_2} alt='Featred-2' className='ml-5' width={150}/>
                <Image src={featured_3} alt='Featred-3' className='ml-5' width={150}/>
                <Image src={featured_4} alt='Featred-4' className='ml-5' width={150}/>
                </div>
            
        </div>
        <div className='ml-20 relative'>
            <div className='rounded-full bg-gray-100 w-96 h-96 absolute top-52 left-20 -z-10 scale-150' ></div>
            <Image src={main_image} alt="Shalwar Qameez" width={500}/>
        </div>
    </div>
  )
}

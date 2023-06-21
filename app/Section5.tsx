import { Button } from '@/components/ui/button'
import React from 'react'
import { Input } from "@/components/ui/input"


export default function 
() {
  return (
    <section className='container mt-52 text-center tracking-widest relative'>
        <div className='absolute top-10 left-80 text-9xl font-bold opacity-5 -z-10'>Newsletter</div>
        <h3 className='text-5xl font-bold'>Subscribe to our Newsletter</h3>
        <p className='text-xl text-gray-600 mt-5'>Get the latest information and promo offers directly</p>
        <div className='flex mt-16 w-1/2 mx-auto justify-center'>
            <Input type='email' placeholder='Input Email address' className='text-base px-5 py-4 w-3/5'/>
            <Button className='ml-10'>Get Started</Button>
        </div>
    </section>
  )
}

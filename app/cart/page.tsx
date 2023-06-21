'use client'

import { product } from '@/data/products'
import Image from 'next/image'
import React from 'react'

import dress_1 from "@images/dress_1.png"

import {MdDelete} from "react-icons/md"
import QuantitySetter from '../product/[productId]/quantitySetter'

const cart : Required<product>[] = [{
    id: "1",
    name : "Shalwar Qameez",
    price : 100,
    category : "dress",
    images: [dress_1.src],
    detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    quantity:3,
    size:"m" 
},]

export default function page() {
  return (
    <div>
        <h1>Shopping Cart</h1>
        <div>
            <div>
            {
                cart.map(item => <div>
                        <Image src={item.images[0]} width={100} height={100} alt={item.name} /> 
                        <div className='flex'>
                            <p>{item.name}</p>
                            <MdDelete />
                        </div>
                        <p>{item.category}</p>
                        <p>Delivery Estimation</p>
                        <p>5 working days</p>
                        <div className='flex'>
                            <p>{item.price}</p>
                            <QuantitySetter getQuantity={()=>item.quantity} negativeFunc={()=>{
                                if(item.quantity>1)
                                    item.quantity -= 1;
                            }} 
                            postiveFunc={()=>{
                                item.quantity += 1;
                            }}
                            />
                        </div>
                    </div>
                )

            }
            </div>

            {/* order summary  */}
            <div></div>
        </div>
    </div>
  )
}

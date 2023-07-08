'use client'

import { Product, ProductRequired, products } from '@/data/products'
import Image from 'next/image'
import React, { useState } from 'react'
import { Metadata } from 'next'

import dress_1 from "@images/dress_1.png"

import {MdDelete} from "react-icons/md"
import { convertCartToCartProducts, getAllItemsFromCart, saveCart } from './cartFunctions'
import QuantitySetter from '../product/[productId]/quantitySetter'


export default function page() {
    const cartItems = getAllItemsFromCart();
    const cartProducts  = convertCartToCartProducts(cartItems);
    const [state , updateState ] = useState(0);


  return (
    <div>
        <h1>Shopping Cart</h1>
        <div>
            <div>
            {
                cartProducts.map((item , index )=> 
                <div className='flex '>
                        <Image src={item.images[0]} width={100} height={100} alt={item.name} className='bg-gray-200'  style={{width:"180px", height:"220px"}}/> 
                        <div>
                            <div className='flex'>
                                <p className='text-2xl '>{item.name}</p>
                                <MdDelete />
                            </div>
                            <p className='text-xl font-bold text-gray-400'>{item.category}</p>
                            <p className='text-xl font-semibold'>Delivery Estimation</p>
                            <p>5 working days</p>
                            <div className='flex'>
                                <p>{item.price}</p>
                                <QuantitySetter getQuantity={()=>cartProducts[index].quantity} negativeFunc={()=>{
                                    if(item.quantity>1){
                                        item.quantity -= 1;
                                        cartItems[index].quantity =- 1;
                                        saveCart(cartItems);
                                    }
                                    else{
                                        cartItems.splice(index,1);
                                        saveCart(cartItems);
                                        updateState(state+1);
                                    }
                                    
                                }} 
                                postiveFunc={()=>{
                                    item.quantity += 1;
                                    cartItems[index].quantity += 1;
                                    saveCart(cartItems);
                                }}
                                />
                            </div>
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


export async function generateMetadata(): Promise<Metadata> {
    return {
      title: "cart",
    }
  }
'use client'

import { Product, ProductRequired, products } from '@/data/products'
import Image from 'next/image'
import React, { useState } from 'react'
import { Metadata } from 'next'

import dress_1 from "@images/dress_1.png"

import {MdDelete} from "react-icons/md"
import { BiShoppingBag } from 'react-icons/bi'
import { convertCartToCartProducts, getAllItemsFromCart, saveCart } from './cartFunctions'
import QuantitySetter from '../product/[productId]/quantitySetter'
import { Button } from '@/components/ui/button'


export default function page() {
    const cartItems = getAllItemsFromCart();
    const cartProducts  = convertCartToCartProducts(cartItems);
    const [state , updateState ] = useState(0);


  return (
    <div className='container'>
        <h1 className='text-4xl font-bold mt-24'>Shopping Cart</h1>
        {cartItems.length == 0 ? 
        <div className='text-center'>
            <div className='flex justify-center'>
            <BiShoppingBag size={199}/>
            </div>
            <p className='font-bold text-5xl'>Your shopping bag is empty</p>
        </div>
            :
        <div className='mt-10 flex'>
            <div className='w-full'>
            {
                cartProducts.map((item , index )=> 
                <div className={`flex ${index != 0 ? "mt-20":""}`}>
                        <Image src={item.images[0]} width={100} height={100} alt={item.name} className='bg-gray-200 rounded-lg'  style={{width:"200px", height:"250px"}}/> 
                        <div className='ml-10 w-full'>
                            <div className='flex justify-between'>
                                <p className='text-3xl text-gray-700'>{item.name}</p>
                                <MdDelete size={30} onClick={()=>{
                                    cartItems.splice(index,1);
                                    saveCart(cartItems);
                                    updateState(state+1);
                                }} className='hover:scale-110'/>
                            </div>
                            <p className='text-2xl font-bold text-gray-400 mt-3'>{item.category}</p>
                            <p className='text-2xl font-semibold text-gray-400 mt-3'>Size : {item.size}</p>
                            <p className='text-2xl font-semibold mt-3'>Delivery Estimation</p>
                            <p className='text-2xl font-semibold text-yellow-500 mt-3'>5 working days</p>
                            <div className='flex justify-between mt-3'>
                                <p className='text-2xl font-bold'>${item.price}</p>
                                <QuantitySetter getQuantity={()=>cartProducts[index].quantity} negativeFunc={()=>{
                                    if(item.quantity>1){
                                        item.quantity -= 1;
                                        cartItems[index].quantity =- 1;
                                        saveCart(cartItems);
                                    }
                                    
                                }} style={{transform:"scale(0.8)"}}
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
            <div className='rounded-lg pt-14 ml-10 flex justify-center' style={{background:"#fbfcff", width:"460px"}}>
                <div>
                <p className='text-2xl font-bold'>Order Summary</p>
                <p className='text-2xl font-gray-400 mt-10'>Quantity 2</p>
                <p className='text-2xl font-gray-400 mt-10'>Subtotal $100</p>
                <Button className='mt-10 text-lg h-16'>Process to Checkout</Button>
                </div>
            </div>
        </div>
}
    </div>
  )
}


export async function generateMetadata(): Promise<Metadata> {
    return {
      title: "cart",
    }
  }
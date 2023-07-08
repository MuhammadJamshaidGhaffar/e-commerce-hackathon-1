'use client'

import { Button } from '@/components/ui/button';
import { CartProduct, Product, sizesType } from '@/data/products'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { BiCart } from 'react-icons/bi';
import QuantitySetter from './quantitySetter';
import { addItemToCart, getAllItemsFromCart } from '@/app/cart/cartFunctions';
import {useDispatch} from "react-redux"
import { AddProduct } from '@/app/(store)/cartSlice';


const sizes : sizesType[] = ["xs" , "s" , "m" , "l" , "xl"];

export default function ImageDisplayer({product} : {product : Product}) {
    const [currentImageIndex , setCurrentImageIndex] = useState(0);
    const [activeSize , setActiveSize ]= useState<sizesType>("s");
    const [quantity , setQuantity] = useState(1);
    console.log("Displaying images" , product);

    // sessionStorage.setItem('cart' , JSON.[]);
    // const cart = sessionStorage.getItem('cart');
    // console.log("cart   :   " , cart);

    const dispatch = useDispatch();
    
    

    return <div className='grid grid-cols-8 container'>
          <div>
            {
              product.images.map((url,index)=> <Image key={url} src={url} width={100} height={100} alt={product.name} className='bg-gray-200 mb-5' onMouseEnter={()=>{
                setCurrentImageIndex(index);
              }} />)
            }
          </div>
          <div className='col-span-4'>
            { <Image src={product.images[currentImageIndex]} width={300} height={300} alt={product.name} className='bg-gray-200 w-full' style={{height:"600px"}} /> }
        </div> 
          <div className='col-span-3 ml-10 pt-20'>
            <p className='text-3xl font-semibold'>{product.name}</p>
            <p className='text-2xl font-semibold text-gray-400 mt-5'>{product.category}</p>
            <p className='text-xl font-semibold mt-16'>Select Size</p>
            <div className='flex mt-3'>
                {
                    sizes.map(size => <button className={`rounded-full hover:shadow-xl hover:border-2 active:translate-y-4 transition ease-in-out duration-100 w-16 h-16 cursor-pointer flex justify-center items-center text-xl text-gray-600 font-semibold ${activeSize == size ? "bg-gray-200" : ""}`} onClick={()=>{
                        setActiveSize(size);
                    }}>{size.toUpperCase()}</button>)
                }
            </div>
            <div className='flex mt-10'>
                <span className='text-2xl font-semibold mr-16'>Quantity:</span> 
                <QuantitySetter getQuantity={()=>quantity} negativeFunc={()=>{
                    if(quantity>1)
                        setQuantity(quantity-1);
                    }} 
                postiveFunc={()=>{
                    setQuantity(quantity+1)
                }}
                />
            </div> 
            <div className='mt-10'>
                <Button size="lg" className='text-xl py-7' onClick={()=>{
                    addItemToCart({id:product.id , size: activeSize, quantity:quantity });
                    dispatch(AddProduct({id:product.id , size: activeSize, quantity:quantity }));
                }}><BiCart size={30} /> Add to Cart</Button> <span className='ml-5 text-3xl font-semibold'>${product.price}</span>

            </div>
          </div>
    </div>
    

}

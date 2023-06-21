import React from 'react'

export default function QuantitySetter({getQuantity , negativeFunc , postiveFunc}:{getQuantity:()=>number ; negativeFunc:()=>void ; postiveFunc:()=>void}) {
  return (
    <div className='flex'>
        <button className='rounded-full w-10 h-10 cursor-pointer flex justify-center items-center text-4xl text-gray-600 bg-gray-200' onClick={negativeFunc}>-</button>
                    <span className='mx-5 text-3xl flex justify-center items-center'>{getQuantity()}</span>
                    <button className='rounded-full w-10 h-10 cursor-pointer flex justify-center items-center text-4xl text-gray-600 border-black border-2' onClick={postiveFunc}>+</button>
    </div>
  )
}

'use client'
import Link from 'next/link';
import React from 'react'
import {BiCart} from "react-icons/bi"

export type navLink = {
    title:string;
   url:string; 
}

const navLinks : navLink[] = [{title:"Female" , url:"/female"} , {title:"Male" , url:"/male"}, {title:"Kids" , url:"/kids"} , {title:"All products" , url:"/all_products"}]

export default function Navbar() {
  return (
    <header className="text-gray-600">
  {/* <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"> */}
    
    <nav className="md:ml-auto md:mr-auto w-5/6 pt-10 flex flex-wrap items-center text-base"> 
      <Link className="text-2xl text-black font-bold w-1/3" href="/">Jam Store</Link>
    <div className='w-2/3 flex justify-between'>
        <>
        {
            navLinks.map((link,i)=> <Link key={link.title} className="mr-8 text-xl hover:text-gray-900 inline-flex items-center" href={link.url}>{link.title}</Link>
            )
        }
      </>
     
  <div className="flex justify-center items-center border-gray-200 rounded-sm border-2 pl-2">
  <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-7 w-6">
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clip-rule="evenodd" />
      </svg>
    <input
      type="search"
      className="px-2 py-1 w-80 outline-none "
      placeholder="What are you looking for?"
      aria-label="Search"
      aria-describedby="button-addon1" />
  </div>
  <Link href="/cart" className='relative'>
    <BiCart size={50} className='bg-gray-200 rounded-full p-2'/>
    <div className='absolute top-0 right-0 bg-red-500 rounded-full w-5 h-5 text-white flex justify-center items-center'>2</div>
  </Link>
  </div>
    </nav>
</header>
  )
}

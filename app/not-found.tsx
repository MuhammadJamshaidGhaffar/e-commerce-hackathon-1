import React from 'react'
import {HiMagnifyingGlass} from "react-icons/hi2"

export default function NotFound() {
  return (
    <div className='pt-52'>
      <h1 className='text-6xl flex justify-center items-center'><HiMagnifyingGlass /> <span className='ml-5'>Not Found</span></h1>
      <p className='text-center text-2xl text-gray-600 mt-5'>Sorry this page doesn't exists</p>
      </div>
  )
}

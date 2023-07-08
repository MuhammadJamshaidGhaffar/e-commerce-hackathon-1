import React from 'react'

import {products} from "@data/products"
import NotFound from '@/app/not-found';
import Image from 'next/image';
import ImageDisplayer from './ImageDisplayer';
import ProductInformation from './ProductInformation';
import { Metadata } from 'next';

export default function page({params} : {params:{productId : string;}}) {
  const {productId} = params;
  console.log(productId);
  const product = products.find(p => p.id == productId);
if(!product){
  return <NotFound />
}
else{
    return (
      <section className='mt-12 bg-gray-50 py-20'>
        <ImageDisplayer product={product} />
        <ProductInformation product={product}/>
      </section>
    )
  }
}

export function generateMetadata({params} : {params:{productId : string;}}):Promise<Metadata>{
  return {
    title:"Product",
  }
}
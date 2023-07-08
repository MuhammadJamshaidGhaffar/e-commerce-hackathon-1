// 'use client';

import './globals.css'
import { Poppins } from 'next/font/google'
import Navbar from './Navbar'
import Footer from './Footer'
import { CartBtnContext } from './MyContext'
import ProviderWrapper from './(store)/ProviderWrapper';

const poppins = Poppins({ subsets: ['latin']  , weight:['100','200','300','400','500','600','700','800']})

export const metadata = {
  title: 'JamStore',
  description: 'Created by Muhammad Jamshaid Ghaffar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-bg`}>
        <div className=''>
          <ProviderWrapper>
            {children}
          </ProviderWrapper>
        </div>  
        </body>
    </html>
  )
}


// export const w = wrapper.withRedux(RootLayout);

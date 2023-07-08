import './globals.css'
import { Poppins } from 'next/font/google'
import Navbar from './Navbar'
import Footer from './Footer'
// import { Provider } from 'react-redux'
// import { wrapper } from './(store)/store'

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
        <div className=''>=
            <Navbar />
              <div>
                 {children}
               </div>
            <Footer />=
        </div>  
        </body>
    </html>
  )
}


// export const w = wrapper.withRedux(RootLayout);

'use client';

import Footer from "../Footer";
import Navbar from "../Navbar";
import { store, wrapper } from "./store";
import { Provider } from "react-redux";


export default function ProviderWrapper({children}:{children:any}){
  return(
    <div className=''>
          <Provider store={store}>
            <Navbar />
              <div>
                 {children}
               </div>
            <Footer />

          </Provider>
        </div>  
  );
}

// export default wrapper.withRedux(ProviderWrapper);
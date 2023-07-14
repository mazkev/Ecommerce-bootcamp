import React from 'react'
import Product2 from '../Components/Recomended'
import Header3 from '../Components/Header3'
import Footer from '../Components/Footer'
import CheckOut from '../Components/CheckOut'

function PageRecomend() {
  return (
    <div  className='bg-[#F6F6F6]'>
           
    <Header3/>
    <div className="container mx-auto bg-white rounded rounded-lg my-20 p-5">
        
    <CheckOut/>
    </div>
    
    <div className="container mx-auto my-20">

         <div className="flex grid grid-cols-12 gap-10 justify-center items-center">
            <div className="grid col-span-3">
                <Product2/>
            </div>
            <div className="grid col-span-3">
                <Product2/>
            </div>
            
        </div>
         </div>
    
        <Footer/>
    
    
</div>
  )
}

export default PageRecomend
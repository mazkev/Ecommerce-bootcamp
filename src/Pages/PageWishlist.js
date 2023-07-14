import React from 'react'
import Header2 from '../Components/Header2'
import product2 from '../Components/Wishlist'
import Footer from '../Components/Footer'
import Product2 from '../Components/Product2'

function PageWishlist() {
  return (
    <div className='bg=[#F6F6F6]' >
           
    <Header2/>
    
    <div className="container mx-auto bg-white rounded rounded-lg my-20 p-5">
         </div>

         <div className="container mx-auto my-20">

         <div className="flex grid grid-cols-12 gap-10 justify-center items-center">
            <div className="grid col-span-3">
                <Product2/>
            </div>
            <div className="grid col-span-3">
                <Product2/>
            </div>
            <div className="grid col-span-3">
                <Product2/>
            </div>
            <div className="grid col-span-3">
                <Product2/>
            </div>
            <div className="grid col-span-3">
                <Product2/>
            </div>
            <div className="grid col-span-3">
                <Product2/>
            </div>
            <div className="grid col-span-3">
                <Product2/>
            </div>
            <div className="grid col-span-3">
                <Product2/>
            </div>
            </div>
            </div>
    <div>
        <Footer/>
    </div>
    
</div>
  )
}

export default PageWishlist
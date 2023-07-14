import React from 'react'
import Diskon from "../Components/Diskon"
import Header2 from "../Components/Header2"
import SliceImg from "../Components/SliceImg"
import ListProduct from "../Components/ListProduct"
import Footer from "../Components/Footer"
import Product from '../Components/Product'

function Home() {
  return (
    <>
    <div >
           
    <Header2/>
    
    <SliceImg/>

    <div className="container h-full w-full bg-white mx-auto my-20">
            <div className="flex grid grid-cols-12 justify-center items-center gap-20 p-5 outline outline-2 outline-blue my-20">
            <div className="grid col-span-3">
                <Product/>
            </div>
            <div className="grid col-span-3">
                <Product/>
            </div>
            <div className="grid col-span-3">
                <Product/>
            </div>
            </div>
        <div className="flex grid grid-cols-12 gap-10 justify-center items-center">
            <div className="grid col-span-3">
                <Product/>
            </div>
            <div className="grid col-span-3">
                <Product/>
            </div>
            <div className="grid col-span-3">
                <Product/>
            </div>
            <div className="grid col-span-3">
                <Product/>
            </div>
            <div className="grid col-span-3">
                <Product/>
            </div>
            <div className="grid col-span-3">
                <Product/>
            </div>
            <div className="grid col-span-3">
                <Product/>
            </div>
            <div className="grid col-span-3">
                <Product/>
            </div>
        </div>
        </div>
        <Footer/>
    
    
</div>
</>
  )
}

export default Home
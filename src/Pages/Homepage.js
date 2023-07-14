
import Header from "../Components/Header"
import SliceImg from "../Components/SliceImg"
import Footer from "../Components/Footer"
import React, {useState, useEffect} from "react"
import { fetchData } from "../Store/DataSlice"
import { useDispatch, useSelector } from "react-redux"
import Product from "../Components/Product"


function Homepage() {
    

  
  
    return(
        <>
        
           
            <Header/>
            
            <SliceImg/>

            <div className="container h-full w-full mx-auto my-20">
        <div className="flex grid grid-cols-4 justify-center items-center gap-20 p-5 outline outline-2 outline-blue my-20">
          
            <div  className="flex grid col-auto row-auto">
              <Product/>
            </div>
          
        </div>
        <div className="flex grid grid-cols-12 gap-10 justify-center items-center">
          
            <div  className="grid col-span-3">
              
            </div>
          
        </div>
        </div>
        
        
      
            
                <Footer/>
            
            
        </>
    );       
}

export default Homepage;
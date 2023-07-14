import React from 'react'
import Product2 from './Product2'

function ListProduct() {
  return (
    <div>
        <h2 className='p'>Product</h2>
            <div className='kotak1'>
                <Product2/>
                <Product2/>
                <Product2/>
                <Product2/>
            </div>
            <div className='kotak1'>
                <Product2/>
                <Product2/>
                <Product2/>
                <Product2/>
            </div>
    </div>
  )
}

export default ListProduct
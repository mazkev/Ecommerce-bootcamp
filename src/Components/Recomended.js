import React from 'react'
import Product2 from './Product2'

function Recomended() {
  return (
    <div>
        <h2 className='p'>Rekomendasi</h2>
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

export default Recomended
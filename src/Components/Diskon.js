import React from 'react'
import Product from './Product'
import geser from '../Assets/img/geser.png'

function Diskon() {
  return (
    <div>
    <div className='diskon'>
    <h2>Diskon</h2>
    <div className='angka'>12.12</div>
</div>
<div className='kotak'>
    <Product/>
    <img src={geser} className='geser' alt=''/>
</div>
</div>
  )
}

export default Diskon
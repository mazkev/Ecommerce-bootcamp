import love from '../Assets/img/love.png'
function Product2(){
    return(
        <div className="product4">
            <div className="product3">
                <ul className='ul'>
                    <li className='satu'>Product</li>
                    <li className='dua'>IDR 300.000</li>
                </ul>
                <div className='sell'>
                    <div className='beli'>Beli</div>
                    <img src={love} className='love' alt=''/>
                </div>
               
            </div>
        </div> 
    )
}
export default Product2
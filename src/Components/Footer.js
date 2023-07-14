import facebook from '../Assets/img/facebook.png'
import instagram from '../Assets/img/ig.png'
import whatsApp from '../Assets/img/wa.png'
function Footer() {
    return(
        <>
        <selection className="container w-screen h-screen mx-auto">
            <footer className="flex flex-col justify-center items-center gap-5 pt-8 pb-4 bg-blue">
                <h2 className="text-white text-[50px] font-bold">Shop</h2>
                <div className="flex gap-8">
                <img src={facebook} className='rounded-full bg-transparent w-[60px] h-[60px]' alt=''/>
                <img src={instagram} className='rounded-full bg-transparent w-[60px] h-[60px]' alt=''/>
                <img src={whatsApp} className='rounded-full bg-transparent w-[60px] h-[60px]' alt=''/>
            </div>
            <p className="text-white text-[24px]">© 2023 Shop. All rights reserved</p>
            </footer>
        </selection>
        </>
    )
}
export default Footer
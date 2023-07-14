
import '../Assets/css/App.css';
import imag from '../Assets/img/jualan1.png';
import { Link } from 'react-router-dom';

function FormRegist() {

  return (
    
    <div>
        <div className="daftar">
            <div className="daftar1">
                    <img src={imag} className='tas' alt=''/>
                <div className='daftar2'>
                    <h3 className='regis'>Daftar</h3>
                    <h3 className='regis1'>Username</h3>
                    <input type='text' placeholder='Masukan Username' className='form4'/>
                    <h3 className='regis1'>Email</h3>
                    <input type='text' placeholder='Masukan Email' className='form4'/>   
                    <h3 className='regis1'>Password</h3>
                    <input type='text' placeholder='Masukan Password' className='form4'/>   
                    <h3 className='regis1'>Konfirmasi</h3>
                    <input type='text' placeholder='Konfirmasi Password' className='form4'/>  
                    <div className='daftar3'>
                        <button/>
                        <h4>I Agree</h4>
                    </div>
                    <div className='daftar4'>Daftar</div>       
                </div>
            </div>
        </div>
        <li className='daftar5'><h3>Sudah punya akun ?</h3><Link to='/Login'>Login</Link></li>
    </div>

    

  )
}

export default FormRegist;

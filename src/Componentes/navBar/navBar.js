import React from 'react';
import './navBar.css';
import logoPetShop from '../imagenes/logo-Con.png';
import CartWidget from '../CartWidget';
import  {Link} from 'react-router-dom'

import { CartCountProvider } from '../../Context/cartCountContext';

const NavBar = () => {
  
    return (
      
        <nav className='navBar'>
        <Link className='lp' to=''><img className='logoPet' src={logoPetShop} alt='LogoPetShop'/></Link>
         <ul className='navList'>
          <li className='navOption'><Link to=''>Home</Link></li>
          <li className='navOption'><Link to='/shop/category/todos'>Shop</Link></li>
          <li className='navOption'><Link to='/sucursal'>Sucursal</Link></li>
         </ul>
         <CartCountProvider> <Link>< CartWidget /></Link></CartCountProvider>
        <div className='redes'>
                <Link to="https://www.instagram.com/dejandohuellitastienda/"><i class="fa-brands fa-instagram" aria-hidden="true"></i></Link>
                <Link to="#"><i class="fa-brands fa-facebook" aria-hidden="true"></i></Link>
                <Link to="#"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i></Link>
        </div>
       </nav>
    );
  };
  
  export default NavBar;
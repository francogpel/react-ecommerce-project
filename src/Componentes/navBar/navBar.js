import React from 'react';
import './navBar.css';
import logoPetShop from '../imagenes/logo-Con.png';
import CartWidget from '../CartWidget';
import  {Link} from 'react-router-dom'


const NavBar = () => {
    return (
        <nav className='navBar'>
        <Link to='/home'><img className='logoPet' src={logoPetShop} alt='LogoPetShop'/></Link>
         <ul className='navList'>
          <li className='navOption'><Link to='/home'>Home</Link></li>
          <li className='navOption'><Link to='/shop'>Shop</Link></li>
          <li className='navOption'><Link to='/sucursal'>Sucursal</Link></li>
         </ul>
        <a>< CartWidget /></a>
       </nav>
    );
  };
  
  export default NavBar;
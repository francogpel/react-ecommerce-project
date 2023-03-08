import React from 'react';
import './footer.css';
import logoPetShop from '../imagenes/logo-Con.png';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='footer'>
            <div class="footer-logo mr-50">
               <Link to='/home'><img class="logo-p" src={logoPetShop} alt=""/></Link>
             </div>
             <p class="copy">
                Copyright &copy; Dejando Huellitas | Por ellos y para ellos ♡<i class="fa fa-heart-o" aria-hidden="true"></i></p>
                desingweb created by<Link to="https://www.instagram.com/francogpel/?utm_medium=copy_link" target="_blank"> francogpel </Link>
             
        </div>
    );
  };
  
  export default Footer;
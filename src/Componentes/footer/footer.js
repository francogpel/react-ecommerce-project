import React from 'react';
import './footer.css';
import logoPetShop from '../imagenes/logo-Con.png';


const Footer = () => {
    return (
        <div className='footer'>
            <div class="footer-logo mr-50">
               <a href="index.html"><img class="logo-p" src={logoPetShop} alt=""/></a>
             </div>
             <p class="copy">
                Copyright &copy; Dejando Huellitas | Por ellos y para ellos ♡<i class="fa fa-heart-o" aria-hidden="true"></i></p>
                desingweb created by <a href="" target="_blank">:D</a><a href="https://www.instagram.com/francogpel/?utm_medium=copy_link" target="_blank"> francogpel </a>
             
        </div>
    );
  };
  
  export default Footer;
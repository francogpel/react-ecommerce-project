import React from 'react';
import './popularProd.css';
import POPULARES from '../imagenes/popularProduct'


const PopularProducts = () => {
    return (
        <div className='populares'>
            <div className='column'>
                <a><img alt='' src= {POPULARES.img1} /></a>
                <a><img alt='' src= {POPULARES.img4} /></a>
                <a><img alt='' src= {POPULARES.img7} /></a>
            </div>
            <div className='column'>
                <a><img alt='' src= {POPULARES.img2}  /></a>
                <a><img alt='' src= {POPULARES.img5} /></a>
                <a><img alt='' src= {POPULARES.img8} /></a>
            </div>
            <div className='column'>
                <a><img alt='' src= {POPULARES.img3} /></a>
                <a><img alt='' src= {POPULARES.img6} /></a>
                <a><img alt='' src= {POPULARES.img9} /></a>
            </div>
        </div>
    );
  };
  
  export default PopularProducts;
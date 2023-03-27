import React from 'react';
import './popularProd.css';
import POPULARES from '../imagenes/popularProduct'


const PopularProducts = () => {
    return (
        <div className='populares'>
            <div className='column'>
                <><img alt='' src= {POPULARES.img1} /></>
                <><img alt='' src= {POPULARES.img4} /></>
                <><img alt='' src= {POPULARES.img7} /></>
            </div>
            <div className='column'>
                <><img alt='' src= {POPULARES.img2}  /></>
                <><img alt='' src= {POPULARES.img5} /></>
                <><img alt='' src= {POPULARES.img8} /></>
            </div>
            <div className='column'>
                <><img alt='' src= {POPULARES.img3} /></>
                <><img alt='' src= {POPULARES.img6} /></>
                <><img alt='' src= {POPULARES.img9} /></>
            </div>
        </div>
    );
  };
  
  export default PopularProducts;
import React from 'react';

import './Producto.css';
import Imagen from '../images/image';
import AddCart from '../addCart/addCart';
import View from '../view/view';
import { Link } from 'react-router-dom';

import { CartCountProvider } from '../../Context/cartCountContext';


const PRODUCTO = ({ Producto }) => {
  const { imagen, titulo, precio, detalles, id} = Producto;
  return (
    <div className="Producto">
      <Imagen className src={imagen} alt={titulo} />
      <div className='item-info'>
      <div>
      <p><strong>{precio}</strong></p>
      <h3 className='titulo'>{titulo}</h3>
      <p className='detail-shop'>{detalles}</p>
      </div>
      <div>
      <CartCountProvider><div className='carritoAdd'><AddCart/></div></CartCountProvider> 
        <Link to={id} className='ViewProd'><View/></Link>
      </div>
      </div>
    </div>
  );
};

export default PRODUCTO;
import React from 'react';

import './Producto.css';
import Imagen from '../images/image';
import AddCart from '../addCart/addCart';
import View from '../view/view';
import { Link } from 'react-router-dom';

const PRODUCTO = ({ Producto }) => {
  const { imagen, titulo, precio, detalles, id } = Producto;
  return (
    <div className="Producto">
      <Imagen src={imagen} alt={titulo} />
      <div className='item-info'>
      <div>
      <p><strong>{precio}</strong></p>
      <h3 className='titulo'>{titulo}</h3>
      <p>{detalles}</p>
      </div>
      <div>
        <div className='carritoAdd'><AddCart/></div>
        <Link to={id} className='ViewProd'><View/></Link>
      </div>
      </div>
    </div>
  );
};

export default PRODUCTO;
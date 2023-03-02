import React from 'react';

import './Producto.css';
import Imagen from '../images/image';
import AddCart from '../addCart/addCart';
import View from '../view/view';

const PRODUCTO = ({ Producto }) => {
  const { imagen, titulo, precio, detalles } = Producto;
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
        <div className='ViewProd'><View/></div>
      </div>
      </div>
    </div>
  );
};

export default PRODUCTO;
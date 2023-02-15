import React from 'react';

import './ProductList.css';

import PRODUCTO from '../Producto/Producto';

const PRODUCTSLIST = ({ Productos }) => {
  return (
    <div className="productslist">
      {Productos.map((Producto) => (
        <PRODUCTO Producto={Producto} />
      ))}
    </div>
  );
};

export default PRODUCTSLIST;

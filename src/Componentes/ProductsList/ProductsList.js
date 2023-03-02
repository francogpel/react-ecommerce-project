import React from 'react';
import './ProductsList.css';
import PRODUCTO from '../Producto/Producto';

const PRODUCTSLIST = ({ Productos }) => {
  return (
    <div className="Productslist">
      {Productos.map((Producto) => (
        <PRODUCTO Producto={Producto} />
      ))}
    </div>
  );
};

export default PRODUCTSLIST;

import React from 'react';

import './Producto.css';

import Imagen from '../image/image';

const PRODUCTO = ({ Producto }) => {
  const { imagen, titulo, precio, detalles } = Producto;
  return (
    <div className="Producto">
      <Imagen src={imagen} alt={titulo} />
      <p>{titulo}</p>
      <p>
        <strong>{precio}</strong>
      </p>
      <p>{detalles}</p>
    </div>
  );
};

export default PRODUCTO;
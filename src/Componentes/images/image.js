import React from 'react';

import './image.css';

const Imagen = ({ src, alt }) => {
  return <img src={src} alt={alt} className="imagen" />;
};

export default Imagen;

import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';


const ProductID = ({product}) => {
//   const { id } = useParams();
//   const [product, setProduct] = useState({});

//   useEffect(() => {
//     fetch(`shop/${id}`)
//       .then((res) => res.json())
//       .then(setProduct);
//   }, [id]);

  return (
    <div>
      
      <img src={product.image}/>
      <h3>Nombre: {product.nombre}</h3>
      <h3>$ {product.precio}</h3>
      <p>detalles: {product.nombre}</p>
    </div>
  );
};

export default ProductID;

import React, { useEffect, useState } from 'react';
import ProductID from '../productID/productID';
 
const element =   {id:1 ,precio:'0', image:'http://via.placeholder.com/600x400', nombre:'producto'};

export const ProductDetail = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const IdProduct = new Promise(resolve =>  {
      setTimeout(() => {
        resolve(element)
      }, 0);
    });
     IdProduct.then(res => setProduct(res));
  }, []);

  return (
    <div>
      <ProductID product= { product }/>
    </div>
  );
};

export default ProductDetail;

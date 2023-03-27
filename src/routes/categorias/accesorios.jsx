import React from 'react';
import Categories from '../../Componentes/categories/categories';
import PRODUCTSLISTCONTAINER from '../../Componentes/ProductsListContainer/ProductsListContainer';


const Accesorios = () => {
  
  return (
    <div className='row'>
      <main>
        <Categories />
        <PRODUCTSLISTCONTAINER />
      </main>
    </div>
  );
};

export default Accesorios;

import React from "react";
import PRODUCTSLISTCONTAINER from '../../Componentes/ProductsListContainer/ProductsListContainer';
import Categories from "../../Componentes/categories/categories";

const Shop = () =>  {
    return(
       
        <div className='row'>
         <main>
          < Categories />
          < PRODUCTSLISTCONTAINER />
         </main>
        </div>
      
   );
}

export default Shop;
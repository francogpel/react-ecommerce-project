import React from "react";
import PRODUCTSLISTCONTAINER from '../../Componentes/ProductsListContainer/ProductsListContainer';
import Categories from "../../Componentes/categories/categories";


const Alimentos = () =>  {
    return(
      
        <div className='row'>
         <main>
          < Categories />
          < PRODUCTSLISTCONTAINER />
         </main>
        </div>

   );
}

export default Alimentos;
import React from "react";
import PRODUCTSLISTCONTAINER from '../../Componentes/ProductsListContainer/ProductsListContainer';
import Categories from "../../Componentes/categories/categories";


// import { Productos } from "../../Componentes/Productos/Productos";
// import PRODUCTO from "../../Componentes/Producto/Producto";

const Juguetes = () =>  {
  // const allCateries = [ ...new set(Productos.map(category = PRODUCTO.category))]
 

    return(
     
        <div className='row'>
         <main>
          < Categories />
          < PRODUCTSLISTCONTAINER />
         </main>
        </div>

   );
}

export default Juguetes;
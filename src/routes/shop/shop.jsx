import React from "react";
import NavBar from "../../Componentes/navBar/navBar";
import PRODUCTSLISTCONTAINER from '../../Componentes/ProductsListContainer/ProductsListContainer';
import Categories from "../../Componentes/categories/categories";
import Donation from "../../Componentes/donation/donation";
import Footer from "../../Componentes/footer/footer";

const Shop = () =>  {
    return(
        <body>
        <div className='row'>
         <header>
           < NavBar />
         </header>
         <main>
          < Categories />
          < PRODUCTSLISTCONTAINER />
         </main>
        </div>
        <section>
          < Donation />
        </section>
        <footer>
          < Footer />
        </footer>
      </body>
   );
}

export default Shop;
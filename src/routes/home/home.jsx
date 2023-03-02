import React from "react";
import NavBar from "../../Componentes/navBar/navBar";
import PopularProducts from "../../Componentes/populares/popularProd";
import Donation from "../../Componentes/donation/donation";
import Footer from "../../Componentes/footer/footer";

const Home = () =>  {
    return(
        <body>
        <div className='row'>
         <header>
           < NavBar />
         </header>
         <main>
          < PopularProducts />
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

export default Home;
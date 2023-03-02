import React from "react";
import NavBar from "../../Componentes/navBar/navBar";

import Donation from "../../Componentes/donation/donation";
import Footer from "../../Componentes/footer/footer";

const Sucursal = () =>  {
    return(
        <body>
        <div className='row'>
         <header>
           < NavBar />
         </header>
         <main>
          
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

export default Sucursal;
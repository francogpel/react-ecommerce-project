import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../Componentes/navBar/navBar";
import Donation from "../../Componentes/donation/donation";
import Footer from "../../Componentes/footer/footer";

const ProductDetail = () => {
    const {id} = useParams

    useEffect(() =>     {
        fetch(`.../${id}`)
    },[id])
 return(
    <body>
        <div className='row'>
         <header>
           < NavBar />
         </header>
         <main>
          <div>aqui habra un producto cuando tenga tiempo xD {id}</div>
         </main>
        </div>
        <section>
          < Donation />
        </section>
        <footer>
          < Footer />
        </footer>
      </body>
 )
}
export default ProductDetail;
import React from "react";
import "./itemDetail.css"
import CartCounter from "../itemCount/itemCount";

const ItemDetail = ({ product }) =>  {


    return(
       
        <div className="container">
          
          <div className="carousel prodImg">
           <div className="carousel-image">
             <img src="http://via.placeholder.com/640x360" alt="Imagen grande"/>
           </div>       
           <div className="carousel-thumbnails">
            <img src="http://via.placeholder.com/640x360" alt="Imagen 1" className="thumbnail active"/>
            <img src="http://via.placeholder.com/640x360" alt="Imagen 2" className="thumbnail"/>
            <img src="http://via.placeholder.com/640x360" alt="Imagen 3" className="thumbnail"/>
           </div>
          </div>

          <div className="prodDetail">
            <h2>PRODUCTO:{product.titulo} </h2> 
            <h2 className="price">${product.precio}</h2>
            <p class="avaibility"><i class="fa fa-circle"></i> Stock disponible</p>
            <div className="ratings">
            <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="false"></i>
            </div>
            <p className="detalles-prod">
            {product.detalles}
              Detalles del producto: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim.
            </p>
          
          <div className="add">
            <div><CartCounter/></div>
            <button className="add-cart">Agregar al carrito</button>
          </div>
          </div>
        </div>
      
   );
}

export default ItemDetail;
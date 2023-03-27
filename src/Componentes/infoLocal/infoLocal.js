import React from "react";
import POPULARES from '../imagenes/popularProduct'
import './infoLocal.css'
import { Link } from "react-router-dom";

const InfoLocal = () =>  {
    return(
        <div className="contain">
            <div className="cont-1">
                <img className="FotoLocal" src={POPULARES.img10} alt=""/>
                <p className="nosotros">Somos una familia dedicada en amar y proteger a los animalitos en situacion de calle que necesitan alimento y cuidados medicos.<br/>No pertecemos a ninguna entidad politica, todo lo que logramos es gracias al amor y apoyo de nuestra comunidad que crece dia a dia.</p>
            </div>
            <div className="cont-2">
              <div className="contacto">
                <h2>CONTACTO</h2>
                <p className="cont">Tel: 362-4000000</p>
                <p className="cont">Email: DejandoHuellitas-1@gmail.com</p>
                <p className="cont">Direccion: Juan Domingo Peron 1102 - Resistencia</p>
              </div>
                <div class="ubi-map">
                <Link to="https://goo.gl/maps/1ri7TPgiPWbTvsj99" class="ubi-map">
                  <img class="ubi heartbeat" src={POPULARES.img11} alt=""/>
                </Link> 
            </div>
           </div>
        </div>

    )
};

export default InfoLocal;
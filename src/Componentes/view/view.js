import React from "react";
import { Link } from "react-router-dom";
import './view.css';


const View = () =>  {
    
    return(
        <Link to={ '/shop/product/=id' }><button className="view">Detalles...</button></Link>
    );
}

export default View;
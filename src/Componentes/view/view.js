import React from "react";
import { Link } from "react-router-dom";
import './view.css';


const View = () =>  {
    
    return(
        <Link to={ '/shop/=id' }><button className="view">View</button></Link>
    );
}

export default View;
import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import './addCart.css'

const AddCart = () =>   {
  const [liked, setliked] = useState(false);

  const clickHandler = () =>  {
    setliked(!liked);
  };

    return (
        <div className="add">
          <div onClick={clickHandler}>
            {liked ?  <i className="not-add fas fa-cart-arrow-down" style={{ fontSize: '30px' }}></i>
                        :  
                      <i className="add fas fa-cart-plus" style={{ fontSize: '30px' }}></i>
 }</div>
        </div>
    );
}

export default AddCart;
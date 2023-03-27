import React, { useContext, useState } from "react";
import "./addCart.css";
import { CartCountContext } from "../../Context/cartCountContext";

const AddCart = () => {
  const [liked, setliked] = useState(false);
  const { addToCart, removeFromCart } = useContext(CartCountContext);

  const clickHandler = () => {
    setliked(!liked);
    if (liked) {
      removeFromCart();
    } else {
      addToCart();
    }
  };

  return (
    <div className="add">
      <div onClick={clickHandler}>
        {liked ? (
          <i className="not-add fas fa-cart-arrow-down" style={{ fontSize: "30px" }}></i>
        ) : (
          <i className="add fas fa-cart-plus" style={{ fontSize: "30px" }}></i>
        )}
      </div>
    </div>
  );
};

export default AddCart;

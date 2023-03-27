import React, { useContext } from "react";
import { CartCountContext } from "../Context/cartCountContext";

const CartWidget = () => {
  const { cartItems } = useContext(CartCountContext);

  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart" style={{ fontSize: "30px" }}></i>
      <span className="cart-notification">{cartItems}</span>
    </div>
  );
};

export default CartWidget;

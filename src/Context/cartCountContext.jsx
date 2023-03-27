import React, { createContext, useState } from "react";

 const CartCountContext = createContext();

 const CartCountProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };
  const removeFromCart = () => {
    if (cartItems > 0) {
      setCartItems(cartItems - 1);
    }
  };

  return (
    <CartCountContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartCountContext.Provider>
  );
};

export {CartCountProvider, CartCountContext};
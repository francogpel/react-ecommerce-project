import React from "react";

const CartContext = React.createContext();

const CartProvider = ({children}) => {
    return(
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    )

}

export {CartProvider, CartContext};
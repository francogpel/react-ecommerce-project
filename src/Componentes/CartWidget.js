import React from 'react';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart" style={{ fontSize: '30px' }}></i>
      <span className="cart-notification">0</span>
    </div>
  );
};

export default CartWidget;
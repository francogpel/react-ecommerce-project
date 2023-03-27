import React, { useState } from "react";
import "./itemCount.css"

function CartCounter() {
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button className="count" onClick={decrementCount}>-</button>
      <span className="number">{count}</span>
      <button className="count" onClick={incrementCount}>+</button>
    </div>
  );
}

export default CartCounter;

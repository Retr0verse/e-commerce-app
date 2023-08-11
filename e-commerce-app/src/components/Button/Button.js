import React from 'react';
import './Button.css';

const Button = ({ onAddToCart, onRemoveFromCart }) => {
  return (
    <div className="button-section">
      <button onClick={onAddToCart}>Add to Cart</button>
      <button onClick={onRemoveFromCart}>Remove from Cart</button>
      <button>Checkout</button>
    </div>
  );
};

export default Button;

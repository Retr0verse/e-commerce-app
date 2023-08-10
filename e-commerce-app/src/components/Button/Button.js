import React, { useState } from 'react';
import './Button.css';

const Button = ({ product }) => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = () => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = () => {
    const updatedCart = cartItems.filter(item => item.id !== product.id);
    setCartItems(updatedCart);
  };

  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <div className="button-section">
      {cartItems.some(item => item.id === product.id) ? (
        <>
          <button onClick={handleRemoveFromCart}>Remove from Cart</button>
          <p>Added to Cart</p>
        </>
      ) : (
        <button onClick={handleAddToCart}>Add to Cart</button>
      )}
      <p>Total Price: ${calculateTotalPrice()}</p>
    </div>
  );
};

export default Button;

import React from 'react';

const CartItem = ({ item, cartItems, setCartItems }) => {
  const removeFromCart = () => {
    setCartItems((prevCartItems) => prevCartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  return (
    <div className="cart-item">
      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={removeFromCart}>Remove from Cart</button>
    </div>
  );
};

export default CartItem;

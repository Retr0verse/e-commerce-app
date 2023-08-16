import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  const totalPrice = item.price * item.quantity;

  return (
    <div className="cart-item">
      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Total: ${totalPrice.toFixed(2)}</p>
      <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
    </div>
  );
};

export default CartItem;

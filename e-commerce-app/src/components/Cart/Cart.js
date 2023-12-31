import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = ({ cartItems }) => {
  const calculateTotalPrice = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    // Use toFixed() to round the total to 2 decimal places
    return total.toFixed(2);
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <h4>Total Price: ${calculateTotalPrice()}</h4>
          <button>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;

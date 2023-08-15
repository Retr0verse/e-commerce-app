import React from 'react';
import CartItem from '../../components/CartItem/CartItem';
import './CartPage.css';

const CartPage = ({ cartItems, removeFromCart }) => {
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
          ))}
          <h4>Total Price: ${calculateTotalPrice()}</h4>
          <button>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;

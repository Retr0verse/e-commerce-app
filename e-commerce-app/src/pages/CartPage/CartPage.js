import React from 'react';
import CartItem from '../../components/CartItem/CartItem';
import './CartPage.css';
import { Link } from 'react-router-dom';


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
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart} // Pass the function down
            />
          ))}
          <h4>Total Price: ${calculateTotalPrice()}</h4>
          <Link to="/checkout">
        <button>Checkout</button>
      </Link>        </div>
      )}
    </div>
  );
};

export default CartPage;

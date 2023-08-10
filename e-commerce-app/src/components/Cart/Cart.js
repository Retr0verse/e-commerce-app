import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CartItem from './CartItem';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/carts/1');
      setCartItems(response.data.products);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <div>
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

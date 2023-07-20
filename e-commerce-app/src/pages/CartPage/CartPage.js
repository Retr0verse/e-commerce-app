import React, { useEffect, useState } from 'react';
import CartItem from './CartItem'; // Assuming you have a CartItem component to render individual items in the cart
import './CartPage.css';
import axios from 'axios';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/carts/1'); // Replace '1' with the cart ID you want to fetch
      setCartItems(response.data.products);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      {cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;

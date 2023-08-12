import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CartItem from '../../components/CartItem/CartItem';
import Cart from '../../components/Cart/Cart'; // Make sure the import path is correct
import './CartPage.css';

const CartPage = () => {
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
            <CartItem key={item.id} item={item} cartItems={cartItems} setCartItems={setCartItems} />
          ))}
          <Cart cartItems={cartItems} setCartItems={setCartItems} />
        </div>
      )}
    </div>
  );
};

export default CartPage;

import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import axios from 'axios';
import './JewelryProductPage.css';
import Button from '../../components/Button/Button'; // Import the Button component

const JewelryProductPage = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]); // Initialize cart items state

  useEffect(() => {
    fetchProductsByCategory('jewelery');
  }, []);

  const fetchProductsByCategory = async (category) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleAddToCart = (product) => {
    // Add product to cartItems
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (productId) => {
    // Remove product from cartItems
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <div className="jewelry-product-page">
      <h1>Explore Jewelry</h1>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => handleAddToCart(product)}
              onRemoveFromCart={() => handleRemoveFromCart(product.id)}
              isInCart={cartItems.some(item => item.id === product.id)}
            />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
      <Button onAddToCart={() => {}} onRemoveFromCart={() => {}} />
    </div>
  );
};

export default JewelryProductPage;

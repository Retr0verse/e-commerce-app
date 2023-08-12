import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../../components/ProductCard/ProductCard';
import Cart from '../../components/Cart/Cart'; // Make sure to import Cart component
import './JewelryProductPage.css';

const JewelryProductPage = () => {
  const [jewelryProducts, setJewelryProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]); // Add cartItems state

  useEffect(() => {
    fetchProductsByCategory("jewelery");
  }, []);

  const fetchProductsByCategory = async (category) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
      setJewelryProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
  };

  return (
    <div className="jewelry-product-page">
      <h1>Explore Jewelry</h1>
      <div className="product-grid">
        {jewelryProducts.length > 0 ? (
          jewelryProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart} // Pass the addToCart function as a prop
            />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
      <Cart cartItems={cartItems} /> {/* Display the cart */}
    </div>
  );
};

export default JewelryProductPage;

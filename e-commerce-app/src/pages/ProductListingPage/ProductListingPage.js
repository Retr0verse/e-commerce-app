import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../../components/ProductCard/ProductCard';
import Cart from '../../components/Cart/Cart'; // Make sure to import Cart component
import './ProductListingPage.css';

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]); // Add cartItems state

  useEffect(() => {
    fetchProductsByCategory("women's clothing");
  }, []);

  const fetchProductsByCategory = async (category) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
  };

  return (
    <div className="product-listing-page">
      <h1>Explore Women's Clothing</h1>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
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

export default ProductListingPage;

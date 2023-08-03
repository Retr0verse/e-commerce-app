import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { fetchComputerProducts } from '../../utils/api'; // Import the correct function fetchProducts
import './HomePage.css';

const HomePage = () => {
  const [computerProducts, setComputerProducts] = useState([]); // Use state to store the computer products

  useEffect(() => {
    const loadComputerProducts = async () => {
      try {
        const allProducts = await fetchComputerProducts(); // Fetch all products using the API (assuming you have a function for this)
        const computerProducts = allProducts.filter((product) => product.category === 'computer');
        setComputerProducts(computerProducts);
      } catch (error) {
        console.error('Error fetching computer products:', error);
      }
    };

    loadComputerProducts();
  }, []);

  return (
    <div>
      <h1>Welcome to Dragon PC!</h1>
      <div className="product-grid">
        {computerProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

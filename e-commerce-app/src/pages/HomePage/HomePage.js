import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { fetchProductsByCategory } from '../../utils/api'; // Assuming you have a function fetchProductsByCategory
import './HomePage.css';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts(); // Fetch products from the default category (e.g., "women's clothing")

  }, []);

  const fetchProducts = async () => {
    try {
      const data = await fetchProductsByCategory("women's clothing");
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="homepage-container">
      <div className="hero-section">
        <h1>Welcome to Fashion Emporium!</h1>
        <p>Shop the latest trends in women's clothing and jewelry.</p>
      </div>

    </div>
  );
};

export default HomePage;

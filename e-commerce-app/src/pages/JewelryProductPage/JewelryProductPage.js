import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import axios from 'axios';
import './JewelryProductPage.css';

const JewelryProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductsByCategory('jewelery'); // Fetch products from the 'jewelery' category

  }, []);

  const fetchProductsByCategory = async (category) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="jewelry-product-page">
      <h1>Explore Jewelry</h1>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default JewelryProductPage;

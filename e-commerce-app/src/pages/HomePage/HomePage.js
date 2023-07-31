import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard'; // Use the correct relative path
import ProductsData from '../../data/ProductsData'; // Use the correct relative path



const HomePage = () => {
  const products = ProductsData(); // Fetch products data from the backend API

  return (
    <div>
      <h1>Welcome to Our E-Commerce Store!</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

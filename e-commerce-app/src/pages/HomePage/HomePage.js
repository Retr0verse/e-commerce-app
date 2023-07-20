import React from 'react';
import ProductCard from './ProductCard'; // Assuming you have a ProductCard component to render individual products
import ProductsData from './ProductsData'; // Assuming you have a component to fetch products data

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

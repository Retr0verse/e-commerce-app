import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Emporium!</h1>
          <p>Shop the latest trends in women's clothing and jewelry.</p>
          <a href="#/products" className="shop-now-link">Shop Now</a>
        </div>
      </div>
      <div className="product-grid">
        {/* No products to display */}
      </div>
    </div>
  );
};

export default HomePage;

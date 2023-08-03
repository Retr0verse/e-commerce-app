import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="hero">
        <h1>Welcome to Fashion Emporium!</h1>
        <p>Discover the latest trends in women's clothing and jewelry.</p>
        <Link to="/products" className="explore-btn">Explore Collections</Link>
      </div>
    </div>
  );
};

export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">EMPORIUM</Link>
      </div>
      <nav className="nav-links">
        <Link to="/" style={{ textDecoration: 'none' , color: 'black' }}>Home</Link>
        <Link to="/products" style={{ textDecoration: 'none' , color: 'black' }} >Clothing</Link>
        <Link to="/jewelry" style={{ textDecoration: 'none' , color: 'black' }}>Fine Jewelry</Link>
        <Link to="/cart" style={{ textDecoration: 'none' , color: 'black' }}>Cart</Link>
      </nav>
    </header>
  );
};

export default Header;

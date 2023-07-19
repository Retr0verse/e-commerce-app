import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img className="product-image" src={product.image} alt={product.title} />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>
        <button className="product-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;

import React from 'react';
import './ProductDetails.css';

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;

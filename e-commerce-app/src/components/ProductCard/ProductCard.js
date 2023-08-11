import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart, onRemoveFromCart, isInCart }) => {
  return (
    <div className="product-card">
      <img className="product-image" src={product.image} alt={product.title} />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>
        {isInCart ? (
          <>
            <button onClick={onRemoveFromCart}>Remove from Cart</button>
            <p>Added to Cart</p>
          </>
        ) : (
          <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

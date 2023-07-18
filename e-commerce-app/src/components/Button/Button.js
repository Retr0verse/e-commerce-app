import React from 'react';
import './Button.css';

const ButtonSection = () => {
  const handleAddToCart = (productId) => {
    // Handle logic for adding the product with the given ID to the cart
    console.log(`Adding product ${productId} to cart`);
  };

  const handleRemoveFromCart = (productId) => {
    // Handle logic for removing the product with the given ID from the cart
    console.log(`Removing product ${productId} from cart`);
  };

  const handleCheckout = () => {
    // Handle logic for proceeding to the checkout page or initiating the checkout process
    console.log('Proceeding to checkout');
  };

  return (
    <div className="button-section">
      <button onClick={() => handleAddToCart(1)}>Add to Cart</button>
      <button onClick={() => handleRemoveFromCart(1)}>Remove from Cart</button>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default ButtonSection;

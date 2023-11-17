import React from 'react';
import './CheckoutPage.css';

const CheckoutPage = ({ cartItems }) => {
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="checkout-summary">
        <h2>Order Summary</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="checkout-item">
            <span>{item.name}</span>
            <span>{item.quantity} x ${item.price}</span>
          </div>
        ))}
        <h4>Total Price: ${calculateTotalPrice()}</h4>
      </div>
      <div className="checkout-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="address">Shipping Address:</label>
            <textarea id="address" name="address" rows="4" required></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="creditCard">Credit Card Number:</label>
            <input type="text" id="creditCard" name="creditCard" required />
          </div>

          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" required />
          </div>

          <div className="form-group">
            <label htmlFor="securityCode">Security Code:</label>
            <input type="text" id="securityCode" name="securityCode" required />
          </div>

          <button className="checkout-button">Place Order</button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;

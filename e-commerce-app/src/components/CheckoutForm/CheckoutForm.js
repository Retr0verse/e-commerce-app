import React, { useState } from 'react';

const CheckoutForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Process the form submission logic here
    // You can send the form data to your backend or perform any other necessary actions

    // Reset form fields
    setName('');
    setEmail('');
    setAddress('');
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutForm;

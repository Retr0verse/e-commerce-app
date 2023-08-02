import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { fetchComputerProducts } from '../../utils/api'; // Import the fetchComputerProducts function




const HomePage = () => {
  const [computerProducts, setComputerProducts] = useState([]); // Use state to store the computer products

  useEffect(() => {
    const fetchProductsData = async () => {
      const data = await fetchComputerProducts(); // Fetch computer products using the API
      setComputerProducts(data);
    };

    fetchProductsData();
  }, []);

  return (
    <div>
      <h1>Welcome to Dragon PC!</h1>
      <div className="product-grid">
        {computerProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};


export default HomePage;

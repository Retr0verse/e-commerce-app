import React, { useEffect, useState } from 'react';
import './ProductDetailsPage.css';
import axios from 'axios';

const ProductDetailsPage = ({ match }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductDetails();
  }, [match.params.productId]);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${match.params.productId}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  return (
    <div className="product-details-page">
      {product ? (
        <div>
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          {/* Add more product details as needed */}
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetailsPage;

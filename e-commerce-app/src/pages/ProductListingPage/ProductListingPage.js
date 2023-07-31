import React, { useEffect, useState } from 'react';
import './ProductListingPage.css';
import ProductCard from '../../components/ProductCard/ProductCard'; // Use the correct relative path
import axios from 'axios';



const ProductListingPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="product-listing-page">
      <h1>Products</h1>
      {products.length > 0 ? (
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default ProductListingPage;

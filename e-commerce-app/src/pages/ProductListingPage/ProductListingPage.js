import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import './ProductListingPage.css';

const ProductListingPage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductsByCategory("women's clothing");
  }, []);

  const fetchProductsByCategory = async (category) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.title} added to cart!`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      className: 'custom-toast', // Apply your custom toast style

    });
  };

  return (
    <div className="product-listing-page">
      <h1>Explore Women's Clothing</h1>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={() => handleAddToCart(product)}
            />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductListingPage;

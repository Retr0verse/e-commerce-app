import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import axios from 'axios';
import './ProductListingPage.css';

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductsByCategories(["women's clothing"]); // Fetch products from multiple categories

  }, []);

  const fetchProductsByCategories = async (categories) => {
    try {
      const allProducts = await Promise.all(categories.map(category => axios.get(`https://fakestoreapi.com/products/category/${category}`)));
      const combinedProducts = allProducts.flatMap(response => response.data);
      setProducts(combinedProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="product-listing-page">
      <h1>Explore Women's Clothing</h1>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default ProductListingPage;
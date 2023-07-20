import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReviewsData = ({ productId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, [productId]);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}/reviews`);
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  return reviews;
};

export default ReviewsData;

import axios from 'axios';

const API_URL = 'https://fakestoreapi.com';

export const fetchComputerProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`, {
      params: {
        category: 'electronics', // Use 'electronics' to get computer-related items
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching computer products:', error);
    return [];
  }
};

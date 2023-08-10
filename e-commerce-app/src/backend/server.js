const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001; // You can choose any available port

// CORS middleware to allow cross-origin requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Endpoint to fetch products from FakeStore API
app.get('/products/:category', async (req, res) => {
  const { category } = req.params;
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});

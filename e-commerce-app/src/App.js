import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from 'src/components/Layout.js';
import HomePage from './HomePage';
import ProductDetailsPage from './ProductDetailsPage'; // Importing the ProductDetailsPage component
import ProductListingPage from './ProductListingPage'; // Importing the ProductListingPage component
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';
import NotFoundPage from './NotFoundPage'; // Importing the NotFoundPage component
import OrderConfirmationPage from './OrderConfirmationPage'; // Importing the OrderConfirmationPage component
import './App.css';



const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/product/:productId" component={ProductDetailsPage} /> {/* Adding route for ProductDetailsPage */}
          <Route path="/products" component={ProductListingPage} /> {/* Adding route for ProductListingPage */}
          <Route path="/cart" component={CartPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route component={NotFoundPage} /> {/* Fallback route for NotFoundPage */}
          <Route path="/order-confirmation" component={OrderConfirmationPage} /> {/* Adding route for OrderConfirmationPage */}
          {/* Add more routes for other pages */}
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;

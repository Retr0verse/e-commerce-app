import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from './components/Layout/Layout.js';
import HomePage from './pages/HomePage/HomePage.js';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage.js'; // Importing the ProductDetailsPage component
import ProductListingPage from './pages/ProductListingPage/ProductListingPage.js'; // Importing the ProductListingPage component
import CartPage from './pages/CartPage/CartPage.js'; // Importing the CartPage component
import CheckoutPage from './pages/CheckoutPage/CheckoutPage.js';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.js'; // Importing the NotFoundPage component
import OrderConfirmationPage from './pages/OrderConfirmationPage/OrderConfirmationPage.js'; // Importing the OrderConfirmationPage component



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

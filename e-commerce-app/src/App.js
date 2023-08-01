import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage'; // Importing the ProductDetailsPage component
import ProductListingPage from './pages/ProductListingPage/ProductListingPage'; // Importing the ProductListingPage component
import CartPage from './pages/CartPage/CartPage'; // Importing the CartPage component
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'; // Importing the NotFoundPage component
import OrderConfirmationPage from './pages/OrderConfirmationPage/OrderConfirmationPage'; // Importing the OrderConfirmationPage component



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

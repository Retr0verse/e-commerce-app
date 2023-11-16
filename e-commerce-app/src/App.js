import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import ProductListingPage from './pages/ProductListingPage/ProductListingPage';
import CartPage from './pages/CartPage/CartPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage/OrderConfirmationPage';
import JewelryProductPage from './pages/JewelryProductPage/JewelryProductPage';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
    );
  };

  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/product/:productId" component={ProductDetailsPage} />
          <Route
            path="/products"
            render={(props) => (
              <ProductListingPage {...props} addToCart={addToCart} />
            )}
          />
          <Route
            path="/jewelry"
            render={(props) => (
              <JewelryProductPage {...props} addToCart={addToCart} />
            )}
          />
          <Route
            path="/cart"
            render={(props) => (
              <CartPage
                {...props}
                cartItems={cartItems}
                removeFromCart={removeFromCart}
              />
            )}
          />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/order-confirmation" component={OrderConfirmationPage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;

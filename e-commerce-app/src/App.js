import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import ProductListingPage from './pages/ProductListingPage/ProductListingPage';
import CartPage from './pages/CartPage/CartPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage/OrderConfirmationPage';
import JewelryProductPage from './pages/JewelryProductPage/JewelryProductPage';

const App = () => {
  const [cartItems, setCartItems] = useState([]); // Manage cart items state

  // Functions to add and remove items from cart
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      // If item exists in cart, increase quantity
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // If item doesn't exist in cart, add with quantity 1
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
              <ProductListingPage {...props} cartItems={cartItems} setCartItems={setCartItems} />
            )}
            />
            <Route
              path="/jewelry"
              render={(props) => (
                <JewelryProductPage {...props} cartItems={cartItems} setCartItems={setCartItems} />
              )}
            />
            <Route
              path="/cart"
              render={(props) => <CartPage {...props} cartItems={cartItems} setCartItems={setCartItems} />}
            />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/order-confirmation" component={OrderConfirmationPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;

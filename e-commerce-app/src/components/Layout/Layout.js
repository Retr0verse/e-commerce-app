import React from 'react';
import Header from './Header';
import Footer from './Footer';
import NavigationBar from './NavigationBar';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <NavigationBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

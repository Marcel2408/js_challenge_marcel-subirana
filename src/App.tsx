import React from 'react';
import './App.css';
import Footer from './components/footer/Footer.component';
import Header from './components/header/Header.component';
import ProductPage from './pages/product-page/ProductPage.component';
import CartProvider from './providers/Cart.provider';

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <ProductPage />
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;

import React from 'react';
import './App.css';
import Footer from './components/footer/Footer.component';
import Header from './components/header/Header.component';
import ProductPage from './pages/product-page/ProductPage.component';
import CartProvider from './providers/Cart.provider';
import WishlistProvider from './providers/Wishlist.provider';

function App() {
  return (
    <>
      <WishlistProvider>
        <CartProvider>
          <Header />
          <ProductPage />
          <Footer />
        </CartProvider>
      </WishlistProvider>
    </>
  );
}

export default App;

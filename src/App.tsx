import React from 'react';
import loadable from '@loadable/component';
import './App.css';
import Header from './components/header/Header.component';
import ProductPage from './pages/product-page/ProductPage.component';
import CartProvider from './providers/cart/Cart.provider';
import WishlistProvider from './providers/Wishlist.provider';
// import Footer from './components/footer/Footer.component';
const Footer = loadable(() => import('./components/footer/Footer.component'));

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

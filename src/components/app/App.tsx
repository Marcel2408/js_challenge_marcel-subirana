import React from 'react';
import loadable from '@loadable/component';
import './App.scss';
import Header from '../header/Header.component';
import ProductPage from '../../pages/product-page/ProductPage.component';
import CartProvider from '../../providers/cart/Cart.provider';
import WishlistProvider from '../../providers/wishlist/Wishlist.provider';
import ProductProvider from '../../providers/product/Product.provider';

const Footer = loadable(() => import('../footer/Footer.component'));

function App() {
  return (
    <>
      <ProductProvider>
        <WishlistProvider>
          <CartProvider>
            <Header />
            <ProductPage />
            <Footer />
          </CartProvider>
        </WishlistProvider>
      </ProductProvider>
    </>
  );
}

export default App;

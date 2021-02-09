import React from 'react';
import { shallow } from 'enzyme';
import App from '../app/App';
import Header from '../header/Header.component';
import ProductPage from '../../pages/product-page/ProductPage.component';
import Footer from '../footer/Footer.component';
import ProductProvider from '../../providers/product/Product.provider';
import WishlistProvider from '../../providers/wishlist/Wishlist.provider';
import CartProvider from '../../providers/cart/Cart.provider';

it('renders Header, ProductPage, Footer child components', () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(Header).length).toEqual(1);
  expect(wrapped.find(ProductPage).length).toEqual(1);
  expect(wrapped.find(Footer)).toBeTruthy();
});

it('contains Product, Wishlist and Cart providers', () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(ProductProvider).length).toEqual(1);
  expect(wrapped.find(WishlistProvider).length).toEqual(1);
  expect(wrapped.find(CartProvider).length).toEqual(1);
});

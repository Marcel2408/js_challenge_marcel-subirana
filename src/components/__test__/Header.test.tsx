import React from 'react';
import { shallow } from 'enzyme';
import Header from '../header/Header.component';
import { ReactComponent as ShoppingIcon } from '../../assets/svg/bag.svg';
import { ReactComponent as WishlistIcon } from '../../assets/svg/wishlist.svg';
import CartContext from '../../contexts/Cart.context';
// import WishlistContext from '../../contexts/Wishlist.context';
import CartDropdown from '../cart-dropdown/Cart-dropdown.component';

it('renders Shopping and Wishlist icons', () => {
  const wrapped = shallow(<Header />);
  expect(wrapped.find(ShoppingIcon).length).toEqual(1);
  expect(wrapped.find(WishlistIcon).length).toEqual(1);
});

it('shows CartDropdown when ShoppingIcon is clicked', () => {
  const wrapped = shallow(<Header />);
  wrapped.find(ShoppingIcon).simulate('click');
  // wrapped.update();
  expect(CartContext.Consumer(isHidden).toEqual(true);
});

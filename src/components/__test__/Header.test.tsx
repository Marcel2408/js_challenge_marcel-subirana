import React from 'react';
import { mount, shallow } from 'enzyme';
import WishlistContext from '../../contexts/Wishlist.context';
import Header from '../header/Header.component';
import { ReactComponent as ShoppingIcon } from '../../assets/svg/bag.svg';
import { ReactComponent as WishlistIcon } from '../../assets/svg/wishlist.svg';
import CartContext from '../../contexts/Cart.context';
import CartDropdown from '../cart-dropdown/Cart-dropdown.component';

describe('Header Component', () => {
  it('renders Shopping and Wishlist icons', () => {
    const wrapped = shallow(<Header />);
    expect(wrapped.find(ShoppingIcon).length).toEqual(1);
    expect(wrapped.find(WishlistIcon).length).toEqual(1);
  });

  it('should not show CartDropdown on isHidden===true', () => {
    const wrapped = shallow(<Header />);
    expect(wrapped.find(CartDropdown).exists()).toEqual(false);
  });

  describe('click event', () => {
    it('calls toggleHidden from context when SHoppingIcon is clicked', () => {
      const cartContext = {
        isHidden: true,
        toggleHidden: jest.fn(),
        cartItems: [],
        updateCart: jest.fn(),
        cartItemsCount: 0,
        totalPrice: '',
      };
      const wrapped = mount(
        <CartContext.Provider value={cartContext}>
          <Header />
        </CartContext.Provider>
      );
      const promise = () => {
        return new Promise((resolve) => {
          wrapped.find(ShoppingIcon).simulate('click');
          wrapped.update();
          resolve(wrapped);
        });
      };
      return promise().then(() => {
        expect(cartContext.toggleHidden).toHaveBeenCalled();
        wrapped.unmount();
      });
    });
  });

  describe('Shopping counter', () => {
    const cartContext = {
      isHidden: true,
      toggleHidden: jest.fn(),
      cartItems: [],
      updateCart: jest.fn(),
      cartItemsCount: 1,
      totalPrice: '',
    };

    it("shows the Shopping counter when there're products in the cart", () => {
      const wrapped = mount(
        <CartContext.Provider value={cartContext}>
          <Header />
        </CartContext.Provider>
      );
      expect(wrapped.find('[id="cart__item-counter"]')).toBeTruthy();
      wrapped.unmount();
    });
  });

  describe('Wishlist counter', () => {
    const wishlistContext = {
      wishlist: ['1'],
      updateWishlist: jest.fn(),
    };

    it('"shows the Wishlist counter when there\'re products in the cart"', () => {
      const wrapped = mount(
        <WishlistContext.Provider value={wishlistContext}>
          <Header />
        </WishlistContext.Provider>
      );
      expect(wrapped.find('[id="wishlist__item-counter"]')).toBeTruthy();
      wrapped.unmount();
    });
  });
});

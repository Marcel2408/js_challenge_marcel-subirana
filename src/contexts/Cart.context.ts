/* eslint-disable no-unused-vars */
import { createContext } from 'react';
import { Item } from '../interfaces/Item.interface';

const CartContext = createContext({
  isHidden: true,
  toggleHidden: () => {},
  cartItems: <string[]>[],
  updateCart: (id: string) => {},
  cartItemsCount: 0,
  totalPrice: '',
});

export default CartContext;

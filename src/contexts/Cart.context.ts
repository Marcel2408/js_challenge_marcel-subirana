/* eslint-disable no-unused-vars */
import { createContext } from 'react';
import { Item } from '../interfaces/Item.interface';

const CartContext = createContext({
  isHidden: true,
  toggleHidden: () => {},
  cartItems: <Item[]>[],
  addItemToCart: (item: Item) => {},
  removeItem: (id: string) => {},
  // clearItemFromCart: () => {},
  cartItemsCount: 0,
  totalPrice: '',
});

export default CartContext;

import { createContext } from 'react';
import { Item } from '../interfaces/Item.interface';

const CartContext = createContext({
  isHidden: true,
  toggleHidden: () => {},
  cartItems: <Item[]>[],
  // eslint-disable-next-line no-unused-vars
  addItemToCart: (item: Item) => {},
  //  todo removeItem: () => {}
  // todo clearItemFromCart: () => {}
  cartItemsCount: 0,
});

export default CartContext;

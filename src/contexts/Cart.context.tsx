import { createContext } from 'react';

const CartContext = createContext({
  itemsCount: 0,
  addToCount: () => {},
});

export default CartContext;

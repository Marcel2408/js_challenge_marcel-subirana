/* eslint-disable no-unused-vars */
import { createContext } from 'react';

const WishlistContext = createContext({
  wishlist: <string[]>[],
  updateWishlist: (id: string) => {},
});

export default WishlistContext;

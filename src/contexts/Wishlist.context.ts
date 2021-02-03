import { createContext } from 'react';

const WishlistContext = createContext({
  wishlistCount: 0,
  addToWishlist: () => {},
  removeFromWishlist: () => {},
});

export default WishlistContext;

import React, { useState } from 'react';
import WishlistContext from '../../contexts/Wishlist.context';

interface WishlistProviderProps {
  children: React.ReactNode;
}

const WishlistProvider: React.FC<WishlistProviderProps> = ({ children }) => {
  const [wishlistCount, setWishlistCount] = useState(0);
  const addToWishlist = () => {
    setWishlistCount((prevCount) => {
      const updatedCount = prevCount + 1;
      return updatedCount;
    });
  };
  const removeFromWishlist = () => {
    setWishlistCount((prevCount) => {
      const updatedCount = prevCount - 1;
      return updatedCount;
    });
  };
  return (
    <WishlistContext.Provider value={{ wishlistCount, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;

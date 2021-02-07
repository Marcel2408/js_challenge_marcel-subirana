import React, { useState } from 'react';
import WishlistContext from '../../contexts/Wishlist.context';

interface WishlistProviderProps {
  children: React.ReactNode;
}

const WishlistProvider: React.FC<WishlistProviderProps> = ({ children }) => {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const updateWishlist = (id: string) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(id)
        ? prevWishlist.filter((wishlistId) => wishlistId !== id)
        : [...prevWishlist, id]
    );
  };

  return (
    <WishlistContext.Provider value={{ wishlist, updateWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;

import React, { useEffect, useState } from 'react';
import CartContext from '../contexts/Cart.context';

interface CartProviderProps {
  children: React.ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [itemsCount, setItemsCount] = useState(0);
  const addToCount = () =>
    setItemsCount((prevCount) => {
      const updatedCount = prevCount + 1;
      return updatedCount;
    });

  useEffect(() => {});
  return <CartContext.Provider value={{ itemsCount, addToCount }}>{children}</CartContext.Provider>;
};

export default CartProvider;

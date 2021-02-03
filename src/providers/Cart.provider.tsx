import React, { useState } from 'react';
import CartContext from '../contexts/Cart.context';
import { Item } from '../interfaces/Item.interface';

interface CartProviderProps {
  children: React.ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [isHidden, setIsHidden] = useState(true);
  const [cartItemsCount, setItemsCount] = useState(0);
  const [cartItems, setCartItems] = useState<Item[]>([]);
  const toggleHidden = () => setIsHidden(!isHidden);
  const addToCount = () =>
    setItemsCount((prevCount) => {
      const updatedCount = prevCount + 1;
      return updatedCount;
    });

  const addItemToCart = (item: Item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItemsCount,
        addToCount,
        isHidden,
        toggleHidden,
        cartItems,
        addItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

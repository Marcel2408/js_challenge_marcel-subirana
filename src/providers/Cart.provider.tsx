import React, { useEffect, useState } from 'react';
import CartContext from '../contexts/Cart.context';
import { Item } from '../interfaces/Item.interface';

interface CartProviderProps {
  children: React.ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [isHidden, setIsHidden] = useState(true);
  const [cartItems, setCartItems] = useState<Item[]>([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const toggleHidden = () => setIsHidden(!isHidden);

  const addItemToCart = (item: Item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  useEffect(() => {
    setCartItemsCount(cartItems.length);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItemsCount,
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

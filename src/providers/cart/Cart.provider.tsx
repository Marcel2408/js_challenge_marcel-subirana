import React, { useEffect, useState } from 'react';
import CartContext from '../../contexts/Cart.context';
import { Item } from '../../interfaces/Item.interface';
import updateTotalPrice from './Cart.utils';

interface CartProviderProps {
  children: React.ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [isHidden, setIsHidden] = useState(true);
  const [cartItems, setCartItems] = useState<Item[]>([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState('');
  const toggleHidden = () => setIsHidden(!isHidden);

  const addItemToCart = (item: Item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  useEffect(() => {
    setCartItemsCount(cartItems.length);
    setTotalPrice(updateTotalPrice(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItemsCount,
        isHidden,
        toggleHidden,
        cartItems,
        addItemToCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

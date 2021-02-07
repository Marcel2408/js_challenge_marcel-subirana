import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../contexts/Cart.context';
import ProductContext from '../../contexts/Product.context';
import updateTotalPrice from './Cart.utils';

interface CartProviderProps {
  children: React.ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const { products } = useContext(ProductContext);
  const [isHidden, setIsHidden] = useState(true);
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState('');
  const toggleHidden = () => setIsHidden(!isHidden);

  const updateCart = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.includes(id) ? prevItems.filter((itemId) => itemId !== id) : [...prevItems, id]
    );
  };

  useEffect(() => {
    setCartItemsCount(cartItems.length);
    setTotalPrice(updateTotalPrice(cartItems, products));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItemsCount,
        isHidden,
        toggleHidden,
        cartItems,
        updateCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

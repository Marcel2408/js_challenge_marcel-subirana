import React, { useContext } from 'react';
import CartContext from '../../contexts/Cart.context';
import './Cart-dropdown.styles.scss';

const CartDropdown: React.FC = () => {
  const { toggleHidden } = useContext(CartContext);

  return (
    <div className="cart-dropdown" onMouseLeave={toggleHidden}>
      <div className="cart-items" />
      <button type="button" className="button button--primary button--checkout">
        Go to checkout
      </button>
    </div>
  );
};

export default CartDropdown;

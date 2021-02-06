import React, { useContext } from 'react';
import CartContext from '../../contexts/Cart.context';
import CartItem from '../cart-item/CartItem.component';
import './Cart-dropdown.styles.scss';

const CartDropdown: React.FC = () => {
  const { cartItems, toggleHidden } = useContext(CartContext);

  return (
    <div className="cart-dropdown" onMouseLeave={toggleHidden}>
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <button type="button" className="button button--primary button--checkout">
        Go to checkout
      </button>
    </div>
  );
};

export default CartDropdown;

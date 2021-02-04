import React from 'react';
import './Cart-dropdown.styles.scss';

const CartDropdown: React.FC = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <button type="button" className="button button--primary">
        Go to checkout
      </button>
    </div>
  );
};

export default CartDropdown;

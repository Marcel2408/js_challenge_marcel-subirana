import React, { useContext } from 'react';
import './Header.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/svg/bag.svg';
import { ReactComponent as WishlistIcon } from '../../assets/svg/wishlist.svg';
import CartContext from '../../contexts/Cart.context';
import WishlistContext from '../../contexts/Wishlist.context';
import CartDropdown from '../cart-dropdown/Cart-dropdown.component';

const Header: React.FC = () => {
  const { cartItemsCount, totalPrice, toggleHidden, isHidden } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  return (
    <header className="header container">
      <h1 className="page-title">BRAND</h1>
      <aside className="header-bag">
        <div className="header-bag__item header-bag__count">
          <div className="header-bag__price">{`${totalPrice} €`}</div>
          <ShoppingIcon onClick={toggleHidden} className="icon">
            <title>Bag Icon</title>
          </ShoppingIcon>
          <span
            style={cartItemsCount ? { visibility: 'visible' } : { visibility: 'hidden' }}
            className="bag__item-counter"
          >
            {cartItemsCount}
          </span>
        </div>
        <div className="header-bag__item header-bag__wishlist-count">
          <WishlistIcon />
          <title>Wishlist Icon</title>
          <span
            className="bag__item-counter"
            style={wishlist.length ? { visibility: 'visible' } : { visibility: 'hidden' }}
          >
            {wishlist.length}
          </span>
        </div>
      </aside>
      {isHidden ? null : <CartDropdown />}
    </header>
  );
};

export default Header;

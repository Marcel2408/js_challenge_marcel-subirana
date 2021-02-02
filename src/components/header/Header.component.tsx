import * as React from 'react';
import './Header.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/svg/bag.svg';
import { ReactComponent as WishlistIcon } from '../../assets/svg/wishlist.svg';

const Header: React.FC = () => {
  return (
    <header className="header container">
      <h1 className="page-title">BRAND</h1>
      <aside className="header-bag">
        <div className="header-bag__item header-bag__count">
          <div className="header-bag__price">£210</div>
          <ShoppingIcon className="icon">
            <title>Bag Icon</title>
          </ShoppingIcon>
          <span className="bag__item-counter">10</span>
        </div>
        <div className="header-bag__item header-bag__wishlist-count">
          <WishlistIcon />
          <title>Wishlist Icon</title>
          <span className="bag__item-counter">5</span>
        </div>
      </aside>
    </header>
  );
};

export default Header;

import React, { useContext } from 'react';
import CartContext from '../../contexts/Cart.context';
import { Item } from '../../interfaces/Item.interface';
import './CartItem.styles.scss';

interface CartItemProps {
  item: Item;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { coverImageUrl, title, finalPrice, id } = item;
  const { updateCart } = useContext(CartContext);

  return (
    <div className="cart-item">
      <img className="cart-item__image" src={coverImageUrl} alt="Cart Product" itemProp="image" />
      <button type="button" className="cart-item__remove" onClick={() => updateCart(id)}>
        &#10005;
      </button>
      <div className="cart-item__details">
        <span className="cart-item__title">{`${title.substr(0, 6)}...`}</span>
        <span className="cart-item__price">{finalPrice}</span>
      </div>
    </div>
  );
};

export default React.memo(CartItem);

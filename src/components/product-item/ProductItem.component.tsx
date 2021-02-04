import React, { useContext, useState } from 'react';
import './ProductItem.styles.scss';
import { ReactComponent as WishlistIcon } from '../../assets/svg/wishlist.svg';
// import productImage from '../../assets/images/activity_image.jpeg';
import CartContext from '../../contexts/Cart.context';
import WishlistContext from '../../contexts/Wishlist.context';
import { Item } from '../../interfaces/Item.interface';

interface ProductItemProps {
  item: Item;
}

const ProductItem: React.FC<ProductItemProps> = ({ item }) => {
  const { coverImageUrl, title, description, discount, fullPrice, finalPrice } = item;

  const { addItemToCart } = useContext(CartContext);

  const { addToWishlist, removeFromWishlist } = useContext(WishlistContext);

  const [isCartClicked, setIsCartClicked] = useState(false);

  const [isWishlistClicked, setIsWishlistClicked] = useState(false);

  const toggleWishlist = () => {
    if (!isWishlistClicked) addToWishlist();
    else removeFromWishlist();
    setIsWishlistClicked(!isWishlistClicked);
  };
  const addToCart = () => {
    addItemToCart(item);
    setIsCartClicked(!isCartClicked);
    if (isWishlistClicked) toggleWishlist();
  };
  return (
    <article className="product" itemScope itemType="http://schema.org/Product">
      <figure className="product__image-wrapper">
        <img className="product__image" src={coverImageUrl} alt="Product" itemProp="image" />
        <button
          type="button"
          className={`product__wishlist-button button button--round button--wishlist ${
            isCartClicked && 'button--wishlist--in-cart'
          }`}
          onClick={toggleWishlist}
        >
          <WishlistIcon style={isWishlistClicked ? { fill: '#444A59' } : { fill: '#d9d9d9' }}>
            <title>Wishlist Icon</title>
          </WishlistIcon>
        </button>
      </figure>
      <div className="product__details">
        <h1 className="product__title" itemProp="brand">
          {title}
        </h1>
        <p className="product__subtitle" itemProp="description">
          {description}
        </p>
        <div className="product__price" itemScope itemType="http://schema.org/Offer">
          <span className={`product__price${discount !== 0 && '--strike'}`}>
            {discount !== 0 ? fullPrice : finalPrice}
          </span>
          {discount !== 0 && (
            <span className="product__price--discounted" itemProp="price">
              {finalPrice}
            </span>
          )}
        </div>
        <button
          type="button"
          className={`product__add-to-cart button button--primary ${
            isCartClicked && 'button--in-cart'
          }`}
          onClick={addToCart}
        >
          {isCartClicked ? 'In cart' : 'Add to Cart'}
        </button>
      </div>
    </article>
  );
};

export default ProductItem;

import * as React from 'react';
import './ProductItem.styles.scss';
import { ReactComponent as WishlistIcon } from '../../assets/svg/wishlist.svg';

const ProductItem: React.FC = () => {
  return (
    <article className="product" itemScope itemType="http://schema.org/Product">
      <figure className="product__image-wrapper">
        <img
          className="product__image"
          src="./../../assets/images/activity_image.jpeg"
          alt="Product"
          itemProp="image"
        />
        <button
          type="button"
          className="product__wishlist-button button button--round button--wishlist"
        >
          <WishlistIcon>
            <title>Wishlist Icon</title>
          </WishlistIcon>
        </button>
      </figure>
      <div className="product__details">
        <h1 className="product__title" itemProp="brand">
          Product Title
        </h1>
        <p className="product__subtitle" itemProp="description">
          Product Description
        </p>
        <div className="product__price" itemScope itemType="http://schema.org/Offer">
          <span className="product__price--strike">£210</span>
          <span className="product__price--discounted" itemProp="price">
            £210
          </span>
        </div>
        <button type="button" className="product__add-to-cart button button--primary">
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default ProductItem;

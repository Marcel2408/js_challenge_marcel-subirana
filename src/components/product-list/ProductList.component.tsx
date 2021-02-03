import React from 'react';
import './ProductList.styles.scss';
import { ReactComponent as ArrowLeftIcon } from '../../assets/svg/arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/svg/arrow-right.svg';
import { ReactComponent as WishlistIcon } from '../../assets/svg/wishlist.svg';
import ProductItem from '../product-item/ProductItem.component';
import itemData from '../../item.data.js';

const ProductList: React.FC = () => {
  return (
    <div className="container">
      <ul className="product-list">
        {itemData.map((item) => (
          <li className="product-list__item">
            <ProductItem key={item.id} item={item} />
          </li>
        ))}

        <li className="product-list__item">
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
                <span className="product__price" itemProp="price">
                  £210
                </span>
              </div>
              <button
                type="button"
                className="product__add-to-cart button button--primary button--in-cart"
              >
                In Cart
              </button>
            </div>
          </article>
        </li>
      </ul>

      <nav className="pagination">
        <ul className="pagination__list">
          <li className="pagination__item">
            <a href="/" className="pagination__link">
              <ArrowLeftIcon>
                <title>Arrow Left</title>
              </ArrowLeftIcon>
            </a>
          </li>
          <li className="pagination__item">
            <a href="/" className="pagination__link">
              {' '}
              1{' '}
            </a>
          </li>
          <li className="pagination__item">
            <a href="/" className="pagination__link">
              {' '}
              2{' '}
            </a>
          </li>
          <li className="pagination__item">
            <a href="/" className="pagination__link">
              {' '}
              3{' '}
            </a>
          </li>
          <li className="pagination__item">
            <a href="/" className="pagination__link">
              {' '}
              ...{' '}
            </a>
          </li>
          <li className="pagination__item">
            <a href="/" className="pagination__link">
              {' '}
              10{' '}
            </a>
          </li>
          <li className="pagination__item">
            <a href="/" className="pagination__link">
              <ArrowRightIcon>
                <title>Arrow Right</title>
              </ArrowRightIcon>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ProductList;

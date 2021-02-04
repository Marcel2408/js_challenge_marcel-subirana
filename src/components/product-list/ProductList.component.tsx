import React from 'react';
import './ProductList.styles.scss';
import { ReactComponent as ArrowLeftIcon } from '../../assets/svg/arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/svg/arrow-right.svg';
import ProductItem from '../product-item/ProductItem.component';
import itemData from '../../item.data.js';

const ProductList: React.FC = () => {
  return (
    <div className="container">
      <ul className="product-list">
        {itemData.map((item) => (
          <li key={item.id} className="product-list__item">
            <ProductItem item={item} />
          </li>
        ))}
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

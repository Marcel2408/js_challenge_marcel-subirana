import React from 'react';
import './ProductList.styles.scss';
import ProductItem from '../product-item/ProductItem.component';
import itemData from '../../item.data.js';
import PaginationContainer from '../../containers/PaginationContainer';

const ProductList = () => {
  return (
    <div className="container">
      <ul className="product-list">
        {itemData.map((item) => (
          <li key={item.id} className="product-list__item">
            <ProductItem item={item} />
          </li>
        ))}
      </ul>

      <PaginationContainer />
    </div>
  );
};

export default ProductList;

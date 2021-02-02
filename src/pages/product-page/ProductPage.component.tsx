import * as React from 'react';
import ProductList from '../../components/product-list/ProductList.component';
import './ProductPage.styles.scss';

const ProductPage: React.FC = () => {
  return (
    <main className="product-page">
      <ProductList />
    </main>
  );
};

export default ProductPage;

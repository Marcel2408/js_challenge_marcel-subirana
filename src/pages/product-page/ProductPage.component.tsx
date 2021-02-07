import React, { lazy, Suspense } from 'react';
import Spinner from '../../components/spinner/Spinner.component';
import './ProductPage.styles.scss';

const ProductList = lazy(() => import('../../components/product-list/ProductList.component'));
const ProductPage: React.FC = () => {
  return (
    <main className="product-page">
      <Suspense fallback={<Spinner />}>
        <ProductList />
      </Suspense>
    </main>
  );
};

export default ProductPage;

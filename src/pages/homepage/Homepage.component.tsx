import * as React from 'react';
import ProductList from '../../components/product-list/ProductList.component';
import './Homepage.styles.scss';

const Homepage: React.FC = () => {
  return (
    <>
      <main className="product-page">
        <ProductList />
      </main>
      <footer className="container">
        <p className="footer__sidenote">Footer</p>
      </footer>
    </>
  );
};

export default Homepage;

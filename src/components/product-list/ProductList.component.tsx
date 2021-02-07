import React, { useCallback, useContext, useEffect, useState } from 'react';
import loadable from '@loadable/component';

import './ProductList.styles.scss';
import ProductItem from '../product-item/ProductItem.component';
import paginatedProducts from '../../services/ApiClient';
import { Item } from '../../interfaces/Item.interface';
import Spinner from '../spinner/Spinner.component';
import { Page } from '../../interfaces/Page.interface';
import ProductContext from '../../contexts/Product.context';

const Pagination = loadable(() => import('../pagination/Pagination.component'));

const functions = new Set();

const ProductList = () => {
  const { products, addProducts } = useContext(ProductContext);
  const [spinner, setSpinner] = useState(true);
  const [pages, setPages] = useState<Page>({});
  const [page, setPage] = useState(1);
  const totalPages = 10;
  const handlePages = useCallback((updatePage: number) => setPage(updatePage), []);
  functions.add(handlePages);

  useEffect(() => {
    if (!spinner) setSpinner(true);
    const fetchProducts = async () => {
      const displayProducts = await paginatedProducts(page);
      return displayProducts;
    };

    if (!pages[page]) {
      fetchProducts()
        .then((productData) => {
          addProducts(productData);
          setPages((prevPages) => ({
            ...prevPages,
            [page]: productData.map((product: Item) => product.id),
          }));
        })
        .then(() => setSpinner(false));
    } else {
      setSpinner(false);
    }
  }, [page]);

  return (
    <div className="container">
      <ul className="product-list">
        {!spinner && pages[page] ? (
          pages[page].map((id) => (
            <li key={id} className="product-list__item">
              <ProductItem item={products[id]} />
            </li>
          ))
        ) : (
          <Spinner />
        )}
      </ul>

      <Pagination page={page} totalPages={totalPages} handlePagination={handlePages} />
    </div>
  );
};

export default ProductList;

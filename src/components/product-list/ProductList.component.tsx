import React, { useEffect, useState } from 'react';
import './ProductList.styles.scss';
import ProductItem from '../product-item/ProductItem.component';
import Pagination from '../pagination/Pagination.component';
import paginatedProducts from '../../services/ApiClient';
import { Item } from '../../interfaces/Item.interface';

const ProductList = () => {
  const [products, setProducts] = useState<Item[]>([]);
  const [page, setPage] = useState(1);
  const totalPages = 10;
  const handlePages = (updatePage: number) => setPage(updatePage);

  useEffect(() => {
    const fetchProducts = async () => {
      const displayProducts = await paginatedProducts(page);
      return displayProducts;
    };

    fetchProducts().then((productData) => setProducts(productData));
  }, [page]);

  return (
    <div className="container">
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-list__item">
            <ProductItem item={product} />
          </li>
        ))}
      </ul>

      <Pagination page={page} totalPages={totalPages} handlePagination={handlePages} />
    </div>
  );
};

export default ProductList;

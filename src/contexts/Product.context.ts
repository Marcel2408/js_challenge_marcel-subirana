/* eslint-disable no-unused-vars */
import { createContext } from 'react';
import { Item } from '../interfaces/Item.interface';
import { Product } from '../interfaces/Product.interface';

const ProductContext = createContext({
  products: <Product>{},
  addProducts: (products: Item[]) => {},
});

export default ProductContext;

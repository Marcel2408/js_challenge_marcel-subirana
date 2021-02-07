import React, { useState } from 'react';
import ProductContext from '../../contexts/Product.context';
import { Item } from '../../interfaces/Item.interface';
import { Product } from '../../interfaces/Product.interface';

interface ProductProviderProps {
  children: React.ReactNode;
}
const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product>({});

  const addProducts = (productData: Item[]) => {
    productData.forEach((product) => {
      setProducts((prevProducts) => ({ ...prevProducts, [product.id]: product }));
    });
  };

  return (
    <ProductContext.Provider value={{ products, addProducts }}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;

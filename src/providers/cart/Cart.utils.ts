import { Product } from '../../interfaces/Product.interface';

const updateTotalPrice = (ids: string[], products: Product) => {
  return ids
    .reduce((totalPrice: number, id: string) => {
      return totalPrice + products[id].priceValue;
    }, 0)
    .toFixed(2);
};

export default updateTotalPrice;

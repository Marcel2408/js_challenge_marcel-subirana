import { Item } from '../../interfaces/Item.interface';

const updateTotalPrice = (items: Item[]) => {
  return items
    .reduce((totalPrice, item) => {
      return totalPrice + item.priceValue;
    }, 0)
    .toFixed(2);
};

export default updateTotalPrice;

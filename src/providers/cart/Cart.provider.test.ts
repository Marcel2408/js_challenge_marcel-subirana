import updateTotalPrice from './Cart.utils';
import mockData from './Cart.utils.mock';

describe('updateTotalPrice', () => {
  it('returns total price well formatted with 2 decimals', () => {
    const totalPrice = updateTotalPrice(mockData.ids, mockData.products);
    expect(totalPrice).toEqual('137.00');
  });
});

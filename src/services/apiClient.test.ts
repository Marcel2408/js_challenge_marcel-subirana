import axios from 'axios';
import paginatedProducts, { fetchProducts } from './apiClient';
import mockData from './apiClient.mocks';

describe('fetchProducts', () => {
  beforeEach(() => {
    axios.get = jest.fn().mockResolvedValue({
      data: mockData,
    });
  });
  it('calls API to get 6 paginated products', async () => {
    expect.assertions(1);
    const result = await fetchProducts(1);
    expect(result.length).toEqual(6);
  });

  it('calls API and gets the correct result', async () => {
    expect.assertions(2);
    const result = await fetchProducts(1);
    expect(result[0].uuid).toEqual('8cf63a09-d148-4cfe-a427-ccd538b35185');
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});

describe('paginatedProducts', () => {
  beforeEach(() => {
    axios.get = jest.fn().mockResolvedValue({
      data: mockData,
    });
  });

  it('calls "fetchProducts" and returns the formatted Items', async () => {
    expect.assertions(3);
    const products = await paginatedProducts(1);
    expect(products.length).toEqual(6);
    expect(products[0].id).toEqual('8cf63a09-d148-4cfe-a427-ccd538b35185');
    expect(products[0].finalPrice).toEqual('24,00 €');
  });
});

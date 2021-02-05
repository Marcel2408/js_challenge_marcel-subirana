import { Item } from '../interfaces/Item.interface';

/* eslint-disable camelcase */
const BASE_URL = 'https://api.musement.com';

const fetchProducts = async (page: number, limit: number = 6) => {
  const offset = limit * (page - 1);
  const url = `${BASE_URL}/api/v3/venues/164/activities?limit=${limit}&offset=${offset}`;
  try {
    const jsonData = await fetch(`${url}`);
    const products = await jsonData.json();
    return products;
  } catch (error) {
    throw Error(error.message);
  }
};

const paginatedProducts = async (page: number) => {
  const products = await fetchProducts(page);
  return products.map(
    (product: any): Item => {
      const {
        uuid,
        cover_image_url,
        title,
        description,
        discount,
        net_price,
        retail_price,
      } = product;
      const fullPrice = net_price ? net_price.formatted_value : null;
      return {
        id: uuid,
        coverImageUrl: cover_image_url,
        title,
        description,
        discount,
        fullPrice,
        finalPrice: retail_price.formatted_iso_value,
        priceValue: retail_price.value,
      };
    }
  );
};

export default paginatedProducts;

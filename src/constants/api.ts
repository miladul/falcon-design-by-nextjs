export const BASE_URL = 'http://157.230.240.97:9999/api/v1';

export const API = {
    categories: `${BASE_URL}/categories`,
    products: `${BASE_URL}/shop/products`,
    product: (slug: string) => `${BASE_URL}/product/${slug}`,
};

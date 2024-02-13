const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/products`);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error(error);
  }
};

export const getProductsById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/api/products/${id}`);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error(error);
  }
};


// eslint-disable-next-line no-undef
const baseUrl = process.env.REACT_APP_API_BASE_URL;

export async function getProducts(category) {
  try {
    const response = await fetch(`${baseUrl}products?category=${category}`);

    if (response.ok) {
      return response.json();
    } else {
      // !Handle non-successful errors
      const errorResponse = await response.json();
      throw new Error(errorResponse.message);
    }
  } catch (error) {
    // !Handle network errors or other exceptions
    throw new Error("An error occured while fetching products");
  }
}

export async function getProduct(id) {
  try {
    const response = await fetch(`${baseUrl}products/${id}`);

    if (response.ok) {
      return response.json();
    } else {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message);
    }
  } catch (error) {
    throw new Error("An error occured while fetching products");
  }
}

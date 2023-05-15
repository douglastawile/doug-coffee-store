// eslint-disable-next-line no-undef
const baseUrl = process.env.REACT_APP_API_BASE_URL;

export async function getShippingAddress(userId) {
  try {
    const response = await fetch(`${baseUrl}shippingAddress/${userId}`);
    if (response.ok) {
      return response.json();
    } else {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message);
    }
  } catch (error) {
    throw new Error("Failed to get user address");
  }
}

export async function saveShippingAddress(address) {
  try {
    const response = await fetch(`${baseUrl}shippingAddress/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(address),
    });
    if (response.ok) {
      return response.json();
    } else {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message);
    }
  } catch (error) {
    throw new Error("Failed to save data");
  }
}

import { json } from "stream/consumers";
import { basicAuth } from "./basicAuth";
import { Products } from "./dtos/product.types";
import { PostProduct } from "./woocommerce.types";

const postProduct = (data: PostProduct) => {
  let auth = basicAuth(
    process.env.REACT_APP_WOO_KEY!,
    process.env.REACT_APP_WOO_SECRET!
  );

  const init: RequestInit = {
    method: "POST",
    headers: {
      Authorization: auth,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = fetch(
    `https://recipe-generator.azurewebsites.net/api/products`,
    init
  );
};

const getProducts = async (category: number) => {
  try {
    const init: RequestInit = {
      method: "GET",
    };

    const response = await fetch(
      `https://recipe-generator.azurewebsites.net/api/products/${category}`,
      init
    );

    return await response.json().then((data) => data as Products);
  } catch (error) {
    console.warn(
      "Exception retrieving product content, returning defaults",
      error
    );
  }
};

export { postProduct, getProducts };

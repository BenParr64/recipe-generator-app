import { json } from "stream/consumers";
import { basicAuth } from "./basicAuth";
import { Products } from "./dtos/product.types";
import { PostProduct, PostProductResult } from "./product.types";

const postProduct = async (data: PostProduct) => {
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

  try {
    const response = fetch(
      `${process.env.REACT_APP_RECIPE_API}/products`,
      init
    );

    return await (await response)
      .json()
      .then((data) => data as PostProductResult);
  } catch (error) {
    console.warn(
      "Exception posting product content, returning defaults",
      error
    );
  }
};

const getProducts = async (category: number) => {
  try {
    const init: RequestInit = {
      method: "GET",
    };

    const response = await fetch(
      `${process.env.REACT_APP_RECIPE_API}/products/${category}`,
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

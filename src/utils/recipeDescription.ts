import { ProductLine } from "../context/RecipeContext.types";

const getIngredients = (ingredients: ProductLine[]) => {
  return ingredients.map(
    (ingredient) => "<li>" + `${ingredient.name}` + "</li>"
  );
};

const getDescription = (description: string, grains: ProductLine[], hops: ProductLine[]) : string =>
  `
  <h2>Summary</h2>
    <p>
      ${description}
    </p>
  <h2>Fermentables</h2>
  <p>
    <ul>
      ${getIngredients(grains!)}
    </ul>
  </p>
  <h3>Hops</h3>
  <p>
    <ul>
        ${getIngredients(hops!)}
    </ul>
  </p>
    `;

export {getDescription, getIngredients};

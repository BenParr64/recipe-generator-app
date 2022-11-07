import { TextField } from "@mui/material";
import React from "react";
import { useRecipeContextState } from "../../context/RecipeContext";
import { ProductLine } from "../../context/RecipeContext.types";
import "./styles.css";

interface ListItemProps {
  ingredient: ProductLine;
  ingredientType: "hop" | "malt";
}
const IngredientListItem = ({ ingredient, ingredientType }: ListItemProps) => {
  const { recipe, setRecipe } = useRecipeContextState();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [...newIngredients] = recipe.ingredients!;
    newIngredients.forEach((current) => {
      console.log(current);
      if (current.id === ingredient.id) {
        current.quantity = parseFloat(e.target.value);
      }
    });
    setRecipe({ ...recipe, ingredients: newIngredients });
  };

  const displayName = ingredient.name;
  return (
    <tr className="kegthat-row">
      <td className="sqkegthat-data">{displayName}</td>
      <td>
        <TextField
          required
          type="number"
          className="kegthat-input"
          defaultValue={1}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleOnChange(e)
          }
        />
      </td>
    </tr>
  );
};

export default IngredientListItem;

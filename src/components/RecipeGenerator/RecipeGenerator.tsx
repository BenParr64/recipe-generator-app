import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { postProduct } from "../../api/api";
import { useRecipeContextState } from "../../context/RecipeContext";
import IngredientList from "../IngredientList/IngredientList";
import "./styles.css";
import { getDescription } from "../../utils/recipeDescription";
import Selector from "../IngredientSelector/Selector";

interface RecipeGeneratorProps {
  setSubmitted: (submitted: boolean) => void;
  setUrl: (url: string) => void;
}
const RecipeGenerator = ({ setSubmitted, setUrl }: RecipeGeneratorProps) => {
  const { recipe, setRecipe } = useRecipeContextState();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [total, setTotal] = useState(0);

  const hops =
    recipe.ingredients !== undefined
      ? recipe.ingredients!.filter(
          (ingredient) => ingredient.ingredientType === "hop"
        )
      : undefined;

  const grains =
    recipe.ingredients !== undefined
      ? recipe.ingredients!.filter(
          (ingredient) => ingredient.ingredientType === "malt"
        )
      : undefined;

  const handlePostRecipe = () => {
    postProduct({
      name: name,
      regular_price: total.toString(),
      description: getDescription(description, grains!, hops!),
    }).then((url) => setUrl(url?.permalink!));

    setSubmitted(true);
  };

  const handleClearRecipe = () => {
    setRecipe({ ingredients: undefined, name: "" });
    setDescription("");
  };

  useEffect(() => {
    let cost = 0;
    if (recipe.ingredients !== undefined) {
      recipe.ingredients.forEach((current) => {
        cost += current.quantity * current.price;
      });
    }
    setTotal(cost);
  }, [recipe.ingredients]);

  return (
    <>
      <div className="kegthat-scrollable">
        <div className="kegthat-generator">
          <TextField
            required
            className="kegthat-row"
            type="text"
            label="Recipe Name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.currentTarget.value)
            }
          />
          <div className="kegthat-text-container">
            <TextField
              required
              type="text"
              className="kegthat-row"
              label="Recipe Description"
              multiline
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDescription(e.currentTarget.value)
              }
            />
          </div>
          <div className="kegthat-row">
            <Selector label="Grain Selection" ingredientType="malt" />
          </div>
          <div className="kegthat-row">
            <Selector label="Hop Selection" ingredientType="hop" />
          </div>

          {grains && (
            <IngredientList
              heading="Fermentables"
              ingredientType="malt"
              products={grains}
            />
          )}
          {hops && (
            <IngredientList
              heading="Hops"
              ingredientType="hop"
              products={hops}
            />
          )}

          <div className="kegthat-row kegthat-button-row post-buttons">
            <Button
              className="kegthat-button"
              onClick={handlePostRecipe}
              variant="contained"
            >
              Post Recipe
            </Button>
            <Button
              className="kegthat-button"
              onClick={handleClearRecipe}
              variant="contained"
            >
              Clear
            </Button>
          </div>
        </div>
      </div>

      <div className="kegthat-summary">Total cost: £{total.toFixed(2)}</div>
    </>
  );
};

export default RecipeGenerator;

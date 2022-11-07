import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useRecipeContextState } from "../../context/RecipeContext";
import { ProductLine } from "../../context/RecipeContext.types";
import IngredientListItem from "../IngredientListItem/IngredientListItem";
import "./styles.css";

interface IngredientListProps {
  heading: string;
  ingredientType: "malt" | "hop";
  products: ProductLine[];
}

const IngredientList = ({
  ingredientType,
  products,
  heading,
}: IngredientListProps) => {
  return (
    <>
      <h3>{heading}</h3>
      <div className="kegthat-table">
        <table>
          <tbody>
            {products.map((product, index) => (
              <IngredientListItem
                key={index}
                ingredient={product}
                ingredientType={ingredientType}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default IngredientList;

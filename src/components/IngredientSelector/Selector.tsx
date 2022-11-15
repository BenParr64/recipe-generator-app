import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Product, Products } from "../../api/dtos/product.types";
import { getCategoryId } from "../../api/getCategoryId";
import { getProducts } from "../../api/api";
import { useRecipeContextState } from "../../context/RecipeContext";
import { ProductLine } from "../../context/RecipeContext.types";
import "./styles.css";

interface SelectorProps {
  label: string;
  ingredientType: "malt" | "hop";
}

const Selector = ({ label, ingredientType }: SelectorProps) => {
  const [products, setProducts] = useState<Products>();
  const [selected, setSelected] = useState<string>("");

  const { recipe, setRecipe } = useRecipeContextState();

  const handleClick = (product: Product) => {
    setSelected(product.id.toString());
    const { id, name, price } = product;

    const quantity = 1;
    const currentProduct = {
      id: id,
      name: name,
      price: price,
      quantity: quantity,
      ingredientType: ingredientType,
    } as ProductLine;

    let { ingredients } = recipe;

    /*Can we put this in a utility */
    if (
      ingredients !== undefined &&
      !ingredients.some((current) => current.id === product.id)
    ) {
      ingredients.push(currentProduct);
    }
    if (ingredients === undefined) {
      ingredients = [currentProduct];
    }

    setRecipe((prev) => ({
      ...prev,
      ingredients: ingredients!,
    }));
  };

  useEffect(() => {
    getProducts(getCategoryId(ingredientType)).then((products) => {
      setProducts(products);
    });
  });

  return (
    <FormControl
      className="kegthat-form"
      variant="outlined"
      sx={{ m: 1, minWidth: 120 }}
    >
      <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={selected}
        label={label}
      >
        {products &&
          products.map((product, index) => (
            <MenuItem
              key={index}
              onClick={() => handleClick(product)}
              value={product.id}
            >
              {product.name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default Selector;

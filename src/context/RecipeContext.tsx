import React, { useEffect } from "react";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { RecipeContent } from "./RecipeContext.types";

const RecipeContext = createContext({
  recipe: {} as Partial<RecipeContent>,
  setRecipe: {} as Dispatch<SetStateAction<RecipeContent>>,
});

const RecipeContextProvider = ({
  children,
  value = { submitted: true } as RecipeContent,
}: {
  children: React.ReactNode;
  value?: RecipeContent;
}) => {
  const [recipe, setRecipe] = useState(value);

  return (
    <RecipeContext.Provider value={{ recipe, setRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};

const useRecipeContextState = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipeContextState must be used within a Recipe");
  }
  return context;
};

const Debug = () => {
  const { recipe } = useRecipeContextState();
  return <pre>{JSON.stringify(recipe || {}, null, 2)}</pre>;
};

export { RecipeContextProvider, Debug, useRecipeContextState };

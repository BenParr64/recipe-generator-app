import React from "react";
import "./App.css";
import RecipeWrapper from "./components/RecipeWrapper/RecipeWrapper";
import { RecipeContextProvider } from "./context/RecipeContext";

function App() {
  return (
    <div className="kegthat">
      <RecipeContextProvider>
        <RecipeWrapper />
      </RecipeContextProvider>
    </div>
  );
}

export default App;

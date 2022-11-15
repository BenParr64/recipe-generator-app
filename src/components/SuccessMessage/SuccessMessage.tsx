import { Button } from "@mui/material";
import React from "react";
import "./styles.css";

interface SuccessMessageProps {
  setSubmitted: (submitted: boolean) => void;
  url: string;
}

const SuccessMessage = ({ setSubmitted, url }: SuccessMessageProps) => {
  const handleViewRecipe = () => {
    window.open(url, "_self");
  };
  return (
    <div className="kegthat-success">
      <h3>Recipe submitted!</h3>
      <Button
        className="kegthat-row kegthat-button"
        onClick={handleViewRecipe}
        variant="contained"
      >
        View Recipe
      </Button>
      <Button
        className="kegthat-row kegthat-button"
        onClick={() => setSubmitted(false)}
        variant="contained"
      >
        Add another Recipe
      </Button>
    </div>
  );
};

export default SuccessMessage;

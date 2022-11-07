import React, { useState } from "react";
import RecipeGenerator from "../RecipeGenerator/RecipeGenerator";
import SuccessMessage from "../SuccessMessage/SuccessMessage";

const RecipeWrapper = () => {
  const [submitted, setSubmitted] = useState(false);

  return !submitted ? (
    <RecipeGenerator setSubmitted={setSubmitted} />
  ) : (
    <SuccessMessage setSubmitted={setSubmitted} />
  );
};

export default RecipeWrapper;

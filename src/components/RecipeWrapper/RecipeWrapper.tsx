import React, { useEffect, useState } from "react";
import RecipeGenerator from "../RecipeGenerator/RecipeGenerator";
import SuccessMessage from "../SuccessMessage/SuccessMessage";

const RecipeWrapper = () => {
  const [submitted, setSubmitted] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    console.log(url);
  }, [url]);

  return !submitted ? (
    <RecipeGenerator setSubmitted={setSubmitted} setUrl={setUrl} />
  ) : (
    <SuccessMessage setSubmitted={setSubmitted} url={url} />
  );
};

export default RecipeWrapper;

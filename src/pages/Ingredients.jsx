import React, { useState } from "react";
import IngredientsDisplay from "../components/IngredientsDisplay";
import ingredients from "../db/ingredients.json";
import "./styles/Ingredients.css";

function Ingredients() {
  return (
    <div>
      <h1>All the ingredients you need</h1>
      <h3>
        Here should be displayed all the ingredients on cards and each
        ingredient should lead to it's own page with it's respective info.
      </h3>
      <IngredientsDisplay />
    </div>
  );
}

export default Ingredients;

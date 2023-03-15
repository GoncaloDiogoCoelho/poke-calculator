import React, { useState } from "react";
import IngredientsDisplay from "../components/IngredientsDisplay";
import ingredients from "../db/ingredients.json";
import "./styles/Ingredients.css"

function Ingredients() {
  const [ingTypeFish, setIngTypeFish] = useState();
  const [ingTypeRice, setIngTypeRice] = useState();
  const [ingTypeSauce, setIngTypeSauce] = useState();
  const [ingTypeTopping, setIngTypeTopping] = useState();
  const [ingTypeVeggie, setIngTypeVeggie] = useState();

  //   console.log(ingredients);
  //   Object.entries(ingredients).map(([key, value]) => {
  //   console.log(key);
  //   console.log(value);
  //   value.map((ing) =>
  //   {
  //   Object.entries(ing).map(([k, v]) =>
  //     <div> {k} </div>)
  // }
  //   )
  // })

  //   {
  //   for (const [k, v] of Object.entries(ing)) {
  //     console.log(`${k}: ${v}`);
  //   }
  // }

  return (
    <div>
      <h1>All the ingredients you need</h1>
      <IngredientsDisplay />
      <h3>
        Here should be displayed all the ingredients on cards and each
        ingredient should lead to it's own page with it's respective info.
      </h3>
      <div>
        {Object.entries(ingredients).map(([key, value]) => {
          // console.log(value);
          // console.log(key);
          return (
            <div key={key} className="ingredient-type">
              <h2>{key}</h2>
              <div className="ingredient-type-list">
              {Object.entries(value).map(([k, v]) => {
                return <h4 key={k}>{v.type}</h4>;
              })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Ingredients;

import React from "react";
import ingredients from "../db/ingredients.json";

function IngredientsDisplay() {

  return (
    <div>
    {Object.entries(ingredients).map(([key, value]) => {
      if (key !== "sauce") {
        return (
          <div key={key} className="ingredient-type">
            <h2>{key}</h2>
            <div className="ingredient-type-list">
              {Object.entries(value).map(([k, v]) => {
                return (
                  <div className="ingredient-type-each">
                    <h4 key={k}>{v.type}</h4>
                    <h6>{v.price}</h6>
                  </div>
                );
              })}
            </div>
          </div>
        );
      } else {
        return (
          <div key={key} className="ingredient-type">
            <h2>{key}</h2>
            <div className="ingredient-type-each">
              <h4 key={key}>{value.type}</h4>
              <h6>{value.price}</h6>
            </div>
          </div>
        );
      }
    })}
  </div>
  )
}

export default IngredientsDisplay;

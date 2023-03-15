import React from "react";
import IngredientsDisplay from "../components/IngredientsDisplay";
import Navbar from "../components/NavBar/Navbar";
import ingredients from "../db/ingredients.json";
import "./styles/Calculator.css";

function Calculator() {
  console.log(ingredients);
  return (
    <>
      <div>
        Here should go the actual calculator <br/>
        Show random suggestions of made bowls on carrousel to right <br />
        Show random ingredients in carrousel to left<br />
        In this section, have a button on the side to return to the main
        calculator is the person wants to see each ingredients info
        <IngredientsDisplay/>
      </div>
    </>
  );
};

export default Calculator;

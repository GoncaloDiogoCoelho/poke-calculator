import React from "react";
import Navbar from "../components/NavBar/Navbar";
import ingredients from "../db/ingredients.json";
import "./styles/Calculator.css";

function Calculator() {
  console.log(ingredients);
  return (
    <>
      <div>
        Show random suggestions of made bowls <br />
        Show random ingredients in carrousel <br />
        In this section, have a button on the side to return to the main
        calculator is the person wants to see each ingredients info
      </div>
    </>
  );
};

export default Calculator;

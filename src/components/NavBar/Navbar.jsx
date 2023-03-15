import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navBody">
      <ul className="navItems">
        <div className="navLeft">
          <Link to="/">
          <li>Logo</li>
          </Link>
        </div>
        <div className="navRight">
          <Link to="/calculator">
            <li>Make it!</li>
          </Link>
          <Link to="/bowls">
            <li>Bowls</li>
          </Link>
          <Link to="/ingredients">
            <li>Ingredients</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact us</li>
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;

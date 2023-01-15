import React from "react";
import "./Navbar.css";
import icon from "./shopping-cart.svg";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="nav">
      <div>
        <h2>TeeRex Store</h2>
      </div>
      <div>
        <Link id="pro" to="/">
          <h2>Products</h2>
        </Link>
        <Link to="/cart">
          <button className="navbtn">
            <img src={icon} alt="/" />
          </button>
        </Link>
      </div>
    </div>
  );
}

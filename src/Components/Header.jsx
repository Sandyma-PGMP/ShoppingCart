import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

export default function Header({length=0}) {
  return (
    <div className="navbar">
      <div className="logo">Shopping Cart</div>
      <div >
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            
            <Link to={"/cart"}>Cart</Link>
            <span> {length}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

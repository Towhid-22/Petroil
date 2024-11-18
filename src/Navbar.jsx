import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="container">
        <div className="navitems">
          <img src="Logo.png" alt="" />
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
          <button className="navBtn">CONTACT</button>
        </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

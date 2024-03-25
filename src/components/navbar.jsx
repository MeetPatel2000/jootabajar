import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img
            className="logo"
            src={require("../static/logo.png")}
            alt="Logo"
          />
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#">New Release</a>
          </li>
          <li>
            <a href="#">Best Seller</a>
          </li>
          <li>
            <a href="#">Kids</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
        </ul>
        <div className="navbar-buttons">
          <button className="btn btn-primary">Sign In</button>
          <button className="btn btn-secondary">Register</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

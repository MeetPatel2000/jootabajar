import React from "react";
import { Link } from "react-router-dom";

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
            <Link to="/newrelease">New Release</Link>
          </li>
          <li>
            <Link to="bestseller">Best Seller</Link>
          </li>
          <li>
            <Link to="kids">Kids</Link>
          </li>
          <li className="submenu">
            Men
            <ul className="submenu-items">
              <li>
                <Link to="menshoes">All Shoes</Link>
              </li>
              <li>
                <Link to="menshoes">Sport Shoes</Link>
              </li>
              <li>
                <Link to="menshoes">Sneakers</Link>
              </li>
              <li>
                <Link to="menshoes">Running Shoes</Link>
              </li>
              <li>
                <Link to="menshoes">Sandals</Link>
              </li>
              <li>
                <Link to="menshoes">Flip Flops</Link>
              </li>
              <li>
                <Link to="menshoes">Boat Shoes</Link>
              </li>
              <li>
                <Link to="menshoes">Hiking Boots</Link>
              </li>
            </ul>
          </li>
          <li className="submenu">
            Women
            <ul className="submenu-items">
              <li>
                <Link to="womenshoes">All Shoes</Link>
              </li>
              <li>
                <Link to="womenshoes">Sport Shoes</Link>
              </li>
              <li>
                <Link to="womenshoes">Sneakers</Link>
              </li>
              <li>
                <Link to="womenshoes">Running Shoes</Link>
              </li>
              <li>
                <Link to="womenshoes">Sandals</Link>
              </li>
              <li>
                <Link to="womenshoes">Flip Flops</Link>
              </li>
              <li>
                <Link to="womenshoes">Boat Shoes</Link>
              </li>
              <li>
                <Link to="menshoes">Hiking Boots</Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="navbar-buttons">
          <Link to="signup">
            {" "}
            <button className="btn btn-primary">Sign Up</button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlinePersonOutline } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check local storage for login status
    const loggedInStatus = localStorage.getItem("isLoggedIn");

    // Check if user is logged in is available
    if (loggedInStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSignOut = () => {
    // Clear localStorage data
    localStorage.removeItem("isLoggedIn");

    // Update state to reflect logout
    setIsLoggedIn(false);

    // Redirect to homepage
    navigate("/");
  };

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
        <div className="navbar">
          {!isLoggedIn ? (
            <Link to="signup">
              {" "}
              <button className="btn btn-primary">Sign Up</button>
            </Link>
          ) : (
            <>
              <button className="accountToggle">
                <MdOutlinePersonOutline />
              </button>
              <ul className="accountList">
                <Link to="/Kids">
                  {" "}
                  <li className="accountListItem">Account</li>
                </Link>
                <li className="accountListItem">Profile</li>
                <li className="accountListItem">Orders</li>
                <li className="accountListItem">Favourites</li>
                <li className="accountListItem">Account Settings</li>
              </ul>
              <Link to="/">
                {" "}
                <button onClick={handleSignOut} className="btn btn-primary">
                  Sign out
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

const SignUpForm = () => {
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  const [showSignUpLink, setShowSignUpLink] = useState(true);
  const [isSignUp, setIsSignUp] = useState(true);

  const handleLoginLinkClick = () => {
    setShowRetypePassword((prevState) => !prevState);
    setShowSignUpLink((prevState) => !prevState);
    setIsSignUp((prevState) => !prevState);
  };

  return (
    <>
      {" "}
      <form action="/signup" method="post" className="signup-form">
        <h2>Sign Up</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="input-field"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="input-field"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input-field"
        />
        {showRetypePassword && (
          <input
            type="password"
            name="retypePassword"
            placeholder="Retype Password"
            className="input-field"
          />
        )}
        <button type="submit" className="submit-button">
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </form>
      <div className="login-link">
        <a href="#" className="login-anchor" onClick={handleLoginLinkClick}>
          {showSignUpLink ? "I already have an account." : "Sign Up"}
        </a>
      </div>
    </>
  );
};

export default SignUpForm;

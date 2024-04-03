/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  const [showSignUpLink, setShowSignUpLink] = useState(true);
  const [isSignUp, setIsSignUp] = useState(true);

  const handleLoginLinkClick = () => {
    setShowRetypePassword((prevState) => !prevState);
    setShowSignUpLink((prevState) => !prevState);
    setIsSignUp((prevState) => !prevState);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    retype_password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let endpoint = "";
      if (isSignUp) {
        endpoint = "http://localhost:5000/register";
      } else {
        endpoint = "http://localhost:5000/login";
      }
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        localStorage.setItem("isLoggedIn", "true");
        navigate(`/`);
      }

      if (!response.ok) {
        alert("Wrong Credentials");
        throw new Error("Registration Failed");
      }
    } catch (error) {
      console.error("Error registering employee", error); // Log any errors that occur during form submission
    }
  };

  return (
    <>
      {" "}
      <form action="/" onSubmit={handleSubmit} className="signup-form">
        <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
        {isSignUp && (
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input-field"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="input-field"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input-field"
          value={formData.password}
          onChange={handleInputChange}
        />
        {!showRetypePassword && (
          <input
            type="password"
            name="retype_password"
            placeholder="Retype Password"
            className="input-field"
            value={formData.retype_password}
            onChange={handleInputChange}
          />
        )}
        <button type="submit" className="submit-button">
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </form>
      <div className="login-link">
        <a className="login-anchor" onClick={handleLoginLinkClick}>
          {showSignUpLink
            ? "I already have an account."
            : "Create a new account"}
        </a>
      </div>
      <h4 className="or"> ━━━━━━‎ ‎ ‎ ‎ ‎ OR ‎ ‎ ‎ ‎ ━━━━━━━ </h4>
      <div className="social-buttons">
        <button className="google-button">
          <FcGoogle />
        </button>
        <span className="gap"></span>
        <button className="facebook-button">
          <FaFacebook />
        </button>
      </div>
    </>
  );
};

export default SignUpForm;

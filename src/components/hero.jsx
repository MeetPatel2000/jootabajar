import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <img
          className="hero-image"
          src={require("../static/hero-image.png")}
          alt="heroimg"
        />
        <div class="hero-text">
          <h1>Welcome to Jootabajar</h1>
          <h4>We sell Shoes and jootas</h4>
        </div>
      </div>
    </>
  );
};

export default Hero;

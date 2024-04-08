import React from "react";
import Main from "./main";
import { Link } from "react-router-dom";

const NewRelease = () => {
  return (
    <>
      <h1>This is a new release page</h1>
      <button>
        <Link to="/">Home</Link>
      </button>
      <Main />
    </>
  );
};

export default NewRelease;

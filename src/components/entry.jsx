import React from "react";

const Entry = (props) => {
  return (
    <>
      <div className="card">
        <img className="cardimg" src={props.image} alt="img" />
        <h4>{props.name}</h4>
        <h5> {props.price} </h5>
        <h5> {props.size} </h5>
      </div>
    </>
  );
};

export default Entry;

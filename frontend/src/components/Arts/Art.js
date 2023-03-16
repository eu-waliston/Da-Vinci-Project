import React from "react";
import "./Arts.css"


const Art = (props) => {
  return (
    <div className="square__iten" key={props.index}>
      <h1 className="art__title">{props.name}</h1>
      <img alt={props.name} src={props.imageURL} className="art__image" />
      <p className="art__description">{props.description}</p>
    </div>
  );
};


export default Art;

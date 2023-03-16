import React from "react";
import styled from "styled-components";

const ART = (props) => {
  return (
    <ART_SQUARE>
          <h1>{props.name}</h1>
          <img src={props.imageURL} alt={props.name} key={props.index}  className="img"/>
          <p>{props.description}</p>
    </ART_SQUARE>
  )
}

const ART_SQUARE = styled.div`
    width: 100%;
    height: 100vh;

    .img {
      width: 300px;
    }

`
export default ART
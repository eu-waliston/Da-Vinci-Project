import React from "react";
import styled from "styled-components";

const ART = (props) => {
  return (
    <ART_SQUARE className="arts">
      <div className="arts__square">
          <div className="arts__grid">
            <h1>{props.name}</h1>
            <img src={props.imageURL} alt={props.name} key={props.index}  className="img"/>
            <p>{props.description}</p>
          </div>
      </div>
    </ART_SQUARE>
  )
}

const ART_SQUARE = styled.div`
    .arts {
      width: 100%;
      height: 100vh;
    }

    .img {
      width: 300px;
    }

    .arts__square {
      .arts__grid {
        color: #fff;
        display: flex;
      } 
    }
`
export default ART
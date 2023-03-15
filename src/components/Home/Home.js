import React from "react";
import styled from "styled-components";

import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <HOME>
        <img
          src={require("../images/background.png")}
          alt="Da Vinci"
          className="davinci"
        />
        <div className="name">
          <h1>leonardo</h1>
          <h1>da vinci</h1>
        </div>

        <div className="data">
          <div className="born">
            <p>born</p>
            <h1>15 apr 1452</h1>
            <p>Vinci, Republic of Florence</p>
          </div>

          <div className="separator">
            <i class="bi bi-arrow-right"></i>
          </div>

          <div className="died">
            <p>died</p>
            <h1>02 may 1519</h1>
            <p>clos luce, Amboise, Kingdom of France</p>
          </div>
        </div>

      </HOME>
    </>
  );
};

const HOME = styled.div`
  width: 100vw;
  height: 100vh;



  .davinci {
    position: fixed;
    filter: brightness(70%);
    top: 0;
    background-size: cover;
    background-position: center;
  }

  .name {
    color: #fff;
    position: absolute;
    margin-left: 15%;
    top: 38%;
    font-size: 3.5rem;

    font-family: "Cinzel Decorative", cursive;

    z-index: 3;
  }

  .data {
    z-index: 3;
    color: #fff;
    display: flex;
    align-content: center;
    align-items: center;
    gap: 50px;

    position: relative;
    top: 75%;
    text-align: left;
    margin-left: 15%;

    .separator {
      width: 50px;
      font-size: 3rem;
    }

    .born {
      > p,
      h1 {
        font-family: "Cinzel", serif;
      }

      > p {
        font-size: 1.5rem;
      }

      > h1 {
        font-size: 3rem;
      }
    }

    .died {
      > p,
      h1 {
        font-family: "Cinzel", serif;
      }

      > p {
        font-size: 1.5rem;
      }

      > h1 {
        font-size: 3rem;
      }
    }
  }
`;

export default Home;

import React from "react";

import "./Home.css";

import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />

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

    </div>
  );
};

export default Home;

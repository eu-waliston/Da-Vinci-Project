import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";

//Components
import Home from "./components/Home/Home";
import Arts from "./components/Arts/Arts";
import Articles from "./components/Articles/Articles";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/arts"} element={<Arts />} />
          <Route exact path={"/articles"} element={<Articles />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

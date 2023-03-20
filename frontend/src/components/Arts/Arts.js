import React, { useEffect, useState } from "react";
import "./Arts.css";
import Navbar from "../Navbar/Navbar";

import Art from "./Art";

async function getAllArts() {
  let res = await fetch("http://localhost:4000/arts");
  let data = await res.json();

  return data;
}

const Arts = () => {
  const [arts, setAllArts] = useState([]);

  useEffect(() => {
    getAllArts().then((data) => {
      setAllArts(data);
    });
  }, []);

  return (
    <>
      <Navbar />

      <div className="arts__section">
<h1 className="grace"> Art & Grace</h1>
        <div className="arts">
          {arts.map((art, index) => (
            <Art
              id={art.id}
              name={art.name}
              imageURL={art.imageURL}
              description={art.description}
              key={index}
            />
          ))}
        </div>

      </div>
    </>
  );
};

export default Arts;

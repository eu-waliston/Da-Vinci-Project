import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";

import ART from "./ART";

async function getArts() {
    let response = await fetch('http://localhost:4000/arts')

    let data = await response.json()

    return data;
}

const Arts = () => {
    const [arts, setArts] = React.useState([]);

    React.useEffect(() => {
        getArts().then((data) => {
            setArts(data)
        })
    }, [])


    return (

        <>
            <Navbar />
            <ARTS>
                
               {arts.map((art, index) => (
                <ART 
                    name={art.name}
                    imageURL={art.imageURL}
                    description={art.description}
                    key={index}
                />
               ))}
            </ARTS>
        </>
    )
}

const ARTS = styled.div `
    width: 100vw;
    height: 100vh;
    background: #010712;

`

export default Arts;
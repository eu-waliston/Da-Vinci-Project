import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";


const Articles = () => {
    return (

        <>
            <Navbar />
            <ARTICLES>

            </ARTICLES>
        </>
    )
}

const ARTICLES = styled.div `
    width: 100vw;
    height: 100vh;
    background: #010712;

`

export default Articles;
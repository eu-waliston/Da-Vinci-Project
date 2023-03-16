import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";

/*
async function getArticles() {
    let response = await fetch('http://localhost:3000/api/articles.json')

    let data = await response.json()

    return data;
}
*/

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
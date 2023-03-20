import React, { useEffect, useState } from "react";
import "./Article.css"
import Navbar from "../Navbar/Navbar";


async function getArticles() {
    let response = await fetch('http://localhost:3000/api/articles.json')

    let data = await response.json()

    return data;
}


const Articles = () => {
    return (
        <div className="articles">
            <Navbar />
        </div>
    )
}

export default Articles;
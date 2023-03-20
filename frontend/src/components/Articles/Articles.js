import React, { useEffect, useState } from "react";
import "./Article.css"
import Navbar from "../Navbar/Navbar";

import Article from "./Article"

async function getArticles() {
    let response = await fetch('http://localhost:5000/articles')
    let data = await response.json()
    return data;
}


const Articles = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles().then((data) => {
            setArticles(data)
        })
    }, [])

    return (
        <div className="articles">
            <Navbar />
            <div className="articles__ssection">
                <h1 className="article__h1_dv">Da Vinci's Articles</h1>

                <div className="articles__div">
                    {articles.map((artic, index) => (
                        <Article 
                            id={artic.id}
                            title={artic.title}
                            imageURL={artic.imageURL}
                            article={artic.article}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Articles;
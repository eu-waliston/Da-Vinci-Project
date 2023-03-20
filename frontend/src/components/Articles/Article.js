import React from "react";
import "./Article.css";

const Article = (props) => {
    return(
        <div className="article">
            <h1 className="article_h1">{props.title}</h1>
            <img alt="article" key={props.index} src={props.imageURL} className="articles_img"/>
            <p className="article_p">{props.article}</p>
        </div>
    )
}

export default Article;
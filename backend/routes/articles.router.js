const express = require("express");
const router = express.Router();

const Article = require("../modules/Article");

//Get all Article
router.get("/articles", async (req, res) => {
  try {
    const allArticles = await Article.find();
    res.json(allArticles);
  } catch (error) {
    res.json({ message: error });
  }
});

//Submit an Article
router.post("/articles", async (req, res) => {
  const dbArticle = new Article({
    title: req.body.title,
    imageURL: req.body.imageURL,
    article: req.body.article,
  });

  try {
    const newArticle = await dbArticle.save();
    res.json(newArticle);
  } catch (error) {
    res.json({ message: error });
  }
});


//Get an Article by ID
router.get("/articles/:articleID", async (req,res) => {
    try {
        let articleById = await Article.findById(req.params.articleID);
        res.json(articleById)
    } catch (error) {
        res.json({message: error})
    }
})
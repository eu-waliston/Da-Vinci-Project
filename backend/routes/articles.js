const express = require("express");
const router = express.Router();

const ARTICLES = require("../modules/Articles");

//Get All Articles
router.get("/articles", async (req, res) => {
  try {
    const articles = await ARTICLES.find();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//Submit an Article
router.post("/articles", async (req, res) => {
  const article = new ARTICLES({
    title: req.body.title,
    imageURL: req.body.imageURL,
    article: req.body.article,
  });

  try {
    const savedArticle = await article.save();
    res.status(200).json(savedArticle);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//Find specific Article
router.get("/articles/:articleID", async (req, res) => {
  try {
    const article = await ARTICLES.findById(req.params.articleID);
    res.status(200).json(article)
  } catch (error) {
    res.status(500).json({message: error})
  }
});

module.exports = router;
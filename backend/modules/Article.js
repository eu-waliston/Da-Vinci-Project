const mongoose = require("mongoose");

const ArticleSchema = mongoose.Schema({
    title: {type: String, required: true},
    imageURL: {type: String, required: true},
    article: {type: String, required: true},
})

module.exports = mongoose.model("Article", ArticleSchema)
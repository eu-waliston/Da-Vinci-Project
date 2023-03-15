const mongoose = require("mongoose")

const ArtSchema = mongoose.Schema({
    name: {type: String, required: true},
    imageURL: {type: String, required: true},
    description: {type: String, required: true},
})

module.exports = mongoose.model("Art", ArtSchema);
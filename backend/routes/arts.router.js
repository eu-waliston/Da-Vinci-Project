const express = require("express")
const router = express.Router();

const Arts = require("../modules/Art");


//Post an Art
router.post("/arts", async (req,res) => {
    const newArt = new Arts({
        name: req.body.name,
        imageURL: req.body.imageURL,
        description: req.body.description,
    });

    try {
        const savedArt = await newArt.save();
        res.json(savedArt)
    } catch (error) {
        res.json({message: error})
    }
})

//Get back all Arts
router.get("/arts", async (req,res) => {
    try {
        const allArts = await Arts.find();
        res.json(allArts)
    } catch (error) {
        res.json({message: error})
    }
})

//Get  Art by ID
router.get("/arts/:artsID", async (req,res) => {
    try {
        const artById = await Arts.findById(req.params.artsID)
        res.json(artById)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router;
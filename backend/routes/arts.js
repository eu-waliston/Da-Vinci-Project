const express = require("express")
const router = express.Router();

const ARTS = require("../modules/Arts");


//Get Back all Arts
router.get("/arts", async (req,res) => {
    try {
        const arts = await ARTS.find();
        res.status(200).json(arts);
    } catch (error) {
        res.status(500).json({message: error})
    }
})

//Submit a Art
router.post("/arts", async (req,res) => {
    const art = new ARTS({
        name: req.body.name,
        imageURL: req.body.imageURL,
        description: req.body.description
    })

    try {
        const savedArt = await art.save();
        res.status(200).json(savedArt)
    } catch (error) {
        res.status(500).json({message: error})
    }
})

//get back a specific art
router.get("/arts/:artID", async (req,res) => {
    try {
        const art = await ARTS.findById(
            req.params.artID
        )

        res.status(200).json(art)
    } catch (error) {
        res.status(500).json({message: error})
    }
})
module.exports = router;


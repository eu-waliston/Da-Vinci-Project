const express = require("express")

const router = express.Router();


router.get("/arts", async (req,res) => {
    res.status(200).send("<h1>ARTS</h1>")
})


module.exports = router;
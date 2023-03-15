const bodyParser = require("body-parser");
const express = require("express")
const cors = require("cors");

const artsRouter = require("./routes/arts");

const PORT = 3000;

const app = express();


//Middlewares
app.use(bodyParser.json())
app.use(cors())


//Routes
app.use('/', artsRouter);



app.listen(PORT, () => {
    console.log(`App Listen at port ${PORT} 🚀`);
})
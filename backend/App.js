const bodyParser = require('body-parser');
const express = require('express')
const cors = require('cors');

const app = express();

//Middlewares
app.use(bodyParser.json())
app.use(cors())

app.use((req,rres,next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`);
})


//Routes
const artRoute = require("./routes/arts.router")
const articleRoute = require("./routes/articles.router")

app.use("/", artRoute)
app.use("/", articleRoute)


//DB Connection
require('./config/database')

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App Listen at port ${PORT} 🚀`);
})
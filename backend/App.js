const bodyParser = require('body-parser');
const express = require('express')
const cors = require('cors');

//ARTS
const AllArtsRouter = require('./routes/arts');
const PostArtRouter = require('./routes/arts');
const SpecificArtRouter = require('./routes/arts');

//ARTICLES
const AllArticlesRouter = require('./routes/articles');
const PostArticleRouter = require('./routes/articles');
const SpecificArticleRouter = require('./routes/articles');

const PORT = 3000;
const app = express();

//Middlewares
app.use(bodyParser.json())
app.use(cors())

//Routes - ARTS
app.use('/', AllArtsRouter);
app.use('/', PostArtRouter);
app.use('/', SpecificArtRouter);

//Routes - ARTICLES
app.use('/', AllArticlesRouter);
app.use('/', PostArticleRouter);
app.use('/', SpecificArticleRouter);

//DB Connection
require('./config/database')

app.listen(PORT, () => {
    console.log(`App Listen at port ${PORT} 🚀`);
})
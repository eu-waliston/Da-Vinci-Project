const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () => {
    console.log('conected to DB!');
})
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jokesMern_api", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("Success - Connection to Mongo "))
    .catch(err=>console.log("Db Connection Failed", err))
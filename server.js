const express = require("express");
const app = express();
const port = 8000;

// app.get("/api", (req, res)=>{
//     res.json({message:"were all born naked and the rest is drag"});
// })

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended:true}));

require("./server/routes/joke.routes")(app);

app.listen(port,  ()=>console.log(`Operating on port ${port}`));

